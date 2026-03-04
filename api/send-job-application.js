import { Resend } from 'resend';

export default async function handler(req, res) {
  console.log('========================================');
  console.log('💼 JOB APPLICATION API CALLED');
  console.log('Time:', new Date().toISOString());
  console.log('Method:', req.method);
  console.log('========================================');

  // Only allow POST requests
  if (req.method !== 'POST') {
    console.log('❌ ERROR: Method not allowed. Expected POST, got:', req.method);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, position, message, resume } = req.body;
    
    console.log('📝 Application Data Received:');
    console.log('  - Name:', name);
    console.log('  - Email:', email);
    console.log('  - Phone:', phone);
    console.log('  - Position:', position);
    console.log('  - Cover Letter:', message ? `${message.substring(0, 50)}...` : 'N/A');
    console.log('  - Resume:', resume ? 'Attached' : 'Not attached');

    // Validation
    if (!name || !email || !phone || !position) {
      console.log('❌ VALIDATION ERROR: Missing required fields');
      console.log('  - Name present:', !!name);
      console.log('  - Email present:', !!email);
      console.log('  - Phone present:', !!phone);
      console.log('  - Position present:', !!position);
      return res.status(400).json({ error: 'Name, email, phone, and position are required' });
    }

    console.log('✅ Validation passed');

    // Check API key
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.log('❌ CRITICAL ERROR: RESEND_API_KEY not found in environment variables');
      return res.status(500).json({ error: 'Email service not configured. Please contact administrator.' });
    }
    
    console.log('✅ API Key found:', apiKey.substring(0, 10) + '...');

    // Initialize Resend with API key
    console.log('🔄 Initializing Resend...');
    const resend = new Resend(apiKey);

    // Send email to HR
    console.log('📨 Sending job application email to hr@techvidin.com...');
    const emailPayload = {
      from: 'TechVid Careers <admin@techvidin.com>',
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
    };
    
    console.log('📧 Email payload prepared:');
    console.log('  - From:', emailPayload.from);
    console.log('  - To:', emailPayload.to);
    console.log('  - Subject:', emailPayload.subject);
    
    const { data, error } = await resend.emails.send(emailPayload);

    if (error) {
      console.log('❌ RESEND API ERROR:');
      console.error('Error details:', JSON.stringify(error, null, 2));
      console.log('Error message:', error.message);
      return res.status(500).json({ 
        error: 'Failed to send email',
        details: error.message 
      });
    }

    console.log('✅ JOB APPLICATION EMAIL SENT SUCCESSFULLY!');
    console.log('Email ID:', data.id);
    console.log('Response data:', JSON.stringify(data, null, 2));
    console.log('========================================');

    // Success response
    return res.status(200).json({ 
      success: true, 
      message: 'Application submitted successfully',
      id: data.id 
    });

  } catch (error) {
    console.log('❌ CRITICAL SERVER ERROR:');
    console.error('Error type:', error.constructor.name);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    console.log('========================================');
    return res.status(500).json({ 
      error: 'Internal server error',
      details: error.message 
    });
  }
}
