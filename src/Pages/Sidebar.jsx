import React from 'react'
import SideBarElement from '../Component/SideBarElement'
import Img1 from '../images/1_f.jpeg'
import Img2 from '../images/2_f.jpeg'


const Sidebar = () => {
  return (
    <div className=' overflow-y-auto h-[90vh] border-r-2 border-white'
      style={{
        WebkitScrollbar: 'none', // Hide scrollbar in WebKit browsers
        scrollbarWidth: 'none',  // Hide scrollbar in Firefox
      }}
      >
        <SideBarElement ImagePath={Img1} NameCharacter="muichiro tokito"  />
        <SideBarElement ImagePath={Img2} NameCharacter="kamado tanjiru"  />
        <SideBarElement ImagePath={Img2} NameCharacter="kamado tanjiru"  />
        <SideBarElement ImagePath={Img2} NameCharacter="kamado tanjiru"  />
        <SideBarElement ImagePath={Img2} NameCharacter="kamado tanjiru"  />
        <SideBarElement ImagePath={Img2} NameCharacter="kamado tanjiru"  />
        <SideBarElement ImagePath={Img2} NameCharacter="kamado tanjiru"  />

    </div>
  )
}

export default Sidebar