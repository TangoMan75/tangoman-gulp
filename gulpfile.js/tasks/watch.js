/**
 * Watch Task
 * 
 * @version        0.4.0
 * @author         Matthias Morin <tangoman@free.fr>
 * @last-modified  22:45 31/08/2016
 */

// https://www.npmjs.com/package/gulp-watch
module.exports = function(gulp, plugins, config){
	return function(){

		console.log('----------> Watching');

		// Changes in the src directory
		gulp.watch(config.assets + 'img/**/*.{gif,jpeg,jpg,png,svg}', ['imagemin']).on('change', plugins.reload);
		gulp.watch(config.src + 'js/**/*.js', ['js']).on('change', plugins.reload);
		gulp.watch(config.src + 'scss/**/*.{sass,scss}', ['css']).on('change', plugins.reload);
		gulp.watch(config.src + '*.{htm,html}', ['html']).on('change', plugins.reload);
	};
};
