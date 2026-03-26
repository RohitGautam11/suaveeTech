# suaveeTech - Deployment Guide

Complete guide for deploying the suaveeTech website to production environments.

## Table of Contents

1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [Environment Setup](#environment-setup)
3. [Vercel Deployment](#vercel-deployment-recommended)
4. [AWS Deployment](#aws-deployment)
5. [Performance Optimization](#performance-optimization)
6. [Monitoring & Maintenance](#monitoring--maintenance)
7. [Troubleshooting](#troubleshooting)


---

## Pre-Deployment Checklist

Before deploying, ensure the following are completed:

- [ ] All `.env.local` variables are configured
- [ ] Database migrations are run (if applicable)
- [ ] Contact form email service is configured
- [ ] SSL certificate is obtained (auto-handled by Vercel)
- [ ] Domain name is registered and DNS configured
- [ ] Google Analytics setup is complete
- [ ] Google Search Console verification added
- [ ] Calendly integration link is set
- [ ] All content pages are reviewed
- [ ] Contact information is accurate
- [ ] Images are optimized
- [ ] Lighthouse score checked locally
- [ ] Mobile responsiveness verified
- [ ] All forms tested

## Environment Setup

### Local Development

```bash
# Clone repository
git clone https://github.com/yourusername/suaveeTech.git
cd suaveeTech

# Install dependencies
npm install

# Copy environment template
cp .env.example .env.local

# Configure environment variables
# Edit .env.local with your settings
```

### Production Environment Variables

Create a `.env.local` file with the following variables:

```env
# Email Configuration (Choose one service)
CONTACT_EMAIL=info@suaveeTech.com

# SendGrid
SENDGRID_API_KEY=SG.your_api_key_here

# OR Mailgun
MAILGUN_API_KEY=key-your_api_key_here
MAILGUN_DOMAIN=mail.suaveeTech.com

# Analytics
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX

# External Services
CALENDLY_LINK=https://calendly.com/your-profile

# Database (if using)
DATABASE_URL=postgresql://user:password@host:5432/suaveeTech_prod

# API Configuration
API_URL=https://suaveeTech.com
NODE_ENV=production

# Payment (if implementing)
STRIPE_PUBLIC_KEY=pk_live_xxxxx
STRIPE_SECRET_KEY=sk_live_xxxxx
```

---

## Vercel Deployment (Recommended)

Vercel is the recommended platform for Next.js applications. It offers seamless integration, automatic optimizations, and global CDN.

### Step 1: Prepare Repository

```bash
# Ensure all changes are committed
git add .
git commit -m "Prepare for deployment"
git push origin main
```

### Step 2: Connect to Vercel

#### Option A: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
vercel
```

#### Option B: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign in or create an account
3. Click "Add New..." → "Project"
4. Select your GitHub repository
5. Configure project settings
6. Click "Deploy"

### Step 3: Configure Environment Variables

1. Go to your project on Vercel dashboard
2. Navigate to Settings → Environment Variables
3. Add all environment variables from `.env.example`
4. Make sure variables are set for Production environment

### Step 4: Configure Domain

1. Go to Settings → Domains
2. Add your custom domain
3. Update DNS records as shown by Vercel:
   - For `.com` domains: Add CNAME record
   - For root domain: Use A record
4. Wait for DNS propagation (may take 24-48 hours)

### Step 5: Deploy

```bash
# Trigger a new deployment
vercel --prod
```

Or redeploy from the Vercel dashboard by pushing to main branch.

### Step 6: Verify Deployment

```bash
# Test the deployment
curl https://suaveeTech.com

# Check Core Web Vitals
# Visit https://suaveeTech.vercel.app/_analytics or use PageSpeed Insights
```

---

## AWS Deployment

### Option 1: AWS Amplify (Recommended for Beginners)

AWS Amplify provides a simple way to deploy Next.js applications with automatic builds and deployments.

#### Step 1: Build Project

```bash
npm run build
```

#### Step 2: Create AWS Amplify App

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. Click "Create app"
3. Connect your GitHub repository
4. Authorize AWS to access your repository
5. Select the repository and branch

#### Step 3: Configure Build Settings

```yaml
version: 1
applications:
  - appRoot: .
    env:
      variables:
        NEXT_PUBLIC_ANALYTICS_ID: $GOOGLE_ANALYTICS_ID
    frontend:
      phases:
        preBuild:
          commands:
            - npm ci
        build:
          commands:
            - npm run build
      artifacts:
        baseDirectory: .next
        files:
          - '**/*'
      cache:
        paths:
          - 'node_modules/**/*'
```

#### Step 4: Set Environment Variables

1. Go to Environment variables in Amplify console
2. Add all environment variables
3. Select "Plaintext" or "Secure String" as appropriate

#### Step 5: Deploy

1. Click "Create app"
2. Amplify will build and deploy automatically
3. Your app will be available at a provided AWS URL

#### Step 6: Connect Custom Domain

1. Go to Domain management
2. Add your custom domain
3. Create DNS records in your domain registrar
4. Wait for verification

### Option 2: AWS EC2 (More Control)

For more advanced deployments with full server control:

#### Step 1: Launch EC2 Instance

```bash
# Install Node.js
curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 (Process Manager)
sudo npm install -g pm2

# Clone repository
git clone https://github.com/yourusername/suaveeTech.git
cd suaveeTech
```

#### Step 2: Install Dependencies & Build

```bash
npm install
npm run build
```

#### Step 3: Start Application with PM2

```bash
# Create PM2 configuration file
cat > ecosystem.config.js << EOF
module.exports = {
  apps: [{
    name: 'suaveeTech',
    script: './node_modules/.bin/next',
    args: 'start',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
EOF

# Start application
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

#### Step 4: Setup Nginx as Reverse Proxy

```bash
# Install Nginx
sudo apt-get install nginx

# Create Nginx configuration
sudo nano /etc/nginx/sites-available/suaveeTech

# Add configuration:
server {
    listen 80;
    server_name suaveeTech.com www.suaveeTech.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

# Enable site
sudo ln -s /etc/nginx/sites-available/suaveeTech /etc/nginx/sites-enabled/

# Test configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

#### Step 5: Setup SSL with Certbot

```bash
# Install Certbot
sudo apt-get install certbot python3-certbot-nginx

# Generate SSL certificate
sudo certbot --nginx -d suaveeTech.com -d www.suaveeTech.com

# Auto-renewal will be configured automatically
```

---

## Performance Optimization

### Image Optimization

```bash
# Use Next.js Image component (already implemented)
# Verify images are using Next/Image in components
grep -r 'next/image' src/

# Optimize images
npm install -g imagemin-cli
imagemin public/**/*.jpg --out-dir=public
```

### Code Splitting

Next.js handles code splitting automatically. Verify with:

```bash
npm run build

# Check .next output for chunk sizes
ls -lh .next/static/chunks/
```

### Database Optimization (if using)

```sql
-- Add indexes for frequently queried columns
CREATE INDEX idx_contact_email ON contacts(email);
CREATE INDEX idx_blog_slug ON blog_posts(slug);
CREATE INDEX idx_newsletter_email ON newsletter_subscribers(email);

-- Vacuum database
VACUUM ANALYZE;
```

### CDN Configuration

For Vercel (automatic):
- Global CDN distributed across 90+ regions
- Automatic edge caching
- Geo-routing optimization

For AWS:
```bash
# Use CloudFront for CDN
# Set up origin as Amplify/ALB endpoint
# Cache policy: Managed-CachingOptimized
# Origin request policy: AllViewer
```

### Caching Headers

Already configured in `next.config.js`:

```javascript
headers: async () => {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=3600, s-maxage=3600'
        }
      ]
    }
  ]
}
```

---

## Monitoring & Maintenance

### Setup Monitoring

#### Google Analytics

1. Get tracking ID from Google Analytics
2. Add to `.env.prod`:
   ```
   GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
   ```

#### Vercel Analytics

Automatic on Vercel. View in:
- Dashboard → Analytics
- Insights → Web Vitals

#### Real-time Monitoring

```bash
# Setup error tracking with Sentry (optional)
npm install @sentry/next

# Configure in next.config.js
// See Sentry Next.js documentation
```

### Regular Maintenance

```bash
# Weekly: Update dependencies
npm update

# Monthly: Full dependency audit
npm audit
npm audit fix

# Quarterly: Major version updates
npm outdated
npm install npm@latest -g
```

### Backup Strategy

```bash
# Database backups (if using RDS)
aws rds create-db-snapshot \
  --db-instance-identifier suaveeTech-db \
  --db-snapshot-identifier suaveeTech-backup-$(date +%Y%m%d)

# Automated backups (AWS RDS): Enable in console
# Retention: 30 days recommended
```

### Log Monitoring

```bash
# Vercel logs
vercel logs

# AWS EC2 logs
tail -f /var/log/nginx/access.log
tail -f /var/log/nginx/error.log

# Application logs
pm2 logs suaveeTech
```

---

## SEO Post-Deployment

### Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property for your domain
3. Verify domain ownership
4. Submit XML sitemap: `https://suaveeTech.com/sitemap.xml`
5. Submit robots.txt
6. Monitor search performance

### Google Analytics Setup

1. Create Google Analytics account
2. Get tracking ID
3. Add to environment variables
4. Verify traffic in Google Analytics

### Bing Webmaster Tools

1. Add site to [Bing Webmaster Tools](https://www.bing.com/webmaster)
2. Verify domain
3. Submit sitemap

### Local SEO

1. Add Google Business Profile
2. Verify business information
3. Add photos and details
4. Monitor reviews

---

## Performance Testing

### Lighthouse Audit

```bash
# Local testing
npm install -g lighthouse

lighthouse https://suaveeTech.com --view

# Or use PageSpeed Insights
# https://pagespeed.web.dev/
```

### Core Web Vitals

Check at:
- PageSpeed Insights
- Vercel Dashboard → Analytics
- Google Search Console → Experience

Target metrics:
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1

### Load Testing

```bash
# Using Apache Bench
ab -n 1000 -c 100 https://suaveeTech.com/

# Using Vegeta
echo "GET https://suaveeTech.com/" | vegeta attack -duration=30s | vegeta report
```

---

## Troubleshooting

### Build Fails

```bash
# Clear build cache
rm -rf .next
rm package-lock.json

# Reinstall dependencies
npm install

# Rebuild
npm run build
```

### Deployment Fails

```bash
# Check logs
vercel logs

# Verify environment variables
vercel env ls

# Check Node version compatibility
node --version
# Should be 18.x or higher for Next.js 14
```

### Performance Issues

```bash
# Run performance audit
npm run build
npm run start

# Analyze bundle size
npm install -g next-bundle-analyzer
```

### Email Not Sending

1. Check email service credentials
2. Verify sender email address
3. Check spam folder
4. Review API quotas
5. Check logs for errors

### Domain Issues

```bash
# Check DNS records
nslookup suaveeTech.com

# Verify CNAME/A records are correct
dig suaveeTech.com

# Test SSL certificate
openssl s_client -connect suaveeTech.com:443
```

### SSL Certificate Issues

```bash
# For Certbot (AWS EC2)
sudo certbot renew --dry-run

# Manual renewal
sudo certbot renew

# For Vercel
# Automatic renewal handled by Vercel
```

---

## Rollback Procedure

### Vercel Rollback

```bash
# View deployment history
vercel deployments

# Promote a previous deployment
vercel promote <deployment-id>
```

### AWS Rollback

```bash
# EC2: Restore from git history
git revert <commit-hash>
git push

# Amplify: Revert to previous deployment
# Done in Amplify console → App settings → Build history
```

---

## Security Hardening

### Enable Security Headers

```javascript
// Already configured in next.config.js
headers: [
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-UA-Compatible', value: 'ie=edge' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' }
]
```

### Setup WAF

```bash
# AWS WAF - Protect against common attacks
# Enable in AWS WAF console for CloudFront or ALB
# Rules: SQL injection, XSS, Rate limiting
```

### SSL/TLS Configuration

```bash
# Verify SSL
ssl-test.ssllabs.com/ssltest/?d=suaveeTech.com

# Enforce HTTPS in Nginx
add_header Strict-Transport-Security "max-age=31536000" always;
```

---

## Next Steps

1. ✅ Deploy to production
2. ✅ Verify all functionality
3. ✅ Setup monitoring
4. ✅ Configure backups
5. ✅ Submit to search engines
6. ✅ Monitor performance
7. ✅ Regular maintenance schedule

---

## Support

For deployment issues:
- Vercel: support@vercel.com
- AWS: AWS Support Console
- Community: Next.js Discord

Contact suaveeTech: info@suaveeTech.com
