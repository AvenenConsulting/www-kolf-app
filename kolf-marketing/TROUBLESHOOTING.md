# KOLF Marketing Site - Troubleshooting Guide

This guide covers common issues and their solutions when developing and deploying the KOLF marketing site.

## Common Development Issues

### Build Fails Locally

**Issue**: `npm run build` fails with errors

**Solutions**:
1. **TypeScript errors**:
   ```bash
   # Check TypeScript compilation
   npx tsc --noEmit
   # Fix any type errors before building
   ```

2. **Linting errors**:
   ```bash
   npm run lint
   # Fix all linting issues
   ```

3. **Missing dependencies**:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

4. **Static export compatibility**:
   - Ensure no `dynamic` routes are used
   - No API routes in `app/api/`
   - No server-side middleware functionality
   - All images must have `unoptimized: true`

### Local Development Server Issues

**Issue**: `npm run dev` crashes or shows errors

**Solutions**:
1. **Port already in use**:
   ```bash
   # Kill process on port 3000
   lsof -ti:3000 | xargs kill -9
   # Or use different port
   npm run dev -- --port 3001
   ```

2. **Node.js version compatibility**:
   ```bash
   node --version  # Should be 18+
   # Use nvm to switch if needed
   nvm use 18
   ```

## Deployment Issues

### Pipeline Fails

**Issue**: AWS CodePipeline execution fails

**Diagnosis**:
```bash
# Check pipeline status
aws codepipeline list-pipeline-executions \
  --pipeline-name kolf-marketing-pipeline-pipeline \
  --region ap-southeast-1 \
  --max-items 1

# Get detailed execution info
aws codepipeline get-pipeline-execution \
  --pipeline-name kolf-marketing-pipeline-pipeline \
  --pipeline-execution-id <execution-id> \
  --region ap-southeast-1
```

**Common Causes & Solutions**:

1. **Build Phase Failure**:
   ```bash
   # Check CodeBuild logs
   aws codebuild batch-get-builds --ids <build-id> --region ap-southeast-1
   ```
   - Fix linting errors in code
   - Fix TypeScript compilation errors
   - Ensure all dependencies are in package.json

2. **Source Phase Failure**:
   - Check GitHub repository access
   - Verify branch name is correct (should be `main`)
   - Check if repository is private and token is valid

3. **Static Export Errors**:
   ```
   Error: export const dynamic = "force-static" not configured on route "/sitemap.xml"
   ```
   - Remove any dynamic API routes
   - Use static files in `public/` instead of dynamic routes
   - Ensure middleware doesn't use server-side features

### Site Shows JavaScript Errors

**Issue**: Browser console shows `SyntaxError: Unexpected token '<'`

**Cause**: JavaScript bundles are serving HTML instead of JS code (cache mismatch)

**Solution**:
```bash
# 1. Force a clean rebuild
echo "/* Force rebuild $(date) */" >> app/globals.css
git add . && git commit -m "Force rebuild to fix JS bundles" && git push

# 2. Wait for deployment to complete

# 3. Verify JS files serve correctly
curl -s https://kolf.app/_next/static/chunks/webpack-*.js | head -c 100
# Should show JavaScript code, not HTML
```

### Site Not Loading / Blank Page

**Issue**: Site loads but shows blank page or missing header

**Cause**: Usually JavaScript not executing due to bundle issues

**Diagnosis**:
```bash
# Check if main routes return 200
curl -I https://kolf.app/
curl -I https://kolf.app/en/

# Check JavaScript bundle loading
curl -I https://kolf.app/_next/static/chunks/app/layout-*.js
# Should return Content-Type: application/javascript
```

**Solution**: Same as JavaScript errors above - force rebuild

### Deployment Takes Too Long

**Issue**: Pipeline execution takes longer than 10 minutes

**Normal Timeline**:
- Source phase: 30 seconds
- Build phase: 2-4 minutes
- Deploy phase: 1-2 minutes

**If stuck**:
```bash
# Check current pipeline state
aws codepipeline get-pipeline-state \
  --name kolf-marketing-pipeline-pipeline \
  --region ap-southeast-1

# Cancel and restart if needed
aws codepipeline stop-pipeline-execution \
  --pipeline-name kolf-marketing-pipeline-pipeline \
  --pipeline-execution-id <execution-id> \
  --abandon true \
  --region ap-southeast-1

# Start new execution
aws codepipeline start-pipeline-execution \
  --name kolf-marketing-pipeline-pipeline \
  --region ap-southeast-1
```

## Site Functionality Issues

### Language Switching Not Working

**Issue**: Language switcher doesn't change content

**Check**:
1. All translation files exist in `/public/locales/[locale]/common.json`
2. Translation structure is consistent across all languages
3. Components receive and use translations prop correctly

**Verify translations**:
```bash
# Check all translation files exist
ls -la public/locales/*/common.json

# Verify structure consistency
jq 'keys' public/locales/en/common.json
jq 'keys' public/locales/th/common.json  # Should match
```

### Forms Not Submitting

**Issue**: Formspree forms don't submit or track events

**Check**:
1. Formspree endpoint is correct in form action
2. Analytics tracking functions are called
3. Network tab shows successful form submission

**Test form locally**:
```bash
# Check form action URLs in components
grep -r "formspree.io" app/components/
```

### Analytics Not Tracking

**Issue**: Google Analytics events not appearing

**Check**:
1. GA measurement ID is correct: `G-8SFBM8QD9M`
2. Analytics initialized properly
3. Custom events are firing

**Debug analytics**:
```javascript
// In browser console
console.log(window.gtag)  // Should be function
console.log(window.dataLayer)  // Should contain events
```

## Performance Issues

### Slow Site Loading

**Check**:
1. CloudFront cache headers
2. Asset optimization
3. JavaScript bundle sizes

**Verify CDN**:
```bash
# Check cache status
curl -I https://kolf.app/ | grep -i cache
# Should show CloudFront cache hit

# Check asset compression
curl -I https://kolf.app/_next/static/css/*.css | grep -i encoding
```

### Large Bundle Sizes

**Analyze**:
```bash
# Build and check output sizes
npm run build
ls -la out/_next/static/chunks/

# Look for unusually large files (>500KB)
```

## Emergency Recovery

### Complete Site Down

1. **Check CloudFront status**:
   ```bash
   aws cloudfront get-distribution \
     --id E3509NXA3EEV2A \
     --region ap-southeast-1
   ```

2. **Check S3 bucket**:
   ```bash
   aws s3 ls s3://kolf.app-production/
   ```

3. **Manual deployment**:
   ```bash
   cd kolf-marketing
   ./deploy.sh  # Emergency manual deployment
   ```

### Rollback to Previous Version

```bash
# Find previous successful deployment
aws codepipeline list-pipeline-executions \
  --pipeline-name kolf-marketing-pipeline-pipeline \
  --region ap-southeast-1 \
  --max-items 10

# Get commit hash from successful execution
# Reset to that commit
git reset --hard <previous-commit-hash>
git push origin main --force
```

## Getting Help

### Pipeline Logs
```bash
# Get CodeBuild project logs
aws logs describe-log-groups \
  --log-group-name-prefix "/aws/codebuild/kolf-marketing" \
  --region ap-southeast-1

# Get recent log events
aws logs get-log-events \
  --log-group-name "/aws/codebuild/kolf-marketing-pipeline-build" \
  --log-stream-name <stream-name> \
  --region ap-southeast-1
```

### Useful Commands for Diagnosis

```bash
# Check DNS resolution
nslookup kolf.app
dig kolf.app

# Check SSL certificate
openssl s_client -connect kolf.app:443 -servername kolf.app

# Check response times
curl -w "@curl-format.txt" -o /dev/null -s https://kolf.app/
```

### Contact Information

For critical issues that can't be resolved with this guide:
- Repository: https://github.com/AvenenConsulting/www-kolf-app
- AWS Region: ap-southeast-1 (Singapore)
- Primary domain: https://kolf.app