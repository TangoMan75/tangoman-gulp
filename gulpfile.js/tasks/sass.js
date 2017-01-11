/**
 * Compiles SASS and SCSS files, and generates sourcemap
 *
 * Use `gulp sass --prod` to disable sourcemaps
 *
 * @version  1.0.1
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

/**
 * @requires  The following modules
 * https://www.npmjs.com/package/gulp-plumber
 * https://www.npmjs.com/package/gulp-sass
 * https://www.npmjs.com/package/gulp-sourcemaps
 * https://www.npmjs.com/package/gulp-util
 */
module.exports = function(gulp, plugins, config){
	return function(cb){

		console.log('\r\n\r\n----------> Compiling SASS');

		/**
		 * Sass Options
		 * @type {Object}
		 */
		var objOptions = {
			// outputStyle: 'compressed',
			outputStyle: 'expanded',
		};

		gulp.src(config.src.scss + '/**/*.{sass,scss}')
		.pipe(!plugins.util.env.prod ? plugins.sourcemaps.init('debug') : plugins.util.noop())
		.pipe(plugins.plumber({ errorHandler: handleError }))
		.pipe(plugins.sass(objOptions))
		.pipe(!plugins.util.env.prod ? plugins.sourcemaps.write() : plugins.util.noop())
		.pipe(gulp.dest(config.dest.scss))
		.on('end', cb);
	};
};
