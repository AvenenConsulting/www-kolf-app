# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the KOLF marketing website - a multilingual Next.js application built with TypeScript and Tailwind CSS. The site is statically exported and deployed to AWS S3/CloudFront with comprehensive Google Analytics 4 tracking.

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (static export)
npm run build

# Run linting
npm run lint

# Deploy to AWS (requires AWS CLI configured)
./deploy.sh
```

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
- **Google Analytics 4**: Integrated with measurement ID `G-8SFBM8QD9M`
- **Cookie Consent**: GDPR-compliant banner with localStorage persistence
- **Event Tracking**: Custom events for forms, language switches, scroll depth, and CTAs
- **Privacy Compliance**: Analytics only loads after user consent

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

3. **Analytics & Privacy**:
   - Google Analytics only loads after user accepts cookies
   - Custom event tracking throughout user journey
   - Scroll depth tracking at 25%, 50%, 75%, 100% milestones
   - All form submissions and CTA clicks are tracked

4. **Deployment**:
   - AWS S3 bucket: `kolf.app-production`
   - CloudFront Distribution ID: `E3509NXA3EEV2A`
   - Deploy script handles build, S3 sync, and CloudFront invalidation
   - Cache headers optimized for static assets vs HTML

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