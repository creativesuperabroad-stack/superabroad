import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from datetime import datetime
import logging

logger = logging.getLogger(__name__)

class EmailService:
    def __init__(self):
        self.smtp_host = os.environ.get('SMTP_HOST', 'smtp.gmail.com')
        self.smtp_port = int(os.environ.get('SMTP_PORT', '587'))
        self.smtp_user = os.environ.get('SMTP_USER')
        self.smtp_password = os.environ.get('SMTP_PASSWORD')
        self.notification_email = os.environ.get('NOTIFICATION_EMAIL', 'sandeep@superabroad.in')

    def send_lead_notification(self, lead_data: dict) -> bool:
        """Send email notification when a new lead is received"""
        try:
            # Create message
            msg = MIMEMultipart('alternative')
            msg['Subject'] = '🎓 New Lead from Super Abroad UK Landing Page'
            msg['From'] = self.smtp_user
            msg['To'] = self.notification_email

            # Format phone number
            phone_number = f"{lead_data['countryCode']} {lead_data['phone']}"
            whatsapp_status = "Yes ✅" if lead_data.get('useWhatsApp') else "No"
            
            # Get course name
            course_names = {
                'business-analytics': 'Business Analytics',
                'computer-science': 'Computer Science',
                'mba': 'MBA',
                'engineering': 'Engineering',
                'medicine': 'Medicine',
                'finance': 'Finance & Accounting',
                'law': 'Law',
                'other': 'Other'
            }
            course_display = course_names.get(lead_data.get('course', ''), lead_data.get('course', 'Not specified'))

            # Create HTML email body
            html = f"""
            <html>
              <head>
                <style>
                  body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
                  .container {{ max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; }}
                  .header {{ background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }}
                  .content {{ background: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }}
                  .field {{ margin-bottom: 15px; padding: 12px; background: #f9fafb; border-left: 4px solid #f97316; border-radius: 4px; }}
                  .label {{ font-weight: bold; color: #f97316; margin-bottom: 5px; }}
                  .value {{ color: #1f2937; font-size: 16px; }}
                  .footer {{ text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px; }}
                  .button {{ display: inline-block; padding: 12px 24px; background: #f97316; color: white; text-decoration: none; border-radius: 6px; margin-top: 15px; }}
                </style>
              </head>
              <body>
                <div class="container">
                  <div class="header">
                    <h1 style="margin: 0; font-size: 24px;">🎓 New Lead Received!</h1>
                    <p style="margin: 10px 0 0 0; opacity: 0.9;">Super Abroad - Study UK Landing Page</p>
                  </div>
                  
                  <div class="content">
                    <p style="font-size: 16px; color: #1f2937; margin-bottom: 20px;">
                      You have received a new inquiry from a prospective student:
                    </p>
                    
                    <div class="field">
                      <div class="label">👤 Full Name</div>
                      <div class="value">{lead_data['fullName']}</div>
                    </div>
                    
                    <div class="field">
                      <div class="label">📧 Email Address</div>
                      <div class="value"><a href="mailto:{lead_data['email']}" style="color: #f97316;">{lead_data['email']}</a></div>
                    </div>
                    
                    <div class="field">
                      <div class="label">📱 Phone Number</div>
                      <div class="value"><a href="tel:{phone_number.replace(' ', '')}" style="color: #f97316;">{phone_number}</a></div>
                    </div>
                    
                    <div class="field">
                      <div class="label">💬 WhatsApp Available</div>
                      <div class="value">{whatsapp_status}</div>
                    </div>
                    
                    <div class="field">
                      <div class="label">📚 Course Interest</div>
                      <div class="value">{course_display}</div>
                    </div>
                    
                    <div class="field">
                      <div class="label">🕐 Submitted At</div>
                      <div class="value">{datetime.utcnow().strftime('%d %B %Y, %I:%M %p UTC')}</div>
                    </div>
                    
                    {f'<a href="https://wa.me/{phone_number.replace(" ", "").replace("+", "")}" class="button" style="color: white;">💬 Contact via WhatsApp</a>' if lead_data.get('useWhatsApp') else ''}
                  </div>
                  
                  <div class="footer">
                    <p>This is an automated notification from Super Abroad landing page.</p>
                    <p style="margin-top: 5px;">© 2025 Super Abroad. All rights reserved.</p>
                  </div>
                </div>
              </body>
            </html>
            """

            # Create plain text version
            text = f"""
            New Lead from Super Abroad UK Landing Page
            ==========================================
            
            You have received a new inquiry:
            
            Name: {lead_data['fullName']}
            Email: {lead_data['email']}
            Phone: {phone_number}
            WhatsApp: {whatsapp_status}
            Course Interest: {course_display}
            Submitted: {datetime.utcnow().strftime('%d %B %Y, %I:%M %p UTC')}
            
            ---
            This is an automated notification from Super Abroad landing page.
            """

            # Attach parts
            part1 = MIMEText(text, 'plain')
            part2 = MIMEText(html, 'html')
            msg.attach(part1)
            msg.attach(part2)

            # Send email
            with smtplib.SMTP(self.smtp_host, self.smtp_port, timeout=10) as server:
                server.ehlo()
                server.starttls()
                server.ehlo()
                # Remove spaces from password if any
                password = self.smtp_password.replace(' ', '') if self.smtp_password else None
                if not password or not self.smtp_user:
                    raise Exception("SMTP credentials not configured")
                server.login(self.smtp_user, password)
                server.send_message(msg)

            logger.info(f"Email notification sent successfully for lead: {lead_data['email']}")
            return True

        except Exception as e:
            logger.error(f"Failed to send email notification: {str(e)}")
            return False

# Don't create instance at import time, create it when needed
def get_email_service():
    return EmailService()
