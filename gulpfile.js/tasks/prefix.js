/**
 * Autoprefixer Task
 *
 * Prefixes every css file in the dist directory
 *
 * 
 * @note           Attention: Autoprefixer removes embedded sourcemaps!
 * @version        0.2.0
 * @author         Matthias Morin <matthias.morin@gmail.com>
 * @last-modified  00:00 31/08/2016
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

// https://www.npmjs.com/package/gulp-autoprefixer
// https://www.npmjs.com/package/gulp-plumber
module.exports = function(gulp, plugins, config){
	return function(cb){

		console.log('----------> Prefixing CSS');

		/**
		 * Autoprefixer Config
		 * @type {Object}
		 * @url  https://github.com/postcss/autoprefixer#options
		 * @url  https://github.com/ai/browserslist#queries
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

		gulp.src(config.dist + 'css/*.css')
		.pipe(plugins.plumber({ errorHandler: handleError }))
		.pipe(plugins.autoprefixer(objOptions))
		.pipe(gulp.dest(config.dist + 'css/'))
		.on('end', cb);
	};
};
