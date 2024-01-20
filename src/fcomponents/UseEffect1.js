import React, {useState,useEffect} from 'react'

const UseEffect1 = () => {
const [cont , setCount] = useState(0)

useEffect(() =>{
    if(cont >= 1){

        document.title = `chats (${cont})`
    }else{
        
        document.title = `chats`
    }

})
  return (
    <div>
     <h1>{cont}</h1>
     <button onClick={() =>setCount(cont + 1)}>click me</button>
    </div>
  )
}

export default UseEffect1
