module.exports = () => {

  var db = require( '../libs/db-connection')();
  var schema = require('mongoose').Schema;

  var task = schema({
    title : String,
    description : String,
    status : Boolean
  });

  return db.model( 'task', task );
}
