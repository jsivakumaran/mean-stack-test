/**
 * Created by drjs on 2016-01-19.
 */


var mongoose = require('mongoose');
var Cat = require('./cat.model');

export function create(req, res){
  //res.json(req.body);
  Cat.createAsync(req.body)
    .then(function(cat){
      res.status(200).json(cat);
    })
    .catch(function(err){
      return res.status(500);
    });

};
