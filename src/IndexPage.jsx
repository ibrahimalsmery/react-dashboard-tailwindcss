import React from 'react'
import { Link } from 'react-router-dom'
const styles = {
  link: "bg-[blue]/75 p-2 text-white rounded mx-1",
}
export default function IndexPage() {
  return (
    <>
      <div className='p-5'>
        <h1 className='mb-5'>Index Page</h1>
        <b className={styles.link}>
          <Link to={'/register'}>Register</Link>
        </b>
        <b className={styles.link}>
          <Link to={'/login'}>Login</Link>
        </b>
      </div>
    </>
  )
}
