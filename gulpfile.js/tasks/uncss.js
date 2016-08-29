/**
 * uncss Task
 *
 * @version        0.1.0 beta
 * @author         Matthias Morin <matthias.morin@gmail.com>
 * @last-modified  18:14 28/08/2016
 */

// https://www.npmjs.com/package/gulp-uncss
module.exports = function(gulp, plugins){
	return function(cb){

		console.log('----------> Removing unused CSS');

		/**
		 * uncss Options
		 * @type {Object}
		 */
		var objOption = {
			html: [plugins.cfg.dist + 'index.html']
		}

		gulp.src(plugins.cfg.dist + 'css/**/*.css')
		.pipe(plugins.uncss(objOption))
		.pipe(gulp.dest(plugins.cfg.dist + 'css/'))
		.on('end', cb)
	};
};
