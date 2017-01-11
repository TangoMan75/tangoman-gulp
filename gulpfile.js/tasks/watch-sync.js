/**
 * Watcher with browser-sync auto reload
 * 
 * @version  0.4.1
 * @author   Matthias Morin <tangoman@free.fr>
 */

// https://www.npmjs.com/package/gulp-watch
// https://www.npmjs.com/package/browser-sync
module.exports = function(gulp, plugins, config){
	return function(){

		console.log('\r\n\r\n----------> Watching');

		// Changes in the src directory
		gulp.watch(config.src.img + '/**/*.{gif,jpeg,jpg,png,svg}', ['imagemin']).on('change', plugins.reload);
		gulp.watch(config.src.js + '/**/*.js', ['js']).on('change', plugins.reload);
		gulp.watch(config.src.scss + '/**/*.{sass,scss}', ['css']).on('change', plugins.reload);
		gulp.watch(config.src + '*.{htm,html}', ['html']).on('change', plugins.reload);
	};
};
