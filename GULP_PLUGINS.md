A LIST OF COOL GULP PLUGINS
==================================================

Here's a list of cool gulp plugins you want to check out:


GENERAL PLUGINS
==================================================


#### gulp: The streaming build system
[gulp](https://www.npmjs.com/package/gulp)
```javascript
var gulp = require('gulp');
```


#### browser-sync: Live CSS Reload & Browser Syncing
[browser-sync](https://www.npmjs.com/package/browser-sync)
```javascript
var browserSync = require('browser-sync').create();
```


#### gulp-concat: Streaming concatenation middleware
[gulp-concat](https://www.npmjs.com/package/gulp-concat)
```javascript
var concat = require('gulp-concat');
```


#### gulp-changed: No more wasting precious time on processing unchanged files
[gulp-changed](https://www.npmjs.com/package/gulp-changed)
```javascript
var changed = require('gulp-changed');
```


#### del: Delete files and folders
[del](https://www.npmjs.com/package/del)
```javascript
var del = require('del');
```


#### gulp-load-plugins: Automatically load any gulp plugins in your package.json
[gulp-load-plugins](https://www.npmjs.com/package/gulp-load-plugins)
```javascript
var plugins = require('gulp-load-plugins')();
```


#### gulp-notify: Shows messages in the CLI with node-notify
[gulp-notify](https://www.npmjs.com/package/gulp-notify)
```javascript
var notify = require('gulp-notify');
```


#### gulp-plumber: Prevents pipe breaking caused by errors from gulp plugins
[gulp-plumber](https://www.npmjs.com/package/gulp-plumber)
```javascript
var plumber = require('gulp-plumber');
```


#### gulp-rename: Renames files (.min. extentions)
[gulp-rename](https://www.npmjs.com/package/gulp-rename)
```javascript
var rename = require('gulp-rename');
```


#### require-dir: Helper to require() all task.js from directories
[require-dir](https://www.npmjs.com/package/require-dir)
```javascript
var requireDir = require('require-dir');
```


#### gulp-sequence: Run a series of gulp tasks in order
[gulp-sequence](https://www.npmjs.com/package/gulp-sequence)
```javascript
var sequence = require('gulp-sequence');
```


#### gulp-util: Utility functions for gulp plugins
[gulp-util](https://www.npmjs.com/package/gulp-util)
```javascript
var util = require('gulp-util');
```


#### gulp-watch: Detects changes in source directory
[gulp-watch](https://www.npmjs.com/package/gulp-watch)
```javascript
var watch = require('gulp-watch');
```


#### sassdoc: A documentation tool for sass
[sassdoc](https://www.npmjs.com/package/sassdoc)
```javascript
var sassdoc = require('sassdoc');
```



CSS PLUGINS
================================================


Adds vendor prefixes to CSS
[autoprefixer options](https://github.com/postcss/autoprefixer#options)
---
[](https://www.npmjs.com/package/gulp-autoprefixer)
```javascript
var autoprefixer = require('gulp-autoprefixer');
```

#### gulp-clean-css: Minifies CSS with clean-css
[gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css)
```javascript
var cleancss = require('gulp-clean-css');
```

#### gulp-csscomb: Auto format CSS
[gulp-csscomb](https://www.npmjs.com/package/gulp-csscomb)
```javascript
var csscomb = require('gulp-csscomb');
```

#### gulp-cssnano: Minifies CSS with cssnano
[gulp-cssnano](https://www.npmjs.com/package/gulp-cssnano)
```javascript
var cssnano = require('gulp-cssnano');
```

#### gulp-csso: Minifies CSS with CSSO
[gulp-csso](https://www.npmjs.com/package/gulp-csso)
```javascript
var csso = require('gulp-csso');
```

#### gulp-sass: Compiles SASS and SCSS files
[gulp-sass](https://www.npmjs.com/package/gulp-sass)
```javascript
var sass = require('gulp-sass');
```

#### gulp-uncss: Remove unused CSS selectors
[gulp-uncss](https://www.npmjs.com/package/gulp-uncss)
```javascript
var uncss = require('gulp-uncss');
```



JAVASCRIPT PLUGINS
==================================================


#### gulp-beautify: Asset beautification using node-beautify
[gulp-beautify](https://www.npmjs.com/package/gulp-beautify)
```javascript
var beautify = require('gulp-beautify');
```


#### gulp-coffee: Compiles CoffeeScript files
[gulp-coffee](https://www.npmjs.com/package/gulp-coffee)
```javascript
var coffee = require('gulp-coffee');
```


#### gulp-removelogs: Removes console.logs - Deprecated - Use gulp-strip-debug
[gulp-removelogs](https://www.npmjs.com/package/gulp-removelogs)
```javascript
var removelogs = require('gulp-removelogs');
```


#### gulp-strip-debug: Removes console.logs
[gulp-strip-debug](https://www.npmjs.com/package/gulp-strip-debug)
```javascript
var strip-debug = require('gulp-strip-debug');
```


#### gulp-uglify: Minifies javascript
[gulp-uglify](https://www.npmjs.com/package/gulp-uglify)
```javascript
var uglify = require('gulp-uglify');
```


#### gulp-jsdoc: Generates documentation for javascript
[jsdoc](https://www.npmjs.com/package/jsdoc)
```javascript
var jsdoc = require('gulp-jsdoc');
```



HTML PLUGINS
==================================================


#### gulp-inject: Webcomponent injection plugin
[gulp-inject](https://www.npmjs.com/package/gulp-inject)
```javascript
var inject = require('gulp-inject');
```



IMAGE PLUGINS
==================================================


#### gulp-imagemin: Minify PNG, JPEG, GIF and SVG images
[gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)
```javascript
var imagemin = require('gulp-imagemin');
```


