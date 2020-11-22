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
        <div>search new book from</div>
        <input></input>
        <button type='submit' onClick={handleSearchBtn}>Search Book</button>
      </form>
    </div>
  )
}

export default From;
