'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-secondary text-light">
      <div className="container-wide py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">TS</span>
              </div>
              <span className="font-bold text-lg">suaveeTech</span>
            </div>
            <p className="text-gray-400 mb-6">
              Building scalable SaaS platforms and automation systems for modern businesses.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Products', href: '/products' },
                { label: 'Blog', href: '/blog' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                { label: 'SaaS Development', href: '/services' },
                { label: 'CRM Solutions', href: '/services' },
                { label: 'API Integration', href: '/services' },
                { label: 'Automation', href: '/services' },
                { label: 'DevOps', href: '/services' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:info@suavee.tech" className="hover:text-primary transition">
                  info@suavee.tech
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-primary transition">
                  +917018633650
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>Top Floor Bhaskar Bhawan Devnagar Shimla -171009, Himachal Pradesh, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-tertiary pt-8">
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
            <div>
              <p>&copy; {currentYear} suaveeTech. All rights reserved.</p>
            </div>
            <div className="md:text-right space-x-4">
              <Link href="/privacy" className="hover:text-primary transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
