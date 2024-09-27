import './App.css'
import { motion } from "framer-motion"
import StickyHeader from './components/StickyHeader'
import Menus from './components/Menus'
import { data } from './data.jsx'
import { useState } from 'react'

function App() {
  const [selectedCateg,setSelectedCateg]=useState('all')

  return (
    <>
    <div className='h-100vh font-sans'>

      <div className='flex justify-center sticky z-40'>
      <StickyHeader selectedCateg={selectedCateg} setSelectedCateg={setSelectedCateg} />
      </div>
      <Menus selectedCateg={selectedCateg}/>
      
      
    </div>
    </>
  )
}

export default App
