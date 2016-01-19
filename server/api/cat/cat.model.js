/**
 * Created by drjs on 2016-01-19.
 */
'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteColor: String,
});

export default mongoose.model('Cat', catSchema);
