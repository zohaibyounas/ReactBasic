
import React, {useState} from "react"

const ChangeName = () =>{
    const [myName , setMyName] = useState('this is a hading')
    const ChangeName = () =>{
        myName === 'this is a hading' ?
            setMyName('i am zohaib younas'): setMyName('this is a hading')
        
        
    }
    return(
        <div>
            <h1>{myName}</h1>
            <button onClick={ChangeName}>click me plz</button>
        </div>
    )
}
export default ChangeName;
