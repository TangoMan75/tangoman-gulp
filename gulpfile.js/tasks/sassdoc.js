/**
 * SASS Doc Task
 *
 * Generates SASS documentation
 * 
 * @version        0.2.0
 * @author         Matthias Morin <matthias.morin@gmail.com>
 * @last-modified  00:00 31/08/2016
 * @note           Will run synchronouly since sassdoc is not a gulp plugin
 */

// https://www.npmjs.com/package/sassdoc
var sassdoc = require('sassdoc');	// A documentation tool for sass

module.exports = function(gulp, plugins, config){
	return function(cb){

		console.log('----------> Creating SASS documentation');

		/**
		 * SassDoc Options
		 * @type {Object}
		 */
		var objDestination = {
			dest: config.doc + 'sass/',
		};

		/**
		 * SassDoc Source Config
		 *
		 * @type {Array}
		 */
		var arSrc = [
			config.src + 'scss/**/*.scss',
		];

		gulp.src(arSrc)
		.pipe(sassdoc(objDestination))
		.resume()
		cb();
	};
};
