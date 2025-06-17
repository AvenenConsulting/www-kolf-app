# Simple Email Capture Guide

The KOLF website now uses a simple email capture form that saves emails locally in the browser's localStorage.

## How It Works

1. **Users enter their email** in a simple form on the homepage
2. **Emails are saved locally** in the browser's localStorage
3. **You can download all emails** as a CSV file

## Accessing Saved Emails

### Admin Panel Access

1. Go to the website homepage
2. In the email input field, type exactly: `admin`
3. A hidden admin panel will appear in the bottom-right corner

### Admin Panel Features

- **Download Emails CSV**: Downloads all saved emails with metadata
- **Clear All Emails**: Removes all saved emails from localStorage
- **Email Count**: Shows how many emails are currently saved

### CSV Format

The downloaded CSV includes:
- Email address
- Source (where on the site they signed up)
- Language/locale
- Timestamp

## Important Notes

1. **Browser-Specific**: Emails are saved in the browser's localStorage, so:
   - Each browser has its own list
   - Clearing browser data will delete the emails
   - Different devices won't share the same list

2. **Manual Collection**: You need to periodically:
   - Visit the site from the browser where users signed up
   - Access the admin panel
   - Download the CSV
   - Clear the emails after downloading

3. **Privacy**: Since this uses localStorage:
   - No data is sent to any server
   - Completely private and secure
   - GDPR compliant (data stays on user's device)

## Testing

To test the email capture:
1. Enter a test email in the form
2. Click "Get Demo Access"
3. Type "admin" in the email field
4. Check that your test email appears in the count
5. Download the CSV to verify

## Future Improvements

When you're ready for a more robust solution, consider:
- Setting up a proper form backend (see FORM_SETUP.md)
- Adding email validation and duplicate prevention
- Implementing automatic email notifications
- Creating a proper admin dashboard