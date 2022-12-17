import { getMarkdownPageStaticProps } from 'utils'

export type MarkdownPageProps = ReturnType<typeof getMarkdownPageStaticProps>

export type MarkdownPageMetadata = {
  slug: string
  index: number
  custom: any
}

export type FrontmatterDataType =
  | number
  | string
  | boolean
  | null
  | Date
  | FrontmatterDataType[]
  | {
      [key: string]: FrontmatterDataType
    }

export type Frontmatter = {
  [key: string]: FrontmatterDataType
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

export type MarkdownDocument = {
  type: 'document'
  data: {
    fileName: string
    route: string
    body: string
    index: number
    title: string
    metadata: Frontmatter
  }
}

export type MarkdownCategory = {
  type: 'category'
  data: {
    hasCategoryPage: boolean
    route: string
    index: CategoryData['index']
    title: CategoryData['title']
    description: CategoryData['description']
    items: (MarkdownCategory | MarkdownDocument)[]
    metadata: any
  }
}

export type PageContent = MarkdownDocument | MarkdownCategory

export type PageData = {
  content: PageContent
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
  title: string
  active: boolean
  items: SidebarItem[]
}

export type SidebarItem = SidebarCategoryItem | SidebarDocumentItem

export type ToCItem = { text: string; id: string; depth: number }
