# Logging & Debugging Guide

This guide shows you how to check logs and debug email sending issues.

---

## 🔍 How to Check Logs

### Local Development (Your Computer)

**Where to see logs:**
- Open your **Terminal** where you ran `npm run dev`
- All `console.log` statements appear here in real-time

**Steps:**
1. Start dev server: `npm run dev`
2. Keep terminal visible
3. Submit contact form
4. Watch terminal output - you'll see detailed logs!

**Example Terminal Output:**
```
========================================
📧 CONTACT FORM API CALLED
Time: 2024-03-03T10:30:45.123Z
Method: POST
========================================
📝 Form Data Received:
  - Name: John Doe
  - Email: john@example.com
  - Phone: +91 98765 43210
  - Subject: Test Message
  - Message: This is a test...
✅ Validation passed
✅ API Key found: re_abc123...
🔄 Initializing Resend...
📨 Sending email to hr@techvidin.com...
✅ EMAIL SENT SUCCESSFULLY!
Email ID: abc123-def456-ghi789
========================================
```

---

### Production (Vercel)

**Method 1: Vercel Dashboard (Real-time)**

1. Go to: **https://vercel.com/dashboard**
2. Click on your **TechVid** project
3. Click **"Functions"** tab in the top menu
4. You'll see all API function calls
5. Click on any function to see logs
6. Real-time logs appear here!

**Method 2: Vercel CLI (Advanced)**

```bash
# Install Vercel CLI (one-time)
npm i -g vercel

# Login
vercel login

# View logs in real-time
vercel logs --follow
```

---

## 🧪 Test Email Endpoint

I've created a test endpoint to quickly verify your setup.

### How to Use:

**Local Testing:**
1. Start dev server: `npm run dev`
2. Open browser: **http://localhost:5173/api/test-email**
3. Check terminal for detailed logs
4. Check **hr@techvidin.com** for test email

**Production Testing:**
1. After deploying to Vercel
2. Open browser: **https://www.techvidin.com/api/test-email**
3. Check Vercel logs (see above)
4. Check **hr@techvidin.com** for test email

**Expected Response:**
```json
{
  "success": true,
  "message": "Test email sent successfully! Check hr@techvidin.com",
  "emailId": "abc123-def456-ghi789",
  "apiKey": "Configured",
  "timestamp": "2024-03-03T10:30:45.123Z"
}
```

---

## 🐛 Common Issues & Solutions

### Issue 1: "RESEND_API_KEY not found"

**Symptoms:**
- Terminal shows: `❌ RESEND_API_KEY not found in environment variables`
- Browser shows error message

**Solution:**
1. Check `.env` file exists in project root
2. Check it contains: `RESEND_API_KEY=re_your_key_here`
3. Restart dev server (`Ctrl+C`, then `npm run dev`)
4. **IMPORTANT:** Vercel needs restart after env var changes!

**For Local:**
```bash
# Check .env file
cat .env

# Should show:
# RESEND_API_KEY=re_xxxxx
```

**For Vercel:**
1. Go to: Project → Settings → Environment Variables
2. Verify `RESEND_API_KEY` is added
3. **Redeploy** your project (Vercel doesn't auto-reload env vars)

---

### Issue 2: "Failed to send email"

**Symptoms:**
- API returns error
- No email received

**Check Terminal/Vercel Logs for:**

**A. Invalid API Key**
```
❌ RESEND API ERROR:
Error: Invalid API key
```
**Solution:** 
- Check API key is correct in Resend dashboard
- Regenerate key if needed
- Update in `.env` and Vercel

**B. Invalid "from" email**
```
❌ RESEND API ERROR:
Error: You can only send from onboarding@resend.dev with trial account
```
**Solution:**
- Keep using `onboarding@resend.dev` (it's normal!)
- Or verify your domain in Resend

**C. Rate limit exceeded**
```
❌ RESEND API ERROR:
Error: Rate limit exceeded
```
**Solution:**
- Free tier: 100 emails/day
- Wait 24 hours or upgrade plan

---

### Issue 3: Email not received

**Checklist:**

✅ Check **Spam/Junk** folder first!  
✅ Verify email address: `hr@techvidin.com` (check for typos)  
✅ Check Resend dashboard: **https://resend.com/emails**  
✅ Look for delivery status  

**In Resend Dashboard:**
1. Go to **Emails** tab
2. See all sent emails
3. Check delivery status:
   - ✅ **Delivered** - Success!
   - ⏳ **Processing** - Wait a moment
   - ❌ **Failed** - Check error message

---

### Issue 4: "Method not allowed"

**Symptoms:**
```
❌ ERROR: Method not allowed. Expected POST, got: GET
```

**Cause:**
- Trying to open API endpoint in browser (uses GET)
- API expects POST request

**Solution:**
- Use test endpoint: `/api/test-email` (supports GET)
- Or use contact form (sends POST)
- Or use tool like Postman/Insomnia

---

### Issue 5: No logs appearing

**Local Development:**

**Problem:** Terminal shows nothing when form submitted

**Check:**
1. Is dev server running? (`npm run dev`)
2. Is terminal visible?
3. Try clicking in terminal and scrolling up
4. Try restarting server

**Vercel Production:**

**Problem:** No logs in Vercel dashboard

**Check:**
1. Are you looking at the right project?
2. Is the deployment successful?
3. Try the Functions tab (not Deployments)
4. Logs might take 10-30 seconds to appear

---

## 📊 Log Levels Explained

### ✅ Success Indicators
- `✅ Validation passed` - Form data is good
- `✅ API Key found` - Environment configured
- `✅ EMAIL SENT SUCCESSFULLY!` - Email queued for delivery

### 🔄 Progress Indicators
- `🔄 Initializing Resend...` - Starting email service
- `📨 Sending email...` - Calling Resend API
- `📝 Form Data Received` - Got form submission

### ❌ Error Indicators
- `❌ VALIDATION ERROR` - Form data incomplete
- `❌ CRITICAL ERROR` - API key missing
- `❌ RESEND API ERROR` - Email sending failed

---

## 🔧 Debugging Steps

### Step 1: Test Locally First

```bash
# 1. Start dev server
npm run dev

# 2. Open terminal side-by-side with browser
# 3. Go to: http://localhost:5173/api/test-email
# 4. Watch terminal output
```

**Expected:** Detailed logs + test email sent

---

### Step 2: Check Environment Variables

**Local (.env file):**
```bash
# View env file
cat .env

# Should show:
RESEND_API_KEY=re_xxxxx
```

**Vercel (Dashboard):**
1. Project → Settings → Environment Variables
2. Should see: `RESEND_API_KEY` with value hidden
3. Click eye icon to verify it's correct

---

### Step 3: Verify API Key in Resend

1. Go to: **https://resend.com/api-keys**
2. Check your API key is active
3. Try regenerating if unsure
4. Copy new key
5. Update in `.env` and Vercel
6. Restart server / Redeploy

---

### Step 4: Check Resend Dashboard

1. Go to: **https://resend.com/emails**
2. See if any emails were sent
3. Check delivery status
4. Click email for details
5. See error messages if any

---

### Step 5: Test with Curl (Advanced)

```bash
# Test API endpoint directly
curl -X POST http://localhost:5173/api/send-contact-message \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+91 98765 43210",
    "subject": "Test Subject",
    "message": "Test message"
  }'
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Message sent successfully",
  "id": "abc123..."
}
```

---

## 📝 What Each Log Means

### Form Submission Flow:

```
1. 📧 CONTACT FORM API CALLED
   → API endpoint received request

2. 📝 Form Data Received
   → Shows all form fields
   → Verify data looks correct

3. ✅ Validation passed
   → All required fields present

4. ✅ API Key found: re_abc123...
   → Environment variable loaded
   → Key starts with "re_" (good!)

5. 🔄 Initializing Resend...
   → Creating Resend client

6. 📨 Sending email to hr@techvidin.com...
   → Calling Resend API

7. ✅ EMAIL SENT SUCCESSFULLY!
   → Email queued for delivery
   → Email ID: unique identifier

8. Email ID: abc123-def456-ghi789
   → Use this to track in Resend dashboard
```

---

## 🚨 Emergency Debugging

If nothing works, add temporary logging:

```javascript
// Add to start of API file
console.log('=== EMERGENCY DEBUG ===');
console.log('File loaded successfully');
console.log('Node version:', process.version);
console.log('Environment:', process.env.NODE_ENV);
console.log('All env vars:', Object.keys(process.env));
console.log('======================');
```

Then check:
1. Does file even run?
2. What env vars are available?
3. Is Node.js version compatible?

---

## 📞 Still Stuck?

### Check These:

1. **Resend Status:** https://status.resend.com/
2. **Vercel Status:** https://www.vercel-status.com/
3. **Network Issues:** Try from different network/device

### Get Help:

1. **Resend Support:** support@resend.com
2. **Vercel Support:** https://vercel.com/support
3. **Copy error logs** and send to support

---

## ✅ Success Checklist

Test each item:

- [ ] Dev server starts without errors
- [ ] `.env` file exists with API key
- [ ] Test endpoint returns success: `/api/test-email`
- [ ] Terminal shows detailed logs
- [ ] Test email received at hr@techvidin.com
- [ ] Contact form submission works
- [ ] Vercel environment variables set
- [ ] Production deployment successful
- [ ] Vercel logs accessible
- [ ] Production email sending works

---

## 🎯 Quick Test Commands

```bash
# 1. Check env file
cat .env

# 2. Test locally
npm run dev
# Then open: http://localhost:5173/api/test-email

# 3. Check Vercel logs
vercel logs

# 4. Redeploy
git push origin main
```

---

**🎉 Happy Debugging!**

Remember: Most issues are environment variables not being set correctly. Always check `.env` locally and Vercel settings in production!
