# Lead Capture Form Setup Guide

The KOLF website currently uses a temporary email-based solution for lead capture. When users submit the demo form, it opens their email client with pre-filled information.

## Current Solution (Temporary)

- Form submissions open the user's email client
- Sends to: info@avenen.com
- Includes all form data in email body
- Works without any backend setup

## Recommended Form Services (Free Options)

### Option 1: Formspree (Recommended)
- **Free tier**: 50 submissions/month
- **Setup time**: 5 minutes
- **Website**: https://formspree.io

**Setup Steps:**
1. Sign up at https://formspree.io
2. Create a new form
3. Copy your form ID (looks like: xabc1234)
4. Update `.env.local` file:
   ```
   NEXT_PUBLIC_FORMSPREE_FORM_ID=xabc1234
   ```
5. Update the form submission code in `components/LeadCaptureModal.tsx` (see original code in git history)

### Option 2: Web3Forms
- **Free tier**: 250 submissions/month
- **No signup required**: Just need email verification
- **Website**: https://web3forms.com

**Setup Steps:**
1. Go to https://web3forms.com
2. Enter your email to get an access key
3. Replace the form submission code with:
   ```javascript
   const response = await fetch('https://api.web3forms.com/submit', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
       'Accept': 'application/json'
     },
     body: JSON.stringify({
       access_key: 'YOUR-ACCESS-KEY',
       ...formData,
       source,
       locale
     })
   })
   ```

### Option 3: Netlify Forms
- **Free tier**: 100 submissions/month
- **Requires**: Hosting on Netlify
- **Website**: https://www.netlify.com/products/forms/

### Option 4: Basin
- **Free tier**: 100 submissions/month
- **Website**: https://usebasin.com

## Setting Up Email Notifications

Regardless of which service you choose, make sure to:

1. Configure email notifications to go to your business email
2. Set up auto-responders for leads
3. Test the form thoroughly in all languages
4. Set up webhook integrations if you use a CRM

## Advanced Solution: AWS Lambda + SES

For unlimited submissions and full control, you can set up:

1. **AWS API Gateway** - REST endpoint for form submissions
2. **AWS Lambda** - Process form data
3. **AWS DynamoDB** - Store leads
4. **AWS SES** - Send email notifications

This requires more setup but gives you:
- Unlimited submissions
- Full data ownership
- Integration possibilities
- No monthly fees (pay per use)

## Updating the Code

To switch from the temporary email solution to a form service:

1. Revert the changes in `components/LeadCaptureModal.tsx`
2. Update the API endpoint
3. Add your API keys to `.env.local`
4. Test thoroughly
5. Deploy

## Testing

Always test:
- Form validation
- Success/error states
- Email delivery
- Multi-language support
- Mobile responsiveness