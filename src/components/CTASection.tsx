import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface CTASectionProps {
  title: string
  subtitle: string
  buttonText?: string
  buttonLink?: string
  isDark?: boolean
}

export function CTASection({
  title,
  subtitle,
  buttonText = 'Get Started Now',
  buttonLink = '/contact',
  isDark = false,
}: CTASectionProps) {
  return (
    <div className={`${isDark ? 'bg-dark-secondary' : 'gradient-primary'} section text-white`}>
      <div className="container-tight text-center space-y-6">
        <h2 className="heading-lg text-white">
          {title}
        </h2>
        <p className="text-lg text-gray-100 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="pt-4">
          <Link
            href={buttonLink}
            className="btn btn-primary text-white font-semibold inline-flex items-center gap-2 group"
          >
            {buttonText}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  )
}
