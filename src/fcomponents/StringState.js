import React, {useState} from "react";

const StringState = () =>{
    const [text ,setText] = useState('')

    return(
        <div>
            <input 
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            
            />
            <p>you type: {text}</p>
        </div>
    )
}
export default StringState
    