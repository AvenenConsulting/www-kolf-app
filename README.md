# KOLF Marketing Website

A modern, multilingual marketing website for KOLF built with Next.js, TypeScript, and Tailwind CSS. The site supports 5 languages (English, Thai, Korean, Japanese, and Chinese) and is optimized for static hosting on AWS S3/CloudFront.

## 🌟 Features

- **Multilingual Support**: Full i18n support for en, th, ko, ja, zh locales
- **Static Export**: Optimized for CDN hosting with Next.js static export
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Modern Stack**: Next.js 14, TypeScript, Tailwind CSS
- **SEO Optimized**: Includes sitemap, robots.txt, and proper meta tags
- **Performance**: Lazy loading, code splitting, and optimized assets
- **AWS Ready**: Includes CloudFormation template and deployment scripts

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ (use `.nvmrc` for version management)
- npm or yarn
- AWS CLI (for deployment)

### Installation

```bash
# Clone the repository
git clone https://github.com/AvenenConsulting/www-kolf-app.git
cd www-kolf-app/kolf-marketing

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see the site.

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production (static export)
npm run start        # Start production server (for testing)
npm run lint         # Run ESLint
npm run export       # Build and export static files
```

## 📁 Project Structure

```
kolf-marketing/
├── app/                    # Next.js app directory
│   ├── [locale]/          # Dynamic locale routing
│   │   ├── layout.tsx     # Locale-specific layout
│   │   └── page.tsx       # Home page
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── Features.tsx       # Features section
│   └── ...                # Other components
├── context/               # React context providers
│   └── LanguageContext.tsx
├── lib/                   # Utility functions
│   ├── i18n.ts           # i18n configuration
│   └── translations.ts    # Translation helpers
├── public/                # Static assets
│   └── locales/          # Translation JSON files
├── out/                   # Static export output
└── ...                    # Config files
```

## 🌐 Internationalization

The site supports 5 languages with automatic locale detection and routing:

- `/en` - English (default)
- `/th` - Thai
- `/ko` - Korean
- `/ja` - Japanese
- `/zh` - Chinese

Translation files are located in `public/locales/[locale]/common.json`.

### Adding Translations

1. Edit the JSON files in `public/locales/[locale]/`
2. Use the `useTranslation` hook in components:

```typescript
import { useTranslation } from 'next-i18next';

function MyComponent() {
  const { t } = useTranslation('common');
  return <h1>{t('welcome')}</h1>;
}
```

## 🚀 Deployment

### AWS S3 + CloudFront

1. **Build the static export:**
   ```bash
   npm run build
   ```

2. **Deploy using the provided script:**
   ```bash
   ./deploy.sh
   ```

   This script will:
   - Upload files to S3
   - Invalidate CloudFront cache
   - Set proper cache headers

### Manual AWS Setup

1. Create an S3 bucket with static website hosting enabled
2. Create a CloudFront distribution pointing to the S3 bucket
3. Update the bucket name in `deploy.sh`
4. Run the deployment script

### Docker Deployment

```bash
# Build Docker image
docker build -t kolf-website .

# Run with docker-compose
docker-compose up -d
```

The site will be available at `http://localhost:80`.

## 🛠️ Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
# Example environment variables
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_GA_ID=UA-XXXXXXXXX-X
```

### Next.js Configuration

Edit `next.config.js` to modify:
- Locale settings
- Image optimization
- Build settings
- Redirects and rewrites

## 📱 Component Architecture

The site uses a component-based architecture with two variants:

- **Full Components**: Feature-rich with animations (e.g., `Hero.tsx`)
- **Simple Components**: Lightweight alternatives (e.g., `HeroSimple.tsx`)

This allows for performance optimization on different pages or devices.

## 🧪 Testing

```bash
# Run linting
npm run lint

# Type checking
npm run type-check

# Build test
npm run build
```

## 🤝 Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔐 Security

For security concerns, please read [SECURITY.md](SECURITY.md) and report issues responsibly.

## 📞 Support

- Documentation: [CLAUDE.md](CLAUDE.md) - AI assistant instructions
- Issues: [GitHub Issues](https://github.com/AvenenConsulting/www-kolf-app/issues)
- Contact: [your-email@example.com]

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Lucide](https://lucide.dev/)
- Internationalization with [next-i18next](https://github.com/i18next/next-i18next)