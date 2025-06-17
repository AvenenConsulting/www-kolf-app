#!/bin/bash

# Deploy CodePipeline stack for KOLF Marketing Website
# This script creates the AWS CodePipeline infrastructure

set -e

echo "🚀 Deploying CodePipeline infrastructure for KOLF Marketing Website"

# Check for required parameters
if [ -z "$GITHUB_TOKEN" ]; then
    echo "❌ Error: GITHUB_TOKEN environment variable is required"
    echo "Please set your GitHub personal access token:"
    echo "export GITHUB_TOKEN=your-github-token"
    exit 1
fi

# Stack configuration
STACK_NAME="kolf-marketing-pipeline"
TEMPLATE_FILE="infrastructure/codepipeline.yaml"
REGION="${AWS_REGION:-ap-southeast-1}"

# Optional: Override default parameters
GITHUB_OWNER="${GITHUB_OWNER:-antti}"
GITHUB_REPO="${GITHUB_REPO:-www-kolf-app}"
GITHUB_BRANCH="${GITHUB_BRANCH:-main}"

echo "📋 Configuration:"
echo "  Stack Name: $STACK_NAME"
echo "  Region: $REGION"
echo "  GitHub: $GITHUB_OWNER/$GITHUB_REPO ($GITHUB_BRANCH)"

# Deploy the stack
echo "🔨 Creating/updating CloudFormation stack..."
aws cloudformation deploy \
    --template-file "$TEMPLATE_FILE" \
    --stack-name "$STACK_NAME" \
    --parameter-overrides \
        GitHubOwner="$GITHUB_OWNER" \
        GitHubRepo="$GITHUB_REPO" \
        GitHubBranch="$GITHUB_BRANCH" \
        GitHubToken="$GITHUB_TOKEN" \
    --capabilities CAPABILITY_IAM \
    --region "$REGION" \
    --no-fail-on-empty-changeset

# Get stack outputs
echo "📊 Getting stack outputs..."
PIPELINE_NAME=$(aws cloudformation describe-stacks \
    --stack-name "$STACK_NAME" \
    --region "$REGION" \
    --query 'Stacks[0].Outputs[?OutputKey==`PipelineName`].OutputValue' \
    --output text)

PIPELINE_URL=$(aws cloudformation describe-stacks \
    --stack-name "$STACK_NAME" \
    --region "$REGION" \
    --query 'Stacks[0].Outputs[?OutputKey==`PipelineURL`].OutputValue' \
    --output text)

echo "✅ CodePipeline deployment complete!"
echo ""
echo "📌 Pipeline Details:"
echo "  Name: $PIPELINE_NAME"
echo "  URL: $PIPELINE_URL"
echo ""
echo "🔄 The pipeline will automatically trigger on commits to the $GITHUB_BRANCH branch"
echo ""
echo "📝 Note: Make sure your GitHub token has the following permissions:"
echo "  - repo (Full control of private repositories)"
echo "  - admin:repo_hook (Full control of repository hooks)"