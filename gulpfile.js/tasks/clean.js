/**
 * Deletes all files that are not minified in the dist folder
 *
* @version  1.0.0
* @author   Matthias Morin <tangoman@free.fr>
* @note     Will run synchronouly since del is not a gulp plugin
 */

module.exports = function(gulp, plugins, config){
	return function(cb){

		console.log('----------> Cleaning');

		// Delete files and folders
		// https://www.npmjs.com/package/del
		var del = require('del');
		// Not automatically loaded by "gulp-load-plugins" since not a Gulp plugin

		/**
		 * Del Options
		 *
		 * Deletes all files that are not minified
		 * @type {Array}
		 */
		var arTarget = [
			config.dest.css + '/*.*',
			'!' + config.dest.css + '/*.min.css',
			config.dest.js + '/*.*',
			'!' + config.dest.js + '/*.min.js',
		];

		del(arTarget);
		cb();
	};
};
