var express = require("express");
var db = require("./models");
var PORT = process.env.PORT || 8080;
var path = require('path')

var app = express();


// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, '/public')));
// Set Handlebars.
var exphbs = require("express-handlebars");




app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// var routes = re  quire("./controllers/burgers_controller.js");
app.use('/', require('./controllers/html-routes'));
app.use('/api/burgers',require('./controllers/burgers-controller'));
app.use("/api/users",require('./controllers/user-api-routes'));



db.sequelize.sync({force: true}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});




