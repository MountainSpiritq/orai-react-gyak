import React from 'react'
import MotionTitle from './MotionTitle'
import Categories from './Categories'

export default function StickyHeader({setSelectedCateg,selectedCateg}) {
  return (
    <div className='p-4 bg-gray-800 border border-zinc-300 rounded-3xl min-w-fit max-w-fit place-self-center  '>
      
      <MotionTitle/>
      <Categories electedCateg={selectedCateg} setSelectedCateg={setSelectedCateg} />
    </div>
  )
}
