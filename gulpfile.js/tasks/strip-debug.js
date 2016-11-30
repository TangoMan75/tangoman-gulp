/**
 * Strip-debug Task
 *
 * Removes console.logs from javascript in config.dist + 'js/'
 * 
 * @version        0.2.0
 * @author         Matthias Morin <tangoman@free.fr>
 * @last-modified  00:00 31/08/2016
 */

// https://www.npmjs.com/package/gulp-strip-debug
module.exports = function(gulp, plugins, config){
	return function(cb){

		console.log('----------> Removing console.logs');

		gulp.src(config.dist + 'js/*.js')
		.pipe(plugins.stripDebug())
		.pipe(gulp.dest(config.dist + 'js/'))
		.on('end', cb)
	};
};
