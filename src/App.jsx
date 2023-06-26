import { Link, Outlet } from "react-router-dom";

export default function App() { 
    return (
        <>
           <div className='w-screen h-screen flex items-center justify-center bg-gradient-to-r from-[red] to-[blue]'>
                <Link to={'/login'}>Login</Link>
                <Link to={'/register'}>Register</Link>
           </div>
        </>
    )
}
