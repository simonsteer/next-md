import { createContext, ReactNode, useContext, useMemo } from 'react'
import { PageData } from 'types'

const PageDataContext = createContext<PageData>({
  sidebar: [],
  content: {
    type: 'document',
    data: {
      body: '',
      fileName: 'empty',
      index: 0,
      metadata: {},
      route: '/',
      title: '',
    },
  },
})

export const PageDataProvider = ({
  children,
  value,
}: {
  value: PageData
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

export const usePageContent = () => usePageData().content
