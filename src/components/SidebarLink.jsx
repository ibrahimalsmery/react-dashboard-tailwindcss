import React from 'react'

export default function SidebarLink(props) {
  return (
    <a {...props} className={`
            hover:bg-indigo-50
            hover:text-indigo-500
            md:w-auto 
            w-full 
            p-3
    `}>{props.children}</a>
  )
}
