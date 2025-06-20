#!/bin/bash

# KOLF Marketing Website Deployment Script
set -e

echo "🚀 Starting KOLF Marketing Website Deployment..."

# Configuration
BUCKET_NAME="kolf.app-production"
CLOUDFRONT_DISTRIBUTION_ID="E3509NXA3EEV2A"
AWS_REGION="ap-southeast-1"

# Build the application
echo "📦 Building Next.js application..."
npm run build

# Upload to S3
echo "📤 Uploading to S3..."
aws s3 sync ./out/ s3://$BUCKET_NAME --delete --cache-control "public, max-age=31536000, immutable" --exclude "*.html"
aws s3 sync ./out/ s3://$BUCKET_NAME --delete --cache-control "public, max-age=0, must-revalidate" --include "*.html"

# Invalidate CloudFront cache
if [ ! -z "$CLOUDFRONT_DISTRIBUTION_ID" ]; then
    echo "🔄 Invalidating CloudFront cache..."
    aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --paths "/*"
fi

echo "✅ Deployment completed successfully!"
echo "🌐 Website URL: https://kolf.app"