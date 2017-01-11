/**
 * Concatenates all .js files
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

// https://www.npmjs.com/package/gulp-concat
module.exports = function(gulp, plugins, config){
	return function(cb){

		console.log('\r\n\r\n----------> Merging Javascript');

		/**
		 * Concat Source Config
		 *
		 * @note You can force desired combination placing pathes in order in this array
		 * @type {Array}
		 */
		var arSrc = [
			config.src.js + '/**/*.js'
		];

		gulp.src(arSrc)
		.pipe(plugins.plumber({ errorHandler: handleError }))
		.pipe(plugins.concat(config.project.name + '-' + config.project.version + '.js'))
		.pipe(gulp.dest(config.dest.js))
		.on('end', cb);
	};
};
