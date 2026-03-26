import { Metadata } from 'next'
import Link from 'next/link'
import {
  CheckCircle,
  Users,
  BarChart3,
  Calendar,
  MessageSquare,
  Globe,
  ArrowRight,
} from 'lucide-react'
import { Hero } from '@/src/components/Hero'
import { CTASection } from '@/src/components/CTASection'
import { PricingCard } from '@/src/components/PricingCard'
import { ContactForm } from '@/src/components/ContactForm'

export const metadata: Metadata = {
  title: 'Travel CRM - SaaS Platform for Travel Agencies',
  description:
    'Travel CRM platform to manage leads, bookings, and customer relationships. Designed for travel agencies, tour operators, and vacation rental businesses.',
  keywords: [
    'travel CRM',
    'booking management',
    'travel software',
    'CRM for travel agencies',
  ],
}

export default function TravelCRM() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <Hero
        title="Travel CRM"
        subtitle="Manage leads, bookings, and customer relationships all in one powerful platform designed for travel professionals."
        ctaText="Start Free Trial"
        ctaLink="/contact?product=travel-crm"
        ctaSecondaryText="Request Demo"
        ctaSecondaryLink="#demo"
      />

      {/* Key Benefits */}
      <section className="section bg-light">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Why Travel CRM?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built specifically for travel agencies to streamline operations and boost revenue
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Lead Management',
                description:
                  'Capture, track, and nurture leads automatically with intelligent lead scoring',
              },
              {
                icon: Calendar,
                title: 'Booking Tracking',
                description:
                  'Real-time booking status, itineraries, and customer preferences in one place',
              },
              {
                icon: MessageSquare,
                title: 'Automated Follow-ups',
                description:
                  'Automated email and SMS reminders to keep customers engaged and informed',
              },
              {
                icon: BarChart3,
                title: 'Advanced Analytics',
                description:
                  'Comprehensive reports on bookings, revenue, and customer lifetime value',
              },
              {
                icon: Globe,
                title: 'Global Integration',
                description:
                  'Connect with GDS systems, payment processors, and popular tools',
              },
              {
                icon: CheckCircle,
                title: 'Commission Tracking',
                description:
                  'Automated commission calculations and detailed financial reporting',
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
                  'Lead Management System with automation',
                  'Real-time booking tracking and updates',
                  'Customer itinerary management',
                  'Automated follow-up workflows',
                  'Advanced customer analytics',
                  'Multi-channel communication',
                  'Mobile app for on-the-go access',
                  'Integration with GDS and payment systems',
                  'Commission calculations and payouts',
                  'Customizable reports and dashboards',
                  'Document management',
                  '24/7 customer support',
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
                <div className="text-7xl mb-4">✈️</div>
                <p className="text-2xl font-bold">Travel CRM Platform</p>
                <p className="text-gray-100 mt-2">
                  Trusted by 100+ travel agencies worldwide
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
                title: 'Travel Agencies',
                description:
                  'Manage multiple agents, destinations, and bookings with centralized control',
                features: ['Multi-agent support', 'Territory management', 'Commission tracking'],
              },
              {
                title: 'Group Tour Operators',
                description:
                  'Coordinate group bookings, itineraries, and communications efficiently',
                features: ['Group booking tools', 'Itinerary management', 'Passenger tracking'],
              },
              {
                title: 'Vacation Rental Managers',
                description:
                  'Manage properties, bookings, and guest communications seamlessly',
                features: ['Property management', 'Guest management', 'Automated messaging'],
              },
              {
                title: 'Corporate Travel Coordinators',
                description:
                  'Streamline corporate travel bookings and expense management',
                features: ['Expense tracking', 'Policy management', 'Reporting'],
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
              { metric: '300%', label: 'Increase in Lead Conversion' },
              { metric: '45%', label: 'Faster Booking Processing' },
              { metric: '250%', label: 'ROI in First Year' },
              { metric: '95%', label: 'Client Satisfaction Rate' },
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
              Choose the plan that fits your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard
              name="Starter"
              price={299}
              description="Perfect for new agencies"
              features={[
                'Up to 5 team members',
                '100 leads/month',
                'Basic reporting',
                'Email support',
              ]}
              cta={{ text: 'Start Free Trial', link: '/contact?product=travel-crm' }}
            />
            <PricingCard
              name="Professional"
              price={599}
              description="For growing agencies"
              features={[
                'Up to 20 team members',
                'Unlimited leads',
                'Advanced analytics',
                'Priority support',
                'API access',
                'Custom workflows',
              ]}
              isPopular
              cta={{ text: 'Start Free Trial', link: '/contact?product=travel-crm' }}
            />
            <PricingCard
              name="Enterprise"
              price="Custom"
              description="For large organizations"
              features={[
                'Unlimited team members',
                'Unlimited leads',
                'Custom integrations',
                'Dedicated support',
                'White-label options',
                'SLA guarantee',
              ]}
              cta={{ text: 'Contact Sales', link: '/contact' }}
            />
          </div>
        </div>
      </section>

      {/* Integration  */}
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
              'Amadeus GDS',
              'Sabre GDS',
              'Galileo GDS',
              'Stripe',
              'PayPal',
              'Google Workspace',
              'Microsoft 365',
              'Slack',
              'Mailchimp',
              'Zapier',
              'Twilio',
              'HubSpot',
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
              <h2 className="heading-lg mb-6">See Travel CRM in Action</h2>
              <p className="text-lg text-gray-700 mb-4">
                Watch a quick 15-minute demo of how Travel CRM can transform your business operations.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'See dashboard and reporting features',
                  'Learn about automation workflows',
                  'Discover integrations',
                  'Get custom pricing quote',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact?product=travel-crm&type=demo"
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
        title="Ready to Transform Your Travel Business?"
        subtitle="Join 100+ successful travel agencies using Travel CRM to boost sales and improve customer satisfaction."
        buttonText="Start Free Trial Today"
        buttonLink="/contact?product=travel-crm"
      />
    </main>
  )
}
