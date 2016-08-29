/**
 * HTML Task
 *
 * Injects minified js and css files from dist directory
 * 
 * @version        0.1.0 beta
 * @author         Matthias Morin <matthias.morin@gmail.com>
 * @last-modified  18:14 28/08/2016
 */

// https://www.npmjs.com/package/gulp-inject/
module.exports = function(gulp, plugins){
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
				plugins.cfg.dist + 'css/reset*.min.css',
				plugins.cfg.dist + 'css/normalize*.min.css',
				plugins.cfg.dist + 'css/bootstrap*.min.css',
				plugins.cfg.dist + 'css/*.min.css',
				plugins.cfg.dist + 'js/jquery*.min.js',
				plugins.cfg.dist + 'js/bootstrap*.min.js',
				plugins.cfg.dist + 'js/masonry*.min.js',
				plugins.cfg.dist + 'js/*.min.js',
			];
		} else {
			var arSrc = [
				'!' + plugins.cfg.dist + '**/*.min.*',
				plugins.cfg.dist + 'css/reset*.css',
				plugins.cfg.dist + 'css/normalize*.css',
				plugins.cfg.dist + 'css/bootstrap*.css',
				plugins.cfg.dist + 'css/*.css',
				plugins.cfg.dist + 'js/jquery*.js',
				plugins.cfg.dist + 'js/bootstrap*.js',
				plugins.cfg.dist + 'js/masonry*.js',
				plugins.cfg.dist + 'js/*.js',
			];
		}

		/**
		 * gulp-inject Options
		 * @type {Object}
		 */
		var objOptions = {
			addRootSlash: false,
			relative: false,
			ignorePath: plugins.cfg.distFolderName,
		};

		var sources = gulp.src(arSrc, {read: false});

		gulp.src(plugins.cfg.src + 'index.html')
		.pipe(plugins.inject(sources, objOptions))
		.pipe(gulp.dest(plugins.cfg.dist))
		.on('end', cb)
	};
};
