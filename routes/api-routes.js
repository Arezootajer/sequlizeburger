const db = require('../models');
const express = require('express');
const router = express.Router();




router.post('/new', (req, res) => {
  let burger = {
    burger_name: req.body.burger_name
  };
  db.Burgers.create(burger).then(data => {
    res.redirect('/');
  })
});

router.put('/:id', (req, res) => {
  let burger = {
    update: {devoured:parseInt(req.body.devoured)},
    where: {where:{id:parseInt(req.params.id)}}
  };
  db.Burgers.update(burger.update,burger.where).then(data => {
    res.redirect('/');
  });
});


module.exports = router;