# TravelSquad - IT Company Website

A modern, high-performance website for TravelSquad, an IT company offering software development and SaaS solutions. Built with Next.js, React, and Tailwind CSS.

## Features

- ✅ **Modern Design**: Professional, startup-style UI with gradients and animations
- ✅ **Mobile Responsive**: Fully optimized for all devices
- ✅ **SEO Optimized**: Including metadata, Open Graph tags, and XML sitemap
- ✅ **Performance**: Optimized images, code splitting, lazy loading
- ✅ **Lead Generation**: Contact forms, newsletter signup, scheduling integration
- ✅ **Product Showcases**: Detailed product pages with pricing and features
- ✅ **Blog**: Content-rich blog with SEO optimization
- ✅ **Fast Load Times**: Core Web Vitals optimized
- ✅ **API Integration**: Contact form API endpoints

## Pages

- **Home** - Hero section, services overview, products, testimonials, case studies
- **About** - Company story, team, expertise, technology stack
- **Services** - 6 main services with detailed descriptions and benefits
- **Products** - Travel CRM, Social CRM, Power Dialer SaaS products
- **Case Studies** - Client success stories and project results
- **Blog** - Industry insights and best practices
- **Contact** - Contact form, contact info, FAQ, scheduling

## Tech Stack

### Frontend
- **Framework**: Next.js 14
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Animations**: Framer Motion
- **Notifications**: React Hot Toast

### Backend
- **Runtime**: Node.js
- **API**: Next.js API Routes
- **Database**: PostgreSQL or MySQL (optional)

### Deployment
- **Hosting**: Vercel or AWS
- **CDN**: Vercel Edge Network or AWS CloudFront

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/travelsquad.git
cd travelsquad
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local` and add:
- Email service credentials (SendGrid, Mailgun, etc.)
- Google Analytics ID
- Calendly link
- Database URL (if using)
- API configuration

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### 5. Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
travelsquad/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home page
│   │   ├── about/page.tsx        # About page
│   │   ├── services/page.tsx     # Services page
│   │   ├── products/page.tsx     # Products page
│   │   ├── case-studies/page.tsx # Case studies
│   │   ├── blog/page.tsx         # Blog listing
│   │   ├── contact/page.tsx      # Contact page
│   │   ├── api/contact/route.ts  # Contact form API
│   │   ├── layout.tsx            # Root layout
│   │   └── sitemap.ts            # XML sitemap
│   ├── components/
│   │   ├── Header.tsx            # Navigation header
│   │   ├── Footer.tsx            # Footer
│   │   ├── Hero.tsx              # Hero section
│   │   ├── CTASection.tsx        # Call-to-action
│   │   ├── ServiceCard.tsx       # Service card component
│   │   ├── ProductCard.tsx       # Product card component
│   │   ├── Testimonial.tsx       # Testimonial card
│   │   ├── ContactForm.tsx       # Contact form
│   │   ├── PricingCard.tsx       # Pricing table
│   │   └── Stats.tsx             # Statistics section
│   └── globals.css               # Global styles & utilities
├── public/
│   ├── robots.txt                # SEO robots
│   └── favicon.ico               # Site favicon
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── .env.example                  # Environment template
```

## Key Features

### 1. Contact Form
- Form validation with React Hook Form
- Toast notifications for user feedback
- API endpoint: `/api/contact`
- Email notifications (configure email service in `.env.local`)

### 2. SEO Optimization
- Meta tags and Open Graph tags
- XML sitemap at `/sitemap.xml`
- robots.txt configuration
- Schema markup ready
- Optimized URLs and internal linking

### 3. Performance
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- CSS optimization with Tailwind
- Minified production builds
- Fast page load times

### 4. Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interactive elements

## Customization

### Update Company Information
Edit the following files:
- `/src/app/layout.tsx` - Metadata and company info
- `/src/components/Header.tsx` - Logo and navigation
- `/src/components/Footer.tsx` - Footer links and contact info
- `/src/app/page.tsx` - Home page content
- `/src/app/about/page.tsx` - About page content

### Add Blog Posts
Create new files in the blog directory with the pattern: `/src/app/blog/[slug]/page.tsx`

### Update Services
Modify the services array in `/src/app/services/page.tsx`

### Update Products
Modify the products array in `/src/app/products/page.tsx`

### Change Colors/Branding
Edit `/tailwind.config.js`:
```javascript
colors: {
  primary: '#0066FF',      // Main brand color
  secondary: '#00D4FF',    // Secondary accent
  accent: '#FF6B6B',       // Accent color
}
```

## Email Setup

To enable contact form emails, configure your email service:

### Option 1: SendGrid
```javascript
// Add to your email sending function
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
await sgMail.send(emailData)
```

### Option 2: Mailgun
```javascript
import mailgun from 'mailgun.js'

const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY
})
```

### Option 3: AWS SES
```javascript
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses'

// Configure and send
```

## Deployment

### Deploy to Vercel (Recommended)

1. **Connect repository**
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Set environment variables in Vercel dashboard**

3. **Deploy**
   ```bash
   vercel --prod
   ```

### Deploy to AWS

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to AWS S3** (static) or **AWS Amplify** (full-stack)

3. **Set up CloudFront CDN** for edge caching

## Environment Variables

```env
# Email Service
CONTACT_EMAIL=info@travelsquad.com
SENDGRID_API_KEY=your_api_key

# Analytics
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX

# External Services
CALENDLY_LINK=https://calendly.com/your-link

# Database (optional)
DATABASE_URL=postgresql://user:password@localhost:5432/travelsquad

# API
API_URL=https://travelsquad.com
NODE_ENV=production
```

## Performance Metrics

Target metrics for Core Web Vitals:
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

## SEO Checklist

- ✅ Meta titles and descriptions
- ✅ Open Graph tags
- ✅ XML sitemap
- ✅ robots.txt
- ✅ Mobile responsive
- ✅ Fast page speed
- ✅ Internal linking
- ✅ Structured data ready
- ✅ 404 error handling
- ✅ Canonical URLs

## Monitoring & Analytics

1. **Google Analytics**: Add your GA ID to `.env.local`
2. **Vercel Analytics**: Automatically included on Vercel
3. **Performance Monitoring**: Use Vercel's Web Vitals
4. **Error Tracking**: Add Sentry or similar service

## Maintenance

### Regular Updates
```bash
# Check for updates
npm outdated

# Update dependencies
npm update
npm update --latest
```

### Backup Content
- Regularly backup blog posts and content
- Version control all changes in git

### Monitor Performance
- Check Web Vitals monthly
- Review SEO rankings
- Monitor server logs
- Track user analytics

## License

This project is proprietary to TravelSquad. All rights reserved.

## Support

For questions or support:
- Email: info@travelsquad.com
- Phone: +1 (234) 567-8900
- Website: https://travelsquad.com

## Contributing

Internal team contributions only. Please follow:
1. Create a feature branch
2. Commit changes with clear messages
3. Submit pull request for review
4. Merge after approval

---

**Built with ❤️ by TravelSquad Team**
