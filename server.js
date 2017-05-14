const express = require('express');
const override = require('method-override');
const bodyParser = require('body-parser');
const exphbs = require("express-handlebars");
const app = express();
const db = require('./models');
let PORT = process.env.PORT || 8080;



app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(override("_method"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use('/', require('./routes/view-routes'));
app.use('/api', require('./routes/api-routes'));



db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});