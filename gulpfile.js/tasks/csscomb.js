/**
 * CSSComb Task
 *
 * Formats CSS from dist folder
 * 
 * @version        0.2.0
 * @author         Matthias Morin <matthias.morin@gmail.com>
 * @last-modified  00:00 31/08/2016
 */

// https://www.npmjs.com/package/gulp-csscomb
module.exports = function(gulp, plugins, config){
	return function(cb){

		console.log('----------> Combing CSS');

		gulp.src(config.dist + 'css/*.css')
		.pipe(plugins.csscomb())
		.pipe(gulp.dest(config.dist + 'css/'))
		.on('end', cb)
	};
};
