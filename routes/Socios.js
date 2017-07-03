var express = require('express');
var router = express.Router();

var Socio = require('../models/SocioModel.js');

router.get('/', function(req, res, next) {
  Socio.find(function (err, socios) {
    if (err) return next(err);
    res.json(socios);
  });
});

router.post('/', function(req, res, next) {
  Socio.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.get('/:id', function(req, res, next) {
  Socio.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.put('/:id', function(req, res, next) {
  Socio.findByIdAndUpdate(req.params.id, req.body,
    function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
});

router.delete('/:id', function(req, res, next) {
  Socio.findByIdAndRemove(req.params.id, req.body,
    function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
});

module.exports = router;
