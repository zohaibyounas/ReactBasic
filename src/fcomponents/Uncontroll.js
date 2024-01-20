import React,{useRef, useState} from 'react'

const Uncontroll = () => {
    const [show , setShow] = useState(false)
    const LuckyName = useRef(0)
    const passwordRef = useRef(0);
   const submitForm  = (e) =>{
   e.preventDefault()
   const name= LuckyName.current.value
   const password = passwordRef.current.value;
   name === "" || password === '' ? alert('plz fill the form') : setShow(true)
   }
  return (
    <>
    <div className='had'>
      <form action='' onSubmit={submitForm}>
  <div className=''>
    <label htmlFor='LuckyName'>Enter your LuckyName</label><br/>
    <input type='text' id='LuckyName' ref={LuckyName} />
  </div>
  <br/>
  <div className=''>
            <label htmlFor='password'>Enter your Password</label><br/>
            <input type='password' id='password' ref={passwordRef} />
          </div>
          <br/>

  <button>submit</button>
      </form>
      <p>{ show ? `your LackyName is ${LuckyName.current.value}` : ''}</p>

    </div>
    </>
  )
}

export default Uncontroll

