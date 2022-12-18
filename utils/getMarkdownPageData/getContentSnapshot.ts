import { pick } from 'lodash'
import {
  DenormalizedContentData,
  ContentSnapshot,
  PageContentData,
} from 'types'

export const getContentSnapshot = (
  content: DenormalizedContentData | PageContentData
): ContentSnapshot => {
  if (content.type === 'document') {
    return {
      type: content.type,
      ...pick(content.data, [
        'custom',
        'index',
        'description',
        'title',
        'route',
      ]),
    }
  }

  return {
    type: content.type,
    ...pick(content.data, [
      'custom',
      'index',
      'description',
      'title',
      'route',
      'hasCategoryPage',
    ]),
    numItems: content.data.items.length,
  }
}
