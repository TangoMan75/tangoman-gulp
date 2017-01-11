/**
 * Starts watcher on CSS, JS, IMG, and HTML files
 * 
 * @version  1.0.0
 * @author   Matthias Morin <tangoman@free.fr>
 */

// https://www.npmjs.com/package/gulp-watch
module.exports = function(gulp, plugins, config){
	return function(){

		console.log('\r\n\r\n----------> Watching');

		// Changes in the src directory
		gulp.watch(config.src.img + '/**/*.{gif,jpeg,jpg,png,svg}', ['imagemin']);
		gulp.watch(config.src.js + '/**/*.js', ['js']);
		gulp.watch(config.src.scss + '/**/*.{sass,scss}', ['css']);
		gulp.watch(config.src + '*.{htm,html}', ['html']);
	};
};
