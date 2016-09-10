/**
 * TangoMan Gulp Boilerplate
 * =========================
 *
 * Set up your front-end Gulp workflow in minutes
 * ----------------------------------------------
 *
 * @version        0.3.0
 * @licence        MIT
 * @author         Matthias Morin <matthias.morin@gmail.com>
 * @last-modified  00:00 31/08/2016
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
 **************************************************/

gulp.task('clean',      getTask('clean'));
gulp.task('concatjs',   getTask('concatjs'));
gulp.task('copy',       getTask('copy'));
gulp.task('csscomb',    getTask('csscomb'));
gulp.task('imagemin',   getTask('imagemin'));
gulp.task('inject',     getTask('inject'));
gulp.task('mincss',     getTask('mincss'));
gulp.task('minjs',      getTask('minjs'));
gulp.task('prefix',     getTask('prefix'));
gulp.task('sass',       getTask('sass'));
gulp.task('sassdoc',    getTask('sassdoc'));
gulp.task('space',      getTask('space'));
gulp.task('startwatch', getTask('watch'));
gulp.task('sync',       getTask('sync'));
gulp.task('test',       getTask('test'));
gulp.task('uncss',      getTask('uncss'));



/**************************************************
 * Watch
 **************************************************/

gulp.task('watch', plugins.sequence('sync', 'startwatch'));



/**************************************************
 * CSS Tasks
 **************************************************/

var cssDev  = function(cb){
	plugins.sequence('space', 'sass', 'inject', cb);
};
var cssProd = function(cb){
	plugins.sequence('space', 'clean', 'sass', 'prefix', 'mincss', 'inject', cb);
};

gulp.task('css', plugins.util.env.production ? cssProd : cssDev);



/**************************************************
 * Javascript Tasks
 **************************************************/

var jsDev  = function(cb){
	plugins.sequence('space', 'concatjs', 'inject', cb);
};
var jsProd = function(cb){
	plugins.sequence('space', 'clean', 'concatjs', 'minjs', 'inject', cb);
};

gulp.task('js', plugins.util.env.production ? jsProd : jsDev);



/**************************************************
 * HTML Tasks
 **************************************************/

var html = function(cb){
	plugins.sequence('space', 'inject', cb);
};

gulp.task('html', html);



/**************************************************
 * Default Task
 **************************************************/

var defaultDev  = function(cb){
	plugins.sequence(['space', 'sass', 'concatjs'], 'inject', cb);
};
var defaultProd = function(cb){
	plugins.sequence(['space', 'clean', 'sass', 'concatjs'], 'prefix', ['minjs', 'mincss'], 'inject', cb);
};

gulp.task('default', plugins.util.env.production ? defaultProd : defaultDev);
