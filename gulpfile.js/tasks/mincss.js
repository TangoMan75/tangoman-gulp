/**
 * Minify CSS Task
 * 
 * @version        0.1.0 beta
 * @author         Matthias Morin <matthias.morin@gmail.com>
 * @last-modified  18:14 28/08/2016
 */

// https://www.npmjs.com/package/gulp-cssnano
// https://www.npmjs.com/package/gulp-rename
module.exports = function(gulp, plugins){
	return function(cb){

		console.log('----------> Minifying CSS');

		/**
		 * Source Config
		 * @type {Array}
		 */
		var arSrc = [
			plugins.cfg.dist + 'css/*.css',
			'!' + plugins.cfg.dist + 'css/*.min.css',
		];

		gulp.src(arSrc)
		.pipe(plugins.rename({ suffix: '.min' }))
		.pipe(plugins.cssnano())
		.pipe(gulp.dest(plugins.cfg.dist + 'css/'))
		.on('end', cb)
	};
};
