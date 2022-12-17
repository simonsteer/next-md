import path from 'path'
import fs from 'fs'
import { FolderItem } from 'types'

export function listFolderItems(pathToFolder: string) {
  const items = fs.readdirSync(pathToFolder)
  return items.map(item => listItems(path.join(pathToFolder, item)))
}

function listItems(pathToItem: string): string | FolderItem {
  const itemName = pathToItem.slice(pathToItem.lastIndexOf('/') + 1)

  if (fs.lstatSync(pathToItem).isDirectory()) {
    const folderItems = fs.readdirSync(pathToItem)
    const itemList = folderItems.map(item =>
      listItems(path.join(pathToItem, item))
    )
    return [itemName, itemList]
  } else {
    return itemName
  }
}
