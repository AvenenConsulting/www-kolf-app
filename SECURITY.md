# Security Policy

## Supported Versions

We actively support the following versions of the KOLF marketing website:

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |

## Reporting a Vulnerability

The Avenen Consulting team takes security bugs seriously. We appreciate your efforts to responsibly disclose your findings, and will make every effort to acknowledge your contributions.

### How to Report a Security Vulnerability

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please report them via email to: **security@avenenconsulting.com**

You should receive a response within 48 hours. If for some reason you do not, please follow up via email to ensure we received your original message.

Please include the following information in your report:

* Type of issue (e.g. buffer overflow, SQL injection, cross-site scripting, etc.)
* Full paths of source file(s) related to the manifestation of the issue
* The location of the affected source code (tag/branch/commit or direct URL)
* Any special configuration required to reproduce the issue
* Step-by-step instructions to reproduce the issue
* Proof-of-concept or exploit code (if possible)
* Impact of the issue, including how an attacker might exploit the issue

### What to expect

* We will acknowledge receipt of your vulnerability report within 48 hours
* We will provide an estimated timeline for a fix within 7 days
* We will notify you when the vulnerability is fixed
* We will publicly acknowledge your responsible disclosure if you wish (unless you prefer to remain anonymous)

## Security Best Practices

### For Developers

* Keep dependencies up to date
* Use environment variables for sensitive configuration
* Never commit secrets, API keys, or passwords to the repository
* Sanitize all user inputs
* Use HTTPS in production
* Follow the principle of least privilege

### For Deployment

* Regularly update the hosting environment
* Use proper firewall rules
* Monitor logs for suspicious activity
* Implement proper backup and recovery procedures
* Use secure headers and CSP policies

## Scope

This security policy applies to:

* The main website codebase
* Deployment scripts and configurations
* Third-party dependencies and integrations

## Bug Bounty Program

Currently, we do not have a formal bug bounty program. However, we greatly appreciate security researchers who responsibly disclose vulnerabilities and will acknowledge their contributions in our security advisories.

## Contact

For any questions about this security policy, please contact:
* Email: security@avenenconsulting.com
* For general inquiries: info@avenenconsulting.com