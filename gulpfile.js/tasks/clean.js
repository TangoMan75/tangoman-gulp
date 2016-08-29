/**
 * Cleaning Task
 *
 * Deletes all files that are not minified
 *
 * @version        0.1.0 beta
 * @author         Matthias Morin <matthias.morin@gmail.com>
 * @last-modified  18:14 28/08/2016
 * @note           Will run synchronouly since del is not a gulp plugin
 */

module.exports = function(gulp, plugins){
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
			plugins.cfg.dist + 'css/*.*',
			'!' + plugins.cfg.dist + 'css/*.min.css',
			plugins.cfg.dist + 'js/*.*',
			'!' + plugins.cfg.dist + 'js/*.min.js',
		];

		del(arTarget);
		cb();
	};
};
