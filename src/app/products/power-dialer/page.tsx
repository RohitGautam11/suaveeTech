import { Metadata } from 'next'
import Link from 'next/link'
import {
  CheckCircle,
  Phone,
  BarChart3,
  Zap,
  Users,
  Clock,
  ArrowRight,
} from 'lucide-react'
import { Hero } from '@/src/components/Hero'
import { CTASection } from '@/src/components/CTASection'
import { PricingCard } from '@/src/components/PricingCard'
import { ContactForm } from '@/src/components/ContactForm'

export const metadata: Metadata = {
  title: 'Power Dialer - Cloud Call Center Software',
  description:
    'Power Dialer is a cloud-based dialer system for sales teams to maximize productivity and close more deals. Automate dialing and manage leads efficiently.',
  keywords: [
    'power dialer',
    'call center software',
    'sales dialer',
    'automated dialing',
  ],
}

export default function PowerDialer() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <Hero
        title="Power Dialer"
        subtitle="Cloud-based dialer system designed to maximize sales team productivity and help you close more deals faster."
        ctaText="Start Free Trial"
        ctaLink="/contact?product=power-dialer"
        ctaSecondaryText="Request Demo"
        ctaSecondaryLink="#demo"
      />

      {/* Key Benefits */}
      <section className="section bg-light">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Why Power Dialer?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Boost sales productivity and revenue with intelligent calling automation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Phone,
                title: 'Automated Dialing',
                description:
                  'Make more calls with automated dialing and intelligent pacing algorithms',
              },
              {
                icon: Users,
                title: 'Lead Management',
                description:
                  'Organize and prioritize leads for maximum efficiency and follow-ups',
              },
              {
                icon: BarChart3,
                title: 'Call Analytics',
                description:
                  'Track call metrics, conversion rates, and agent performance in real-time',
              },
              {
                icon: Clock,
                title: 'Call Recording',
                description:
                  'Record calls for training, compliance, and quality assurance purposes',
              },
              {
                icon: Zap,
                title: 'SMS Follow-ups',
                description:
                  'Automatically send SMS follow-ups to leads who missed or declined calls',
              },
              {
                icon: Zap,
                title: 'IVR System',
                description:
                  'Interactive voice response system for automated lead qualification',
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
              <h2 className="heading-lg mb-6">Powerful Features</h2>
              <ul className="space-y-4">
                {[
                  'Point-to-point and predictive dialing',
                  'Lead scoring and prioritization',
                  'Real-time call monitoring',
                  'Call recording and playback',
                  'Call analytics and reporting',
                  'SMS integration for follow-ups',
                  'IVR system with custom scripts',
                  'CRM integration',
                  'Agent desktop with detailed call info',
                  'Call transfer and conferencing',
                  'Compliance and security features',
                  'Mobile app for remote agents',
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
                <div className="text-7xl mb-4">📞</div>
                <p className="text-2xl font-bold">Power Dialer System</p>
                <p className="text-gray-100 mt-2">
                  Trusted by 200+ sales teams worldwide
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
                title: 'Sales Teams',
                description:
                  'Increase productivity and close more deals with intelligent calling automation',
                features: [
                  'Auto-dialing',
                  'Lead management',
                  'Performance tracking',
                ],
              },
              {
                title: 'Call Centers',
                description:
                  'Manage large teams and optimize operations with real-time monitoring',
                features: ['Team management', 'Quality monitoring', 'Compliance'],
              },
              {
                title: 'Telemarketing Agencies',
                description:
                  'Run efficient campaigns with predictive dialing and lead routing',
                features: ['Campaign management', 'Lead routing', 'Analytics'],
              },
              {
                title: 'B2B Lead Generation',
                description:
                  'Qualify and nurture leads efficiently with automated follow-ups',
                features: ['Lead qualification', 'Follow-ups', 'Reporting'],
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
              { metric: '150%', label: 'Sales Team Productivity Increase' },
              { metric: '75%', label: 'Reduction in Admin Time' },
              { metric: '3x', label: 'More Calls Per Agent Daily' },
              { metric: '$2M+', label: 'Additional Annual Revenue' },
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
              Choose the plan that fits your sales organization
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard
              name="Starter"
              price={399}
              description="For small sales teams"
              features={[
                'Up to 5 seats',
                'Basic dialing features',
                'Call recording',
                'Email support',
              ]}
              cta={{ text: 'Start Free Trial', link: '/contact?product=power-dialer' }}
            />
            <PricingCard
              name="Professional"
              price={799}
              description="For growing teams"
              features={[
                'Up to 25 seats',
                'Predictive dialing',
                'Advanced analytics',
                'Priority support',
                'API access',
                'Custom workflows',
              ]}
              isPopular
              cta={{ text: 'Start Free Trial', link: '/contact?product=power-dialer' }}
            />
            <PricingCard
              name="Enterprise"
              price="Custom"
              description="For large operations"
              features={[
                'Unlimited seats',
                'Full customization',
                'Dedicated support',
                'Custom integrations',
                'SLA guarantee',
                'White-label options',
              ]}
              cta={{ text: 'Contact Sales', link: '/contact' }}
            />
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="section">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Integrations & Connections</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect with your existing tools and systems
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              'Salesforce',
              'HubSpot',
              'Pipedrive',
              'Zoho CRM',
              'Microsoft 365',
              'Google Workspace',
              'Slack',
              'Zapier',
              'Twilio',
              'AWS',
              'REST API',
              'Webhooks',
            ].map((integration) => (
              <div key={integration} className="card text-center">
                <p className="font-semibold">{integration}</p>
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
              <h2 className="heading-lg mb-6">See Power Dialer in Action</h2>
              <p className="text-lg text-gray-700 mb-4">
                Watch a quick 15-minute demo of how Power Dialer can transform your sales operation.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'See automatic dialing in action',
                  'Review call analytics dashboard',
                  'Explore lead management features',
                  'Get custom pricing based on team size',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact?product=power-dialer&type=demo"
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
        title="Ready to Boost Your Sales Performance?"
        subtitle="Join 200+ sales teams using Power Dialer to close more deals and increase revenue."
        buttonText="Start Free Trial Today"
        buttonLink="/contact?product=power-dialer"
      />
    </main>
  )
}
