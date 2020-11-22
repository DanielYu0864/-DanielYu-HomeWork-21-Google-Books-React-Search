import React from 'react'

function Nav() {
  return (
      <nav className='container border border-primary m-1 p-1 mx-auto' style={{width: '100vw'}}>
        <div className=''>
          Google Books Search
        </div>
        <a className="navbar-brand" href="/books/search">
          Search
        </a>
        <a className="navbar-brand" href="/books/save">
          Save
        </a>
      </nav>
  )
}

export default Nav
