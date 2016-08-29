/**
 * Watch Task
 * 
 * @version        0.1.0 beta
 * @author         Matthias Morin <matthias.morin@gmail.com>
 * @last-modified  18:14 28/08/2016
 */

// https://www.npmjs.com/package/gulp-watch
module.exports = function(gulp, plugins){
	return function(){

		console.log('----------> Watching');

		// Changes in the src directory
		gulp.watch(plugins.cfg.src + 'js/**/*.js', ['js']).on('change', plugins.reload);
		gulp.watch(plugins.cfg.src + 'scss/**/*.{sass,scss}', ['css']).on('change', plugins.reload);
		gulp.watch(plugins.cfg.src + '*.{htm,html}', ['inject']).on('change', plugins.reload);
	};
};
