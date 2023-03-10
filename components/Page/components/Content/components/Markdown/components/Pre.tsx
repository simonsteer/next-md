import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { Element, Text } from 'react-markdown/lib/ast-to-react'
import { ReactMarkdownProps } from 'react-markdown/lib/ast-to-react'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import darkTheme from 'prism-react-renderer/themes/vsDark'
import lightTheme from 'prism-react-renderer/themes/vsLight'
import { useTheme } from 'hooks'

const THEMES = {
  dark: darkTheme,
  light: lightTheme,
}

export type PreProps = ComponentPropsWithoutRef<'pre'> & ReactMarkdownProps

export const Pre = forwardRef<HTMLPreElement, PreProps>(({ node }, ref) => {
  const [theme] = useTheme()

  const codeElement = node.children[0] as Element
  const text = codeElement.children[0] as Text
  const codeElementClassName = (codeElement.properties?.className ||
    []) as string[]
  const language = getLanguage(
    codeElementClassName[0]?.slice('language-'.length).trim()
  )

  return (
    <Highlight
      {...defaultProps}
      theme={THEMES[theme]}
      code={text.value}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre ref={ref} className={className} style={style}>
          {tokens.map((line, lineIndex) => (
            <div key={lineIndex} {...getLineProps({ line })}>
              {line.map((token, tokenIndex) => (
                <span key={tokenIndex} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
})

const LANGUAGES: { [L in Language]: true } = {
  markup: true,
  bash: true,
  clike: true,
  c: true,
  cpp: true,
  css: true,
  javascript: true,
  jsx: true,
  coffeescript: true,
  actionscript: true,
  'css-extr': true,
  diff: true,
  git: true,
  go: true,
  graphql: true,
  handlebars: true,
  json: true,
  less: true,
  makefile: true,
  markdown: true,
  objectivec: true,
  ocaml: true,
  python: true,
  reason: true,
  sass: true,
  scss: true,
  sql: true,
  stylus: true,
  tsx: true,
  typescript: true,
  wasm: true,
  yaml: true,
}

const getLanguage = (lang: string): Language => {
  if (lang in LANGUAGES) return lang as Language
  return 'bash'
}
