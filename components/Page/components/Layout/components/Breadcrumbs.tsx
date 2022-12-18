import { useBreadcrumbs } from 'hooks'
import { SmartLink } from 'components'

export const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs()

  return (
    <div className="flex items-center gap-2 flex-wrap mb-14 text-xs">
      <SmartLink
        className="dark:text-neutral-100 text-neutral-800 hover:opacity-50"
        href="/"
      >
        🏡
      </SmartLink>
      {breadcrumbs.map((crumb, index) => (
        <SmartLink
          className="dark:text-neutral-100 text-neutral-800 before:content-['>'] before:mr-2 group"
          href={crumb.route}
          key={index}
        >
          <span className="group-hover:opacity-50">{crumb.title}</span>
        </SmartLink>
      ))}
    </div>
  )
}
