/**
 * Gulp Requires
 *
 * This file is deprecated but I decided to keep it since it lists a whole bunch of cool plugins.
 *
 * @deprecated
 * @version        0.1.0 beta
 * @author         Matthias Morin <matthias.morin@gmail.com>
 * @last-modified  18:14 28/08/2016
 */

// --------------------------------------------------
// GENERAL PLUGINS
// --------------------------------------------------

// Loads Gulp module
var gulp = require('gulp');

// Live CSS Reload & Browser Syncing
// https://www.npmjs.com/package/browser-sync
var browserSync = require('browser-sync').create();

// Streaming concatenation middleware
// https://www.npmjs.com/package/gulp-concat
var concat = require('gulp-concat');

// Delete files and folders
// https://www.npmjs.com/package/del
var del = require('del');

// Automatically load any gulp plugins in your package.json
// https://www.npmjs.com/package/gulp-load-plugins
var plugins = require('gulp-load-plugins')();

// Shows messages in the CLI with node-notify
// https://www.npmjs.com/package/gulp-notify
var notify = require('gulp-notify');

// Prevents pipe breaking caused by errors from gulp plugins
// https://www.npmjs.com/package/gulp-plumber
var plumber = require('gulp-plumber');

// Renames files (.min. extentions)
// https://www.npmjs.com/package/gulp-rename
var rename = require('gulp-rename');

// Helper to require() all task.js from directories
// https://www.npmjs.com/package/require-dir
var requireDir = require('require-dir');

// Run a series of gulp tasks in order
// https://www.npmjs.com/package/gulp-sequence
var sequence = require('gulp-sequence');

// Utility functions for gulp plugins
// https://www.npmjs.com/package/gulp-util
var util = require('gulp-util');

// Detects changes in source directory
// https://www.npmjs.com/package/gulp-watch
var watch = require('gulp-watch');

// A documentation tool for sass
// https://www.npmjs.com/package/sassdoc
var sassdoc = require('sassdoc');



// --------------------------------------------------
// CSS PLUGINS
// --------------------------------------------------

// https://github.com/postcss/autoprefixer#options
// Adds vendor prefixes to CSS
// https://www.npmjs.com/package/gulp-autoprefixer
var autoprefixer = require('gulp-autoprefixer');

// Minifies CSS with clean-css
// https://www.npmjs.com/package/gulp-clean-css
var cleancss = require('gulp-clean-css');

// Auto format CSS
// https://www.npmjs.com/package/gulp-csscomb
var csscomb = require('gulp-csscomb');

// Minifies CSS with cssnano
// https://www.npmjs.com/package/gulp-cssnano
var cssnano = require('gulp-cssnano');

// Minifies CSS with CSSO
// https://www.npmjs.com/package/gulp-csso
var csso = require('gulp-csso');

// Compiles SASS and SCSS files
// https://www.npmjs.com/package/gulp-sass
var sass = require('gulp-sass');

// Remove unused CSS selectors
// https://www.npmjs.com/package/gulp-uncss
var uncss = require('gulp-uncss');



// --------------------------------------------------
// JAVASCRIPT PLUGINS
// --------------------------------------------------

// Asset beautification using node-beautify
// https://www.npmjs.com/package/gulp-beautify
var beautify = require('gulp-beautify');

// Compiles CoffeeScript files
// https://www.npmjs.com/package/gulp-coffee
var coffee = require('gulp-coffee');

// Removes console.logs - Deprecated - Use gulp-strip-debug
// https://www.npmjs.com/package/gulp-removelogs
var removelogs = require('gulp-removelogs');

// Removes console.logs
// https://www.npmjs.com/package/gulp-strip-debug
var strip-debug = require('gulp-strip-debug');

// Minifies javascript
// https://www.npmjs.com/package/gulp-uglify
var uglify = require('gulp-uglify');

// Generates documentation for javascript
// https://www.npmjs.com/package/jsdoc
// https://www.npmjs.com/package/gulp-jsdoc
var jsdoc = require('gulp-jsdoc');



// --------------------------------------------------
// HTML PLUGINS
// --------------------------------------------------

// Webcomponent injection plugin
// https://www.npmjs.com/package/gulp-inject
var inject = require('gulp-inject');
