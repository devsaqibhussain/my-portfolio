import React from 'react'
import {Navbar, Hero, Aboutme, Project, Contact} from "./components"
const App = () => {
  return (
    <div className='w-full bg-stone-900'>
      <div className="container m-auto">
          <Navbar/>
        <div className=' px-5 sm:px-20'>
          <Hero/> 
          <Aboutme/> 
          <Project/> 
          <Contact/> 
        </div>
      </div>
    </div>
  )
}

export default App