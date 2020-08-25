// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/react` if it exists or add... Remove this comment to see the full error message
import React from 'react'
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/react-dom` if it exists or... Remove this comment to see the full error message
import ReactDOM from 'react-dom'
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/react-router-dom` if it ex... Remove this comment to see the full error message
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/styledComponent/GlobalStyle' ... Remove this comment to see the full error message
import GlobalStyle from './components/styledComponent/GlobalStyle'

const app = document.getElementById('app')

// page
// @ts-expect-error ts-migrate(6142) FIXME: Module './containers/Top.jsx' was resolved to '/Us... Remove this comment to see the full error message
import Top from './containers/Top.jsx'
// @ts-expect-error ts-migrate(6142) FIXME: Module './containers/Hoge.jsx' was resolved to '/U... Remove this comment to see the full error message
import Hoge from './containers/Hoge.jsx'

ReactDOM.render(
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <Router>
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <GlobalStyle />
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <Switch>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Route path="/hoge" component={Hoge} />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Route path="/" component={Top} />
    </Switch>
  </Router>,
  app
)
