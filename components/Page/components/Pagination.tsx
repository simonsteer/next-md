import clsx from 'clsx'
import { usePagination } from 'hooks'
import Link from 'next/link'
import { ContentSnapshot } from 'types'

export function Pagination() {
  const { next, prev } = usePagination()

  return (
    <div className="mt-28 grid grid-cols-2 gap-x-2">
      <PaginationLink snapshot={prev} type="prev" />
      <PaginationLink snapshot={next} type="next" />
    </div>
  )
}

const PaginationLink = ({
  snapshot,
  type,
}: {
  snapshot: null | ContentSnapshot
  type: 'prev' | 'next'
}) => {
  return snapshot ? (
    <Link
      className={clsx(
        'rounded-md border p-4 dark:border-neutral-700 border-neutral-300 group',
        type === 'next' && 'text-right'
      )}
      href={snapshot.route}
    >
      <div className="group-hover:opacity-50">
        <p className="text-xs font-bold dark:text-neutral-100 text-neutral-800 mb-2">
          {type === 'prev' ? 'Previous' : 'Next'}
        </p>
        <p className="text-sm dark:text-neutral-400 text-neutral-500 truncate">
          {snapshot.title}
        </p>
      </div>
    </Link>
  ) : (
    <div />
  )
}
