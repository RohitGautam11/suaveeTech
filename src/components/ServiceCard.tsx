import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  technologies?: string[]
  isDark?: boolean
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  technologies,
  isDark = false,
}: ServiceCardProps) {
  return (
    <div className={`${isDark ? 'card-dark' : 'card'} card-hover`}>
      <div className="mb-4">
        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
      <h3 className="heading-sm mb-2">{title}</h3>
      <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
        {description}
      </p>
      {technologies && (
        <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200">
          {technologies.map((tech) => (
            <span
              key={tech}
              className={`text-xs font-semibold px-2 py-1 rounded ${
                isDark
                  ? 'bg-primary bg-opacity-10 text-primary'
                  : 'bg-light text-primary'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
