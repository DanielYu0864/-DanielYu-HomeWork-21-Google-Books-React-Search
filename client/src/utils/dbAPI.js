const axios = require('axios');

export default {
  saveBook : function(bookData){
      return axios.post("/api/books", bookData);
  },
  allBooks : function(){
      return axios.get("/api/books");
  },
  deleteBook : function(id){
      return axios.delete("/api/books/"+id)
  }
}