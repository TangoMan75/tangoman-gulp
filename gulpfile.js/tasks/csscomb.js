/**
 * Formats CSS
 * 
 * @version  1.0.1
 * @author   Matthias Morin <tangoman@free.fr>
 */

// https://www.npmjs.com/package/gulp-csscomb
module.exports = function(gulp, plugins, config){
	return function(cb){

		console.log('----------> Combing CSS');

		gulp.src(config.src.css + '/*.css')
		.pipe(plugins.csscomb())
		.pipe(gulp.dest(config.dest.css))
		.on('end', cb)
	};
};
