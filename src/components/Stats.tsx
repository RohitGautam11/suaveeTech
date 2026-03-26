interface StatsProps {
  stats: {
    number: string
    label: string
    suffix?: string
  }[]
  isDark?: boolean
}

export function Stats({ stats, isDark = false }: StatsProps) {
  return (
    <div className="section">
      <div className="container-tight">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="heading-lg text-primary">
                {stat.number}
                {stat.suffix}
              </div>
              <p className={`text-lg font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
