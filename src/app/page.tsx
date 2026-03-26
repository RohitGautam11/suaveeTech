import { Metadata } from 'next'
import Link from 'next/link'
import {
  Zap,
  Code2,
  Smartphone,
  BarChart3,
  Cloud,
  Cpu,
  ArrowRight,
  Users,
  Award,
} from 'lucide-react'
import { Hero } from '@/src/components/Hero'
import { ServiceCard } from '@/src/components/ServiceCard'
import { ProductCard } from '@/src/components/ProductCard'
import { Testimonial } from '@/src/components/Testimonial'
import { CTASection } from '@/src/components/CTASection'
import { Stats } from '@/src/components/Stats'

export const metadata: Metadata = {
  title: 'Home',
  description:
    'suaveeTech - Building scalable SaaS platforms and automation systems for modern businesses.',
  keywords: [
    'software development',
    'SaaS solutions',
    'CRM platform',
    'automation',
    'IT services',
  ],
}

export default function Home() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <Hero
        title="Building Scalable SaaS Platforms & Automation Systems"
        subtitle="Helping startups and businesses build powerful software solutions that drive growth and efficiency."
        ctaText="Start Your Project"
        ctaLink="/contact"
        ctaSecondaryText="Book Free Consultation"
        ctaSecondaryLink="/contact?type=consultation"
      />

      {/* Stats Section */}
      <Stats
        stats={[
          { number: '150+', label: 'Projects Delivered' },
          { number: '80+', label: 'Happy Clients' },
          { number: '12+', label: 'Years Experience' },
          { number: '$50M+', label: 'Client Revenue Generated' },
        ]}
      />

      {/* Services Overview */}
      <section className="section bg-light">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive software development and SaaS solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={Code2}
              title="Custom SaaS Development"
              description="Build enterprise-grade SaaS platforms with scalable architecture and modern technologies."
              technologies={['React', 'Node.js', 'PostgreSQL', 'AWS']}
            />
            <ServiceCard
              icon={Users}
              title="CRM Solutions"
              description="Develop powerful CRM systems to manage customer relationships and boost sales effectiveness."
              technologies={['Vue.js', 'Laravel', 'MySQL', 'Twilio']}
            />
            <ServiceCard
              icon={Zap}
              title="Automation Systems"
              description="Create intelligent automation workflows to streamline business processes and increase productivity."
              technologies={['Node.js', 'Python', 'RabbitMQ', 'Kubernetes']}
            />
            <ServiceCard
              icon={Smartphone}
              title="API Integration"
              description="Connect your systems seamlessly with robust API integration and third-party service connections."
              technologies={['REST API', 'GraphQL', 'OAuth', 'Webhooks']}
            />
            <ServiceCard
              icon={Cloud}
              title="Cloud Infrastructure"
              description="Deploy and manage scalable cloud infrastructure with optimal performance and security."
              technologies={['AWS', 'GCP', 'Docker', 'Terraform']}
            />
            <ServiceCard
              icon={Cpu}
              title="DevOps & CI/CD"
              description="Implement automated deployment pipelines and infrastructure management for continuous delivery."
              technologies={['GitHub Actions', 'Docker', 'Kubernetes', 'Terraform']}
            />
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn btn-primary text-white font-semibold inline-flex items-center gap-2 group">
              View All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Our SaaS Products</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Powerful software solutions designed to solve real business problems and drive revenue.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ProductCard
              title="Travel CRM"
              description="Comprehensive CRM platform designed specifically for travel agencies to manage leads, bookings, and customer interactions."
              features={[
                'Lead Management',
                'Booking Tracking',
                'Automated Follow-ups',
                'Customer Analytics',
                'Itinerary Management',
              ]}
              link="/products/travel-crm"
              badge="POPULAR"
            />
            <ProductCard
              title="Social CRM"
              description="Social media management and customer interaction platform designed for modern businesses and agencies."
              features={[
                'Multi-channel Management',
                'Post Scheduling',
                'Comment Replies',
                'Message Management',
                'Social Analytics',
              ]}
              link="/products/social-crm"
            />
            <ProductCard
              title="Power Dialer"
              description="Advanced cloud-based dialer system designed for sales teams to maximize productivity and call efficiency."
              features={[
                'Automated Dialing',
                'Lead Management',
                'Call Recording',
                'Call Analytics',
                'SMS Follow-ups',
              ]}
              link="/products/power-dialer"
            />
          </div>

          <div className="text-center mt-12">
            <Link href="/products" className="btn btn-primary text-white font-semibold inline-flex items-center gap-2 group">
              Explore All Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-gradient-dark text-white">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Why Choose suaveeTech?</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We're not just developers. We're your technology partners dedicated to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Proven Expertise',
                description: '12+ years of experience building enterprise solutions',
              },
              {
                icon: Users,
                title: 'Dedicated Team',
                description: 'Full-time developers committed to your project success',
              },
              {
                icon: Zap,
                title: 'Agile Approach',
                description: 'Fast iteration cycles and continuous improvement',
              },
              {
                icon: BarChart3,
                title: 'Results Driven',
                description: 'Focused on metrics that matter to your business',
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <h3 className="heading-sm mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="section bg-light">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Featured Case Studies</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how we've helped businesses achieve their goals through innovative technology solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Travel CRM Platform',
                client: 'Global Travel Agency',
                result: '300% Increase in Lead Conversion',
              },
              {
                title: 'Social Media Suite',
                client: 'Digital Marketing Agency',
                result: '85% Time Savings on Campaign Management',
              },
              {
                title: 'Power Dialer System',
                client: 'Sales-Focused SaaS Company',
                result: '150% Productivity Increase',
              },
            ].map((study) => (
              <div key={study.title} className="card card-hover">
                <div className="mb-4 w-12 h-12 bg-primary rounded-lg"></div>
                <h3 className="heading-sm mb-2">{study.title}</h3>
                <p className="text-gray-600 mb-4">{study.client}</p>
                <p className="text-primary font-semibold">{study.result}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/case-studies" className="btn btn-primary text-white font-semibold inline-flex items-center gap-2 group">
              View All Case Studies
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Client Testimonials</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Hear from our satisfied clients about their experience working with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Testimonial
              quote="suaveeTech transformed our business with their Travel CRM. The platform is intuitive and has increased our conversion rates by 300%."
              author="John Smith"
              title="CEO"
              company="Global Travel Agency"
            />
            <Testimonial
              quote="Their team is incredibly professional and responsive. They delivered exactly what we needed on time and on budget."
              author="Sarah Johnson"
              title="Founder"
              company="MarTech Startup"
            />
            <Testimonial
              quote="The Power Dialer system has revolutionized our sales process. Our team is now 150% more productive."
              author="Mike Davis"
              title="Sales Director"
              company="Enterprise SaaS Corp"
            />
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="section bg-light">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Latest From Our Blog</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Industry insights, best practices, and technical deep dives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Building Scalable SaaS Applications',
                excerpt: 'A comprehensive guide to architecting SaaS applications that scale...',
                date: 'March 15, 2024',
              },
              {
                title: 'CRM Systems That Drive Revenue',
                excerpt: 'How modern CRM platforms are transforming sales operations...',
                date: 'March 10, 2024',
              },
              {
                title: 'Automation Trends in 2024',
                excerpt: 'The latest trends in business automation and AI integration...',
                date: 'March 5, 2024',
              },
            ].map((post) => (
              <Link key={post.title} href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="card card-hover h-full">
                  <div className="mb-4 h-40 bg-gradient-primary rounded-lg"></div>
                  <h3 className="heading-sm mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <p className="text-gray-500 text-xs">{post.date}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/blog" className="btn btn-primary text-white font-semibold inline-flex items-center gap-2 group">
              Read Our Blog
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Ready to Transform Your Business?"
        subtitle="Let's discuss how we can help you achieve your business goals with cutting-edge technology solutions."
        buttonText="Schedule Free Consultation"
        buttonLink="/contact?type=consultation"
      />
    </main>
  )
}
