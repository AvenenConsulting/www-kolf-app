# Deployment Guide for KOLF Marketing Website

This guide explains how the KOLF marketing website is deployed to production.

## Overview

The deployment uses AWS CodePipeline for continuous deployment. When code is pushed to the main branch on GitHub, it automatically triggers a pipeline that builds and deploys the site to AWS S3/CloudFront.

## Architecture

```
GitHub (main branch) → AWS CodePipeline → AWS CodeBuild → S3 → CloudFront → kolf.app
```

## Key Components

### 1. AWS CodePipeline
- **Pipeline Name**: `kolf-marketing-pipeline-pipeline`
- **Region**: `ap-southeast-1` (Singapore)
- **Trigger**: Polls for changes on GitHub main branch
- **Stages**: Source → Build

### 2. AWS CodeBuild
- **Project Name**: `kolf-marketing-pipeline-build`
- **Build Spec**: `buildspec.yml` in repo root
- **Environment Variables**: Created during build (see buildspec.yml)

### 3. S3 Bucket
- **Bucket Name**: `kolf.app-production`
- **Region**: `ap-southeast-1`
- **Purpose**: Hosts the static website files

### 4. CloudFront Distribution
- **Distribution ID**: `E3509NXA3EEV2A`
- **Domain**: kolf.app
- **SSL**: Managed by AWS Certificate Manager

## Deployment Process

### Automatic Deployment (Recommended)

1. Push changes to GitHub main branch:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. CodePipeline automatically detects the change and starts deployment

3. Monitor pipeline status:
   ```bash
   aws codepipeline list-pipeline-executions \
     --pipeline-name kolf-marketing-pipeline-pipeline \
     --region ap-southeast-1 \
     --max-items 1
   ```

### Manual Pipeline Trigger

If needed, manually trigger the pipeline:
```bash
aws codepipeline start-pipeline-execution \
  --name kolf-marketing-pipeline-pipeline \
  --region ap-southeast-1
```

### Manual Deployment (Alternative)

For direct deployment without pipeline:
```bash
./deploy.sh
```

This script:
1. Builds the Next.js application
2. Syncs files to S3
3. Creates CloudFront invalidation

## Environment Variables

The build process requires environment variables for features like Google Analytics. These are set in `buildspec.yml`:

```yaml
pre_build:
  commands:
    - echo "Creating .env.local file..."
    - echo "NEXT_PUBLIC_GA_MEASUREMENT_ID=G-8SFBM8QD9M" > .env.local
```

To add new environment variables:
1. Update `buildspec.yml` to create them during build
2. Commit and push changes
3. The pipeline will use the new variables on next deployment

## Build Configuration

### buildspec.yml Structure
```yaml
version: 0.2

phases:
  pre_build:
    commands:
      - cd kolf-marketing
      - Create .env.local with environment variables
      - npm ci --prefer-offline --no-audit
      
  build:
    commands:
      - npm run lint || true
      - npm run build
      
  post_build:
    commands:
      - Verify build output
      - aws s3 sync out/ s3://kolf.app-production --delete
      - aws cloudfront create-invalidation --distribution-id E3509NXA3EEV2A --paths "/*"
```

### Next.js Configuration
- **Output**: Static export (`output: 'export'`)
- **Trailing Slash**: Enabled for proper static hosting
- **Images**: Unoptimized due to static export

## Monitoring Deployment

### Check Pipeline Status
```bash
# Get pipeline state
aws codepipeline get-pipeline-state \
  --name kolf-marketing-pipeline-pipeline \
  --region ap-southeast-1

# Get specific execution details
aws codepipeline get-pipeline-execution \
  --pipeline-name kolf-marketing-pipeline-pipeline \
  --pipeline-execution-id <execution-id> \
  --region ap-southeast-1
```

### Check Build Logs
```bash
# List recent builds
aws codebuild list-builds-for-project \
  --project-name kolf-marketing-pipeline-build \
  --region ap-southeast-1 \
  --max-items 5

# Get build details
aws codebuild batch-get-builds \
  --ids <build-id> \
  --region ap-southeast-1
```

### Verify Deployment
```bash
# Check CloudFront invalidation status
aws cloudfront list-invalidations \
  --distribution-id E3509NXA3EEV2A \
  --region ap-southeast-1 \
  --max-items 3

# Test live site
curl -I https://kolf.app
```

## Troubleshooting

### Pipeline Not Triggering
1. Verify GitHub webhook is configured
2. Check CodePipeline source settings
3. Manually trigger pipeline

### Build Failures
1. Check CodeBuild logs for errors
2. Common issues:
   - Missing dependencies: Update package.json
   - Lint errors: Fix or add `|| true` to continue
   - Build output missing: Verify Next.js export configuration

### Environment Variables Not Working
1. Verify variables are created in buildspec.yml
2. Check they use `NEXT_PUBLIC_` prefix for client-side access
3. Ensure .env.local is created before build command

### CloudFront Not Updating
1. Check if invalidation was created
2. Wait for invalidation to complete (usually 5-10 minutes)
3. Clear browser cache and retry

## Important Notes

1. **AWS Region**: Always use `ap-southeast-1` for all AWS commands
2. **Working Directory**: The repo has `/kolf-marketing` subdirectory - buildspec.yml handles the cd
3. **Static Export**: This is a static site - no server-side features available
4. **Cache Headers**: HTML files have no-cache, assets cached for 1 year

## Infrastructure

The AWS infrastructure is managed by CloudFormation:
- Template: `aws-deploy.yml`
- Stack includes: S3 bucket, CloudFront distribution, Route53 records

To update infrastructure:
```bash
aws cloudformation update-stack \
  --stack-name kolf-marketing \
  --template-body file://aws-deploy.yml \
  --region ap-southeast-1
```

## Security Notes

1. Never commit sensitive data to the repository
2. Use environment variables for API keys and secrets
3. S3 bucket is private - only accessible through CloudFront
4. SSL certificate is auto-renewed by AWS

## Contact

For deployment issues or questions:
- Check CloudBuild logs first
- Review this documentation
- Contact the DevOps team if needed