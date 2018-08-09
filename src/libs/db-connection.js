module.exports = () => {

  const mongoose = require('mongoose');

  mongoose.connect('mongodb://localhost/crud-example', {
    useMongoClinet : true
  });
  return mongoose;
};
