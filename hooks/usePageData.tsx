import { createContext, ReactNode, useContext, useMemo } from 'react'
import { PageProps } from 'types'

const PageDataContext = createContext<PageProps>({
  sidebar: [],
  content: {
    type: 'document',
    data: {
      body: '',
      fileName: 'empty',
      index: 0,
      custom: {},
      title: '',
      description: null,
      route: '/',
    },
    pagination: { prev: null, next: null },
  },
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

export const useSidebarData = () => usePageData().sidebar

export const useToCData = () => usePageData().toc

export const usePageContent = () => usePageData().content
