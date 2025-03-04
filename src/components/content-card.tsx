interface ContentCardProps {
  title: string
  subtitle: string
  image?: string
  bgColor?: string
  className?: string
}

export default function ContentCard({
  title,
  subtitle,
  bgColor = "bg-purple-900",
  className = "",
}: ContentCardProps) {
  return (
    <div className={`${bgColor} rounded-xl p-4 text-white ${className}`}>
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <span className="text-sm font-bold">{title}</span>
            <span className="text-xs">{subtitle}</span>
          </div>
          <div className="w-12 h-12 rounded-full bg-purple-800 flex items-center justify-center overflow-hidden">
            <span className="text-2xl">👨‍💻</span>
          </div>
        </div>

        <div className="mt-auto pt-2">
          <div className="text-xs bg-black/20 inline-block px-2 py-1 rounded">QR Code</div>
        </div>
      </div>
    </div>
  )
}

