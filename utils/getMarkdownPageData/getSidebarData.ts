import { DenormalizedPages, SidebarItem, DenormalizedContentData } from 'types'

export function getSidebarData(
  data: DenormalizedPages,
  route: string
): SidebarItem[] {
  const processItem = (item: DenormalizedContentData): SidebarItem | false => {
    switch (item.type) {
      case 'category':
        return {
          type: 'category',
          route: item.data.route,
          hasCategoryPage: item.data.hasCategoryPage,
          title: item.data.title,
          active: item.data.hasCategoryPage && item.data.route === route,
          items: item.data.items
            .map(processItem)
            .filter(Boolean) as SidebarItem[],
        }
      case 'document':
        return {
          type: 'document',
          route: item.data.route,
          title: item.data.title,
          active: item.data.route === route,
        }
      default:
        return false
    }
  }

  return data.map(processItem).filter(Boolean) as SidebarItem[]
}
