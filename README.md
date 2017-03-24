TangoMan Gulp Boilerplate
=========================

Set up your front-end Gulp workflow in minutes
----------------------------------------------


Why do I need Gulp?
===================

Gulp is a javascript task manager that allows to automate repetitive front-end tasks.

There are a ton of [Gulp plugins](http://gulpjs.com/plugins) to help solve almost any problem you can imagine.


Easy gulpfile management
========================
**TangoMan Gulp Boilerplate** makes your gulpfile.js easier to manage. Split your tasks into easy to spot smaller files instead of scrolling into one super long _gulpfile.js_.



Features
========

Syncronous tasks
----------------

**TangoMan Gulp Boilerplate** makes it easier to create synchronous set of tasks.
For example you don't want your prefix task to start before sass compilation has ended, which would result in the sass compiler to overwrite the prefixed version.

Fantastic plugin `gulp-sequence` [https://www.npmjs.com/package/gulp-sequence](https://www.npmjs.com/package/gulp-sequence) allows to easily create macro sets of tasks **in a specified sequence**.



Browser synchronisation with Browser Sync
-----------------------------------------

Having the ability to refresh automatically your browser while you're developping is a huge time saver.
Don't bother refreshing your browser or hitting `f5` on your keboard ten million times a day:

Awesome plugin `Browser Sync` [https://www.npmjs.com/package/browser-sync](https://www.npmjs.com/package/browser-sync) does it for you everytime you save your source files.



Browser synchronisation with Live Reload
----------------------------------------

In some cases, for example if you're developping a **symfony project** [Live Reload](https://www.npmjs.com/package/gulp-livereload) might be a better option.
In order for it to work, inesrt this code inside your `base.html.twig`.

```twig
// src/Acme/Bundle/FrontendBundle/Resources/views/base.html.twig

{% if app.environment == 'dev' %}
    <script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script>
{% endif %}
```


Generate source maps
--------------------

[gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps) will automatically generate source maps for your sass / scss files, except in production mode.



How to use
==========

Installation
------------

 - 1. You need to download and install [Node.js](https://nodejs.org/en) first.
 - 2. Then install Gulp, **TLDR: Run following command:** `$ npm install --global gulp-cli`, or have a look at this page : [Getting Started](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)
 - 3. Extract **TangoMan Gulp Boilerplate** files into your project **web** directory.
 - 4. Once you've installed project dependencies with `$ npm install`, you should be ready to go right out the the box in most cases. (Do not forget to _gitignore_ node_modules when necessary.)
 - 5. Open a command window in your web directory, and enjoy (See below for availlable commands)



Configuration
-------------

**TangoMan Gulp Boilerplate** allows for easy gulp configuration.
If you need to work with a different directory structure, you can easily personalize settings in the _config.json_ file at the root of _gulpfile.js_ folder.

Inside your `./gulpfile.js/config.json`

####Concatenation:

**Prepend all js files you want concatenated with underscore** (e.g: _concatenateme.js)

You can configure your project name and version:
```json
	"project": {
		"name": "main",
		"version": "0.1.0"
	},
```
These values are used by _concat.js_ to generate concatenated file name (eg: _main-1.0.0.js_).



####Inject

You can configure the name of the project web directory:
```json
	"folderName": "dist",
```
This value is used by _inject.js_ to rewrite correct relative pathes in html.

If you don't want to inject generated files inside your html, disable with :
```json
	"inject": false,
```
This value is used by task sequences inside _index.js_.



####Source and destination folders

```json
	"src": {
		"src": "./src",
		"css": "./src/css",
		"scss": "./src/scss",
		"js": "./src/js",
		"img": "./src/img",
		"fonts": "./src/fonts",
		"assets": "./src/assets",
		"vendor": "./src/vendor",
		"index": "./src/index.html"
	},
	"dest": {
		"dest": "./dist",
		"css": "./dist/css",
		"scss": "./dist/scss",
		"js": "./dist/js",
		"img": "./dist/img",
		"fonts": "./dist/fonts",
		"assets": "./dist/assets",
		"vendor": "./dist/vendor",
		"doc": "./doc",
		"temp": "./temp",
		"test": "./test",
		"index": "./index.html"
	},
```



Availlable commands
-------------------

Enter `$ gulp watch` to start gulp listening to any change in your source directory and start working without worring about lauching tasks indiviually...
Do a `$ gulp --prod` before you commit to clean the _dist_ directory, and apply specific _production_ tasks. (Notice double dash.)

 - `$ gulp assets`    : Copies all assets/vendor from your source folder into distribution folder.
 - `$ gulp clean`     : Deletes all files that are not minified in the dist folder.
 - `$ gulp concatcss` : Concatenates all .css files.
 - `$ gulp concatjs`  : Concatenates all .js files.
 - `$ gulp csscomb`   : Formats CSS.
 - `$ gulp dump`      : Dumps config and plugins variables in console.
 - `$ gulp imagemin`  : Optimize PNG, JPEG, GIF and SVG images.
 - `$ gulp inject`    : Injects minified js and css files into html.
 - `$ gulp mincss`    : Minifies CSS.
 - `$ gulp minjs`     : Minifies javascript.
 - `$ gulp prefix`    : Adds vendor prefixes to CSS.
 - `$ gulp sasscomp`  : Compiles SASS and SCSS files, and generates sourcemap.
 - `$ gulp sassdoc`   : Generates SASS documentation.
 - `$ gulp strip`     : Removes console.logs from javascript.
 - `$ gulp uncss`     : Remove unused CSS selectors.



Sequences
---------

 - `$ gulp`        : Starts default sequence. Compiles sass, appends vendor prefixes, combs css, minifies css, injects css and js, and cleans dist directory.
 - `$ gulp watch`  : Starts watcher on CSS, JS, IMG, and HTML files.
 - `$ gulp sync`   : Starts watcher and browser syncronisation with BrowserSync plugin.
 - `$ gulp reload` : Starts watcher and browser syncronisation with LiveReload plugin.
 - `$ gulp sass`   : Compiles sass, appends vendor prefixes, combs css, minifies css, injects css, and cleans dist directory.
 - `$ gulp css`    : Appends vendor prefixes, combs css, minifies css, injects css, and cleans dist directory.
 - `$ gulp js`     : Concatenates javascript, minifies js, injects js, and cleans dist directory.



Developpement or production settings
------------------------------------

**TangoMan Gulp Boilerplate** makes it easy to set up specific tasks for developpement or production.
For example you don't need minification or prefixing during developping phase, while you may want to clean your _dist_ folder or to avoid making sourcemaps availlable for your final production.

Use `--prod` argument to your tasks to run Gulp with specific production settings. (Notice double dash.)



Included plugins
----------------

**TangoMan Gulp Boilerplate** package.json includes the following awesome plugins :

 - [browser-sync](https://www.npmjs.com/package/browser-sync)
 - [del](https://www.npmjs.com/package/del)
 - [gulp](https://www.npmjs.com/package/gulp)
 - [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)
 - [gulp-beautify](https://www.npmjs.com/package/gulp-beautify)
 - [gulp-changed](https://www.npmjs.com/package/gulp-changed)
 - [gulp-concat](https://www.npmjs.com/package/gulp-concat)
 - [gulp-csscomb](https://www.npmjs.com/package/gulp-csscomb)
 - [gulp-cssnano](https://www.npmjs.com/package/gulp-cssnano)
 - [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)
 - [gulp-inject](https://www.npmjs.com/package/gulp-inject)
 - [gulp-load](https://www.npmjs.com/package/gulp-load)
 - [gulp-notify](https://www.npmjs.com/package/gulp-notify)
 - [gulp-plumber](https://www.npmjs.com/package/gulp-plumber)
 - [gulp-rename](https://www.npmjs.com/package/gulp-rename)
 - [gulp-sass](https://www.npmjs.com/package/gulp-sass)
 - [gulp-sequence](https://www.npmjs.com/package/gulp-sequence)
 - [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps)
 - [gulp-strip](https://www.npmjs.com/package/gulp-strip)
 - [gulp-uglify](https://www.npmjs.com/package/gulp-uglify)
 - [gulp-uncss](https://www.npmjs.com/package/gulp-uncss)
 - [gulp-util](https://www.npmjs.com/package/gulp-util)
 - [gulp-watch](https://www.npmjs.com/package/gulp-watch)
 - [require-dir](https://www.npmjs.com/package/require-dir)
 - [sassdoc](https://www.npmjs.com/package/sassdoc)

[Check out these other cool gulp plugins](GULP_PLUGINS.md)



Versatile
=========

I have a set of favorite Gulp plugins, but if you need to use different ones, go ahead and write your own task file.
As long as you maintain the same directory structure you should be fine.
Your Gulps plugin should be loaded automatically and will be availlable in the `plugins.your-plugin-name` object, while configuration from the `config.json` will be availlable in the `config.required-varible-name` object.
**Have fun!**

And if you feel like it, branch, commit and make a pull request to share your task module with the world!



Known bugs
==========

It seems like, [Browser Sync](https://www.npmjs.com/package/browser-sync) freezes from time to time for some reason. Restart Gulp for it to work again properly.
And [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) seems to remove embedded sourcemaps!



Inspiration
===========

I was inspired by excellent [http://code.viget.com](http://code.viget.com) Gulp starter [https://github.com/vigetlabs/gulp-starter](https://github.com/vigetlabs/gulp-starter)
Though I found it quite hard to configure, so I made **TangoMan Gulp Boilerplate** simpler.

When you need to configure any particular task, just edit _task.js_ directly in the _tasks_ folder.

Other cool Gulp boilerpates :

- [gulp-starter](https://github.com/vigetlabs/gulp-starter)
- [gulp-boilerplate](https://github.com/cferdinandi/gulp-boilerplate)
- [ryanbensonmedia](http://www.ryanbensonmedia.com) [Harvest](https://github.com/ryanbenson/Harvest)
- [gulp-frontend-boilerplate](https://github.com/dmnsgn/gulp-frontend-boilerplate)



Note
====

If you find any bug please report here : [Issues](https://github.com/TangoMan75/tangoman-gulp/issues/new)



License
=======

Copyrights (c) 2017 Matthias Morin

[![License][license-MIT]][license-url]
Distributed under the MIT license.

If you like **TangoMan Gulp Boilerplate** please star!
And follow me on GitHub: [TangoMan75](https://github.com/TangoMan75)
... And check my other cool projects.

[tangoman.free.fr](http://tangoman.free.fr)

[license-GPL]: https://img.shields.io/badge/Licence-GPLv3.0-green.svg
[license-MIT]: https://img.shields.io/badge/Licence-MIT-green.svg
[license-url]: LICENSE
