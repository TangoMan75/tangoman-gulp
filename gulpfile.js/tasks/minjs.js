/**
 * Minify Javascript Task
 * 
 * @version  1.0.0
 * @author   Matthias Morin <tangoman@free.fr>
 */

/**
 * Handles errors without stopping watch
 * 
 * @param   {Object}  err  Received error
 * @url     https://github.com/gulpjs/gulp/issues/259
 */
function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

// https://www.npmjs.com/package/gulp-uglify
// https://www.npmjs.com/package/gulp-rename
module.exports = function(gulp, plugins, config){
	return function(cb){

		console.log('----------> Minifying Javascript');

		/**
		 * Source Config
		 * @type {Array}
		 */
		var arSrc = [
			config.src.js + '/*.js',
			'!' + config.src.js + '/*.min.js',
		];

		gulp.src(arSrc)
		.pipe(plugins.plumber({ errorHandler: handleError }))
		.pipe(plugins.uglify())
		.pipe(plugins.rename({suffix: '.min'}))
		.pipe(gulp.dest(config.dest.js))
		.on('end', cb)
	};
};
