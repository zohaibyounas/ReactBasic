import { cleanup } from '@testing-library/react'
import React, { useEffect, useState } from 'react'

const UseEffect2 = () => {
    const [width ,setWidth] = useState(window.screen.width)
    const actualWidth = () => {
        console.log(window.innerWidth)
        setWidth(window.innerWidth)
    }
    useEffect(() =>{
    window.addEventListener("resize" ,actualWidth)
    return() =>{
        window.removeEventListener("resize" ,actualWidth)
    }
    })

  return (
    <div>
      <p>the actual size of window is</p>
      <h1>{width}</h1>
    </div>
  )
}

export default UseEffect2
