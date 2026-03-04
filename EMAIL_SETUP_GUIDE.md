# Email Integration Setup Guide

This guide will help you set up email functionality for TechVid's Contact and Career forms using Resend + Vercel Functions.

---

## 📋 What's Been Implemented

✅ **Contact Form Email API** (`/api/send-contact-message`)  
✅ **Career Application Email API** (`/api/send-job-application`)  
✅ **Frontend updated to call APIs**  
✅ **Environment variables configured**  

---

## 🚀 Step-by-Step Setup

### Step 1: Create Resend Account (FREE)

1. Go to: **https://resend.com/**
2. Click **"Sign Up"** (use GitHub or email)
3. Verify your email address
4. You'll get **3,000 emails/month FREE** forever! 🎉

---

### Step 2: Get Your Resend API Key

1. After logging in, go to: **https://resend.com/api-keys**
2. Click **"Create API Key"**
3. Give it a name (e.g., "TechVid Production")
4. Copy the API key (starts with `re_...`)
5. **Important:** Save it somewhere safe - you can only see it once!

---

### Step 3: Configure Local Environment

1. Open the `.env` file in your project root
2. Add your Resend API key:

```bash
# .env file
RESEND_API_KEY=re_your_actual_api_key_here
```

3. Save the file
4. **NEVER commit this file to GitHub!** (It's already in .gitignore)

---

### Step 4: Test Locally

1. Start your dev server:
```bash
npm run dev
```

2. Go to: **http://localhost:5173/contact**

3. Fill out the contact form and click "Send Message"

4. Check your email at **hr@techvidin.com**

5. You should receive an email with the form submission! ✉️

**Note:** In development, Resend uses `onboarding@resend.dev` as the sender. This is normal!

---

### Step 5: Deploy to Vercel

#### A. Add Environment Variable to Vercel

1. Go to your Vercel dashboard: **https://vercel.com/dashboard**
2. Select your **TechVid** project
3. Click **"Settings"** tab
4. Click **"Environment Variables"** in the left sidebar
5. Add a new variable:
   - **Key:** `RESEND_API_KEY`
   - **Value:** `re_your_actual_api_key_here`
   - **Environment:** Select **"Production"**, **"Preview"**, and **"Development"**
6. Click **"Save"**

#### B. Deploy Your Code

**Option 1: Automatic (If connected to GitHub)**
```bash
git add .
git commit -m "Add email functionality with Resend"
git push origin main
```
Vercel will auto-deploy! 🚀

**Option 2: Manual Deploy**
```bash
vercel --prod
```

---

### Step 6: Verify Production Deployment

1. Go to: **https://www.techvidin.com/contact**
2. Fill out and submit the form
3. Check **hr@techvidin.com** for the email
4. ✅ Success! Your contact form is now live!

---

## 🎨 Customize Email Sender (Optional)

By default, emails are sent from `onboarding@resend.dev`. To use your own domain:

### Step 1: Add Your Domain in Resend

1. Go to: **https://resend.com/domains**
2. Click **"Add Domain"**
3. Enter: **techvidin.com**
4. Add the DNS records Resend provides to your domain registrar
5. Wait for verification (usually 5-10 minutes)

### Step 2: Update API Routes

Once verified, update the sender in both API files:

**Change this:**
```javascript
from: 'TechVid Contact Form <onboarding@resend.dev>',
```

**To this:**
```javascript
from: 'TechVid Contact Form <noreply@techvidin.com>',
```

---

## 📧 Email Templates Included

### Contact Form Email
- Professional HTML design
- Shows: Name, Email, Phone, Subject, Message
- Reply-to set to user's email
- Sent to: **hr@techvidin.com**

### Career Application Email
- Highlights position applied for
- Shows: Name, Email, Phone, Cover Letter
- Link to resume (when implemented)
- Sent to: **hr@techvidin.com**

---

## 🔍 Testing Tips

### Test Scenarios:

1. ✅ Fill all fields → Should send successfully
2. ✅ Leave fields empty → Should show validation error
3. ✅ Invalid email format → Browser validation
4. ✅ Submit twice quickly → Both should work
5. ✅ Check spam folder if email doesn't arrive

### Development Testing:
- Use **your own email** temporarily in the API files
- Check if emails are received correctly
- Verify formatting looks good
- Then change back to **hr@techvidin.com**

---

## 🛠️ Troubleshooting

### "Failed to send email" error:

**Check:**
1. Is `RESEND_API_KEY` set in Vercel?
2. Is the API key correct (starts with `re_`)?
3. Is the key added to all environments (Production/Preview/Development)?

### No email received:

**Check:**
1. Spam/Junk folder
2. Email address is correct (hr@techvidin.com)
3. Resend dashboard for delivery logs: **https://resend.com/emails**

### "Method not allowed" error:

**Check:**
1. Form is using POST method
2. API route exists in `/api/` folder

---

## 📊 Monitor Email Delivery

1. Go to: **https://resend.com/emails**
2. See all sent emails
3. Check delivery status
4. View email content
5. Debug issues

---

## 💰 Cost Breakdown

### Free Tier (Forever):
- 3,000 emails/month
- 100 emails/day
- Perfect for small business

### If You Exceed:
- $0.10 per 1,000 emails
- Very affordable!

**Example:** 5,000 emails/month = $0.20/month

---

## 🔐 Security Best Practices

✅ **Already Implemented:**
- API key stored in environment variables (never in code)
- Server-side validation
- POST-only endpoints
- CORS protection via Vercel

✅ **Recommended:**
- Monitor Resend dashboard for unusual activity
- Rotate API keys periodically
- Use domain verification for production

---

## 📝 API Endpoints

### Contact Form
**Endpoint:** `/api/send-contact-message`  
**Method:** POST  
**Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 98765 43210",
  "subject": "Inquiry about courses",
  "message": "I'm interested in..."
}
```

### Career Application
**Endpoint:** `/api/send-job-application`  
**Method:** POST  
**Body:**
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "+91 98765 43210",
  "position": "Digital Marketing",
  "message": "Cover letter...",
  "resume": "https://..."
}
```

---

## 🎯 Next Steps (Optional)

Want to enhance further?

1. **Save to Database:** Add MongoDB to store all submissions
2. **Auto-Reply:** Send confirmation email to users
3. **SMS Notifications:** Integrate Twilio for SMS alerts
4. **Slack Notifications:** Post to Slack when form submitted
5. **File Uploads:** Allow resume uploads to Career form

Need help with any of these? Just ask! 🚀

---

## 📞 Support

If you encounter issues:

1. **Resend Support:** support@resend.com
2. **Vercel Support:** https://vercel.com/support
3. **Check Logs:** Vercel Dashboard → Your Project → Functions tab

---

## ✅ Checklist

- [ ] Created Resend account
- [ ] Got API key from Resend
- [ ] Added key to local `.env` file
- [ ] Tested contact form locally
- [ ] Added key to Vercel environment variables
- [ ] Deployed to production
- [ ] Tested on live website
- [ ] Received test email at hr@techvidin.com
- [ ] (Optional) Set up custom domain in Resend

---

**🎉 Congratulations! Your email integration is complete!**

Users can now contact you directly from the website, and you'll receive all messages at **hr@techvidin.com**.
