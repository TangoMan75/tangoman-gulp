/**
 * Cleaning Task
 *
 * Deletes all files that are not minified
 *
 * @version        0.2.0
 * @author         Matthias Morin <tangoman@free.fr>
 * @last-modified  00:00 31/08/2016
 * @note           Will run synchronouly since del is not a gulp plugin
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
			config.dist + 'css/*.*',
			'!' + config.dist + 'css/*.min.css',
			config.dist + 'js/*.*',
			'!' + config.dist + 'js/*.min.js',
		];

		del(arTarget);
		cb();
	};
};
