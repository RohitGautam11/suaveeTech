import { Metadata } from 'next'
import Link from 'next/link'
import { Hero } from '@/src/components/Hero'
import { CTASection } from '@/src/components/CTASection'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Explore our case studies - see how suaveeTech has helped businesses achieve their goals through innovative software solutions.',
  keywords: ['case studies', 'success stories', 'project examples', 'client results'],
}

const caseStudies = [
  {
    id: 'travel-crm-case',
    title: 'Global Travel Agency CRM Implementation',
    client: 'Global Travel Agency',
    industry: 'Travel & Tourism',
    challenge:
      'Managing leads and bookings across multiple agents and destinations was causing workflow inefficiencies and lost opportunities.',
    solution:
      'Implemented a custom Travel CRM platform with lead management, booking tracking, and automated follow-ups.',
    results: [
      '300% increase in lead conversion',
      '45% reduction in booking processing time',
      '250% ROI in first year',
      '95% client satisfaction',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    testimonial: {
      quote:
        'The Travel CRM system has completely transformed how we manage our business. Our team is more productive and our clients are happier.',
      author: 'John Smith',
      title: 'CEO',
      company: 'Global Travel Agency',
    },
    image: '/case-studies/travel-crm.jpg',
  },
  {
    id: 'social-crm-case',
    title: 'Social Media Management Suite for Digital Agency',
    client: 'DigitalMax Advertising',
    industry: 'Digital Marketing',
    challenge:
      'Managing multiple client social media accounts manually was time-consuming and error-prone, limiting agency scalability.',
    solution:
      'Built a comprehensive Social CRM platform enabling centralized management, scheduling, and analytics across all client accounts.',
    results: [
      '85% time savings on social media management',
      '40+ concurrent client accounts managed',
      '5x productivity increase per team member',
      '$500k annual revenue from new service offerings',
    ],
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'AWS'],
    testimonial: {
      quote:
        'This platform allows us to serve 10x more clients without adding headcount. It\'s a game-changer for our business.',
      author: 'Sarah Williams',
      title: 'Founder',
      company: 'DigitalMax Advertising',
    },
    image: '/case-studies/social-crm.jpg',
  },
  {
    id: 'power-dialer-case',
    title: 'Sales Productivity Transformation with Power Dialer',
    client: 'TechVendor Solutions',
    industry: 'B2B SaaS',
    challenge:
      'Sales team was spending too much time on manual dialing and lead management, reducing productive sales conversations.',
    solution:
      'Implemented Power Dialer system with automated dialing, lead management, and call analytics to maximize sales productivity.',
    results: [
      '150% increase in sales team productivity',
      '75% reduction in admin time',
      '3x more calls per agent daily',
      '$2M additional annual revenue',
    ],
    technologies: ['Node.js', 'Twilio', 'PostgreSQL', 'AWS'],
    testimonial: {
      quote:
        'Our sales team went from skeptical to absolutely loving this system. Productivity is through the roof.',
      author: 'Mike Davis',
      title: 'VP of Sales',
      company: 'TechVendor Solutions',
    },
    image: '/case-studies/power-dialer.jpg',
  },
  {
    id: 'ecommerce-automation',
    title: 'E-commerce Automation Platform',
    client: 'ShopHub Retail',
    industry: 'E-commerce',
    challenge:
      'Manual order processing and inventory management was causing delays and errors, leading to customer dissatisfaction.',
    solution:
      'Created an automation system connecting order, inventory, and fulfillment systems with real-time synchronization.',
    results: [
      '99.2% order accuracy',
      '60% faster order processing',
      '40% inventory carrying costs reduction',
      '35% customer satisfaction increase',
    ],
    technologies: ['Python', 'Node.js', 'RabbitMQ', 'PostgreSQL'],
    testimonial: {
      quote:
        'The automation system has eliminated almost all our manual processes. Our operations team can now focus on strategy.',
      author: 'Jennifer Lee',
      title: 'Operations Director',
      company: 'ShopHub Retail',
    },
    image: '/case-studies/automation.jpg',
  },
]

export default function CaseStudies() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <Hero
        title="Case Studies"
        subtitle="See how we've helped businesses achieve their goals through innovative software solutions and technology expertise."
        showImage={false}
        backgroundGradient="gradient-primary"
      />

      {/* Case Studies Grid */}
      <section className="section bg-light">
        <div className="container-tight space-y-12">
          {caseStudies.map((study, index) => (
            <Link key={study.id} href={`/case-studies/${study.id}`}>
              <div className="card card-hover">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Image */}
                  <div className="md:col-span-1 h-48 md:h-auto bg-gradient-primary rounded-lg flex items-center justify-center">
                    <div className="text-4xl">📊</div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-primary bg-light px-3 py-1 rounded-full">
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="heading-md mb-2">{study.title}</h3>
                    <p className="text-gray-700 mb-4">{study.challenge}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-sm mb-3">Key Results:</h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {study.results.slice(0, 4).map((result) => (
                          <div key={result} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            <span className="text-sm text-gray-700">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-primary font-semibold group">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats from Case Studies */}
      <section className="section">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Client Impact</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { metric: '$50M+', label: 'Revenue Generated for Clients' },
              { metric: '300%', label: 'Average ROI' },
              { metric: '95%', label: 'Client Satisfaction Rate' },
              { metric: '150+', label: 'Successful Projects' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="heading-lg text-primary mb-2">{item.metric}</div>
                <p className="text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Used */}
      <section className="section bg-light">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Technologies We Use</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We choose the right tech stack for each project to ensure optimal performance and scalability.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              'React',
              'Node.js',
              'Vue.js',
              'Laravel',
              'PostgreSQL',
              'MySQL',
              'AWS',
              'GCP',
              'Docker',
              'Kubernetes',
            ].map((tech) => (
              <div key={tech} className="text-center card">
                <p className="font-semibold text-primary">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials from Case Studies */}
      <section className="section">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="card card-hover">
                <p className="text-lg text-gray-700 mb-6 italic">
                  "{study.testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold">{study.testimonial.author}</p>
                  <p className="text-sm text-gray-600">
                    {study.testimonial.title} at {study.testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Be Our Next Success Story?"
        subtitle="Let's discuss how we can help your business achieve similar results through innovative technology solutions."
        buttonText="Get Started Today"
        buttonLink="/contact"
      />
    </main>
  )
}
