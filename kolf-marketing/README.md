# KOLF Marketing Website

A modern, multilingual marketing website for KOLF - the complete golf course management solution for Asia.

## 🚀 Features

- **Modern Design**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Multilingual Support**: Available in English, Thai, Korean, Japanese, and Chinese
- **Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Static site generation for lightning-fast loading
- **SEO Optimized**: Comprehensive meta tags, structured data, and sitemap
- **Animated**: Smooth animations with Framer Motion
- **AWS Ready**: Configured for deployment on AWS S3 + CloudFront

## 🛠 Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Internationalization**: Complete translations for 5 languages
- **Deployment**: AWS S3 + CloudFront

## 📂 Project Structure

```
kolf-marketing/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── robots.txt         # SEO robots file
│   └── sitemap.xml        # SEO sitemap
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── Features.tsx       # Features showcase
│   ├── Benefits.tsx       # Benefits section
│   ├── Pricing.tsx        # Pricing plans
│   ├── Testimonials.tsx   # Customer testimonials
│   ├── Contact.tsx        # Contact form
│   └── Footer.tsx         # Footer
├── public/               # Static assets
│   ├── locales/          # Translation files
│   │   ├── en/           # English translations
│   │   ├── th/           # Thai translations
│   │   ├── ko/           # Korean translations
│   │   ├── ja/           # Japanese translations
│   │   └── zh/           # Chinese translations
│   └── manifest.json     # PWA manifest
├── aws-deploy.yml        # CloudFormation template
├── deploy.sh             # Deployment script
└── README.md             # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd kolf-marketing
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run export` - Export static files
- `npm run lint` - Run ESLint

## 🌍 Internationalization

The website supports 5 languages with professional translations:

- **English** (en) - Primary language
- **Thai** (th) - ไทย
- **Korean** (ko) - 한국어  
- **Japanese** (ja) - 日本語
- **Chinese** (zh) - 中文

Translation files are located in `public/locales/[locale]/common.json`.

## 🎨 Design System

### Colors
- **Primary**: Green theme (#22c55e) representing golf and growth
- **Secondary**: Complementary colors for accents
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Font**: Inter (primary), Noto Sans Thai (for Thai text)
- **Scale**: Responsive typography with consistent hierarchy

### Components
- All components are responsive and mobile-first
- Consistent spacing using Tailwind's spacing scale
- Hover states and animations for better UX

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px  
- **Desktop**: 1024px+

## ⚡ Performance

- **Static Site Generation**: Pre-built pages for instant loading
- **Image Optimization**: Optimized images with proper sizing
- **Code Splitting**: Automatic code splitting by Next.js
- **Caching**: Optimized caching strategies for CDN

## 🔍 SEO Features

- Comprehensive meta tags
- Open Graph and Twitter Card support
- Structured data markup
- XML sitemap
- Robots.txt
- Semantic HTML structure

## 🚀 AWS Deployment

### Automated Deployment

Use the provided deployment script:

```bash
./deploy.sh
```

### Manual Deployment

1. Build the application:
```bash
npm run build
```

2. Deploy using AWS CLI:
```bash
aws s3 sync ./out/ s3://your-bucket-name --delete
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

### Infrastructure

The `aws-deploy.yml` CloudFormation template includes:
- S3 bucket for static hosting
- CloudFront distribution for global CDN
- SSL certificate via ACM
- Route 53 DNS configuration
- Origin Access Identity for security

## 🎯 Key Features

### Hero Section
- Compelling value proposition
- Interactive demo video
- Key statistics
- Clear call-to-action

### Features Section  
- Comprehensive feature showcase
- Categorized by business function
- Visual icons and descriptions
- Benefits-focused copy

### Benefits Section
- ROI calculator
- Proven results and metrics
- Competitive advantages
- Customer success stories

### Pricing Section
- Three-tier pricing structure
- Feature comparison table
- FAQ section
- Clear value proposition

### Testimonials
- Real customer quotes
- Detailed case studies
- Quantified results
- Social proof elements

### Contact Section
- Multi-channel contact options
- Interactive contact form
- Office locations across Asia
- Demo scheduling integration

## 🔧 Customization

### Adding New Languages

1. Create translation file: `public/locales/[locale]/common.json`
2. Add locale to language selector in `Header.tsx`
3. Update font imports in `globals.css` if needed

### Modifying Content

- **Text Content**: Update translation files in `public/locales/`
- **Images**: Add to `public/images/` directory
- **Styling**: Modify Tailwind classes or add custom CSS

### Adding New Sections

1. Create component in `components/`
2. Import and add to `app/page.tsx`
3. Add translations to all locale files

## 📊 Analytics

The site is ready for:
- Google Analytics 4
- Google Tag Manager
- Facebook Pixel
- Custom conversion tracking

Add your tracking IDs to the environment variables.

## 🛡 Security

- Content Security Policy headers
- HTTPS enforcement
- Secure hosting on AWS
- No sensitive data exposure
- GDPR compliance ready

## 📈 Performance Metrics

Expected Core Web Vitals:
- **LCP**: < 1.5s (Largest Contentful Paint)
- **FID**: < 100ms (First Input Delay)  
- **CLS**: < 0.1 (Cumulative Layout Shift)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is proprietary to Avenen Consulting.

## 📞 Support

For technical support or questions:
- Email: dev@avenen.com
- Documentation: See inline code comments
- Issues: Use GitHub issues for bug reports

---

Built with ❤️ by the Avenen Consulting team for the golf industry.