var express = require("express");
var path = require("path");

var app = express();

app.set('port', (process.env.PORT || 3000));

app.set('newsFile', require('./data/news.json'));
app.set('catFile', require('./data/categories.json'));

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

app.use(express.static('public'))


app.use(require("./routes/root_router"));
app.use(require("./routes/detailpag_router"));
app.use(require("./routes/categorieen_router"));


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
