from pydantic import BaseModel, EmailStr, Field
from datetime import datetime
from typing import Optional

class LeadCreate(BaseModel):
    course: str
    fullName: str
    email: EmailStr
    countryCode: str
    phone: str
    useWhatsApp: bool = False
    agreeTerms: bool

class Lead(BaseModel):
    course: str
    fullName: str
    email: EmailStr
    countryCode: str
    phone: str
    useWhatsApp: bool = False
    agreeTerms: bool
    timestamp: datetime = Field(default_factory=datetime.utcnow)
    source: str = "landing_page"
    
    class Config:
        json_encoders = {
            datetime: lambda v: v.isoformat()
        }
