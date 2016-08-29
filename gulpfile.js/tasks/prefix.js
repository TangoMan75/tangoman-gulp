/**
 * Autoprefixer Task
 *
 * Prefixes every css file in the dist directory
 *
 * 
 * @note           Attention: Autoprefixer removes embedded sourcemaps!
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

// https://www.npmjs.com/package/gulp-autoprefixer
// https://www.npmjs.com/package/gulp-plumber
module.exports = function(gulp, plugins){
	return function(cb){

		console.log('----------> Prefixing CSS');

		/**
		 * Autoprefixer Config
		 * @type {Object}
		 * @link https://github.com/postcss/autoprefixer#options
		 * @link https://github.com/ai/browserslist#queries
		 */
		var objOptions = {
			browsers: [
				'> 1%',
				'last 2 versions',
				'Android 2.3',
				'Android >= 4',
				'Chrome >= 20',
				'Firefox >= 24',
				'Explorer >= 8',
				'iOS >= 6',
				'Opera >= 12',
				'Safari >= 6',
			], 
			cascade: true,
			add: true,
			remove: true,
			supports: true,
			flexbox: true,
			grid: true,
		};

		gulp.src(plugins.cfg.dist + 'css/*.css')
		.pipe(plugins.plumber({ errorHandler: handleError }))
		.pipe(plugins.autoprefixer(objOptions))
		.pipe(gulp.dest(plugins.cfg.dist + 'css/'))
		.on('end', cb);
	};
};
