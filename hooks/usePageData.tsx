import { createContext, ReactNode, useContext } from 'react'
import { PageProps } from 'types'

const PageDataContext = createContext<PageProps>({
  sidebar: [],
  content: {
    type: 'document',
    data: {
      body: '',
      fileName: 'empty',
      index: 0,
      depth: 0,
      custom: {},
      title: '',
      description: null,
      route: '/',
    },
  },
  pagination: { prev: null, next: null },
  toc: [],
  breadcrumbs: [],
})

export const PageDataProvider = ({
  children,
  value,
}: {
  value: PageProps
  children: ReactNode
}) => {
  return (
    <PageDataContext.Provider value={value}>
      {children}
    </PageDataContext.Provider>
  )
}

export const usePageData = () => useContext(PageDataContext)

export const useSidebar = () => usePageData().sidebar

export const useToC = () => usePageData().toc

export const usePagination = () => usePageData().pagination

export const usePageContent = () => usePageData().content

export const useBreadcrumbs = () => usePageData().breadcrumbs
