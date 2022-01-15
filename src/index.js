import React, { useState } from 'react'
import { render } from 'react-dom'
import PositionIndicator from './PositionIndicator'
import './style.css'

function App() {
  const [positions, setPositions] = useState({
    left: 0,
    top: 0
  })

  const handleMouseMove = (e) => {
    setPositions({
      left: e.clientX,
      top: e.clientY
    })
  }

  return (
    <div onMouseMove={handleMouseMove} className="movement-container">
      <PositionIndicator positions={positions} />
      <p>Move your mouse around the page to see something cool!</p>
    </div>
  )
}

render(<App />, document.getElementById('root'))
