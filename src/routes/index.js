const express = require('express');
const router = express.Router();
const model = require( __dirname + '/../model/task')();

router.get( '/', ( req, res) => {
  model.find( {}, (err, task_p) => {
    if(err)
      throw err;
    res.render( 'index', {
      title : 'CRUD',
      task : task_p
    });
  });
});

module.exports = router;
