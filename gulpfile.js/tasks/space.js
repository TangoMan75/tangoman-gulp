/**
 * Adds some line feeds in the console
 *
 * @version        0.1.0 beta
 * @author         Matthias Morin <matthias.morin@gmail.com>
 * @last-modified  18:14 28/08/2016
 */

module.exports = function(gulp, plugins){
	return function(cb){
		console.log('\r\n\r\n\r\n');
		cb();
	};
};
