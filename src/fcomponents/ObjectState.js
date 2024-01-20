import React,{useState} from "react";

const ObjectState = () =>{
    const [user , setUser] = useState({name : '', age : 0})

    return(
        <div>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <button onClick={() => setUser({name : 'Zohaib ,Saad' , age : '23,24'})}>Set user</button>
        </div>
    )
}
export default ObjectState