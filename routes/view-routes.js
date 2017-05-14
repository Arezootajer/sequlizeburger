const db = require('../models');
const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  db.Burgers.findAll().then(data => {
    let burgersList = {
      burgers: data
    };
    res.render('index', burgersList );
  });
});


module.exports = router;