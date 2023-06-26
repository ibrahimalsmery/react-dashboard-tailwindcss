import React from 'react'
import { HiMenu, HiOutlineLogout } from 'react-icons/hi'
export default function Toolbar(props) {
  return (
    <>
    <div className={`flex items-center gap-2 p-3 px-2 h-12 shadow-sm bg-indigo-800`}>
          <button className={`text-white md:hidden text-3xl`} onClick={props.toggleSidebarMobile}><HiMenu/></button>
          <button className={`text-white hidden md:block text-3xl`} onClick={props.toggleSidebar}><HiMenu/></button>
          <span className='flex-1'></span>
          <button className={` text-white text-lg hover:bg-[whitesmoke] hover:text-black px-1 rounded`} >ibrahim_alsmery</button>
          <button className={`bg-[red] text-white  text-3xl rounded hover:bg-transparent hover:border-2 hover:border-[red]`} ><HiOutlineLogout/></button>
    </div>
    </>
  )
}
