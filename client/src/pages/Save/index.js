import React, {useEffect, useState} from 'react';
// import { db, remove } from '../../../../models/Books';
import SaveList from '../../components/SaveList';
import dbAPI from '../../utils/dbAPI';

function Save() {
  const [books, setBooks] = useState([]);
  const [isLoad, setIsLoad] = useState(false);

  const load = () => {
    dbAPI.allBooks()
      .then(res => {
        // console.log(res.data);
        setBooks([...res.data]);
        setIsLoad(true);
      })
      .catch(err => console.error(err));
  }

  const remove = (id) => {
    dbAPI.deleteBook(id)
      .then(res => load())
      .catch(err => console.error(err));

  }

  useEffect(() => {
    load();
  }, []);

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
