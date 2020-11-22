import React from 'react'

function From({value, handleSearchBtn, handleInputChange}) {
  // console.log(value)
  return (

    <div className=' container border border-primary m-1 p-1 mx-auto' style={{width: '100vw'}}>
      <form
        type='text'
        onChange={handleInputChange}
        value={value}
        name='book'
      >

      <div className='input-group' style={{'width': '70%', 'marginLeft': '16%'}}>
        <div className='input-group-prepend'>
          <span className='input-group-text'>Find Books</span>
        </div>
        <input type='text' aria-label='search' className='form-control'/>
        <button
          type='submit'
          className='ml-1 btn btn-primary'
          data-toggle='button'
          onClick={handleSearchBtn}>Search Book</button>
      </div>


      </form>
    </div>
  )
}

export default From;
