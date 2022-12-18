import { GetStaticPaths } from 'next'
import { getMarkdownPages, getPaths } from './getMarkdownPageData'

export const getMarkdownStaticPaths: GetStaticPaths = () => ({
  paths: getPaths(getMarkdownPages()),
  fallback: false,
})
