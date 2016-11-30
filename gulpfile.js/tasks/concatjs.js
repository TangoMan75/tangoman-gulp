/**
 * Javascript Task
 *
 * Concatenates all .js files from config.src + 'js/src/' to config.dist + 'js/main.js'
 *
 * @version        0.2.0
 * @author         Matthias Morin <tangoman@free.fr>
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

// https://www.npmjs.com/package/gulp-concat
module.exports = function(gulp, plugins, config){
	return function(cb){

		console.log('----------> Merging Javascript');

		/**
		 * Concat Source Config
		 *
		 * @note You can force desired combination placing pathes in order in this array
		 * @type {Array}
		 */
		var arSrc = [
			config.src + 'js/**/*.js'
		];

		gulp.src(arSrc)
		.pipe(plugins.plumber({ errorHandler: handleError }))
		.pipe(plugins.concat(config.project.name + '-' + config.project.version + '.js'))
		.pipe(gulp.dest(config.dist + 'js/'))
		.on('end', cb);
	};
};
