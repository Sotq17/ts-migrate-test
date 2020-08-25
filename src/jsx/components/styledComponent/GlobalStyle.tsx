// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/styled-components` if it e... Remove this comment to see the full error message
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    color: blue;
  }
`
