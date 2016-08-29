/**
 * SASS and Sourcemap Task
 *
 * Compiles SASS or SCSS and generates sourcemap from plugins.cfg.src + 'scss' to plugins.cfg.dist + 'css/'
 *
 * Use `gulp sass --production` to disable sourcemaps
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

/**
 * @requires  The following modules
 * https://www.npmjs.com/package/gulp-plumber
 * https://www.npmjs.com/package/gulp-sass
 * https://www.npmjs.com/package/gulp-sourcemaps
 * https://www.npmjs.com/package/gulp-util
 */
module.exports = function(gulp, plugins){
	return function(cb){

		console.log('----------> Compiling SASS');

		/**
		 * Sass Options
		 * @type {Object}
		 */
		var objOptions = {
			// outputStyle: 'compressed',
			outputStyle: 'expanded',
		};

		gulp.src(plugins.cfg.src + 'scss/**/*.{sass,scss}')
		.pipe(!plugins.util.env.production ? plugins.sourcemaps.init('debug') : plugins.util.noop())
		.pipe(plugins.plumber({ errorHandler: handleError }))
		.pipe(plugins.sass(objOptions))
		.pipe(!plugins.util.env.production ? plugins.sourcemaps.write() : plugins.util.noop())
		.pipe(gulp.dest(plugins.cfg.dist + 'css/'))
		.on('end', cb);
	};
};
