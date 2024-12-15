import { useState } from 'react'

import './App.css'
import Navigation from './component/Navigation'
import Center from './component/Center'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Store from './component/Store'
import AboutUs from './component/About'
import Contact from './component/Contact'
import LoginCard from './component/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
       
         <Routes>
        <Route path='/' element = {<Home/>}/>
        {/* <Route path="/home" element={<Home/>} /> */}
        {/* <Route path="/store" element={<Store />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path='/login' element = {<LoginCard/>} />
      </Routes>
    </BrowserRouter>
   
      
          
    </div>
  )
}

export default App
