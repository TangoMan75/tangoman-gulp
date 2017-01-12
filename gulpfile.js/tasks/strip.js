/**
 * Removes console.logs from javascript
 * 
 * @version  1.0.0
 * @author   Matthias Morin <tangoman@free.fr>
 */

// https://www.npmjs.com/package/gulp-strip-debug
module.exports = function(gulp, plugins, config){
	return function(cb){

		console.log('\r\n\r\n----------> Removing console.logs');

		gulp.src(config.dest.js + '/*.js')
		.pipe(plugins.stripDebug())
		.pipe(gulp.dest(config.dest.js))
		.on('end', cb)
	};
};
