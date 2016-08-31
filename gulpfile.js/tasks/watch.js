/**
 * Watch Task
 * 
 * @version        0.2.0
 * @author         Matthias Morin <matthias.morin@gmail.com>
 * @last-modified  00:00 31/08/2016
 */

// https://www.npmjs.com/package/gulp-watch
module.exports = function(gulp, plugins, config){
	return function(){

		console.log('----------> Watching');

		// Changes in the src directory
		gulp.watch(config.src + 'js/**/*.js', ['js']).on('change', plugins.reload);
		gulp.watch(config.src + 'scss/**/*.{sass,scss}', ['css']).on('change', plugins.reload);
		gulp.watch(config.src + '*.{htm,html}', ['inject']).on('change', plugins.reload);
	};
};
