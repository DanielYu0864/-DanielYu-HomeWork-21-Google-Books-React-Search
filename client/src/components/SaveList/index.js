import React from 'react'

function SaveList({books, remove}) {
  return (
    <>
      {
        books.map(result => (
          <div key={result._id} className="card m-9 p-1 border border-primary mx-auto" style={{'marginBottom': '12px'}}>
          <div className="row no-gutters">
              <div className="col-md-4">
                <img src={result.image} className="card-img" alt="image"/>
              </div>
              <div className="col-md-8 mx-auto">
                <div className="card-body">
                  <h5 className="card-title">{result.title}</h5>
                  <p className="card-text">{result.authors}</p>
                  <a href={result.link}><button className='m-9 mb-5'>Look More</button></a>
                  <button onClick={() => remove(result._id)}>Remove from save</button>
                  <p className="card-text">{result.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default SaveList;
