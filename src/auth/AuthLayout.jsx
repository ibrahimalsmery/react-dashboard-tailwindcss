import React from 'react'
import { Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth';

export default function AuthLayout() {
  console.log(useAuth());
  return (
    <div className='bg-[whitesmoke] h-screen w-screen py-1 md:py-5'>
        <Outlet/>
    </div>
  )
}
