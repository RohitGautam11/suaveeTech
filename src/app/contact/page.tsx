import { Metadata } from 'next'
import { Hero } from '@/src/components/Hero'
import { ContactForm } from '@/src/components/ContactForm'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with suaveeTech. Reach out to discuss your software development and SaaS project needs.',
  keywords: ['contact', 'get in touch', 'contact form', 'consultation'],
}

export default function Contact() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <Hero
        title="Get In Touch"
        subtitle="Have a project in mind? Let's discuss how we can help you achieve your business goals."
        showImage={false}
        backgroundGradient="gradient-primary"
      />

      {/* Contact Section */}
      <section className="section bg-light">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="heading-lg mb-8">Contact Information</h2>

              <div className="space-y-8 mb-12">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">info@suaveeTech.com</p>
                    <p className="text-gray-600">support@suaveeTech.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">+1 (234) 567-8900</p>
                    <p className="text-gray-600">+1 (234) 567-8901</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-gray-600">suaveeTech Inc.</p>
                    <p className="text-gray-600">123 Tech Street</p>
                    <p className="text-gray-600">San Francisco, CA 94105</p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-light p-6 rounded-lg border-2 border-primary border-opacity-20">
                <h3 className="font-semibold mb-2">Average Response Time</h3>
                <p className="text-gray-600">
                  We typically respond to all inquiries within 2 business hours during business hours.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="heading-lg mb-8">Send us a Message</h2>
              <ContactForm
                showCompany={true}
                showService={true}
                onSuccess={() => {
                  // Optional: Handle success
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Integration */}
      <section className="section">
        <div className="container-tight text-center">
          <h2 className="heading-lg mb-4">Schedule a Meeting</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Prefer to schedule a time that works best for you? Book a meeting with our team directly.
          </p>

          <div className="bg-light rounded-lg p-12 max-w-2xl mx-auto">
            <div className="bg-gradient-primary text-white rounded-lg p-8 text-center">
              <p className="mb-4 text-lg">Calendly Integration</p>
              <p className="text-sm mb-6">
                Embed your Calendly calendar here for easy scheduling
              </p>
              <iframe
                src="https://calendly.com/your-calendly-link"
                style={{
                  width: '100%',
                  height: '600px',
                  borderRadius: '8px',
                  border: 'none',
                }}
                className="hidden md:block"
              ></iframe>
              <p className="text-xs mt-4">
                Note: Replace the Calendly URL with your actual Calendly link
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-light">
        <div className="container-tight">
          <h2 className="heading-lg mb-12 text-center">Frequently Asked Questions</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: 'What is your typical project timeline?',
                a: 'Project timelines vary based on scope and complexity. Small projects typically take 4-8 weeks, while larger projects may take 3-6 months. We\'ll provide a detailed timeline estimate after our initial consultation.',
              },
              {
                q: 'Do you offer maintenance and support?',
                a: 'Yes, we offer comprehensive maintenance and support packages including bug fixes, performance optimization, and feature updates. We can discuss support options that fit your needs.',
              },
              {
                q: 'What is your pricing model?',
                a: 'We offer flexible pricing models including fixed-price projects, time & materials, and retainer-based engagements. We\'ll work with you to find the model that best fits your budget.',
              },
              {
                q: 'Can you work with existing codebases?',
                a: 'Absolutely! We have extensive experience working with existing systems, including code reviews, migrations, optimization, and feature additions.',
              },
              {
                q: 'Do you sign NDAs?',
                a: 'Yes, we are happy to sign NDAs and understand the importance of protecting your intellectual property and business confidentiality.',
              },
              {
                q: 'How do you manage communication?',
                a: 'We use a combination of regular meetings, Slack channels, and project management tools. You\'ll have direct access to your project lead and regular status updates.',
              },
            ].map((item) => (
              <div key={item.q} className="card">
                <h3 className="font-semibold mb-3">{item.q}</h3>
                <p className="text-gray-600 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="section">
        <div className="container-tight text-center">
          <h2 className="heading-lg mb-8">Next Steps</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                step: '1',
                title: 'Send us a Message',
                desc: 'Fill out the contact form or reach out via email/phone with your project details.',
              },
              {
                step: '2',
                title: 'Schedule a Consultation',
                desc: 'We\'ll schedule a free consultation call to understand your needs and requirements.',
              },
              {
                step: '3',
                title: 'Proposal & Timeline',
                desc: 'We\'ll provide a detailed proposal, timeline estimate, and pricing for your project.',
              },
              {
                step: '4',
                title: 'Get Started',
                desc: 'Upon agreement, we\'ll kick off your project and keep you updated throughout.',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  {item.step}
                </div>
                <div className="text-left">
                  <h3 className="heading-sm">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
