from fastapi import APIRouter, HTTPException, status
from models.lead import Lead, LeadCreate
from services.email_service import get_email_service
import os
import logging
from datetime import datetime

logger = logging.getLogger(__name__)

router = APIRouter()

# MongoDB collection will be injected from server.py
leads_collection = None

def init_db(db):
    """Initialize database connection"""
    global leads_collection
    leads_collection = db.leads

@router.post("/leads", status_code=status.HTTP_201_CREATED)
async def create_lead(lead_data: LeadCreate):
    """
    Create a new lead from landing page form submission
    """
    try:
        # Validate terms agreement
        if not lead_data.agreeTerms:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="You must agree to the terms and conditions"
            )

        # Create lead object
        lead = Lead(
            course=lead_data.course,
            fullName=lead_data.fullName,
            email=lead_data.email,
            countryCode=lead_data.countryCode,
            phone=lead_data.phone,
            useWhatsApp=lead_data.useWhatsApp,
            agreeTerms=lead_data.agreeTerms,
            timestamp=datetime.utcnow(),
            source="landing_page"
        )

        # Insert into database
        lead_dict = lead.dict()
        result = await leads_collection.insert_one(lead_dict)
        lead_id = str(result.inserted_id)

        logger.info(f"New lead created: {lead.email} - ID: {lead_id}")

        # Send email notification
        email_service = get_email_service()
        email_sent = email_service.send_lead_notification(lead_dict)
        if not email_sent:
            logger.warning(f"Email notification failed for lead: {lead_id}")

        return {
            "success": True,
            "message": "Thank you! We'll contact you within 24 hours.",
            "leadId": lead_id
        }

    except HTTPException as he:
        raise he
    except Exception as e:
        logger.error(f"Error creating lead: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="An error occurred while processing your request. Please try again."
        )

@router.get("/leads")
async def get_leads(skip: int = 0, limit: int = 100):
    """
    Get all leads (for admin use)
    """
    try:
        # Optimized query with projection - only fetch required fields
        projection = {
            "_id": 1,
            "fullName": 1,
            "email": 1,
            "phone": 1,
            "countryCode": 1,
            "course": 1,
            "useWhatsApp": 1,
            "timestamp": 1,
            "source": 1
        }
        leads = await leads_collection.find({}, projection).sort("timestamp", -1).skip(skip).limit(limit).to_list(limit)
        
        # Convert ObjectId to string
        for lead in leads:
            lead['_id'] = str(lead['_id'])
        
        count = await leads_collection.count_documents({})
        
        return {
            "success": True,
            "count": count,
            "leads": leads
        }
    except Exception as e:
        logger.error(f"Error fetching leads: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch leads"
        )
