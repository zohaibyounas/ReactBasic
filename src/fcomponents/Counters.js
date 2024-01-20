import axios from 'axios';
import React, {useEffect, useState} from 'react';

const Counters = () =>{
    const [count, setCount] = useState(0)
    const [products ,setProducts] = useState([])
   useEffect(() =>{
   const lodData = async() =>{
    const {data} = await axios.get("https://fakestoreapi.com/products")
    setProducts(data)
   }
   lodData()
   },[count , products])
    const plus = () =>{
     setCount(count + 1)
    }
    const mins = () =>{
  setCount(count - 1)
    }
    const reset = () =>{
   setCount(0)
    }
    return(
        <div>
            <h1>Count {count}</h1>
            <button onClick={plus}>plus</button>
            <button onClick={mins}>mins</button>
            <button onClick={reset}>reset</button>
            <div>
                <ul>
                    {products.map((product) =>{
                        return <li key={product.id}>{product.title}
                        <img src=
                        {product.image}
                        style={{ width: '100px', height: '100px' }}
/>
                        </li>
                        
                    })}
                </ul>
                
            </div>
        </div>
        
    )
} 
export default Counters;