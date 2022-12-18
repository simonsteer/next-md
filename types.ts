import { getMarkdownPageStaticProps } from 'utils'

export type MarkdownPageProps = ReturnType<typeof getMarkdownPageStaticProps>

export type ContentConfig = {
  title: string
  index: number
  description: string | null
  custom: JSONObject
}

export type JSONValue =
  | number
  | null
  | boolean
  | string
  | { [key: string]: JSONValue }
  | JSONValue[]

export type JSONObject = { [key: string]: JSONValue }

export type DenormalizedMarkdownPageData = {
  type: 'document'
  data: {
    depth: number
    fileName: string
    route: string
    body: string
  } & ContentConfig
}

export type DenormalizedCategoryPageData = {
  type: 'category'
  data: {
    depth: number
    hasCategoryPage: boolean
    route: string
    items: DenormalizedContentData[]
  } & ContentConfig
}

export type MarkdownPageData = {
  type: 'document'
  data: {
    depth: number
    fileName: string
    route: string
    body: string
  } & ContentConfig
}

export type CategoryPageData = {
  type: 'category'
  data: {
    depth: number
    hasCategoryPage: boolean
    route: string
    items: ContentSnapshot[]
  } & ContentConfig
}

export type PageContentData = MarkdownPageData | CategoryPageData

export type DenormalizedPages = DenormalizedContentData[]

export type NormalizedPages = { [route: string]: PageContentData }

export type DenormalizedContentData =
  | DenormalizedMarkdownPageData
  | DenormalizedCategoryPageData

export type PageProps = {
  content: PageContentData
  sidebar: SidebarItem[]
  toc: ToCItem[]
  breadcrumbs: ContentSnapshot[]
  pagination: Pagination
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

export type ToCItem = { text: string; id: string; depth: number }

export type Pagination = {
  prev: null | ContentSnapshot
  next: null | ContentSnapshot
}

export type ContentSnapshot = CategoryContentSnapshot | DocumentContentSnapshot

export type CategoryContentSnapshot = {
  type: 'category'
  route: string
  hasCategoryPage: boolean
  numItems: number
} & ContentConfig

export type DocumentContentSnapshot = {
  type: 'document'
  route: string
} & ContentConfig
