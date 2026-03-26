import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ProductCardProps {
  title: string
  description: string
  features: string[]
  link: string
  isDark?: boolean
  badge?: string
}

export function ProductCard({
  title,
  description,
  features,
  link,
  isDark = false,
  badge,
}: ProductCardProps) {
  return (
    <div className={`${isDark ? 'card-dark' : 'card'} card-hover flex flex-col h-full`}>
      {badge && (
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary text-white">
            {badge}
          </span>
        </div>
      )}
      <h3 className="heading-sm mb-3">{title}</h3>
      <p className={`mb-6 flex-grow ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
        {description}
      </p>

      <div className="mb-6">
        <p className={`text-sm font-semibold mb-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Key Features:
        </p>
        <ul className="space-y-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
              <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <Link
        href={link}
        className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
      >
        Learn More
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  )
}
