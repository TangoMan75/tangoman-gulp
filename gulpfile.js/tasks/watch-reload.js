/**
 * Watcher with live reload
 * 
 * @version  0.1.0 beta
 * @author   Matthias Morin <tangoman@free.fr>
 */

// https://www.npmjs.com/package/gulp-watch
// https://www.npmjs.com/package/gulp-livereload
module.exports = function(gulp, plugins, config){
	return function(){

		console.log('\r\n\r\n----------> Watching');

		plugins.livereload.listen();

		// Changes in the src directory
		gulp.watch(config.src.img + '/**/*.{gif,jpeg,jpg,png,svg}', ['imagemin']).on('change', plugins.livereload());
		gulp.watch(config.src.js + '/**/*.js', ['js']).on('change', plugins.livereload());
		gulp.watch(config.src.scss + '/**/*.{sass,scss}', ['css']).on('change', plugins.livereload());
		gulp.watch(config.src + '*.{htm,html}', ['html']).on('change', plugins.livereload());
	};
};
