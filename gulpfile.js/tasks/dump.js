/**
 * Debug
 *
 * Test 'task'
 *
 * @version  1.0.0
 * @author   Matthias Morin <tangoman@free.fr>
 */

// https://www.npmjs.com/package/gulp-util
module.exports = function(gulp, plugins, config){

	/**
	 * Dummy task
	 */
	return function(cb){

		console.log('----------> Config');
		console.log(config);
		console.log('\r\n\r\n\r\n');
		console.log('----------> Plugins');
		console.log(plugins);
		console.log('\r\n\r\n\r\n');
		plugins.util.beep();
		cb();
	};
};
