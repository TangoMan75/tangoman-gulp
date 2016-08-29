/**
 * Minify Javascript Task
 * 
 * @version        0.1.0 beta
 * @author         Matthias Morin <matthias.morin@gmail.com>
 * @last-modified  18:14 28/08/2016
 */

/**
 * Handles errors without stopping watch
 * 
 * @param   {Object}  err  Received error
 * @link    https://github.com/gulpjs/gulp/issues/259
 */
function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

// https://www.npmjs.com/package/gulp-uglify
// https://www.npmjs.com/package/gulp-rename
module.exports = function(gulp, plugins){
	return function(cb){

		console.log('----------> Minifying Javascript');

		/**
		 * Source Config
		 * @type {Array}
		 */
		var arSrc = [
			plugins.cfg.dist + 'js/*.js',
			'!' + plugins.cfg.dist + 'js/*.min.js',
		];

		gulp.src(arSrc)
		.pipe(plugins.plumber({ errorHandler: handleError }))
		.pipe(plugins.uglify())
		.pipe(plugins.rename({suffix: '.min'}))
		.pipe(gulp.dest(plugins.cfg.dist + 'js/'))
		.on('end', cb)
	};
};
