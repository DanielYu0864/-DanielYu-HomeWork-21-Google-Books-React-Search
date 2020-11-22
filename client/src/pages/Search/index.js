import React, { useState, useEffect } from 'react'
import From from '../../components/Form';
import ResultList from '../../components/ResultList';
import API from '../../utils/API';
function Search() {
  const [search, setSearch] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearchBtn = (event) => {
    event.preventDefault();
    if(!search) {
      return;
    } else {
      API.searchBooks(search)
      .then(res => {
        let itemsArray = res.data.items;
        // console.log(itemsArray);
        return itemsArray
      })
      .then(items => {
        // console.log(items);
        setBooks([...items]);
        // if(books.length) console.log(books);
      })
      .catch(err => console.log(err));
    }

  }

  const handleInputChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setSearch(value)
  }

  return (
    <div>
      <From
        value={search}
        handleSearchBtn={handleSearchBtn}
        handleInputChange={handleInputChange}/>

      <ResultList
        books={books}/>
    </div>
  )

}

export default Search;
