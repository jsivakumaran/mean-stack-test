/**
 * Created by drjs on 2016-01-19.
 */
'use strict';

var mongoose = require('mongoose');

var catSchema = new mongoose.Scheme({
  name: String,
  age: Number,
  favoriteColor: String,
});

export default mongoose.model('Cat', catSchema);
