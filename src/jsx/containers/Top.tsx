import React from 'react'
import { BrowserRouter as Router, useHistory } from 'react-router-dom'

export default () => {
  const history = useHistory()

  const handleClick = () => {
    history.push('/hoge')
  }

  return (
    <div>
      <p>TOP</p>
      <button onClick={handleClick}>hoge</button>
    </div>
  )
}
