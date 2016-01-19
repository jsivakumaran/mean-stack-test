/**
 * Created by drjs on 2016-01-19.
 */
'use strict';

var express = require('express');
var controller = require('./cat.controller');
var router = express.Router();



router.post('/', controller.create);

module.exports = router;
