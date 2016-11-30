/**
 * Imagemin Task
 *
 * Optimizes images from `.src/assets/img/` folder
 * 
 * @version        0.1.0
 * @author         Matthias Morin <tangoman@free.fr>
 * @last-modified  22:41 31/08/2016
 */

// https://www.npmjs.com/package/gulp-imagemin
// https://www.npmjs.com/package/gulp-changed
module.exports = function(gulp, plugins, config){
	return function(cb){

 	gulp.src(config.src + 'assets/img/**/*.{gif,jpeg,jpg,png,svg}')
		.pipe(plugins.changed(config.dist))
		.pipe(plugins.imagemin())
		.pipe(gulp.dest(config.dist + 'img/'))
		.on('end', cb);
	};
};
