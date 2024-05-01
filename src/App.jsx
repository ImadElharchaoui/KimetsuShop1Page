import React from 'react'
import Navbar from './Pages/Navbar'
import Wallpaper from './images/wallpaper.png'
import Sidebar from './Pages/Sidebar'
import News from './Pages/News'

const App = () => {
  return (
    <div className='h-full flex flex-col'>
      <img className='absolute -z-10 brightness-50 h-full w-full' src={Wallpaper} alt="" />
      <Navbar />

      <div className='flex'>
          <div className='w-[500px]'>
            <Sidebar />
          </div>

        <News />

      </div>
      
      
    </div>
    
  )
}

export default App