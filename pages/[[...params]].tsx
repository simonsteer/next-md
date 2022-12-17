import { GetStaticPaths, GetStaticProps } from 'next'
import { getMarkdownPageStaticProps, getMarkdownStaticPaths } from 'utils'
import { PageData } from 'types'
import { Page } from 'components'

export const getStaticPaths: GetStaticPaths = getMarkdownStaticPaths

export const getStaticProps: GetStaticProps<PageData> =
  getMarkdownPageStaticProps

export default Page
