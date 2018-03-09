var express = require('express');
var router = express.Router();
const db = require('../models/index');

/* GET home page. */
router.get('/', function(req, res, next) {

  db.user.sync().then(() => {

    db.user.create({
      firstname: 'ben',
      lastname: 'beny',
      email: 'ben@yahoo.fr'
    }).then(user => {
      res.json({ user : user})
    })
  })
  
});

module.exports = router;
