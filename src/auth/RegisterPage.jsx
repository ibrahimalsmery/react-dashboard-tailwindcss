import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function RegisterPage() {
    const router = useNavigate()
  return (
    <>
        <div className="bg-white mx-auto p-4 w-full md:w-96  shadow rounded">
            <div className="mb-1">
                <input type="text" placeholder="name" className="border-2 border-black w-full p-2" />
            </div>
            <div className="mb-1">
                <input type="email" placeholder="email" className="border-2 border-black w-full p-2" />
            </div>
            <div className="mb-1">
                <input type="password" placeholder="password" className="border-2 border-black w-full p-2 " />
            </div>
            <div>
                <button onClick={()=> router('/dashboard')}  className="block bg-indigo-700 hover:bg-indigo-700/90 p-2 w-full text-white capitalize">register</button>
                <small>I already have account <Link to='/login' className='text-[blue]'>login.</Link></small>
            </div>
        </div>
    </>
)
}
