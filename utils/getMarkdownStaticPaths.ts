import { GetStaticPaths } from 'next'
import { getMarkdownPages, getPaths } from './getMarkdownPageData'

export const getMarkdownStaticPaths: GetStaticPaths = () => {
  const paths = getPaths(getMarkdownPages())

  return {
    paths,
    fallback: false,
  }
}
