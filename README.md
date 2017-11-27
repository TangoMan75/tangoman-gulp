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

**TangoMan Gulp Boilerplate** makes your `gulpfile.js` easier to manage. Split your tasks into easy to spot smaller files instead of scrolling into one super long _gulpfile.js_.

Features
========

Syncronous tasks
----------------

**TangoMan Gulp Boilerplate** makes it easier to create synchronous set of tasks.
For example you don't want your prefix task to start before sass compilation has ended, which would result in the sass compiler to overwrite the prefixed version.

Fantastic plugin `gulp-sequence` [https://www.npmjs.com/package/gulp-sequence](https://www.npmjs.com/package/gulp-sequence) allows to easily create macro sets of tasks **in a specified sequence**.

Generate source maps
--------------------

[gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps) will automatically generate source maps for your sass / scss files, except in production mode.

Installation
============

Step 1 : Download and install Node.js
-------------------------------------

I would recommend LTS version which will suit most situations. You can download it here [Node.js](https://nodejs.org/en)

Step 2. Install Gulp globally
-----------------------------

Open a command console and enter following command to download and install the latest stable version:
```bash
$ npm install gulp-cli -g
```
If you want more detailled information on intallation process, have a look at the [Getting Started](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) chapter of the [Gulpjs](https://github.com/gulpjs) documentaion on github.

Enter following command to check if *Gulp* installed correctly:
```bash
$ gulp -v
```

Step 3. Install TangoMan Gulp Boilerplate
-----------------------------------------

Download and extract **TangoMan Gulp Boilerplate** files into your project **web** directory. Or open a command console, enter your project **web** directory and execute the following command to download the latest stable version of **TangoMan Gulp Boilerplate**:
```bash
$ git clone https://github.com/TangoMan75/tangoman-gulp.git
```

Step 4. Install project dependencies
------------------------------------

Open a command console, enter your project **web** directory and execute the following command to download the latest stable version of required **Gulp** dependencies:
```bash
$ npm install
```
(Do not forget to _gitignore_ `node_modules` folder in your project root.)

Step 5. Create configuration file
---------------------------------

Copy and rename template `config-sample.json` into `config.json`, and edit `config.json` file to fit your project needs.


Configuration
=============

**TangoMan Gulp Boilerplate** allows for easy gulp configuration.
If you need to work with a different directory structure, you can easily personalize settings in the _config.json_ file at the root of _gulpfile.js_ folder.

Inside your `./gulpfile.js/config.json`

--------------------------------------------------

#### Concatenation:

**Prepend all js files you want concatenated with underscore** (e.g: _concatenateme.js)

You can configure your project name and version:
```json
    "project": {
        "name": "main",
        "version": "0.1.0"
    },
```
These values are used by _concat.js_ to generate concatenated file name (eg: _main-1.0.0.js_).

--------------------------------------------------

#### Inject

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

If you need gulp-inject to generate relative pathes in your html.
```json
    "relative": true,
```
If you need to clean your destination folder (will remove all non-minified file in production mode)
```json
    "clean": true,
```

--------------------------------------------------

#### Source and destination folders

```json
    "src": {
        "src"    : "./src",
        "css"    : "./src/css",
        "scss"   : "./src/scss",
        "js"     : "./src/js",
        "index"  : "./src/index.html"
    },
    "dest": {
        "dest"   : "./dist",
        "css"    : "./dist/css",
        "js"     : "./dist/js",
        "doc"    : "./dist/doc",
        "index"  : "./dist/index.html"
    }
```

How to use
==========

Availlable commands
-------------------

Enter `$ gulp watch` to start gulp listening to any change in your source directory and start working without worring about lauching tasks indiviually...
Do a `$ gulp --prod` before you commit to clean the _dist_ directory, and apply specific _production_ tasks. (Notice double dash.)

- `$ gulp clean`     : Deletes all files that are not minified in the dist folder.
- `$ gulp concatcss` : Concatenates all .css files.
- `$ gulp concatjs`  : Concatenates all .js files.
- `$ gulp csscomb`   : Formats CSS.
- `$ gulp dump`      : Dumps config and plugins variables in console.
- `$ gulp inject`    : Injects minified js and css files into html.
- `$ gulp mincss`    : Minifies CSS.
- `$ gulp minjs`     : Minifies javascript.
- `$ gulp prefix`    : Adds vendor prefixes to CSS.
- `$ gulp sasscomp`  : Compiles SASS and SCSS files, and generates sourcemap.
- `$ gulp strip`     : Removes console.logs from javascript.
- `$ gulp uncss`     : Remove unused CSS selectors.

Sequences
---------

- `$ gulp`        : Starts default sequence. Compiles sass, appends vendor prefixes, combs css, minifies css, injects css and js, and cleans dist directory.
- `$ gulp watch`  : Starts watcher on CSS, JS, and HTML files.
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

- [del](https://www.npmjs.com/package/del)
- [gulp](https://www.npmjs.com/package/gulp)
- [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)
- [gulp-beautify](https://www.npmjs.com/package/gulp-beautify)
- [gulp-concat](https://www.npmjs.com/package/gulp-concat)
- [gulp-csscomb](https://www.npmjs.com/package/gulp-csscomb)
- [gulp-cssnano](https://www.npmjs.com/package/gulp-cssnano)
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

Note that I've removed following gulp plugins from `package.json`:

- [browser-sync](https://www.npmjs.com/package/browser-sync)
- [sassdoc](https://www.npmjs.com/package/sassdoc)

Since they do not work as expected and are source of many bugs and crashes.

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

Seems like [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) removes embedded sourcemaps!

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
