/**
 * CSSComb Task
 *
 * Formats CSS from dist folder
 * 
 * @version        0.1.0 beta
 * @author         Matthias Morin <matthias.morin@gmail.com>
 * @last-modified  18:14 28/08/2016
 */

// https://www.npmjs.com/package/gulp-csscomb
module.exports = function(gulp, plugins){
	return function(cb){

		console.log('----------> Combing CSS');

		gulp.src(plugins.cfg.dist + 'css/*.css')
		.pipe(plugins.csscomb())
		.pipe(gulp.dest(plugins.cfg.dist + 'css/'))
		.on('end', cb)
	};
};
