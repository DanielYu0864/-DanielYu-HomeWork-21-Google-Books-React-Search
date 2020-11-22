import React from 'react'
import Results from '../Results';

function ResultList({books}) {
  const results = books;
  if(books.length >= 10) {
    return (
      <div id='searchResult' className='container border border-primary mx-auto'>
        <div className='title'>
          Search Result Container
        </div>
        <div className='row border border-primary m-1 p-1'>
          <Results
            results={results}
          />
        </div>
      </div>
    )
  } else {
    return (
      <div id='searchResult' className='container border border-primary mx-auto'>
        <div className='title'>
          Search Result Container
        </div>
        <div className='row border border-primary m-1 p-1'>
          <ul className='col-11 border border-primary m-1 p-1 mx-auto'>
            Search for result
          </ul>
        </div>
      </div>
    )
  }

}

export default ResultList
