# Vercel Environment Variables

## Required Environment Variables for Production Deployment

When deploying to Vercel, add these environment variables in your project settings:

### Gmail SMTP Configuration

```
GMAIL_USER=contact@arktechnologies.ltd
GMAIL_APP_PASSWORD=gowg svix seui stra
```

## How to Add Environment Variables to Vercel

### Option 1: Via Vercel Dashboard (Recommended)

1. Go to your project on Vercel: https://vercel.com/dashboard
2. Select your project (ARK Technologies Website)
3. Go to **Settings** → **Environment Variables**
4. Add each variable:
   - **Name**: `GMAIL_USER`
   - **Value**: `contact@arktechnologies.ltd`
   - **Environment**: Select `Production`, `Preview`, and `Development`
   - Click **Save**
   
   - **Name**: `GMAIL_APP_PASSWORD`
   - **Value**: `gowg svix seui stra`
   - **Environment**: Select `Production`, `Preview`, and `Development`
   - Click **Save**

5. Redeploy your application for the variables to take effect

### Option 2: Via Vercel CLI

```bash
vercel env add GMAIL_USER
# Enter value: contact@arktechnologies.ltd

vercel env add GMAIL_APP_PASSWORD
# Enter value: gowg svix seui stra
```

## Email Recipients

All contact form submissions will be sent to:
- aasimm.khan@arktechnologies.ltd
- deb.mukhuty@arktechnologies.ltd

## Testing After Deployment

After deploying to Vercel:
1. Visit your production website's contact page
2. Fill out and submit the form
3. Verify emails are received by both recipients
4. Check spam folders if emails don't appear in inbox

## Security Notes

- The App Password is a Google-generated password specifically for this application
- Never commit this file to version control (it's not gitignored, so delete after use)
- If you need to regenerate the password, do it through Google Account Security settings
- The `.env.local` file is already gitignored and safe

## Troubleshooting

If emails aren't being sent in production:

1. **Check Vercel Logs**: Go to Deployments → Select latest deployment → View Function Logs
2. **Verify Environment Variables**: Settings → Environment Variables (make sure they're set for Production)
3. **Check Gmail Security**: Ensure the Google account hasn't flagged the app password
4. **Test Locally First**: Make sure it works on localhost:3001 before deploying

## Contact Form Locations

The contact form is available at:
- `/contact` - Dedicated contact page
- `/` (homepage) - Contact section at bottom

Both forms are connected to the same API endpoint and will send to both email addresses.

