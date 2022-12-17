import { GetStaticPaths, GetStaticProps } from 'next'
import { getMarkdownPageStaticProps, getMarkdownStaticPaths } from 'utils'
import { PageProps } from 'types'
import { Page } from 'components'

export const getStaticPaths: GetStaticPaths = getMarkdownStaticPaths

export const getStaticProps: GetStaticProps<PageProps> =
  getMarkdownPageStaticProps

export default Page
