/**
 * Test Asynchronous Task
 *
 * Test 'task'
 *
 * @version        0.2.0
 * @author         Matthias Morin <tangoman@free.fr>
 * @last-modified  00:00 31/08/2016
 */

// https://www.npmjs.com/package/gulp-util
module.exports = function(gulp, plugins, config){

	/**
	 * Dummy task
	 */
	return function(cb){

		console.log('----------> Test');
		console.log(plugins);
		plugins.util.beep();
		cb();
	};
};
