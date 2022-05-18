import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

export default function About() {
  const handleClick=useNavigate()
  return (
    <div>
      <Navbar/>
        <h1>My about page is here</h1>
        <button onClick={()=>{
       handleClick("/")
   }}>Click to Main</button>
    </div>
  )
}
