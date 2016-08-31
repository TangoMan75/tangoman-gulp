/**
 * HTML Task
 *
 * Injects minified js and css files from dist directory
 * 
 * @version        0.2.0
 * @author         Matthias Morin <matthias.morin@gmail.com>
 * @last-modified  00:00 31/08/2016
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
				config.dist + 'css/reset*.min.css',
				config.dist + 'css/normalize*.min.css',
				config.dist + 'css/bootstrap*.min.css',
				config.dist + 'css/*.min.css',
				config.dist + 'js/jquery*.min.js',
				config.dist + 'js/bootstrap*.min.js',
				config.dist + 'js/masonry*.min.js',
				config.dist + 'js/*.min.js',
			];
		} else {
			var arSrc = [
				'!' + config.dist + '**/*.min.*',
				config.dist + 'css/reset*.css',
				config.dist + 'css/normalize*.css',
				config.dist + 'css/bootstrap*.css',
				config.dist + 'css/*.css',
				config.dist + 'js/jquery*.js',
				config.dist + 'js/bootstrap*.js',
				config.dist + 'js/masonry*.js',
				config.dist + 'js/*.js',
			];
		}

		/**
		 * gulp-inject Options
		 * @type {Object}
		 */
		var objOptions = {
			addRootSlash: false,
			relative: false,
			ignorePath: config.distFolderName,
		};

		var sources = gulp.src(arSrc, {read: false});

		gulp.src(config.src + 'index.html')
		.pipe(plugins.inject(sources, objOptions))
		.pipe(gulp.dest(config.dist))
		.on('end', cb)
	};
};
