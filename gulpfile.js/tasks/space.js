/**
 * Adds some line feeds in the console
 *
 * @version        0.2.0
 * @author         Matthias Morin <tangoman@free.fr>
 * @last-modified  00:00 31/08/2016
 */

module.exports = function(gulp, plugins, config){
	return function(cb){
		console.log('\r\n\r\n\r\n');
		cb();
	};
};
