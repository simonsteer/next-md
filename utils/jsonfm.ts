import fm from 'front-matter'
import { pick } from 'lodash'
import { Frontmatter } from 'types'

export function jsonfm(contents: string) {
  return JSON.parse(
    JSON.stringify(pick(fm(contents), ['body', 'attributes']))
  ) as { body: string; attributes: Frontmatter }
}
