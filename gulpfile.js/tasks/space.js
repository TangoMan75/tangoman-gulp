/**
 * Adds some line feeds in the console
 *
 * @version 0.2.1
 * @author  Matthias Morin <tangoman@free.fr>
 */

module.exports = function(gulp, plugins, config){
	return function(cb){
		console.log('\r\n\r\n\r\n');
		cb();
	};
};
