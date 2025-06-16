# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the KOLF marketing website - a multilingual Next.js application built with TypeScript and Tailwind CSS. The site is statically exported and deployed to AWS S3/CloudFront.

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

### Component Architecture
- **Simple Components**: Lightweight versions (*Simple.tsx) exist for some components, likely for performance or specific use cases
- **Context Pattern**: LanguageContext provides global language state and switching functionality
- **Translation System**: JSON-based translations in `/public/locales/[locale]/` with i18next integration

### Static Export Configuration
- Next.js is configured for static export (`output: 'export'`)
- Images must be unoptimized due to static export limitations
- Trailing slashes enabled for proper static hosting

### Styling System
- Tailwind CSS with custom configuration
- Primary color scheme: Green (#16a34a and variants)
- Custom font stack: Inter with Noto Sans Thai fallback
- Responsive breakpoints follow Tailwind defaults

## Key Technical Considerations

1. **Static Export Limitations**: 
   - No dynamic API routes
   - No image optimization
   - All data must be available at build time

2. **Internationalization**:
   - Always test UI changes across all 5 languages
   - Some languages (ja, zh, th) may require special typography considerations
   - Language switcher must update URL and reload translations

3. **Deployment**:
   - AWS CloudFormation stack manages S3 bucket and CloudFront distribution
   - Deploy script handles build, S3 sync, and CloudFront invalidation
   - Docker setup available for containerized deployments

4. **Component Patterns**:
   - Use Framer Motion for animations (already configured)
   - Icons from lucide-react library
   - Form submissions currently have no backend integration