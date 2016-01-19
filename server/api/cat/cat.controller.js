/**
 * Created by drjs on 2016-01-19.
 */


var mongoose = require('mongoose');
var CatModel = mongoose.model('Cat', {name: String, age: Number});

export function create(req, res){
  //res.json(req.body);
  CatModel.create(req.body, function(err, cat){
    if(err){
      return res.status(500);
    }
    res.status(200).json(cat);
  });
};
