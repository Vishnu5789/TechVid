import { Resend } from 'resend';

export default async function handler(req, res) {
  console.log('========================================');
  console.log('🧪 EMAIL TEST ENDPOINT CALLED');
  console.log('Time:', new Date().toISOString());
  console.log('========================================');

  try {
    // Check API key
    const apiKey = process.env.RESEND_API_KEY;
    
    console.log('🔍 Checking environment variables...');
    console.log('RESEND_API_KEY exists:', !!apiKey);
    
    if (!apiKey) {
      console.log('❌ RESEND_API_KEY not found!');
      console.log('Available environment variables:', Object.keys(process.env).filter(key => !key.includes('SECRET')));
      return res.status(500).json({ 
        error: 'RESEND_API_KEY not configured',
        availableEnvVars: Object.keys(process.env).filter(key => !key.includes('SECRET'))
      });
    }
    
    console.log('✅ API Key found:', apiKey.substring(0, 10) + '...');
    
    // Initialize Resend
    console.log('🔄 Initializing Resend...');
    const resend = new Resend(apiKey);
    console.log('✅ Resend initialized');

    // Try to send test email
    console.log('📨 Attempting to send test email...');
    const { data, error } = await resend.emails.send({
      from: 'TechVid Test <onboarding@resend.dev>',
      to: 'hr@techvidin.com',
      subject: '🧪 Test Email from TechVid',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #0B4D73;">✅ Email System Test</h2>
          <p>This is a test email from your TechVid Innovations website.</p>
          <p><strong>Time:</strong> ${new Date().toISOString()}</p>
          <p><strong>Status:</strong> If you're reading this, your email integration is working! 🎉</p>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
          <p style="color: #666; font-size: 12px;">This email was sent from the test endpoint: /api/test-email</p>
        </div>
      `,
    });

    if (error) {
      console.log('❌ RESEND ERROR:');
      console.error('Error details:', JSON.stringify(error, null, 2));
      return res.status(500).json({ 
        success: false,
        error: 'Failed to send test email',
        details: error,
        apiKey: apiKey ? 'Present' : 'Missing'
      });
    }

    console.log('✅ TEST EMAIL SENT SUCCESSFULLY!');
    console.log('Email ID:', data.id);
    console.log('========================================');

    return res.status(200).json({ 
      success: true,
      message: 'Test email sent successfully! Check hr@techvidin.com',
      emailId: data.id,
      apiKey: 'Configured',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.log('❌ CRITICAL ERROR IN TEST:');
    console.error('Error:', error.message);
    console.error('Stack:', error.stack);
    console.log('========================================');
    
    return res.status(500).json({ 
      success: false,
      error: 'Internal server error',
      message: error.message,
      type: error.constructor.name
    });
  }
}
