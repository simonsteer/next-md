import { pick } from 'lodash'
import { DenormalizedContentData, ContentSnapshot } from 'types'

export const getContentSnapshot = (
  content: DenormalizedContentData
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
