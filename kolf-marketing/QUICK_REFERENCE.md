# Quick Reference Guide

## Common Tasks

### Adding a New Feature
1. Create feature branch: `git checkout -b feature-name`
2. Implement changes
3. Test locally: `npm run dev`
4. Build test: `npm run build`
5. Merge to main and push to deploy

### Updating Translations
1. Edit files in `/public/locales/[locale]/common.json`
2. Test all 5 languages locally
3. Push to main to deploy

### Adding Analytics Events
```typescript
import { trackEvent } from '@/lib/analytics'

// Track custom event
trackEvent('action_name', 'category', 'label', value)

// Common tracking functions
trackFormSubmission('contact_form', true)
trackCTAClick('book_demo', 'hero_section')
trackLanguageSwitch('en', 'th')
```

### Environment Variables
1. Update `buildspec.yml` to add new variables:
   ```yaml
   - echo "NEXT_PUBLIC_NEW_VAR=value" >> .env.local
   ```
2. Use in code: `process.env.NEXT_PUBLIC_NEW_VAR`
3. Push to deploy

### Deployment Commands

#### Check Deployment Status
```bash
# Latest pipeline execution
aws codepipeline list-pipeline-executions \
  --pipeline-name kolf-marketing-pipeline-pipeline \
  --region ap-southeast-1 \
  --max-items 1
```

#### Force Deployment
```bash
# Trigger pipeline manually
aws codepipeline start-pipeline-execution \
  --name kolf-marketing-pipeline-pipeline \
  --region ap-southeast-1
```

#### Check Live Site
```bash
# Verify deployment
curl -I https://kolf.app

# Check specific page
curl -s https://kolf.app/en/ | grep -c "G-8SFBM8QD9M"
```

### Troubleshooting

#### Build Fails Locally
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### Pipeline Not Triggering
1. Check GitHub connection in CodePipeline console
2. Manually trigger: see "Force Deployment" above

#### GA Not Working
1. Check buildspec.yml has GA environment variable
2. Verify in HTML: `curl -s https://kolf.app | grep "googletagmanager"`
3. Check GA4 dashboard for real-time data

### Key Files
- **Translations**: `/public/locales/[locale]/common.json`
- **Analytics**: `/lib/analytics.ts`
- **Components**: `/components/` (use *Simple.tsx versions)
- **Deployment**: `buildspec.yml` (CodeBuild config)
- **Environment**: Update in `buildspec.yml`, not `.env.local`

### AWS Resources
- **Region**: `ap-southeast-1` (ALWAYS!)
- **Pipeline**: `kolf-marketing-pipeline-pipeline`
- **S3 Bucket**: `kolf.app-production`
- **CloudFront**: `E3509NXA3EEV2A`
- **Domain**: `kolf.app`

### Important Notes
1. Always work in `/kolf-marketing` subdirectory
2. Push to `main` branch to deploy
3. Deployment takes ~5-10 minutes total
4. CloudFront cache invalidation adds 5-10 min
5. Use AWS CLI with `--region ap-southeast-1`