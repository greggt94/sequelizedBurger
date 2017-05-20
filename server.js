var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var routes = require('./controllers/burgers_controller.js');
var db = require('./models');

var app = express();
var PORT = process.env.PORT || 3010;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/burgers', routes);
app.use('/public', express.static('public'));

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("Listening...");
    });
});
