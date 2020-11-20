import React from 'react'

function Results({results}) {
  return (
    <>
      {
        results.map(result => (
          <div key={result.id} className="card m-9 p-1 border border-primary mx-auto" style={{'marginBottom': '12px'}}>
            <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={result.volumeInfo.imageLinks.thumbnail} className="card-img" alt="image"/>
                </div>
                <div className="col-md-8 mx-auto">
                  <div className="card-body">
                    <h5 className="card-title">{result.volumeInfo.title}</h5>
                    <p className="card-text">{result.volumeInfo.authors}</p>
                    <a href={result.volumeInfo.infoLink}><button className='m-9 mb-5'>Look More</button></a>
                    <p className="card-text">{result.volumeInfo.description}</p>
                  </div>
                </div>
              </div>
            </div>
        ))
      }
    </>
  )
}

export default Results;
