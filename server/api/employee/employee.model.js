'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var EmployeeSchema;
EmployeeSchema = new mongoose.Schema({
  name: String,
  address: {
    name: String,
    number: Number
  },
  phone: Number
});

export default mongoose.model('Employee', EmployeeSchema);
