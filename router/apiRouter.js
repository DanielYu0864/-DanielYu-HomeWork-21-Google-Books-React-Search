const db = require('../models');

module.exports = (app) => {
  app.post('/api/books',(req, res) => {
    // console.log(req.body);
    db.Book
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  });
  app.get('/api/books',(req, res) => {
    db.Book
      .find(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  });
  app.delete('/api/books/:id', (req, res) => {
    db.Book
    .findById({ _id: req.params.id })
    .then(dbModel => dbModel.remove())
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  });
}