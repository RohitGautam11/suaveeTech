import { Metadata } from 'next'
import Link from 'next/link'
import {
  CheckCircle,
  Share2,
  BarChart3,
  Clock,
  Users,
  Zap,
  ArrowRight,
} from 'lucide-react'
import { Hero } from '@/src/components/Hero'
import { CTASection } from '@/src/components/CTASection'
import { PricingCard } from '@/src/components/PricingCard'
import { ContactForm } from '@/src/components/ContactForm'

export const metadata: Metadata = {
  title: 'Social CRM - Social Media Management Platform',
  description:
    'Social CRM platform for managing multiple social media accounts, scheduling posts, and analyzing performance. Perfect for agencies and businesses.',
  keywords: [
    'social CRM',
    'social media management',
    'post scheduling',
    'social analytics',
  ],
}

export default function SocialCRM() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <Hero
        title="Social CRM"
        subtitle="Manage all your social media accounts in one powerful platform. Schedule posts, engage with customers, and track performance."
        ctaText="Start Free Trial"
        ctaLink="/contact?product=social-crm"
        ctaSecondaryText="Request Demo"
        ctaSecondaryLink="#demo"
      />

      {/* Key Benefits */}
      <section className="section bg-light">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Why Social CRM?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Streamline your social media management and boost engagement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Share2,
                title: 'Multi-Channel Management',
                description:
                  'Manage Facebook, Instagram, Twitter, LinkedIn, and TikTok from one dashboard',
              },
              {
                icon: Clock,
                title: 'Content Scheduling',
                description:
                  'Plan and schedule posts in advance with optimal timing recommendations',
              },
              {
                icon: MessageSquare,
                title: 'Unified Inbox',
                description:
                  'Respond to comments, messages, and mentions across all channels in one place',
              },
              {
                icon: BarChart3,
                title: 'Detailed Analytics',
                description:
                  'Track engagement, reach, followers, and ROI with comprehensive reporting',
              },
              {
                icon: Users,
                title: 'Team Collaboration',
                description:
                  'Assign tasks, approve content, and collaborate with your team seamlessly',
              },
              {
                icon: Zap,
                title: 'AI-Powered Insights',
                description:
                  'Get recommendations on best posting times and content strategies',
              },
            ].map((benefit) => (
              <div key={benefit.title} className="card">
                <div className="mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="heading-sm mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">Comprehensive Features</h2>
              <ul className="space-y-4">
                {[
                  'Multi-account management',
                  'Advanced content calendar',
                  'Post scheduling and auto-posting',
                  'Unified message and comment inbox',
                  'Engagement tracking and analytics',
                  'Social listening and monitoring',
                  'Team collaboration tools',
                  'Approval workflows',
                  'Content library and templates',
                  'Performance reports and dashboards',
                  'Influencer discovery',
                  'Competitor analysis',
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-primary text-white rounded-xl p-12 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-7xl mb-4">📱</div>
                <p className="text-2xl font-bold">Social CRM Platform</p>
                <p className="text-gray-100 mt-2">
                  Manage 100+ accounts from one dashboard
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section bg-light">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Perfect For</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              {
                title: 'Digital Marketing Agencies',
                description:
                  'Manage multiple client accounts with ease and provide better service',
                features: ['Multi-client support', 'White-label options', 'Client reporting'],
              },
              {
                title: 'E-Commerce Businesses',
                description:
                  'Drive sales through social media with integrated campaign management',
                features: ['Product linking', 'Campaign tracking', 'Sales attribution'],
              },
              {
                title: 'Content Creators',
                description: 'Plan, schedule, and grow your audience across social platforms',
                features: [
                  'Content calendar',
                  'Audience growth tools',
                  'Analytics dashboard',
                ],
              },
              {
                title: 'Brand Management',
                description:
                  'Maintain brand consistency across all social channels and monitor mentions',
                features: ['Brand guidelines', 'Social listening', 'Crisis management'],
              },
            ].map((useCase) => (
              <div key={useCase.title} className="card">
                <h3 className="heading-sm mb-2">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <div className="flex flex-wrap gap-2">
                  {useCase.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs bg-light text-primary px-2 py-1 rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Results Our Clients Achieve</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { metric: '85%', label: 'Time Savings on Management' },
              { metric: '40+', label: 'Concurrent Client Accounts' },
              { metric: '5x', label: 'Productivity Increase' },
              { metric: '$500k+', label: 'Annual Revenue from Service' },
            ].map((stat) => (
              <div key={stat.label} className="text-center card">
                <div className="text-4xl font-bold text-primary mb-2">{stat.metric}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section bg-light">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Flexible Pricing Plans</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard
              name="Starter"
              price={199}
              description="For individual creators"
              features={[
                'Up to 3 social accounts',
                'Basic scheduling',
                'Monthly analytics',
                'Email support',
              ]}
              cta={{ text: 'Start Free Trial', link: '/contact?product=social-crm' }}
            />
            <PricingCard
              name="Business"
              price={499}
              description="For growing agencies"
              features={[
                'Unlimited social accounts',
                'Advanced scheduling',
                'Detailed analytics',
                'Team collaboration',
                'Priority support',
                'API access',
              ]}
              isPopular
              cta={{ text: 'Start Free Trial', link: '/contact?product=social-crm' }}
            />
            <PricingCard
              name="Enterprise"
              price="Custom"
              description="For large organizations"
              features={[
                'Unlimited everything',
                'Custom integrations',
                'Dedicated account manager',
                'Training & onboarding',
                'SLA guarantee',
                'White-label options',
              ]}
              cta={{ text: 'Contact Sales', link: '/contact' }}
            />
          </div>
        </div>
      </section>

      {/* Social Channels Supported */}
      <section className="section">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Supported Platforms</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Manage all major social media platforms
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Facebook Pages', desc: 'Business pages and groups' },
              { name: 'Instagram', desc: 'Business and Creator accounts' },
              { name: 'Twitter/X', desc: 'Professional accounts' },
              { name: 'LinkedIn', desc: 'Personal and business pages' },
              { name: 'TikTok', desc: 'Creator accounts' },
              { name: 'YouTube', desc: 'Channel management' },
              { name: 'Pinterest', desc: 'Business accounts' },
              { name: 'Threads', desc: 'Thread creation and sharing' },
              { name: 'Custom Integrations', desc: 'Via Zapier and API' },
            ].map((platform) => (
              <div key={platform.name} className="card text-center">
                <p className="font-semibold">{platform.name}</p>
                <p className="text-sm text-gray-600">{platform.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Request */}
      <section id="demo" className="section bg-light">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-lg mb-6">See Social CRM in Action</h2>
              <p className="text-lg text-gray-700 mb-4">
                Watch a quick 15-minute demo of how Social CRM can transform your social media management.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Dashboard and analytics overview',
                  'Content calendar and scheduling',
                  'Team collaboration features',
                  'Reporting capabilities',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact?product=social-crm&type=demo"
                className="btn btn-primary text-white font-semibold inline-flex items-center gap-2 group"
              >
                Request Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="heading-sm mb-6">Schedule Your Demo</h3>
                <ContactForm
                  showCompany={false}
                  showService={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Master Your Social Media?"
        subtitle="Join digital agencies managing 100+ accounts successfully with Social CRM."
        buttonText="Start Free Trial Today"
        buttonLink="/contact?product=social-crm"
      />
    </main>
  )
}
