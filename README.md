TangoMan Gulp Boilerplate
=========================

Set up your front-end Gulp workflow in minutes
----------------------------------------------



How to use
==========

1. You need to download and install [Node.js](https://nodejs.org/en) first.
2. Then install Gulp, have a look at this page : [Getting Started](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)
3. Copy **TangoMan Gulp Boilerplate** into your web directory.
4. Once you've installed project dependencies with `npm install`, you should be ready to go right out the the box in most cases.
5. Enter `gulp watch` to start gulp listening to any change in your source directory and start working without worring about lauching tasks indiviually..
6. Do a `gulp --production` before you commit to clean the _dist_ directory, and apply specific *production* tasks.



Easy gulpfile management
========================
**TangoMan Gulp Boilerplate** makes your gulpfile.js easier to manage. Split your tasks into easy to spot smaller files instead of scrolling into one super long _gulpfile.js_.



It's faster
===========

For those who tried the `gulp-require-dir` [https://www.npmjs.com/package/gulp-require-dir](https://www.npmjs.com/package/gulp-require-dir) method, to split your tasks into multiple smaller _task.js_ files.
You've probably noticed that when your project needs a lot of different Gulp packages (which happens most of the time), your `gulp` command runs really slow.
Reason for this is that (as far as I've looked into it) `gulp-require-dir` doesn't allow to pass arguments to imported task.js files.
Thus one is found obligated to copy and paste all of the required gulp module code inside each and every task.js, which are loaded everytime gulp lauches any task.

Fantastic Gulp module `gulp-load-plugins` [https://www.npmjs.com/package/gulp-load-plugins](https://www.npmjs.com/package/gulp-load-plugins) allows to load each and every gulp plugins in your _package.json_ automatically, and stores everyone of them in the `plugins` object **once and for all**.



Features
========

Syncronous tasks
----------------

**TangoMan Gulp Boilerplate** makes it easier to create synchronous set of tasks.
For example you don't want your prefix task to start before sass compilation has ended, which would result in your css overwriting the prefixed version.

Fantastic plugin `gulp-sequence` [https://www.npmjs.com/package/gulp-sequence](https://www.npmjs.com/package/gulp-sequence) allows to easily create macro sets of tasks **in a specified sequence**.



Browser synchronisation
-----------------------

Having the ability to refresh automatically your browser while you're developping is a huge time saver.
Don't bother refreshing your browser or hitting `f5` on your keboard ten million times a day: 

Awesome plugin `Browser Sync` [https://www.npmjs.com/package/browser-sync](https://www.npmjs.com/package/browser-sync) does it for you everytime you save your source files.



Developpement or production settings
------------------------------------

**TangoMan Gulp Boilerplate** makes it easy to set up specific tasks for developpement or production.
For example you don't need minification or prefixing during developping phase, while you may want to clean your _dist_ folder or to avoid making sourcemaps availlable for your final production.

Just add `--production` argument to your tasks to run Gulp with specific production settings.



Configuration
-------------

**TangoMan Gulp Boilerplate** allows for easy gulp configuration.
If you need to work with a different directory structure, you can easily personalize settings in the _config.json_ file at the root of _gulpfile.js_ folder.

Inside your

```
./gulpfile.js/config.json
```

You can configure your project name and version:

```json
	"project": {
		"name": "main",
		"version": "0.1.0"
	},
```

This value is used by _inject.js_ to rewrite correct relative pathes in html.

```json
	"folderName": "dist",
```

These values are used by _concat.js_ to generate _name-1.0.0.js_ file name.

And here you can configure your project source and distribution folders:

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

Copyrights (c) 2016 Matthias Morin

[![License][license-MIT]][license-url]
Distributed under the MIT license.

If you like **TangoMan Gulp Boilerplate** please star!
And follow me on GitHub: [TangoMan75](https://github.com/TangoMan75)
... And check my other cool projects.

[tangoman.free.fr](http://tangoman.free.fr)

[license-GPL]: https://img.shields.io/badge/Licence-GPLv3.0-green.svg
[license-MIT]: https://img.shields.io/badge/Licence-MIT-green.svg
[license-url]: LICENSE
