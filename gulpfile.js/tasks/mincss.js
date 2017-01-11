/**
 * Minifies CSS with cssnano
 * 
 * @version  1.0.0
 * @author   Matthias Morin <tangoman@free.fr>
 */

// https://www.npmjs.com/package/gulp-cssnano
// https://www.npmjs.com/package/gulp-rename
module.exports = function(gulp, plugins, config){
	return function(cb){

		console.log('\r\n\r\n----------> Minifying CSS');

		/**
		 * Source Config
		 * @type {Array}
		 */
		var arSrc = [
			config.src.css + '/*.css',
			'!' + config.src.css + '/*.min.css',
		];

		gulp.src(arSrc)
		.pipe(plugins.rename({ suffix: '.min' }))
		.pipe(plugins.cssnano())
		.pipe(gulp.dest(config.dest.css))
		.on('end', cb)
	};
};
