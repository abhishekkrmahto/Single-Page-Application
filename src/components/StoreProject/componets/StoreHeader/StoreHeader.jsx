import React from 'react'
import { Link } from 'react-router-dom'

const StoreHeader = () => {
  return (
    <div className='flex justify-between p-5'>
      <nav className="left flex items-center gap-3 justify-center">
        <img className='w-[60px] h-[50px] rounded-2xl' src="https://cdn-icons-png.flaticon.com/512/7529/7529519.png" alt="" />
        <h1 className='text-2xl font-black underline'>Avi Store</h1>
      </nav>
    </div>
  )
}

export default StoreHeader
