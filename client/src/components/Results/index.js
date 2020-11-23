import React from 'react';
import dbAPI from '../../utils/dbAPI';

function Results({results}) {
  const handleSave = bookData => {
    dbAPI.saveBook(bookData)
        .then(res => console.log(res.data))
        .catch(err => console.error(err));
    alert('Book save!')
  }

  return (
    <>
      {
        results.map(result => (
          <div key={result.id} className="card m-9 p-1 border border-primary mx-auto" style={{'marginBottom': '12px'}}>
            <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={result.volumeInfo.imageLinks !== undefined ? result.volumeInfo.imageLinks.smallThumbnail : 'https://zcms-rubais.softplace.eu/images/2000X3000_noimage.gif'} className="card-img" alt="image"/>
                </div>
                <div className="col-md-8 mx-auto">
                  <div className="card-body">
                    <h5 className="card-title">{result.volumeInfo.title}</h5>
                    <p className="card-text">{result.volumeInfo.authors}</p>
                    <a href={result.volumeInfo.infoLink}>
                      <button
                        className='m-9 mb-5 btn btn-primary'
                        data-toggle="button"
                        aria-pressed="false"
                      >
                        Look More
                      </button>
                    </a>
                    <button
                      className='m-9 mb-5 ml-1 btn btn-primary'
                      data-toggle="button"
                      aria-pressed="false"
                      onClick={() => handleSave({
                      title: result.volumeInfo.title,
                      authors : result.volumeInfo.authors,
                      image : result.volumeInfo.imageLinks.thumbnail,
                      description : result.volumeInfo.description,
                      link : result.volumeInfo.infoLink
                      })}
                    >Save</button>
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
