/**
 * TangoMan Gulp Boilerplate
 * =========================
 *
 * Set up your front-end Gulp workflow in minutes
 * ----------------------------------------------
 *
 * 1. Let's state te obvious: First you need to download and install [Node.js](https://nodejs.org/en)
 * 2. Once you've installed project dependecies with `npm install`, you should be ready to go right out the the box in most cases.
 * 3. Enter `gulp watch` to start gulp listening to any change in your source directory.
 * 4. Do a `gulp --production` before you commit.
 *
 *
 *
 * Easy gulpfile management
 * ========================
 * **TangoMan Gulp Boilerplate** makes your gulpfile.js easier to manage. Split your tasks into smaller files instead of scrolling into one super long gulpfile.js.
 *
 *
 *
 * Fast
 * ====
 *
 * For those who tried the [gulp-require-dir](https://www.npmjs.com/package/gulp-require-dir) method, to split their tasks into multiple smaller task.js files (which is good).
 * You've probably noticed that when your project needs a lot of different Gulp packages (which happens most of the time), your `gulp` command runs really slow.
 * Reason for this is that (as far as I've looked into it) `gulp-require-dir` doesn't allow to pass arguments to imported task.js files.
 * Thus one is found obligated to copy and paste all of the required gulp module code inside each and every task.js, which are loaded everytime gulp lauches any task.
 * Fantastic Gulp module [gulp-load-plugins](https://www.npmjs.com/package/gulp-load-plugins) allows to load each and every gulp plugins in your package.json automatically, and stores everyone of them in the `plugin` object **once and for all**.
 *
 *
 *
 * Features
 * ========
 *
 * Syncronous tasks
 * ----------------
 *
 * **TangoMan Gulp Boilerplate** makes it easier to create synchronous set of tasks.
 * For example you don't want your prefix task to start before sass compilation has ended, which would result in your css overwriting the prefixed version.
 * Fantastic plugin [gulp-sequence](https://www.npmjs.com/package/gulp-sequence) allows to easily create macro sets of tasks **in a specified sequence**.
 *
 *
 *
 * Browser synchronisation
 * -----------------------
 *
 * Having the ability to refresh automatically your browser while you're developping is a huge time saver.
 * Don't bother refreshing your browser or hitting `f5` on your keboard one milion times a day: Awesome plugin [Browser Sync](https://www.npmjs.com/package/browser-sync) does it for you everytime you save your source files.
 *
 *
 *
 * Developpement or production settings
 * ------------------------------------
 *
 * **TangoMan Gulp Boilerplate** makes it easy to set up specific tasks for developpement or production.
 * For example you don't need minification or prefixing during developping phase, while you may want to clean your _dist_ folder or to avoid making sourcemaps availlable for your final production.
 * Just add `--production` argument to your tasks to run Gulp with specific production settings.
 *
 *
 *
 * Configuration
 * -------------
 *
 * **TangoMan Gulp Boilerplate** allows for easy gulp configuration.
 * If you need to work with a different directory structure, you can easily personalize settings in the config.json file at the root of gulpfile.js folder.
 *
 *
 *
 * Versatile
 * =========
 *
 * I have a set of favorite Gulp plugins, but if you need to use different ones, go ahead and write your own task file.
 * As ong as you maintain the same directory structure you should be fine.
 * And if you feel like it, branch, commit and make a pull request to share your task module.
 *
 *
 *
 * How to use
 * ==========
 *
 * Enter `gulp watch` so start working without worring about lauching tasks indiviually.
 * Add `--production` argument to your tasks so start working without worring about lauching tasks indiviually.
 *
 *
 *
 * Known bugs
 * ==========
 *
 * It seems like, [Browser Sync](https://www.npmjs.com/package/browser-sync) freezes from time to time for some reason. Restart Gulp for it to work again properly.
 *
 *
 *
 * Inspiration
 * ===========
 *
 * I was inspired by excellent [http://code.viget.com](http://code.viget.com) Gulp starter [https://github.com/vigetlabs/gulp-starter](https://github.com/vigetlabs/gulp-starter)
 * Though I found it quite hard to configure, so I made **TangoMan Gulp Boilerplate** simpler. When you need to configure any particular task, just edit task.js directly in the tasks folder.
 *
 * Other cool Gulp boilerpates :
 *
 * [gulp-starter](https://github.com/vigetlabs/gulp-starter)
 * [gulp-boilerplate](https://github.com/cferdinandi/gulp-boilerplate)
 * [ryanbensonmedia](http://www.ryanbensonmedia.com) [Harvest](https://github.com/ryanbenson/Harvest)
 * [gulp-frontend-boilerplate](https://github.com/dmnsgn/gulp-frontend-boilerplate)
 *
 *
 *
 * Note
 * ====
 *
 * If you find any bug please report here : [Issues](https://github.com/TangoMan75/tangoman-gulp/issues/new)
 *
 *
 *
 * License
 * =======
 *
 * Copyrights (c) 2016 Matthias Morin
 *
 * [![License][license-image]][license-url]
 * Distributed under the MIT license.
 *
 *
 *
 * Follow me on GitHub: [TangoMan75](https://github.com/TangoMan75)
 *
 * [license-image]: https://img.shields.io/badge/Licence-MIT-green.svg
 * [license-url]: LICENSE
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
