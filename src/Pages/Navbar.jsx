import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className='h-14 backdrop-blur-sm border-b-2 border-[#bebcbc] flex justify-around items-center'>
            <p className='text-white font-Emizen text-2xl'>Home</p>
            <p className='text-white font-Emizen text-2xl'>Characters</p>
            <p className='text-white font-Emizen text-2xl'>Owner</p>
        </div>
    </div>
  )
}

export default Navbar