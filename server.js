var express    = require('express');
var exphbs = require('express-handlebars');
var logger = require("morgan");
var PORT = process.env.PORT || 3000;
var app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.set('views', './views')
app.engine(
  "handlebars",exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

require('./routes/apiRoutes')(app)

app.listen(PORT, function() {
    console.log("Listening on Port",PORT);
  });