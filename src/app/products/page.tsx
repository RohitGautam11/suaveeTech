import { Metadata } from 'next'
import Link from 'next/link'
import { Hero } from '@/src/components/Hero'
import { ProductCard } from '@/src/components/ProductCard'
import { CTASection } from '@/src/components/CTASection'
import { CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Explore TravelSquad SaaS products - Travel CRM, Social CRM, and Power Dialer. Solutions designed for modern businesses.',
  keywords: ['SaaS products', 'CRM software', 'power dialer', 'travel software'],
}

const products = [
  {
    title: 'Travel CRM',
    description:
      'A comprehensive CRM platform specifically designed for travel agencies to manage leads, bookings, and customer relationships.',
    features: [
      'Lead Management System',
      'Booking Tracking',
      'Automated Follow-ups',
      'Customer Analytics',
      'Itinerary Management',
      'Commission Tracking',
      'Integration with GDS',
    ],
    link: '/products/travel-crm',
    badge: 'POPULAR',
    details: {
      useCases: [
        'Travel agencies managing multiple destinations',
        'Group tour operators',
        'Corporate travel booking platforms',
        'Vacation rental management',
      ],
      pricing: 'Starting at $299/month',
      demo: '/products/travel-crm/demo',
    },
  },
  {
    title: 'Social CRM',
    description:
      'A social media management and customer interaction platform designed for marketing agencies and businesses.',
    features: [
      'Multi-channel Management',
      'Post Scheduling',
      'Comment & Message Management',
      'Social Analytics',
      'Content Calendar',
      'Team Collaboration',
      'Performance Reports',
    ],
    link: '/products/social-crm',
    details: {
      useCases: [
        'Digital marketing agencies',
        'Social media consultants',
        'E-commerce businesses',
        'Brand management',
      ],
      pricing: 'Starting at $199/month',
      demo: '/products/social-crm/demo',
    },
  },
  {
    title: 'Power Dialer',
    description:
      'A cloud-based dialer system designed for sales teams to maximize productivity and improve call efficiency.',
    features: [
      'Automated Dialing',
      'Lead Management',
      'Call Recording',
      'Call Analytics',
      'SMS Follow-ups',
      'IVR System',
      'Outbound Campaigns',
    ],
    link: '/products/power-dialer',
    details: {
      useCases: [
        'Sales teams',
        'Call centers',
        'Telemarketing agencies',
        'B2B lead generation',
      ],
      pricing: 'Starting at $399/month',
      demo: '/products/power-dialer/demo',
    },
  },
]

export default function Products() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <Hero
        title="Our SaaS Products"
        subtitle="Powerful software solutions designed to solve real business problems and drive measurable results for your organization."
        showImage={false}
        backgroundGradient="gradient-primary"
      />

      {/* Products Grid */}
      <section className="section bg-light">
        <div className="container-tight">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {products.map((product) => (
              <ProductCard
                key={product.title}
                title={product.title}
                description={product.description}
                features={product.features.slice(0, 4)}
                link={product.link}
                badge={product.badge}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Products Section */}
      <section className="section">
        <div className="container-tight space-y-20">
          {products.map((product, index) => (
            <div key={product.title}>
              <div className="grid md:grid-cols-2 gap-12">
                {index % 2 === 0 ? (
                  <>
                    <div>
                      {product.badge && (
                        <span className="inline-block text-xs font-bold text-white px-3 py-1 rounded-full bg-primary mb-4">
                          {product.badge}
                        </span>
                      )}
                      <h2 className="heading-lg mb-4">{product.title}</h2>
                      <p className="text-lg text-gray-700 mb-8">
                        {product.description}
                      </p>

                      <h3 className="heading-sm mb-4">Key Features</h3>
                      <ul className="space-y-3 mb-8">
                        {product.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <Link
                          href={product.link}
                          className="btn btn-primary text-white text-center font-semibold"
                        >
                          Learn More
                        </Link>
                        <Link
                          href={product.details.demo}
                          className="btn border-2 border-primary text-primary hover:bg-primary hover:text-white text-center font-semibold transition"
                        >
                          Request Demo
                        </Link>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="card bg-gradient-primary text-white">
                        <h4 className="font-semibold mb-2">Perfect For</h4>
                        <ul className="space-y-2">
                          {product.details.useCases.map((useCase) => (
                            <li key={useCase} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                              {useCase}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="card">
                        <h4 className="font-semibold mb-2">Pricing</h4>
                        <p className="text-2xl font-bold text-primary mb-2">
                          {product.details.pricing}
                        </p>
                        <p className="text-sm text-gray-600">
                          Flexible plans to fit your business needs
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="space-y-6 md:order-last">
                      <div className="card bg-gradient-primary text-white">
                        <h4 className="font-semibold mb-2">Perfect For</h4>
                        <ul className="space-y-2">
                          {product.details.useCases.map((useCase) => (
                            <li key={useCase} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                              {useCase}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="card">
                        <h4 className="font-semibold mb-2">Pricing</h4>
                        <p className="text-2xl font-bold text-primary mb-2">
                          {product.details.pricing}
                        </p>
                        <p className="text-sm text-gray-600">
                          Flexible plans to fit your business needs
                        </p>
                      </div>
                    </div>
                    <div>
                      {product.badge && (
                        <span className="inline-block text-xs font-bold text-white px-3 py-1 rounded-full bg-primary mb-4">
                          {product.badge}
                        </span>
                      )}
                      <h2 className="heading-lg mb-4">{product.title}</h2>
                      <p className="text-lg text-gray-700 mb-8">
                        {product.description}
                      </p>

                      <h3 className="heading-sm mb-4">Key Features</h3>
                      <ul className="space-y-3 mb-8">
                        {product.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <Link
                          href={product.link}
                          className="btn btn-primary text-white text-center font-semibold"
                        >
                          Learn More
                        </Link>
                        <Link
                          href={product.details.demo}
                          className="btn border-2 border-primary text-primary hover:bg-primary hover:text-white text-center font-semibold transition"
                        >
                          Request Demo
                        </Link>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison CTA */}
      <section className="section bg-light">
        <div className="container-tight text-center">
          <h2 className="heading-lg mb-6">Can't Decide?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss which product is right for your business or how multiple products can work together for maximum impact.
          </p>
          <Link
            href="/contact?type=consultation"
            className="btn btn-primary text-white font-semibold"
          >
            Schedule Free Consultation
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Business?"
        subtitle="Start your free trial today or schedule a demo to see how our products can help you achieve your goals."
        buttonText="Start Free Trial"
        buttonLink="/contact"
      />
    </main>
  )
}
