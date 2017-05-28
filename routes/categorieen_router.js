var express = require("express");
var categorieen = express.Router();

categorieen.get('/cat/:id', function(req, res) {
  res.render("categorie", {
      id: Number(req.params.id),
      items: req.app.get('newsFile').nieuws,
      categorieen: req.app.get('catFile').categorieen
  });
});

module.exports = categorieen;
