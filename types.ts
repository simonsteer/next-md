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

export type DenormalizedMarkdownData = {
  type: 'document'
  data: {
    depth: number
    fileName: string
    route: string
    body: string
  } & ContentConfig
}

export type DenormalizedCategoryData = {
  type: 'category'
  data: {
    depth: number
    hasCategoryPage: boolean
    route: string
    items: DenormalizedContentData[]
  } & ContentConfig
}

export type MarkdownData = {
  type: 'document'
  data: {
    depth: number
    fileName: string
    route: string
    body: string
  } & ContentConfig
}

export type CategoryData = {
  type: 'category'
  data: {
    depth: number
    hasCategoryPage: boolean
    route: string
    items: ContentSnapshot[]
  } & ContentConfig
}

export type ContentData = MarkdownData | CategoryData

export type DenormalizedPages = DenormalizedContentData[]

export type NormalizedPages = { [route: string]: ContentData }

export type DenormalizedContentData =
  | DenormalizedMarkdownData
  | DenormalizedCategoryData

export type PageProps = {
  content: ContentData
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

export type ToCItem = { text: string; id: string; level: number }

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
