/**
 * TangoMan Gulp Boilerplate
 * =========================
 *
 * Set up your front-end Gulp workflow in minutes
 * ----------------------------------------------
 *
 * @version  1.0.0
 * @licence  MIT
 * @author   Matthias Morin <tangoman@free.fr>
 */



/**************************************************
 * Requires
 **************************************************/

// https://www.npmjs.com/package/gulp
var gulp = require('gulp');	// The streaming build system

// https://www.npmjs.com/package/gulp-load-plugins
var plugins = require('gulp-load-plugins')();	// Automatically load any gulp plugins in your package.json

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

gulp.task('clean',           getTask('clean'));
gulp.task('concatjs',        getTask('concatjs'));
gulp.task('copy',            getTask('copy'));
gulp.task('csscomb',         getTask('csscomb'));
gulp.task('imagemin',        getTask('imagemin'));
gulp.task('inject',          getTask('inject'));
gulp.task('mincss',          getTask('mincss'));
gulp.task('minjs',           getTask('minjs'));
gulp.task('prefix',          getTask('prefix'));
gulp.task('sass',            getTask('sass'));
gulp.task('sassdoc',         getTask('sassdoc'));
gulp.task('space',           getTask('space'));
gulp.task('watch',           getTask('watch'));
gulp.task('startwatch-sync', getTask('watch-sync'));
gulp.task('sync-init',       getTask('sync-init'));
gulp.task('dump',            getTask('dump'));
gulp.task('uncss',           getTask('uncss'));



/**************************************************
 * Watch-sync
 **************************************************/

gulp.task('watch-sync', plugins.sequence('sync-init', 'startwatch-sync'));



/**************************************************
 * CSS sequences
 **************************************************/

var cssDev  = function(cb){
	plugins.sequence('space', 'sass', cb);
};
var cssProd = function(cb){
	plugins.sequence('space', 'clean', 'sass', 'prefix', 'mincss', cb);
};

gulp.task('css', plugins.util.env.production ? cssProd : cssDev);



/**************************************************
 * Javascript sequences
 **************************************************/

var jsDev  = function(cb){
	plugins.sequence('space', 'concatjs', cb);
};
var jsProd = function(cb){
	plugins.sequence('space', 'clean', 'concatjs', 'minjs', cb);
};

gulp.task('js', plugins.util.env.production ? jsProd : jsDev);



/**************************************************
 * Default Task
 **************************************************/

var defaultDev  = function(cb){
	plugins.sequence(['space', 'sass', 'concatjs'], cb);
};
var defaultProd = function(cb){
	plugins.sequence(['space', 'clean', 'sass', 'concatjs'], 'prefix', ['minjs', 'mincss'], cb);
};

gulp.task('default', plugins.util.env.production ? defaultProd : defaultDev);
