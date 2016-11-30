/**
 * uncss Task
 *
 * @version        0.2.0
 * @author         Matthias Morin <tangoman@free.fr>
 * @last-modified  00:00 31/08/2016
 */

// https://www.npmjs.com/package/gulp-uncss
module.exports = function(gulp, plugins, config){
	return function(cb){

		console.log('----------> Removing unused CSS');

		/**
		 * uncss Options
		 * @type {Object}
		 */
		var objOption = {
			html: [config.dist + 'index.html']
		}

		gulp.src(config.dist + 'css/**/*.css')
		.pipe(plugins.uncss(objOption))
		.pipe(gulp.dest(config.dist + 'css/'))
		.on('end', cb)
	};
};
