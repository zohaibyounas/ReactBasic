import React, {useState , useEffect} from "react";
import axios from 'axios'

const Table = () =>{
const [users , setUsers] = useState([])
useEffect(() =>{
   const loadData = async () =>{
 const {data} = await axios.get("https://fakestoreapi.com/users")
      setUsers(data)
   }
   loadData()
},[users])
    return(
        <div>
      <ul>
        {users.map((user) =>{
            return <li key={user.id}>{user.email} -
             {user.name.firstname}</li>
        })}
      </ul>
        </div>
    )
}
export default Table