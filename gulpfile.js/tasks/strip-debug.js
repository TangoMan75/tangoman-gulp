/**
 * Strip-debug Task
 *
 * Removes console.logs from javascript in plugins.cfg.dist + 'js/'
 * 
 * @version        0.1.0 beta
 * @author         Matthias Morin <matthias.morin@gmail.com>
 * @last-modified  18:14 28/08/2016
 */

// https://www.npmjs.com/package/gulp-strip-debug
module.exports = function(gulp, plugins){
	return function(cb){

		console.log('----------> Removing console.logs');

		gulp.src(plugins.cfg.dist + 'js/*.js')
		.pipe(plugins.stripDebug())
		.pipe(gulp.dest(plugins.cfg.dist + 'js/'))
		.on('end', cb)
	};
};
