import { getMarkdownPageStaticProps } from 'utils'

export type MarkdownPageProps = ReturnType<typeof getMarkdownPageStaticProps>

export type MarkdownPageMetadata = {
  slug: string
  index: number
  custom: any
}

export type CategoryData = {
  title: string
  index: number
  description: string | null
  metadata: JSONObject
}

export type JSONValue =
  | number
  | null
  | boolean
  | string
  | { [key: string]: JSONValue }
  | JSONValue[]

export type JSONObject = { [key: string]: JSONValue }

export type MarkdownContentData = {
  type: 'document'
  data: {
    title: string
    index: number
    fileName: string
    route: string
    body: string
    metadata: JSONObject
  }
}

export type CategoryContentData = {
  type: 'category'
  data: {
    title: CategoryData['title']
    index: CategoryData['index']
    hasCategoryPage: boolean
    route: string
    description: CategoryData['description']
    items: ContentData[]
    metadata: CategoryData['metadata']
  }
}

export type ContentData = MarkdownContentData | CategoryContentData

export type PageProps = {
  content: ContentData
  sidebar: SidebarItem[]
  toc: ToCItem[]
}

export type FolderItem = string | [string, FolderItem[]]

export type SidebarDocumentItem = {
  type: 'document'
  route: string
  title: string
  active: boolean
}

export type SidebarCategoryItem = {
  type: 'category'
  route: string
  hasCategoryPage: boolean
  title: string
  active: boolean
  items: SidebarItem[]
}

export type SidebarItem = SidebarCategoryItem | SidebarDocumentItem

export type BreadcrumbItem = { title: string; route: string }

export type ToCItem = { text: string; id: string; depth: number }
