const db = require('../models');

module.exports = (app) => {
  // save the book to the database
  app.post('/api/books',(req, res) => {
    db.Book
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  });
  // get all the book from the database
  app.get('/api/books',(req, res) => {
    db.Book
      .find(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  });
  // delete the book from the database by id
  app.delete('/api/books/:id', (req, res) => {
    db.Book
    .findById({ _id: req.params.id })
    .then(dbModel => dbModel.remove())
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  });
}