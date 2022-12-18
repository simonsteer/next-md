import { Children, createElement } from 'react'
import { HeadingProps } from 'react-markdown/lib/ast-to-react'
import slugify from 'slugify'

export const Heading = ({ children, level }: HeadingProps) => {
  const el = `h${level}`
  const id = getHeadingIdFromChildren(children)
  return createElement(el, { id }, children)
}

// https://github.com/remarkjs/react-markdown/issues/69#issuecomment-289860367

const getHeadingIdFromChildren = (children: HeadingProps['children']) => {
  const text = Children.toArray(children).reduce(flatten as any, '') as string

  let id = slugify(text, { lower: true, strict: true })
  if (!Number.isNaN(parseInt(id[0]))) id = '_' + id

  return id
}

const flatten = (text: string, child: JSX.Element): string =>
  typeof child === 'string'
    ? text + child
    : (Children.toArray(child.props.children).reduce(
        flatten as any,
        text
      ) as string)
