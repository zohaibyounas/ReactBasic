import React, { useState } from 'react'

const StateObject = () => {
    const [object ,setObject] = useState({
        name : 'zohaib',
        age : 23,
        dagree : 'BSCS'
    })
const Change = () =>{
    setObject({...object, name : 'saad jan' ,age : 45})
}
  return (
    <div>
      <h1>Name:{object.name} & Age:{object.age} & Dagree:{object.dagree}</h1>
      <button onClick={Change}>Updata</button>
    </div>
  )
}

export default StateObject
