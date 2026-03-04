// Local development server for API routes
// This mimics Vercel's serverless functions locally
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Import API handlers
const importHandler = async (handlerPath) => {
  try {
    const module = await import(handlerPath);
    return module.default;
  } catch (error) {
    console.error(`Error importing ${handlerPath}:`, error);
    return null;
  }
};

// Helper to convert Vercel handler to Express route
const wrapHandler = (handler) => {
  return async (req, res) => {
    // Create a Vercel-like response object
    const vercelRes = {
      status: (code) => {
        res.status(code);
        return vercelRes;
      },
      json: (data) => {
        res.json(data);
      },
      send: (data) => {
        res.send(data);
      },
      setHeader: (key, value) => {
        res.setHeader(key, value);
      }
    };

    try {
      await handler(req, vercelRes);
    } catch (error) {
      console.error('Handler error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
};

// Mount API routes
(async () => {
  const sendContactMessage = await importHandler('./api/send-contact-message.js');
  const sendJobApplication = await importHandler('./api/send-job-application.js');
  const testEmail = await importHandler('./api/test-email.js');

  if (sendContactMessage) {
    app.post('/api/send-contact-message', wrapHandler(sendContactMessage));
    console.log('✅ Mounted: POST /api/send-contact-message');
  }

  if (sendJobApplication) {
    app.post('/api/send-job-application', wrapHandler(sendJobApplication));
    console.log('✅ Mounted: POST /api/send-job-application');
  }

  if (testEmail) {
    app.get('/api/test-email', wrapHandler(testEmail));
    console.log('✅ Mounted: GET /api/test-email');
  }

  // Health check
  app.get('/api/health', (req, res) => {
    res.json({ 
      status: 'ok', 
      message: 'Local dev API server running',
      timestamp: new Date().toISOString()
    });
  });

  app.listen(PORT, () => {
    console.log('');
    console.log('================================================');
    console.log('🚀 Local Dev API Server Running');
    console.log('================================================');
    console.log(`📍 Server: http://localhost:${PORT}`);
    console.log(`📧 RESEND_API_KEY: ${process.env.RESEND_API_KEY ? '✅ Configured' : '❌ Missing'}`);
    console.log('');
    console.log('Available endpoints:');
    console.log(`  POST http://localhost:${PORT}/api/send-contact-message`);
    console.log(`  POST http://localhost:${PORT}/api/send-job-application`);
    console.log(`  GET  http://localhost:${PORT}/api/test-email`);
    console.log(`  GET  http://localhost:${PORT}/api/health`);
    console.log('================================================');
    console.log('');
  });
})();
