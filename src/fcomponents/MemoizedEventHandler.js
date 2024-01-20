import React, { useState,useMemo } from 'react'

const MemoizedEventHandler = () => {
    const [count , setCount] =useState(0)
    const handleClick = useMemo(() =>{
        return () => {
            console.log('Button clicked!');
            setCount((prevCount) => prevCount + 1);
          };
    },[])
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default MemoizedEventHandler
