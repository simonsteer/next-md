import { useBreadcrumbs } from 'hooks'
import Link from 'next/link'

export const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs()

  return (
    <div className="flex items-center gap-2 flex-wrap mb-14 text-xs">
      <Link
        className="dark:text-neutral-100 text-neutral-800 hover:opacity-50"
        href="/"
      >
        🏡
      </Link>
      {breadcrumbs.map((crumb, index) => (
        <Link
          className="dark:text-neutral-100 text-neutral-800 before:content-['>'] before:mr-2 group"
          href={crumb.route}
          key={index}
        >
          <span className="group-hover:opacity-50">{crumb.title}</span>
        </Link>
      ))}
    </div>
  )
}
