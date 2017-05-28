var express = require("express");
var nieuws = express.Router();

nieuws.get('/items/:id', function(req, res) {
  var newsFile = req.app.get('newsFile');
  var id = req.params.id;
  var teller = 0;
  var item = "";
  while (teller < newsFile.nieuws.length ) {
    if (newsFile.nieuws[teller].id == id) {
      item = newsFile.nieuws[teller];
    }
    teller++;
  }
  if (item !== "") {
    res.render("nieuws", {
      item: item
    });
  } else {
    res.render("404", {});
  }
});

module.exports = nieuws;
