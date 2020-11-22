import React, {useEffect, useState} from 'react';
import SaveList from '../../components/SaveList';
import dbAPI from '../../utils/dbAPI';

function Save() {
  const [books, setBooks] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  // load the book info from database
  const load = () => {
    dbAPI.allBooks()
      .then(res => {
        setBooks([...res.data]);
        setIsLoad(true);
      })
      .catch(err => console.error(err));
  }
  // delet the book from database
  const remove = (id) => {
    dbAPI.deleteBook(id)
      .then(res => load())
      .catch(err => console.error(err));

  }
  // load the book info from database every time when the page is render
  useEffect(() => {
    load();
  }, []);
  // make sure the data is been load
  if(!isLoad || books.length === 0) {
    return (
      <div id='saveList' className='container border border-primary mx-auto mt-2' style={{width: '100vw'}}>
        <div>
          Save List
        </div>
        <div className='row border border-primary m-1 p-1'>
          <ul className='col-11 border border-primary m-1 p-1 mx-auto'>
            Save List is empty
          </ul>
        </div>
      </div>
    )
  } else {
    return (
      <div id='saveList' className='container border border-primary mx-auto mt-2' style={{width: '100vw'}}>
        <div className='title'>
          Save List
        </div>
        <div className='row border border-primary m-1 p-1'>
          <ul className='col-11 border border-primary m-1 p-1 mx-auto'>
            <SaveList
              books={books}
              remove={remove}
            />
          </ul>
        </div>
      </div>
    )
  }
}

export default Save
