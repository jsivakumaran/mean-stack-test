/**
 * Created by drjs on 2016-01-19.
 */
'use strict';

var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var CatModel = mongoose.model('Cat', {name: String, age: Number});

router.post('/', function(req, res){
  //res.json(req.body);
  CatModel.create(req.body, function(err, cat){
    if(err){
      return res.status(500);
    }
    res.status(200).json(cat);
  });
});

module.exports = router;
