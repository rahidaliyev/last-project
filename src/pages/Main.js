import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

export default function Main() {
    const handleClick=useNavigate()
  return (
  <>
        <Navbar/>
   <h1>My Main page is here</h1>
   <button onClick={()=>{
       handleClick("/service")
   }}>Click to Service</button>
  </>

  )
}
