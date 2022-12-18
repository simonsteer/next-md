import { omit } from 'lodash'
import path from 'path'
import fs from 'fs'
import { ContentConfig, JSONObject } from 'types'

export const getCategoryConfig = (
  categoryPath: string,
  dirName: string,
  itemIndex: number
): ContentConfig => {
  const config: ContentConfig = {
    title: dirName,
    index: itemIndex,
    description: null,
    custom: {},
  }

  const categoryDataPath = path.join(categoryPath, 'category.json')
  if (fs.existsSync(categoryDataPath)) {
    const categoryData: JSONObject = JSON.parse(
      fs.readFileSync(categoryDataPath).toString()
    )
    if (typeof categoryData.index === 'number') {
      config.index = categoryData.index
    }
    if (typeof categoryData.title === 'string') {
      config.title = categoryData.title
    }
    if (typeof categoryData.description === 'string') {
      config.description = categoryData.description
    }
    config.custom = omit(categoryData, ['index', 'title', 'description'])
  }

  return config
}
