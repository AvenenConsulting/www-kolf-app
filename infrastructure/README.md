# AWS CodePipeline Deployment Infrastructure

This directory contains the infrastructure code for deploying the KOLF marketing website using AWS CodePipeline.

## Overview

The deployment pipeline automatically builds and deploys the website to AWS S3 and CloudFront whenever changes are pushed to the main branch.

## Architecture

- **Source**: GitHub repository (webhook triggered)
- **Build**: AWS CodeBuild (Node.js environment)
- **Deploy**: Direct to S3 with CloudFront invalidation
- **Artifacts**: Stored in dedicated S3 bucket

## Prerequisites

1. **AWS CLI** configured with appropriate credentials
2. **GitHub Personal Access Token** with the following permissions:
   - `repo` - Full control of private repositories
   - `admin:repo_hook` - Full control of repository hooks

## Setup Instructions

### 1. Create GitHub Token

1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Generate new token (classic) with `repo` and `admin:repo_hook` permissions
3. Copy the token (you won't be able to see it again)

### 2. Deploy the Pipeline

```bash
# Set your GitHub token
export GITHUB_TOKEN=your-github-token-here

# Deploy the pipeline (from repository root)
./infrastructure/deploy-pipeline.sh
```

### 3. Verify Deployment

After deployment, the script will output:
- Pipeline name
- AWS Console URL to view the pipeline
- Confirmation that automatic triggering is enabled

## Pipeline Configuration

### Environment Variables

- `GITHUB_TOKEN` (required) - Your GitHub personal access token
- `AWS_REGION` (optional) - AWS region (default: ap-southeast-1)
- `GITHUB_OWNER` (optional) - GitHub username (default: antti)
- `GITHUB_REPO` (optional) - Repository name (default: www-kolf-app)
- `GITHUB_BRANCH` (optional) - Branch to track (default: main)

### Build Process

The pipeline executes the following steps:

1. **Install Dependencies**: `npm ci` for faster, reproducible builds
2. **Lint Code**: Run ESLint (non-blocking)
3. **Build Application**: Next.js static export
4. **Deploy to S3**: Sync build output to production bucket
5. **Invalidate CloudFront**: Clear CDN cache

### Build Specification

The build process is defined in `/kolf-marketing/buildspec.yml`:
- Uses Node.js on Amazon Linux 2
- Caches dependencies for faster builds
- Produces static files in the `out/` directory

## Manual Deployment

If you need to trigger a deployment manually:

1. Go to AWS CodePipeline console
2. Find the `kolf-marketing-pipeline`
3. Click "Release change"

## Monitoring

### Build Logs
- Available in AWS CodeBuild console
- Automatically sent to CloudWatch Logs

### Pipeline Status
- View in AWS CodePipeline console
- Notifications can be configured via SNS

## Troubleshooting

### Pipeline Fails at Source Stage
- Verify GitHub token has correct permissions
- Check if token has expired
- Ensure repository and branch names are correct

### Build Failures
- Check CodeBuild logs for detailed error messages
- Common issues:
  - Missing dependencies
  - Build errors in Next.js
  - Insufficient IAM permissions

### Deployment Failures
- Verify S3 bucket exists and is accessible
- Check CloudFront distribution ID is correct
- Ensure CodeBuild role has necessary permissions

## Cleanup

To remove the pipeline infrastructure:

```bash
aws cloudformation delete-stack --stack-name kolf-marketing-pipeline
```

Note: This will NOT delete:
- The website S3 bucket
- The CloudFront distribution
- Any deployed website content

## Security Notes

- GitHub token is stored encrypted in AWS Systems Manager
- All S3 buckets have public access blocked by default
- IAM roles follow principle of least privilege
- Build artifacts are automatically cleaned up after 30 days

## Cost Considerations

- **CodePipeline**: $1 per active pipeline per month
- **CodeBuild**: $0.005 per build minute (Linux small instance)
- **S3 Storage**: Minimal for build artifacts
- **CloudWatch Logs**: Minimal for build logs

Estimated monthly cost: ~$2-5 for typical usage