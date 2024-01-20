import React, { useState , useMemo } from 'react'

const Memo = () => {
    const [count , setCount] = useState(0)
    const [item , setItem] = useState(10)

    const multiCountMemo = useMemo(() =>{

   
        console.warn("multiplItem")
        return count * 5
    },[count]) 
     
  return (
    <div>
      <h2>Count: {count}</h2>
      <h2>item:: {item}</h2>
      <h2>{multiCountMemo}</h2>
      <button onClick={() => setCount(count + 1) }>Update Count</button>
      <button onClick={() => setItem(item * 10) }>Update Item</button>
    </div>
  )
}

export default Memo
