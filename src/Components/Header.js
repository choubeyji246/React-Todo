import React from 'react'

export default function Header(props) {
  return (
    <div className='navbar'>
        <nav>
            <h1>{props.title}</h1>
        </nav>
    </div>
  )
}
