import React from 'react'
import From from '../../components/Form';

function Search() {
  return (
    <div>
      <From/>
      <div id='searchResult' className='container border border-primary mx-auto' style={{width: '100vw'}}>
        <div>
          Search Result Container
        </div>
        <div className='row border border-primary m-1 p-1'>
          <ul className='col-11 border border-primary m-1 p-1 mx-auto'>
            Result
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Search;
