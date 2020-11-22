const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  /*
  * schema output
  {
    title: "title",
    authors: ["authors"],
    description: "description",
    image: "url",
    link: "url"
  }
  */
  title: {
    type: String
  },
  authors: [{
    type: String
  }],
  description: {
    type: String
  },
  image: {
    type: String
  },
  link: {
    type: String
  }
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;