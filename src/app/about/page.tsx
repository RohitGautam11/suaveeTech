import { Metadata } from 'next'
import Link from 'next/link'
import { Hero } from '@/src/components/Hero'
import { Stats } from '@/src/components/Stats'
import { CTASection } from '@/src/components/CTASection'
import { Code2, Users, Zap, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about suaveeTech - our mission, vision, and expertise in software development and SaaS solutions.',
  keywords: ['about us', 'company story', 'mission', 'vision', 'software development'],
}

export default function About() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <Hero
        title="About suaveeTech"
        subtitle="We're passionate about building transformative software solutions that help businesses scale and succeed in the digital age."
        showImage={false}
        backgroundGradient="gradient-dark"
      />

      {/* Company Story */}
      <section className="section bg-light">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                suaveeTech was founded in 2012 by a group of passionate software engineers who believed that businesses deserved access to enterprise-grade technology without the enterprise price tag.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                What started as a small development team has grown into a full-service software development and SaaS company serving startups, scale-ups, and enterprises across multiple industries.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to have delivered over 150 projects, generated $50M+ in revenue for our clients, and maintained 95% client retention rate.
              </p>
            </div>
            <div className="space-y-6">
              <div className="card">
                <h3 className="heading-sm mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation.
                </p>
              </div>
              <div className="card">
                <h3 className="heading-sm mb-2">Our Vision</h3>
                <p className="text-gray-600">
                  To be the most trusted technology partner for businesses seeking scalable, innovative software solutions.
                </p>
              </div>
              <div className="card">
                <h3 className="heading-sm mb-2">Our Values</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Innovation & Excellence</li>
                  <li>✓ Client Success</li>
                  <li>✓ Transparency & Trust</li>
                  <li>✓ Continuous Learning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our experienced leadership team brings decades of combined experience in software development, entrepreneurship, and business strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Alex Johnson',
                title: 'CEO & Founder',
                bio: '12+ years in software development and startup scaling',
              },
              {
                name: 'Sarah Williams',
                title: 'CTO',
                bio: 'Expert in cloud architecture and DevOps',
              },
              {
                name: 'Mike Chen',
                title: 'VP of Product',
                bio: 'SaaS product development specialist',
              },
            ].map((member) => (
              <div key={member.name} className="card card-hover text-center">
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4"></div>
                <h3 className="heading-sm mb-1">{member.name}</h3>
                <p className="text-primary font-semibold mb-3">{member.title}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section bg-light">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Our Expertise</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Deep technical expertise across the full software development stack
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'SaaS Development',
                description: 'Building scalable, multi-tenant SaaS platforms with modern architecture',
              },
              {
                title: 'CRM Platforms',
                description: 'Custom CRM solutions tailored to specific business workflows',
              },
              {
                title: 'Automation Systems',
                description: 'Intelligent automation workflows using AI and machine learning',
              },
              {
                title: 'Telephony Systems',
                description: 'Twilio-based telephony and call center solutions',
              },
            ].map((item) => (
              <div key={item.title} className="card">
                <h3 className="heading-sm mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Our Technology Stack</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We use industry-leading technologies to build robust, scalable solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                category: 'Frontend',
                tech: ['React.js', 'Next.js', 'Vue.js', 'Tailwind CSS', 'TypeScript'],
              },
              {
                category: 'Backend',
                tech: ['Node.js', 'Laravel', 'Python/Django', 'Express.js', 'NestJS'],
              },
              {
                category: 'Database',
                tech: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch'],
              },
              {
                category: 'DevOps & Cloud',
                tech: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform'],
              },
            ].map((item) => (
              <div key={item.category} className="card">
                <h3 className="heading-sm mb-4">{item.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-light text-primary px-3 py-1 rounded-full text-sm font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <Stats
        stats={[
          { number: '150+', label: 'Projects Delivered' },
          { number: '80+', label: 'Enterprise Clients' },
          { number: '95%', label: 'Client Retention Rate', suffix: '%' },
          { number: '$50M+', label: 'Revenue Generated for Clients' },
        ]}
      />

      {/* Final CTA */}
      <CTASection
        title="Let's Work Together"
        subtitle="Join hundreds of companies that trust suaveeTech to deliver innovative software solutions."
        buttonText="Start Your Project"
        buttonLink="/contact"
      />
    </main>
  )
}
