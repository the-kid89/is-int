'use strict';

module.exports = function (x) {
	var type = typeof x;

	return type !== null && (type === 'number');
}