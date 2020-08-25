import React from 'react'
import { BrowserRouter as Router, useHistory } from 'react-router-dom'

const Hoge = () => {
  const history = useHistory()

  const handleClick = () => {
    history.push('/')
  }

  return (
    <div>
      <p>Hoge</p>
      <button onClick={handleClick}>Top</button>
    </div>
  )
}

export default Hoge
