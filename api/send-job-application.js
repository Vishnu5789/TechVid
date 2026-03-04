import { Resend } from 'resend';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, position, message, resume } = req.body;

    // Validation
    if (!name || !email || !phone || !position) {
      return res.status(400).json({ error: 'Name, email, phone, and position are required' });
    }

    // Initialize Resend with API key
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email to HR
    const { data, error } = await resend.emails.send({
      from: 'TechVid Careers <admin@techvidin.com>', // You'll change this to your domain later
      to: 'hr@techvidin.com',
      replyTo: email,
      subject: `New Job Application: ${position} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0B4D73; border-bottom: 3px solid #2196F3; padding-bottom: 10px;">
            New Job Application
          </h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Position Applied:</strong> <span style="color: #2196F3; font-size: 18px;">${position}</span></p>
            <p style="margin: 10px 0;"><strong>Candidate Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Phone:</strong> ${phone}</p>
          </div>
          
          ${message ? `
          <div style="margin: 20px 0;">
            <h3 style="color: #0B4D73;">Cover Letter / Additional Information:</h3>
            <p style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #2196F3; border-radius: 4px;">
              ${message.replace(/\n/g, '<br>')}
            </p>
          </div>
          ` : ''}
          
          ${resume ? `
          <div style="margin: 20px 0; padding: 15px; background-color: #e3f2fd; border-radius: 8px;">
            <p style="margin: 0;"><strong>📎 Resume:</strong> <a href="${resume}" style="color: #2196F3;">Download Resume</a></p>
          </div>
          ` : ''}
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>This application was submitted via the TechVid Innovations careers page.</p>
            <p>Reply directly to this email to contact the candidate.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    // Success response
    return res.status(200).json({ 
      success: true, 
      message: 'Application submitted successfully',
      id: data.id 
    });

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
