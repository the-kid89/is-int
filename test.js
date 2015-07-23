'use strict';

var fn = require('./');
var kheck = require('kheck');

if (fn(500)) {
	kheck.Pass("Passed!");
} else {
	kheck.Fail("Fail!");
}