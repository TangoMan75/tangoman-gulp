/**
 * Injects minified js and css files into html
 * This task is probably useless when you work with a twig template
 * 
 * @version  1.0.1
 * @author   Matthias Morin <tangoman@free.fr>
 */

// https://www.npmjs.com/package/gulp-inject/
module.exports = function(gulp, plugins, config){
	return function(cb){

		console.log('----------> Injecting into html');

		/**
		 * Source Config
		 * 
		 * Forces specified order for inclusions
		 * @type {Array}
		 */
		if (plugins.util.env.production) {
			var arSrc = [
				config.dest.css + '/reset*.min.css',
				config.dest.css + '/normalize*.min.css',
				config.dest.css + '/bootstrap*.min.css',
				config.dest.css + '/*.min.css',
				config.dest.js + 'jquery*.min.js',
				config.dest.js + 'bootstrap*.min.js',
				config.dest.js + 'masonry*.min.js',
				config.dest.js + '*.min.js',
			];
		} else {
			var arSrc = [
				'!' + config.dest + '**/*.min.*',
				config.dest.css + '/reset*.css',
				config.dest.css + '/normalize*.css',
				config.dest.css + '/bootstrap*.css',
				config.dest.css + '/*.css',
				config.dest.js + 'jquery*.js',
				config.dest.js + 'bootstrap*.js',
				config.dest.js + 'masonry*.js',
				config.dest.js + '*.js',
			];
		}

		/**
		 * gulp-inject Options
		 * @type {Object}
		 */
		var objOptions = {
			addRootSlash: false,
			relative: false,
			ignorePath: config.folderName,
		};

		var sources = gulp.src(arSrc, {read: false});

		gulp.src(config.src.index)
		.pipe(plugins.inject(sources, objOptions))
		.pipe(gulp.dest(config.dest))
		.on('end', cb)
	};
};
