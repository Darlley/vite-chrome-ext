interface ProfileCardProps {
  icon: string
  title: string
  link: string,
  className?: string
}

export default function ProfileCard({ icon, title, link, className = "" }: ProfileCardProps) {
  return (
    <a className={`bg-gray-100 rounded-xl p-4 flex items-center gap-3 ${className}`} href={link} target="_blank">
      <span className="text-lg">{icon}</span>
      <span className="text-sm font-medium">{title}</span>
    </a>
  )
}

