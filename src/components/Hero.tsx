import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface HeroProps {
  title: string
  subtitle: string
  ctaText?: string
  ctaLink?: string
  ctaSecondaryText?: string
  ctaSecondaryLink?: string
  backgroundGradient?: string
  showImage?: boolean
}

export function Hero({
  title,
  subtitle,
  ctaText = 'Start Your Project',
  ctaLink = '/contact',
  ctaSecondaryText = 'Book Free Consultation',
  ctaSecondaryLink = '/contact?type=consultation',
  backgroundGradient = 'gradient-primary',
  showImage = true,
}: HeroProps) {
  return (
    <div className={`${backgroundGradient} section flex items-center justify-center text-white pt-32`}>
      <div className="container-tight">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="heading-xl text-white leading-tight">
              {title}
            </h1>
            <p className="text-lg text-gray-100 leading-relaxed">
              {subtitle}
            </p>
            <div className="flex gap-4 flex-wrap pt-4">
              <Link
                href={ctaLink}
                className="btn btn-primary text-white font-semibold flex items-center gap-2 group"
              >
                {ctaText}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href={ctaSecondaryLink}
                className="btn border-2 border-white text-white hover:bg-white hover:text-primary transition"
              >
                {ctaSecondaryText}
              </Link>
            </div>
          </div>

          {showImage && (
            <div className="hidden md:flex justify-center">
              <div className="relative w-full max-w-md h-80">
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary rounded-3xl blur-3xl opacity-20"></div>
                <div className="relative bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-8 border border-white border-opacity-20 h-full flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-6xl">🚀</div>
                    <h3 className="text-2xl font-bold">Build Smarter</h3>
                    <p className="text-sm text-gray-200">
                      Scale your business with cutting-edge technology
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
