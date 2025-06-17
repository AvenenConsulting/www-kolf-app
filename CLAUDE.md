# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the KOLF marketing website - a multilingual Next.js application built with TypeScript and Tailwind CSS. The site is statically exported and deployed to AWS S3/CloudFront via automated CI/CD pipeline.

## Complete Development Workflow

### Prerequisites
- Node.js 18+ installed
- AWS CLI configured with appropriate permissions for ap-southeast-1 region
- Git configured with repository access

### 1. Initial Setup

```bash
# Clone repository
git clone https://github.com/AvenenConsulting/www-kolf-app.git
cd www-kolf-app

# Navigate to project directory
cd kolf-marketing

# Install dependencies
npm install

# Verify setup by running development server
npm run dev
# Visit http://localhost:3000 to confirm everything works
```

### 2. Development Process

```bash
# Start development server
npm run dev

# Make your changes to files
# Test changes locally - the dev server auto-reloads

# Before committing, always run:
npm run build
# This ensures your changes don't break the production build
# Verify the `out/` directory is created successfully

# Run linting to catch issues
npm run lint
# Fix any linting errors before proceeding
```

### 3. Testing All Languages

Since this is a multilingual site, always test changes across all locales:

```bash
# Test all language routes in your browser:
# http://localhost:3000/en
# http://localhost:3000/th  
# http://localhost:3000/ko
# http://localhost:3000/ja
# http://localhost:3000/zh

# Pay special attention to:
# - Text overflow in different languages
# - Typography for Asian languages (Thai, Korean, Japanese, Chinese)
# - Form submissions work in all languages
```

### 4. Commit and Deployment Process

**CRITICAL**: Every push to `main` triggers automatic production deployment via AWS CodePipeline.

```bash
# 1. Stage your changes
git add .

# 2. Commit with descriptive message
git commit -m "Brief description of your changes

More detailed explanation if needed

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>"

# 3. Push to main - THIS TRIGGERS PRODUCTION DEPLOYMENT
git push origin main
```

### 5. Monitor Deployment

**Pipeline Details:**
- **Name**: `kolf-marketing-pipeline-pipeline`
- **Region**: `ap-southeast-1` (Singapore)
- **S3 Bucket**: `kolf.app-production`
- **CloudFront**: Distribution ID `E3509NXA3EEV2A`

```bash
# Check pipeline status (most recent execution)
aws codepipeline list-pipeline-executions \
  --pipeline-name kolf-marketing-pipeline-pipeline \
  --region ap-southeast-1 \
  --max-items 1

# Monitor specific execution (replace <execution-id>)
aws codepipeline get-pipeline-execution \
  --pipeline-name kolf-marketing-pipeline-pipeline \
  --pipeline-execution-id <execution-id> \
  --region ap-southeast-1

# Check if deployment completed successfully
curl -I https://kolf.app/
# Should return: HTTP/2 200

# Verify JavaScript bundles load correctly
curl -s https://kolf.app/ | grep -o 'script src="/_next/static/chunks' | head -1
# Should find script tags, not HTML content
```

### 6. Manual Pipeline Trigger (if needed)

If the automatic polling doesn't pick up your changes:

```bash
aws codepipeline start-pipeline-execution \
  --name kolf-marketing-pipeline-pipeline \
  --region ap-southeast-1
```

### 7. Verify Live Site

After deployment completes (usually 3-5 minutes):

```bash
# Test all main routes
curl -I https://kolf.app/      # Should return 200
curl -I https://kolf.app/en/   # Should return 200  
curl -I https://kolf.app/th/   # Should return 200
curl -I https://kolf.app/ko/   # Should return 200
curl -I https://kolf.app/ja/   # Should return 200
curl -I https://kolf.app/zh/   # Should return 200

# Test JavaScript loading
curl -s https://kolf.app/_next/static/chunks/webpack-*.js | head -c 50
# Should show JavaScript code, not HTML
```

## Emergency Procedures

### If Pipeline Fails

1. **Check CodeBuild logs:**
```bash
# Get latest build ID from pipeline execution details
aws codebuild batch-get-builds --ids <build-id> --region ap-southeast-1
```

2. **Common failure causes:**
   - Linting errors: Fix and recommit
   - Build errors: Check Next.js configuration
   - Static export issues: Ensure no dynamic features used

### If Site Shows JavaScript Errors

This usually means JavaScript bundles are corrupted or have mismatched file hashes:

1. **Force a clean rebuild:**
```bash
# Make a small change to force rebuild
echo "/* Force rebuild $(date) */" >> app/globals.css
git add . && git commit -m "Force rebuild" && git push
```

2. **Clear CloudFront cache manually:**
```bash
aws cloudfront create-invalidation \
  --distribution-id E3509NXA3EEV2A \
  --paths "/*" \
  --region ap-southeast-1
```

### If Root URL Doesn't Work

The root URL (`/`) should serve content directly (not redirect) due to static export limitations. This is expected behavior.

## Manual Deployment (Emergency Only)

Only use if CodePipeline is completely unavailable:

```bash
cd kolf-marketing
./deploy.sh
```

## Hosting Architecture & Infrastructure

### Overview
The KOLF marketing site uses a fully automated AWS-based infrastructure for continuous deployment and global content delivery.

### Infrastructure Components

```
Developer → GitHub → AWS CodePipeline → CodeBuild → S3 → CloudFront → Users
```

1. **Source Control**: GitHub repository (`AvenenConsulting/www-kolf-app`)
2. **CI/CD Pipeline**: AWS CodePipeline (`kolf-marketing-pipeline-pipeline`)
3. **Build Environment**: AWS CodeBuild with Node.js 18 runtime
4. **Storage**: AWS S3 bucket (`kolf.app-production`)
5. **CDN**: AWS CloudFront distribution (`E3509NXA3EEV2A`)
6. **Region**: ap-southeast-1 (Singapore)

### Deployment Flow

1. **Trigger**: Push to `main` branch
2. **Source Stage**: CodePipeline polls GitHub every 60 seconds
3. **Build Stage**: CodeBuild executes `buildspec.yml`:
   ```yaml
   # Install dependencies
   npm ci --prefer-offline --no-audit
   
   # Set environment variables
   echo "NEXT_PUBLIC_GA_MEASUREMENT_ID=G-8SFBM8QD9M" > .env.local
   
   # Build static site
   npm run build
   
   # Deploy to S3
   aws s3 sync out/ s3://kolf.app-production --delete
   
   # Invalidate CloudFront cache
   aws cloudfront create-invalidation --distribution-id E3509NXA3EEV2A --paths "/*"
   ```

### Static Export Constraints

**CRITICAL**: The site uses Next.js static export mode, which has specific limitations:

#### ✅ Supported Features
- Static pages and routing
- Client-side React components
- Static assets (images, CSS, JS)
- Environment variables (NEXT_PUBLIC_ prefix)
- Client-side analytics and tracking

#### ❌ Not Supported (Will Break Build)
- Server-side API routes (`app/api/`)
- Dynamic routes with server-side rendering
- Middleware with server-side logic
- Dynamic sitemaps or robots.txt
- Image optimization (must use `unoptimized: true`)
- Server-side cookies or session management

### File Structure in Production

```
S3 Bucket (kolf.app-production):
├── index.html                 # Root page (serves main content)
├── 404.html                   # Error page
├── en/
│   └── index.html              # English locale
├── th/
│   └── index.html              # Thai locale
├── ko/
│   └── index.html              # Korean locale
├── ja/
│   └── index.html              # Japanese locale
├── zh/
│   └── index.html              # Chinese locale
├── _next/
│   └── static/
│       ├── chunks/             # JavaScript bundles
│       └── css/                # CSS files
├── locales/                    # Translation JSON files
├── images/                     # Static images
├── sitemap.xml                 # Static sitemap
├── robots.txt                  # Static robots file
└── manifest.json               # PWA manifest
```

### Cache Strategy

- **HTML files**: No cache (immediate updates)
- **Static assets** (`_next/static/`): 1 year cache
- **Images**: 1 month cache
- **JSON files**: No cache

### URL Routing Behavior

Due to static export limitations:

- **Root URL** (`/`): Serves content directly (no redirect to `/en/`)
- **Language URLs** (`/en/`, `/th/`, etc.): Serve localized content
- **404 handling**: Handled by CloudFront/S3, serves `404.html`

### Security Headers

The site includes security headers via Next.js configuration:
- Content Security Policy (CSP)
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin

### Environment Variables

Build-time variables set in `buildspec.yml`:
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Google Analytics tracking ID

### Monitoring & Troubleshooting

**Pipeline Monitoring**:
```bash
aws codepipeline get-pipeline-state --name kolf-marketing-pipeline-pipeline --region ap-southeast-1
```

**Build Logs**:
```bash
aws logs get-log-events --log-group-name "/aws/codebuild/kolf-marketing-pipeline-build" --region ap-southeast-1
```

**CloudFront Monitoring**:
```bash
aws cloudfront get-distribution --id E3509NXA3EEV2A --region ap-southeast-1
```

### Performance Optimization

1. **CloudFront CDN**: Global edge locations for fast content delivery
2. **Static Generation**: Pre-built HTML for instant loading
3. **Asset Optimization**: CSS/JS minification and compression
4. **Image Optimization**: Manual optimization (no Next.js optimization due to static export)

### Backup & Recovery

- **Source**: GitHub repository with full version history
- **Automated Backups**: S3 versioning enabled
- **Rollback**: Reset to previous commit and redeploy
- **Manual Recovery**: Emergency deployment via `./deploy.sh`

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