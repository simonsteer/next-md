import { ContentData } from 'types'

export const getPageByRoute = (pages: ContentData[], route: string) => {
  let pagesToCheck = [...pages]

  let content: ContentData | null = null
  const getPage = (item: ContentData) => {
    switch (item.type) {
      case 'category':
        if (item.data.route === route && item.data.hasCategoryPage) {
          content = item
        } else {
          pagesToCheck.push(...item.data.items)
        }
        break
      case 'document':
        if (item.data.route === route) {
          content = item
        }
        break
      default:
        break
    }
  }
  while (content === null && pagesToCheck.length) {
    getPage(pagesToCheck.shift()!)
  }

  return content!
}
