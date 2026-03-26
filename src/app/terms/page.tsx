import { Metadata } from 'next'
import { Hero } from '@/src/components/Hero'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for suaveeTech',
}

export default function Terms() {
  return (
    <main className="pt-20">
      <Hero
        title="Terms of Service"
        subtitle="Please read these terms carefully"
        showImage={false}
        backgroundGradient="gradient-primary"
      />

      <section className="section bg-light">
        <div className="container-tight max-w-3xl">
          <div className="space-y-8 text-gray-700">
            <div>
              <h2 className="heading-lg mb-4">Terms of Service</h2>
              <p className="mb-4">
                <strong>Last Updated: March 2024</strong>
              </p>
              <p>
                These Terms of Service ("Terms") constitute a binding agreement between you and suaveeTech ("Company,"
                "we," "us," or "our"). By accessing and using the suaveeTech.com website and our services, you agree
                to be bound by these Terms. If you do not agree to these Terms, do not use our services.
              </p>
            </div>

            <div>
              <h3 className="heading-sm mb-4">1. Use License</h3>
              <p className="mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on
                suaveeTech's website for personal, non-commercial transitory viewing only. This is the grant of a
                license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="space-y-2 ml-4">
                <li>• Modifying or copying the materials</li>
                <li>• Using the materials for any commercial purpose or for any public display</li>
                <li>• Attempting to decompile or reverse engineer any software contained on the website</li>
                <li>• Removing any copyright or other proprietary notations from the materials</li>
                <li>• Transferring the materials to another person or "mirroring" the materials on any other server</li>
              </ul>
            </div>

            <div>
              <h3 className="heading-sm mb-4">2. Disclaimer</h3>
              <p className="mb-4">
                The materials on suaveeTech's website are provided on an 'as is' basis. suaveeTech makes no
                warranties, expressed or implied, and hereby disclaims and negates all other warranties including,
                without limitation, implied warranties or conditions of merchantability, fitness for a particular
                purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div>
              <h3 className="heading-sm mb-4">3. Limitations</h3>
              <p className="mb-4">
                In no event shall suaveeTech or its suppliers be liable for any damages (including, without
                limitation, damages for loss of data or profit, or due to business interruption) arising out of the
                use or inability to use materials on suaveeTech's website, even if suaveeTech or an authorized
                representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </div>

            <div>
              <h3 className="heading-sm mb-4">4. Accuracy of Materials</h3>
              <p>
                The materials appearing on suaveeTech's website could include technical, typographical, or
                photographic errors. suaveeTech does not warrant that any of the materials on our website are
                accurate, complete, or current. suaveeTech may make changes to the materials contained on its website
                at any time without notice.
              </p>
            </div>

            <div>
              <h3 className="heading-sm mb-4">5. Links</h3>
              <p>
                suaveeTech has not reviewed all of the sites linked to its website and is not responsible for the
                contents of any such linked site. The inclusion of any link does not imply endorsement by suaveeTech of
                the site. Use of any such linked website is at the user's own risk.
              </p>
            </div>

            <div>
              <h3 className="heading-sm mb-4">6. Modifications</h3>
              <p>
                suaveeTech may revise and change these Terms at any time without notice. Your continued use of the
                website following the posting of revised Terms means that you accept and agree to the changes.
              </p>
            </div>

            <div>
              <h3 className="heading-sm mb-4">7. Governing Law</h3>
              <p>
                These Terms are governed by and construed in accordance with the laws of the State of California, and
                you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </div>

            <div>
              <h3 className="heading-sm mb-4">8. User Content</h3>
              <p className="mb-4">
                You may submit, post, or display content on or via our services. By doing so, you grant suaveeTech a
                non-exclusive, worldwide, royalty-free license to use, copy, reproduce, process, adapt, modify,
                publish, transmit, display, and distribute such content.
              </p>
            </div>

            <div>
              <h3 className="heading-sm mb-4">9. Prohibited Activities</h3>
              <p className="mb-4">You may not:</p>
              <ul className="space-y-2 ml-4">
                <li>• Violate any applicable laws or regulations</li>
                <li>• Infringe on any intellectual property rights</li>
                <li>• Transmit viruses, malware, or harmful code</li>
                <li>• Engage in harassment, abuse, or threatening behavior</li>
                <li>• Attempt to gain unauthorized access to our systems</li>
                <li>• Spam or send unsolicited communications</li>
              </ul>
            </div>

            <div>
              <h3 className="heading-sm mb-4">10. Termination</h3>
              <p>
                suaveeTech may terminate or suspend access to our services at any time, for any reason, at our sole
                discretion, without notice or liability.
              </p>
            </div>

            <div>
              <h3 className="heading-sm mb-4">11. Limitation of Liability</h3>
              <p>
                To the fullest extent permitted by law, in no event will suaveeTech be liable to you for any
                indirect, incidental, special, consequential, or punitive damages, regardless of the cause or theory
                of liability.
              </p>
            </div>

            <div>
              <h3 className="heading-sm mb-4">12. Indemnification</h3>
              <p>
                You agree to indemnify, defend, and hold harmless suaveeTech and its officers, directors, employees,
                and agents from any and all claims, damages, losses, costs, and expenses arising out of or relating to
                your use of our website or services.
              </p>
            </div>

            <div>
              <h3 className="heading-sm mb-4">13. Contact Information</h3>
              <p className="mb-4">
                If you have questions about these Terms of Service, please contact us at:
              </p>
              <div className="p-4 bg-light rounded-lg">
                <p>
                  <strong>suaveeTech</strong>
                  <br />
                  Email: legal@suaveeTech.com
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
