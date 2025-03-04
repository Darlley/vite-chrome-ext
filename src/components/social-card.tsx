import type { ReactNode } from "react"

interface SocialCardProps {
  icon: ReactNode
  title: string
  subtitle?: string
  description?: string
  actionLabel?: string
  actionColor?: string
  hasGallery?: boolean
  className?: string,
  href: string
}

export default function SocialCard({
  icon,
  title,
  subtitle,
  description,
  actionLabel,
  actionColor = "bg-gray-100",
  hasGallery = false,
  className = "",
  href
}: SocialCardProps) {
  return (
    <div className={`rounded-xl p-4 ${className} hover:opacity-80 transition-opacity hover:scale-95 transition-transform`}>
      <a className="flex flex-col h-full" href={href} target="_blank">
        <div className="flex items-center gap-2 mb-2">
          {icon}
          <div className="flex flex-col">
            <span className="text-sm font-medium">{title}</span>
            {subtitle && <span className="text-xs text-gray-500">{subtitle}</span>}
          </div>
        </div>

        {description && <p className="text-xs text-gray-600 mt-1 mb-2">{description}</p>}

        {hasGallery && (
          <div className="grid grid-cols-2 gap-1 my-2">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="aspect-square bg-gray-200 rounded-md overflow-hidden">
                  <div className="w-full h-full bg-gray-300" />
                </div>
              ))}
          </div>
        )}

        {actionLabel && (
          <div className="mt-auto pt-2">
            <button className={`text-gray-500 text-xs px-3 py-1 rounded-md ${actionColor}`}>{actionLabel}</button>
          </div>
        )}
      </a>
    </div>
  )
}

