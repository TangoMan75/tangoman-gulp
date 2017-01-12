/**
 * Optimize PNG, JPEG, GIF and SVG images in the dist folder
 * 
 * @version  1.0.2
 * @author   Matthias Morin <tangoman@free.fr>
 */

// https://www.npmjs.com/package/gulp-imagemin
// https://www.npmjs.com/package/gulp-changed
module.exports = function(gulp, plugins, config){
	return function(cb){

 	gulp.src(config.src.img + '/**/*.{gif,jpeg,jpg,png,svg}')
		.pipe(plugins.changed(config.dest.img))
		.pipe(plugins.imagemin())
		.pipe(gulp.dest(config.dest.img))
		.on('end', cb);
	};
};
