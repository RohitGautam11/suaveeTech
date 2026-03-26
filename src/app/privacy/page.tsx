import { Metadata } from 'next'
import { Hero } from '@/src/components/Hero'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for suaveeTech',
}

export default function Privacy() {
  return (
    <main className="pt-20">
      <Hero title="Privacy Policy" subtitle="Our commitment to protecting your data" showImage={false} backgroundGradient="gradient-primary" />

      <section className="section bg-light">
        <div className="container-tight max-w-3xl prose prose-gray">
          <div className="space-y-8">
            <div>
              <h2 className="heading-lg mb-4">Privacy Policy</h2>
              <p className="text-gray-700 mb-4">
                <strong>Last Updated: March 2024</strong>
              </p>
              <p className="text-gray-700">
                suaveeTech ("we," "our," or "us") operates the suaveeTech.com website. This Privacy Policy
                explains how we collect, use, disclose, and otherwise handle your information when you use our
                website and services.
              </p>
            </div>

            <div>
              <h3 className="heading-sm mb-4">1. Information We Collect</h3>
              <p className="text-gray-700 mb-4">
                We may collect information about you in a variety of ways we receive it:
              </p>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li>
                  <strong>Contact Information:</strong> Name, email address, phone number, company name, and other
                  information you provide when submitting a contact form or contacting us directly.
                </li>
                <li>
                  <strong>Automatically Collected Information:</strong> When you visit our website, we automatically
                  collect certain information about your device and browsing activities, including:
                  <ul className="ml-4 mt-2 space-y-1">
                    <li>• IP address</li>
                    <li>• Browser type and version</li>
                    <li>• Pages visited and time spent on pages</li>
                    <li>• Referring URL</li>
                    <li>• Device type and operating system</li>
                  </ul>
                </li>
                <li>
                  <strong>Cookies:</strong> We use cookies and similar technologies to enhance your browsing
                  experience and analyze site usage.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="heading-sm mb-4">2. How We Use Your Information</h3>
              <p className="text-gray-700 mb-4">We use the information we collect to:</p>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li>• Respond to your inquiries and provide customer support</li>
                <li>• Send you marketing communications (if you opt in)</li>
                <li>• Improve our website and services</li>
                <li>• Analyze site usage and performance</li>
                <li>• Comply with legal obligations</li>
                <li>• Detect and prevent fraudulent transactions</li>
                <li>• Personalize your experience on our website</li>
              </ul>
            </div>

            <div>
              <h3 className="heading-sm mb-4">3. Information Sharing</h3>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or rent your personally identifiable information to third parties. We may
                share information with:
              </p>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li>• Service providers who assist us in operating our website and conducting business</li>
                <li>• Legal authorities when required by law</li>
                <li>• Business partners with your consent</li>
              </ul>
            </div>

            <div>
              <h3 className="heading-sm mb-4">4. Data Security</h3>
              <p className="text-gray-700">
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. However, no transmission over the
                Internet is 100% secure.
              </p>
            </div>

            <div>
              <h3 className="heading-sm mb-4">5. Your Rights</h3>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li>• Access your personal information</li>
                <li>• Request correction of inaccurate data</li>
                <li>• Request deletion of your data</li>
                <li>• Opt out of marketing communications</li>
                <li>• Request a copy of your data</li>
              </ul>
            </div>

            <div>
              <h3 className="heading-sm mb-4">6. Cookies</h3>
              <p className="text-gray-700">
                Our website uses cookies to enhance your user experience. You can control or delete cookies through
                your browser settings. Disabling cookies may affect the functionality of our website.
              </p>
            </div>

            <div>
              <h3 className="heading-sm mb-4">7. Third-Party Links</h3>
              <p className="text-gray-700">
                Our website contains links to third-party websites. We are not responsible for the privacy practices
                of these external sites. We encourage you to review their privacy policies.
              </p>
            </div>

            <div>
              <h3 className="heading-sm mb-4">8. Changes to This Privacy Policy</h3>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new policy on our website and updating the "Last Updated" date above.
              </p>
            </div>

            <div>
              <h3 className="heading-sm mb-4">9. Contact Us</h3>
              <p className="text-gray-700">
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-light rounded-lg">
                <p className="text-gray-700">
                  <strong>suaveeTech</strong>
                  <br />
                  Email: info@suaveeTech.com
                  <br />
                  Phone: +1 (234) 567-8900
                  <br />
                  Address: 123 Tech Street, San Francisco, CA 94105
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
