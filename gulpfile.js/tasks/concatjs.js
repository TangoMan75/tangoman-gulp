/**
 * Javascript Task
 *
 * Concatenates all .js files from plugins.cfg.src + 'js/src/' to plugins.cfg.dist + 'js/main.js'
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

// https://www.npmjs.com/package/gulp-concat
module.exports = function(gulp, plugins){
	return function(cb){

		console.log('----------> Merging Javascript');

		/**
		 * Concat Source Config
		 *
		 * @note You can force desired combination placing pathes in order in this array
		 * @type {Array}
		 */
		var arSrc = [
			plugins.cfg.src + 'js/**/*.js'
		];

		gulp.src(arSrc)
		.pipe(plugins.plumber({ errorHandler: handleError }))
		.pipe(plugins.concat(plugins.cfg.project.name + '-' + plugins.cfg.project.version + '.js'))
		.pipe(gulp.dest(plugins.cfg.dist + 'js/'))
		.on('end', cb);
	};
};
