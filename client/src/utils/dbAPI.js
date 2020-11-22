const axios = require('axios');

export default {
  //* api call to connect with node server
  // save book info to database
  saveBook : bookData => {
      return axios.post("/api/books", bookData);
  },
  // get all books info from database
  allBooks : () => {
      return axios.get("/api/books");
  },
  // delete book from the database
  deleteBook : id => {
      return axios.delete("/api/books/"+id);
  }
};