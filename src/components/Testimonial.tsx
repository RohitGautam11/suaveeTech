import { Star } from 'lucide-react'

interface TestimonialProps {
  quote: string
  author: string
  title: string
  company: string
  rating?: number
  isDark?: boolean
}

export function Testimonial({
  quote,
  author,
  title,
  company,
  rating = 5,
  isDark = false,
}: TestimonialProps) {
  return (
    <div className={`${isDark ? 'card-dark' : 'card'} card-hover`}>
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className={`text-lg mb-6 leading-relaxed ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
        "{quote}"
      </p>
      <div className="border-t pt-4 border-gray-200">
        <p className="font-semibold">{author}</p>
        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {title} at {company}
        </p>
      </div>
    </div>
  )
}
