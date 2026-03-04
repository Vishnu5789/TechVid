# Local Development Server Setup

## 🎯 What's Been Set Up

Your local development environment now runs TWO servers:

1. **Vite Dev Server** (Port 5173) - Frontend React app
2. **Express API Server** (Port 3001) - Backend API routes

Both start automatically with one command!

---

## 🚀 Starting Development

**Single Command** (runs both servers):
```bash
npm run dev
```

This will start:
- ✅ Vite frontend at http://localhost:5173
- ✅ Express API at http://localhost:3001
- ✅ API proxy configured (frontend can call `/api/*`)

You'll see output from BOTH servers in your terminal with color-coded prefixes:
- `[VITE]` - Frontend messages (cyan)
- `[API]` - Backend API messages (magenta)

---

## 📁 How It Works

```
Browser → http://localhost:5173/contact
          ↓ (submits form)
          ↓
Vite Proxy → forwards /api/* requests
          ↓
Express Server (localhost:3001) → /api/send-contact-message
          ↓
Resend API → Sends email
          ↓
hr@techvidin.com ✉️
```

---

## 🔧 Files Created

### 1. `server.js`
- Local Express server
- Loads your `/api/*.js` handlers
- Mimics Vercel serverless functions
- Runs on port 3001

### 2. `vite.config.js` (Updated)
- Added proxy configuration
- Forwards `/api/*` to Express server
- Seamless integration

### 3. `package.json` (Updated)
- New scripts:
  - `npm run dev` - Starts both servers
  - `npm run dev:vite` - Frontend only
  - `npm run dev:api` - Backend only

---

## 🧪 Testing

### Test API Health:
```bash
# Option 1: Browser
Open: http://localhost:3001/api/health

# Option 2: Terminal
curl http://localhost:3001/api/health
```

### Test Email:
```bash
# Option 1: Browser
Open: http://localhost:3001/api/test-email

# Option 2: Via Frontend Proxy
Open: http://localhost:5173/api/test-email
```

### Test Contact Form:
1. Go to: http://localhost:5173/contact
2. Fill form and submit
3. Watch BOTH terminal outputs!
4. Check hr@techvidin.com

---

## 📊 Watching Logs

When you run `npm run dev`, you'll see:

```
[VITE] VITE v7.3.1  ready in 285 ms
[VITE] ➜  Local:   http://localhost:5173/
[API] 
[API] ================================================
[API] 🚀 Local Dev API Server Running
[API] ================================================
[API] 📍 Server: http://localhost:3001
[API] 📧 RESEND_API_KEY: ✅ Configured
[API] 
[API] Available endpoints:
[API]   POST http://localhost:3001/api/send-contact-message
[API]   POST http://localhost:3001/api/send-job-application
[API]   GET  http://localhost:3001/api/test-email
[API]   GET  http://localhost:3001/api/health
[API] ================================================
```

When you submit a form, watch for `[API]` prefixed logs!

---

## 🐛 Troubleshooting

### Issue: Port 3001 already in use

**Solution 1:** Change port in `server.js`:
```javascript
const PORT = 3002; // Or any other port
```

Then update `vite.config.js`:
```javascript
proxy: {
  '/api': {
    target: 'http://localhost:3002', // Match new port
  }
}
```

**Solution 2:** Kill process using port 3001:
```bash
# Find process
lsof -i :3001

# Kill it (replace PID with actual number)
kill -9 PID
```

---

### Issue: "Cannot GET /api/send-contact-message"

**Cause:** Using GET instead of POST

**Solution:** API endpoints are POST only (except test-email):
- ✅ POST `/api/send-contact-message`
- ✅ POST `/api/send-job-application`
- ✅ GET `/api/test-email`
- ✅ GET `/api/health`

---

### Issue: Logs not showing

**Check:**
1. Did both servers start? Look for `[VITE]` AND `[API]` in terminal
2. Is API key set in `.env`?
3. Try restarting: `Ctrl+C` then `npm run dev`

---

### Issue: CORS errors

**This shouldn't happen** because:
- API server has CORS enabled
- Vite proxy handles requests
- Same origin (localhost:5173)

If you see CORS errors:
1. Check server.js has `app.use(cors())`
2. Restart both servers
3. Clear browser cache

---

## 🔥 Hot Reload

**Frontend (React):**
- ✅ Hot reload works automatically
- Save file → Browser updates instantly

**Backend (API):**
- ⚠️ Manual restart required
- Change `/api/*.js` file → Restart server
- Quick restart: `Ctrl+C` → `npm run dev`

---

## 🌐 Production vs Development

### Development (Local):
```
npm run dev
→ Vite (5173) + Express (3001)
→ API runs on separate server
→ Proxied through Vite
```

### Production (Vercel):
```
git push
→ Vercel builds React app
→ Vercel deploys `/api/*.js` as serverless functions
→ Everything on same domain
→ No proxy needed!
```

---

## 📝 Environment Variables

### Local Development:
Create `.env` file in project root:
```bash
RESEND_API_KEY=re_your_key_here
```

Server.js automatically loads this!

### Production (Vercel):
Add in Vercel Dashboard:
1. Project → Settings → Environment Variables
2. Key: `RESEND_API_KEY`
3. Value: `re_your_key_here`
4. Save & Redeploy

---

## ✅ Quick Start Checklist

- [ ] Run `npm run dev`
- [ ] See both `[VITE]` and `[API]` logs
- [ ] Frontend opens at http://localhost:5173
- [ ] Test endpoint: http://localhost:3001/api/health
- [ ] `.env` file has `RESEND_API_KEY`
- [ ] Submit contact form
- [ ] Check terminal for detailed logs
- [ ] Email received at hr@techvidin.com

---

## 🎨 Terminal Output Examples

### Successful Form Submission:
```
[API] ========================================
[API] 📧 CONTACT FORM API CALLED
[API] Time: 2024-03-04T10:30:45.123Z
[API] Method: POST
[API] ========================================
[API] 📝 Form Data Received:
[API]   - Name: John Doe
[API]   - Email: john@example.com
[API]   - Phone: +91 98765 43210
[API]   - Subject: Test Message
[API] ✅ Validation passed
[API] ✅ API Key found: re_abc123...
[API] 🔄 Initializing Resend...
[API] 📨 Sending email to hr@techvidin.com...
[API] ✅ EMAIL SENT SUCCESSFULLY!
[API] Email ID: abc123-def456
[API] ========================================
```

### Missing API Key:
```
[API] ❌ CRITICAL ERROR: RESEND_API_KEY not found
[API] Available env vars: [NODE_ENV, PATH, ...]
```

---

## 💡 Pro Tips

1. **Keep Terminal Visible:** You'll want to see logs while testing
2. **Use Split Screen:** Browser on one side, terminal on other
3. **Test Health First:** Verify server is running before testing forms
4. **Check .env:** If logs say "API key missing", check `.env` file
5. **Restart When Stuck:** `Ctrl+C` → `npm run dev` fixes most issues

---

## 🚀 Ready to Deploy?

When your local development is working perfectly:

1. Commit changes:
```bash
git add .
git commit -m "Add email functionality"
git push origin main
```

2. Vercel auto-deploys!

3. Add `RESEND_API_KEY` to Vercel environment variables

4. Test on production: https://www.techvidin.com/contact

---

## 📞 Need Help?

Common commands:
```bash
# Start dev servers
npm run dev

# Start only frontend
npm run dev:vite

# Start only API
npm run dev:api

# Build for production
npm run build

# Check logs in production
vercel logs
```

---

**🎉 You're all set! Happy coding!**
