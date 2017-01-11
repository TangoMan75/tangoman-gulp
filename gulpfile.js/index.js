/**
 * TangoMan Gulp Boilerplate
 * =========================
 *
 * Set up your front-end Gulp workflow in minutes
 * ----------------------------------------------
 *
 * @version  1.0.1
 * @licence  MIT
 * @author   Matthias Morin <tangoman@free.fr>
 */



/**************************************************
 * Requires
 **************************************************/

// https://www.npmjs.com/package/gulp
var gulp = require('gulp');	// The streaming build system

// Automatically load any gulp plugins in your package.json
// https://www.npmjs.com/package/gulp-load-plugins
// Which is way more efficient than https://www.npmjs.com/package/gulp-require-dir method
var plugins = require('gulp-load-plugins')();	



/**************************************************
 * Loads gulpfile configuration
 **************************************************/

// fs = require('fs');
// fsextra = require('fs-extra');
// 
// fs.writeFile('message.txt', 'Fils de pute!!!', function (err) {
//   if (err) throw err;
//   console.log('It\'s saved!');
// });
// 
// var strConfigFile       = './gulpfile.js/config.json';
// var strConfigSampleFile = './gulpfile.js/config-sample.json';
// if (!fs.existsSync(strConfigFile)) {
// 	if (!fs.existsSync(strConfigSampleFile)) {
// 		console.log('config-sample.json not found');
// 		// Fatal error
// 		process.exit();
// 	} else {
// 		console.log('Loading default config')
//		//fs.createReadStream(strConfigSampleFile).pipe(fs.createWriteStream(strConfigFile));
// 		fs.copySync(strConfigSampleFile, strConfigFile, function(){
// 			// Loads gulpfile configuration
// 			config = require('./config.json');
// 		});
// 	}
// } else {
// 	// Loads gulpfile configuration
// 	config = require('./config.json');
// }

// Loads gulpfile configuration
config = require('./config.json');



/**************************************************
 * Browser Sync
 **************************************************/

// Live CSS Reload & Browser Syncing
// https://www.npmjs.com/package/browser-sync
plugins.browserSync = require('browser-sync').create();
plugins.reload      = plugins.browserSync.reload;



/**************************************************
 * getTask
 **************************************************/

/**
 * Returns specified task from task folder
 *
 * This is a function I found from
 * http://macr.ae/article/splitting-gulpfile-multiple-files.html
 *
 * @param  {String} task Task name
 * @return {Object}      Task as a module
 */
function getTask(task){

	/**
	 * getTask Configuration
	 *
	 * @type {String} Tasks source folder
	 */
	var tasksDirectory = './tasks/';

	return require(tasksDirectory + task)(gulp, plugins, config);
};



/**************************************************
 * Individual tasks
 * 'command' -> 'file'
 **************************************************/

gulp.task('clean',      getTask('clean'));
gulp.task('concatjs',   getTask('concatjs'));
gulp.task('copy',       getTask('copy'));
gulp.task('csscomb',    getTask('csscomb'));
gulp.task('dump',       getTask('dump'));
gulp.task('imagemin',   getTask('imagemin'));
gulp.task('inject',     getTask('inject'));
gulp.task('mincss',     getTask('mincss'));
gulp.task('minjs',      getTask('minjs'));
gulp.task('prefix',     getTask('prefix'));
gulp.task('sass',       getTask('sass'));
gulp.task('sassdoc',    getTask('sassdoc'));
gulp.task('strip',      getTask('strip'));
gulp.task('sync-init',  getTask('sync-init'));
gulp.task('uncss',      getTask('uncss'));
gulp.task('watch',      getTask('watch'));
gulp.task('watch-sync', getTask('watch-sync'));



/**************************************************
 * Watch-sync
 **************************************************/

gulp.task('sync', plugins.sequence('sync-init', 'watch-sync'));



/**************************************************
 * CSS sequences
 **************************************************/

var cssDev  = function(cb){
	plugins.sequence('sass', cb);
};
var cssProd = function(cb){
	plugins.sequence('sass', 'prefix', 'mincss', 'clean', cb);
};

gulp.task('css', plugins.util.env.prod ? cssProd : cssDev);



/**************************************************
 * Javascript sequences
 **************************************************/

var jsDev  = function(cb){
	plugins.sequence('concatjs', cb);
};
var jsProd = function(cb){
	plugins.sequence('concatjs', 'minjs', 'clean', cb);
};

gulp.task('js', plugins.util.env.prod ? jsProd : jsDev);



/**************************************************
 * Default Task
 **************************************************/

var defaultDev  = function(cb){
	plugins.sequence(['sass', 'concatjs'], 'inject', cb);
};
var defaultProd = function(cb){
	plugins.sequence(['sass', 'concatjs'], 'prefix', ['minjs', 'mincss'], 'clean', 'inject', cb);
};

gulp.task('default', plugins.util.env.prod ? defaultProd : defaultDev);
