import React, { useState, useEffect } from 'react'
import From from '../../components/Form';
import ResultList from '../../components/ResultList';
import API from '../../utils/API';
function Search() {
  const [search, setSearch] = useState('');
  const [books, setBooks] = useState([]);
  // search the books when the search btn click
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
        setBooks([...items]);
      })
      .catch(err => console.log(err));
    }

  }
  // change the input value
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
