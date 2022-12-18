import { DenormalizedContentData } from 'types'

export const getPaths = (items: DenormalizedContentData[]) => {
  const paths: string[] = []

  let scan = [...items]
  while (scan.length > 0) {
    const curr = scan.shift()!
    if (curr.type === 'category') scan.push(...curr.data.items)
    paths.push(curr.data.route)
  }

  console.log(paths)

  return paths
}
