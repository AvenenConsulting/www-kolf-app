# Formspree Integration Setup

This website uses Formspree to handle all form submissions. Follow these steps to configure it:

## 1. Create a Formspree Account

1. Go to [https://formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form

## 2. Get Your Form Endpoint ID

1. In your Formspree dashboard, copy your form's endpoint ID
2. It will look something like: `xpzgkqyw`

## 3. Configure the Endpoint

### Option A: Environment Variable (Recommended)
1. Create a `.env.local` file in the `kolf-marketing` directory
2. Add your Formspree endpoint:
```
NEXT_PUBLIC_FORMSPREE_ENDPOINT=xpzgkqyw
```

### Option B: Direct Configuration
1. Open `kolf-marketing/lib/config.ts`
2. Replace `YOUR_FORMSPREE_ID` with your actual form ID:
```typescript
formspree: {
  endpoint: 'xpzgkqyw' // Replace with your actual ID
}
```

## 4. Form Submissions Include

All form submissions will include:
- **Email**: User's email address
- **Source**: Which form was submitted (contact_form, newsletter_signup, etc.)
- **Timestamp**: When the form was submitted
- **Subject**: Auto-generated email subject line

### Contact Form Also Includes:
- First Name, Last Name
- Phone Number
- Company/Golf Course Name
- Course Type
- Interests (comma-separated)
- Message

### Newsletter Signup Includes:
- Just the email and source

## 5. Test the Integration

1. Deploy your changes
2. Submit a test form on your website
3. Check your Formspree dashboard to see the submission
4. Verify you receive email notifications (if configured)

## 6. Formspree Features

- **Free Plan**: 50 submissions/month
- **Email Notifications**: Get notified when forms are submitted
- **Spam Protection**: Built-in spam filtering
- **Export Data**: Download submissions as CSV
- **Custom Thank You Pages**: Redirect after submission

## Troubleshooting

- Make sure your form endpoint ID is correct
- Check browser console for any errors
- Verify your Formspree form is active
- Test with a simple form first 