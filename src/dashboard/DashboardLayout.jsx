import React, { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom';
import Toolbar from './Toolbar';
// local component
function NavLinkItem(props){
  let location = useLocation();
  let attrs = {...props, className:` capitalize hover:bg-gray-50 w-full block p-3 ${props.className} ${props.to === location.pathname ? 'bg-gray-50':''}`};
  return (
    <li className='w-full overflow-hidden p-0'>
      <Link {...attrs}>{props.children}</Link>
    </li>
  )
}
// local component
function NavLinks() {
  return (
    <>
      <NavLinkItem to='/dashboard'  >dashboard</NavLinkItem> 
      <NavLinkItem to='/dashboard/users'>users</NavLinkItem> 
    </>
  )
}
export default function DashboardLayout() {
  const [sidebarMobile, setSidebarMobile] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebarMobile = () => (setSidebarMobile(!sidebarMobile));
  const toggleSidebar = () => (setSidebar(!sidebar));
  return (
    <div className='h-screen w-screen overflow-x-hidden bg-gray-50'>
      {/* Mobile Sidebar */}
      <div onClick={toggleSidebarMobile} className={`${sidebarMobile ? 'block' : 'hidden'} h-full w-full  absolute bg-black bg-opacity-50`}></div>
      <ul className={`${sidebarMobile ? 'block' : 'hidden'} bg-white absolute w-1/2 h-full p-2 px-0 list-disc`}>
        <NavLinks/>
      </ul>
      <div className=''>
        <Toolbar toggleSidebar={toggleSidebar} toggleSidebarMobile={toggleSidebarMobile}/>
        <div className='h-screen w-full flex flex-row' >
          {/* Sidebar */}
          <ul className={`hidden md:block ${sidebar ? 'md:hidden': ''} bg-white w-44 h-full p-2 px-0 list-disc shadow`}>
             <NavLinks/>
          </ul>
          <main className='flex-1 p-2'>
            <Outlet/>
          </main>
        </div>
      </div>
    </div>
  )
}
