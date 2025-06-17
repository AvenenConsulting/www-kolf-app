# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the KOLF marketing website - a multilingual Next.js application built with TypeScript and Tailwind CSS. The site is statically exported and deployed to AWS S3/CloudFront via automated CI/CD pipeline.

## Development Commands

```bash
# Navigate to project directory
cd kolf-marketing

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (static export)
npm run build

# Run linting
npm run lint
```

## Deployment Process

**IMPORTANT**: The site uses AWS CodePipeline for automated deployment in the `ap-southeast-1` (Singapore) region.

### Automatic Deployment (Recommended)
```bash
# Simply push to main branch
git add .
git commit -m "Your changes"
git push origin main

# Pipeline automatically triggers and deploys
```

### Monitor Deployment
```bash
# Check pipeline status
aws codepipeline list-pipeline-executions \
  --pipeline-name kolf-marketing-pipeline-pipeline \
  --region ap-southeast-1 \
  --max-items 1

# Manually trigger pipeline if needed
aws codepipeline start-pipeline-execution \
  --name kolf-marketing-pipeline-pipeline \
  --region ap-southeast-1
```

### Manual Deployment (Alternative)
```bash
# Use this only if pipeline is not available
cd kolf-marketing
./deploy.sh
```

See `kolf-marketing/DEPLOYMENT.md` for detailed deployment documentation.

## Architecture Overview

### Routing Structure
- Uses Next.js App Router with dynamic locale routing at `/[locale]`
- Supported locales: en, th, ko, ja, zh
- Root redirects to default locale (/en)
- Static export generates pre-built pages for all routes

### Translation System
- **Translation Files**: JSON-based translations in `/public/locales/[locale]/common.json`
- **Translation Loading**: Server-side translation loading via `getTranslations()` function in `/lib/translations.ts`
- **Component Architecture**: Translations passed as props to components, not using i18next client hooks
- **Fallback Strategy**: English translations used as fallback if locale translations missing

### Component Architecture
- **Simple Components**: Lightweight versions (*Simple.tsx) exist for some components for specific use cases
- **Analytics Integration**: All components wrapped with AnalyticsProvider for tracking
- **Form Handling**: Uses Formspree for form submissions with analytics event tracking
- **Layout Pattern**: Server components for layouts, client components for interactive features

### Analytics Implementation
- **Google Analytics 4**: Hybrid implementation with measurement ID `G-8SFBM8QD9M`
- **Hybrid Approach**: gtag.js in HTML head + react-ga4 for SPA tracking
- **No Cookie Consent**: Site targets non-EU markets (removed per requirements)
- **Event Tracking**: Custom events for forms, language switches, scroll depth (25%, 50%, 75%, 100%), and CTAs
- **Environment Variable**: Set in buildspec.yml during CodeBuild process

### Static Export Configuration
- Next.js configured for static export (`output: 'export'`)
- Images must be unoptimized due to static export limitations
- Trailing slashes enabled for proper static hosting
- Environment variables available at build time via NEXT_PUBLIC_ prefix

### Styling System
- Tailwind CSS with custom configuration
- Primary color scheme: Green (#22c55e and variants)
- Custom font stack: Inter with Noto Sans Thai fallback
- Responsive breakpoints follow Tailwind defaults

## Key Technical Considerations

1. **Static Export Limitations**: 
   - No dynamic API routes or middleware
   - No image optimization
   - All data must be available at build time
   - Environment variables must use NEXT_PUBLIC_ prefix

2. **Internationalization**:
   - Always test UI changes across all 5 languages
   - Some languages (ja, zh, th) may require special typography considerations
   - Language switcher updates URL and reloads page to change locale
   - Translations loaded server-side and passed as props to avoid hydration issues

3. **Analytics**:
   - Google Analytics loads immediately (no cookie consent - non-EU focus)
   - Hybrid implementation: gtag.js for detection + react-ga4 for tracking
   - Custom event tracking throughout user journey
   - Scroll depth tracking at 25%, 50%, 75%, 100% milestones
   - All form submissions and CTA clicks are tracked

4. **Deployment**:
   - **Automated**: AWS CodePipeline monitors GitHub and auto-deploys on push to main
   - **Pipeline**: `kolf-marketing-pipeline-pipeline` in `ap-southeast-1` region
   - **S3 Bucket**: `kolf.app-production`
   - **CloudFront**: Distribution ID `E3509NXA3EEV2A`
   - **Build Process**: CodeBuild uses `buildspec.yml` with environment variables
   - **Cache Strategy**: HTML no-cache, assets cached for 1 year

5. **Component Patterns**:
   - Use Framer Motion for animations (already configured)
   - Icons from lucide-react library
   - Form submissions via Formspree with analytics tracking
   - Server components for layout, client components for interactivity

6. **Analytics Event Tracking**:
   - Form submissions: `trackFormSubmission(formName, success)`
   - Language changes: `trackLanguageSwitch(fromLang, toLang)`
   - CTA clicks: `trackCTAClick(buttonName, location)`
   - Demo requests: `trackDemoRequest(source)`
   - Scroll depth: Automatic tracking at key milestones