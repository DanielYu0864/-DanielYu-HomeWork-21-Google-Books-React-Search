import React from 'react'

function Nav() {
  return (
      <nav className='navbar navbar-dark bg-primary container border border-primary m-1 p-1 mx-auto' style={{width: '100vw'}}>
        <div className='text-white'>
          Google Books Search
        </div>
        <div>
          <a className="navbar-brand" href="/books/search">
            Search
          </a>
          <a className="navbar-brand" href="/books/save">
            Save
          </a>
        </div>
      </nav>
  )
}

export default Nav
