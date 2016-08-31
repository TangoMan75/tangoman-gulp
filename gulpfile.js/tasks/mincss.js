/**
 * Minify CSS Task
 * 
 * @version        0.2.0
 * @author         Matthias Morin <matthias.morin@gmail.com>
 * @last-modified  00:00 31/08/2016
 */

// https://www.npmjs.com/package/gulp-cssnano
// https://www.npmjs.com/package/gulp-rename
module.exports = function(gulp, plugins, config){
	return function(cb){

		console.log('----------> Minifying CSS');

		/**
		 * Source Config
		 * @type {Array}
		 */
		var arSrc = [
			config.dist + 'css/*.css',
			'!' + config.dist + 'css/*.min.css',
		];

		gulp.src(arSrc)
		.pipe(plugins.rename({ suffix: '.min' }))
		.pipe(plugins.cssnano())
		.pipe(gulp.dest(config.dist + 'css/'))
		.on('end', cb)
	};
};
