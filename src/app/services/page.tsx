import { Metadata } from 'next'
import Link from 'next/link'
import {
  Code2,
  Users,
  Zap,
  Smartphone,
  Cloud,
  Cpu,
  ArrowRight,
} from 'lucide-react'
import { Hero } from '@/src/components/Hero'
import { ServiceCard } from '@/src/components/ServiceCard'
import { CTASection } from '@/src/components/CTASection'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore suaveeTech services - Custom SaaS Development, CRM Solutions, Automation, API Integration, and more.',
  keywords: ['software development', 'SaaS services', 'CRM development', 'automation'],
}

const services = [
  {
    icon: Code2,
    title: 'Custom SaaS Development',
    description:
      'Build enterprise-grade SaaS platforms with scalable architecture and modern technologies. From ideation to deployment.',
    benefits: [
      'Multi-tenant architecture',
      'Unlimited scalability',
      'Enterprise security',
      'Modern tech stack',
      'Agile development',
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
    link: '/services/saas-development',
  },
  {
    icon: Users,
    title: 'CRM Solutions',
    description:
      'Develop powerful CRM systems to manage customer relationships, boost sales effectiveness, and improve customer retention.',
    benefits: [
      'Lead management',
      'Sales pipeline tracking',
      'Customer analytics',
      'Automated workflows',
      'Integration capabilities',
    ],
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Twilio', 'REST APIs'],
    link: '/services/crm-development',
  },
  {
    icon: Zap,
    title: 'Automation Systems',
    description:
      'Create intelligent automation workflows to streamline business processes and increase productivity across your organization.',
    benefits: [
      'Process automation',
      'Workflow optimization',
      'AI/ML integration',
      'Real-time monitoring',
      'Cost reduction',
    ],
    technologies: ['Node.js', 'Python', 'RabbitMQ', 'Kubernetes', 'OpenAI'],
    link: '/services/automation',
  },
  {
    icon: Smartphone,
    title: 'API Integration',
    description:
      'Connect your systems seamlessly with robust API integration and third-party service connections for unified operations.',
    benefits: [
      'Third-party integrations',
      'Real-time data sync',
      'Webhook support',
      'Rate limiting',
      'Error handling',
    ],
    technologies: ['REST APIs', 'GraphQL', 'OAuth', 'Webhooks', 'OpenAPI'],
    link: '/services/api-integration',
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description:
      'Deploy and manage scalable cloud infrastructure with optimal performance, security, and reliability for your applications.',
    benefits: [
      'Auto-scaling',
      'Load balancing',
      'CDN integration',
      'DDoS protection',
      'Disaster recovery',
    ],
    technologies: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform'],
    link: '/services/cloud-infrastructure',
  },
  {
    icon: Cpu,
    title: 'DevOps & CI/CD',
    description:
      'Implement automated deployment pipelines and infrastructure management for continuous delivery and operational excellence.',
    benefits: [
      'Continuous integration',
      'Automated testing',
      'Continuous deployment',
      'Infrastructure as code',
      'Monitoring & logging',
    ],
    technologies: ['GitHub Actions', 'Docker', 'Kubernetes', 'Terraform', 'ELK Stack'],
    link: '/services/devops',
  },
]

export default function Services() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <Hero
        title="Our Services"
        subtitle="Comprehensive software development and SaaS solutions tailored to your business needs and goals."
        showImage={false}
        backgroundGradient="gradient-primary"
      />

      {/* Services Grid */}
      <section className="section bg-light">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service) => (
              <Link key={service.title} href={service.link}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  technologies={service.technologies}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="section">
        <div className="container-tight space-y-16">
          {services.map((service, index) => (
            <div key={service.title} className="grid md:grid-cols-2 gap-12 items-center">
              {index % 2 === 0 ? (
                <>
                  <div>
                    <div className="mb-4 flex items-center gap-4">
                      <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="heading-sm">{service.title}</h3>
                    </div>
                    <p className="text-lg text-gray-600 mb-6">
                      {service.description}
                    </p>
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href={service.link}
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  <div className="bg-light rounded-xl p-8">
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-white text-primary px-3 py-2 rounded-lg text-sm font-semibold border border-primary border-opacity-20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-light rounded-xl p-8 md:order-last">
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-white text-primary px-3 py-2 rounded-lg text-sm font-semibold border border-primary border-opacity-20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="mb-4 flex items-center gap-4">
                      <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="heading-sm">{service.title}</h3>
                    </div>
                    <p className="text-lg text-gray-600 mb-6">
                      {service.description}
                    </p>
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href={service.link}
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-light">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Our Development Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow an agile, transparent approach to ensure your project's success
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: '1', title: 'Discovery & Planning', desc: 'Understand your needs and define project scope' },
              { step: '2', title: 'Design & Architecture', desc: 'Create technical designs and system architecture' },
              { step: '3', title: 'Development', desc: 'Build with agile sprints and regular updates' },
              { step: '4', title: 'Testing & QA', desc: 'Comprehensive testing and quality assurance' },
              { step: '5', title: 'Deployment & Support', desc: 'Launch and provide ongoing support' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {item.step}
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Get Started?"
        subtitle="Let's discuss which services are right for your project and how we can help you achieve your goals."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
      />
    </main>
  )
}
