/**
 * Test Asynchronous Task
 *
 * Test 'task'
 *
 * @version        0.1.0 beta
 * @author         Matthias Morin <matthias.morin@gmail.com>
 * @last-modified  18:14 28/08/2016
 */

// https://www.npmjs.com/package/gulp-util
module.exports = function(gulp, plugins){

	/**
	 * Dummy task
	 */
	return function(cb){

		console.log('----------> Test');
		console.log('\r\n\r\n\r\n');
		console.log(plugins);
		plugins.util.beep();
		cb();
	};
};
