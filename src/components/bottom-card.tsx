interface BottomCardProps {
  title: string
  subtitle: string
  className?: string
}

export default function BottomCard({ title, subtitle, className = "" }: BottomCardProps) {
  return (
    <div className={`bg-black rounded-xl p-4 text-white ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <div className="text-xs text-gray-400 mb-1">ui Start ⭐ Powered by Bento</div>
          <div className="text-xl font-bold">{title}</div>
          <div className="text-xs text-gray-400">{subtitle}</div>
          <div className="flex gap-1 mt-2">
            <span className="text-xs bg-gray-800 px-2 py-0.5 rounded">Designer</span>
            <span className="text-xs bg-gray-800 px-2 py-0.5 rounded">Developer</span>
          </div>
        </div>
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
          <span className="text-xl">✨</span>
        </div>
      </div>
    </div>
  )
}

