const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const indexRoutes = require( __dirname + '/routes/index');

const app = express();


//settings
app.set( 'port', process.env.PORT || 3000 );
app.set( 'views', path.join( __dirname, 'views' ) );
app.set( 'view engine', 'ejs' );

//middleware
app.use( logger('dev') );
app.use( bodyParser.urlencoded({extended:false}) );

//routes
app.use( '/', indexRoutes );

app.listen( app.get('port'), () => {
  console.log('server on port ' + app.get('port'));
});
