import Link from 'next/link'
import { Check } from 'lucide-react'

interface PricingCardProps {
  name: string
  price: string | number
  description: string
  features: string[]
  isPopular?: boolean
  cta: {
    text: string
    link: string
  }
  isDark?: boolean
}

export function PricingCard({
  name,
  price,
  description,
  features,
  isPopular = false,
  cta,
  isDark = false,
}: PricingCardProps) {
  return (
    <div
      className={`relative rounded-xl transition-all duration-300 ${
        isPopular
          ? 'border-2 border-primary ring-2 ring-primary ring-opacity-20 transform scale-105'
          : isDark
          ? 'card-dark border border-dark-tertiary'
          : 'card border border-gray-200'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}

      <div className="pt-8 px-6 pb-6 h-full flex flex-col">
        <h3 className="heading-sm mb-2">{name}</h3>
        <p className={`text-sm mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {description}
        </p>

        <div className="mb-6">
          <span className="text-4xl font-bold">${price}</span>
          {typeof price === 'number' && (
            <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              /month
            </span>
          )}
        </div>

        <ul className="space-y-3 mb-8 flex-grow">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-3">
              <Check className="w-4 h-4 text-primary flex-shrink-0" />
              <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <Link
          href={cta.link}
          className={`btn w-full text-center font-semibold ${
            isPopular
              ? 'btn-primary text-white'
              : isDark
              ? 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
              : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
          }`}
        >
          {cta.text}
        </Link>
      </div>
    </div>
  )
}
