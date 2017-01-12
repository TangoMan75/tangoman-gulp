/**
 * Formats all CSS in the distribution folder
 * 
 * @version  1.0.1
 * @author   Matthias Morin <tangoman@free.fr>
 */

// https://www.npmjs.com/package/gulp-csscomb
// http://csscomb.com/config
module.exports = function(gulp, plugins, config){
	return function(cb){

		ojbSetting = {
			"remove-empty-rulesets": true,
			"always-semicolon": true,
			"color-case": "upper",
			"block-indent": "\t",
			"color-shorthand": true,
			"element-case": "lower",
			"eof-newline": true,
			"leading-zero": false,
			"quotes": "double",
			"space-before-colon": "",
			"space-after-colon": " ",
			"space-before-combinator": " ",
			"space-after-combinator": " ",
			"space-between-declarations": "\n",
			"space-before-opening-brace": " ",
			"space-after-opening-brace": "\n",
			"space-after-selector-delimiter": "\n",
			"space-before-selector-delimiter": "",
			"space-before-closing-brace": "\n",
			"strip-spaces": false,
			"unitless-zero": true,
			"vendor-prefix-align": true
		};

		console.log('\r\n\r\n----------> Combing CSS');

		gulp.src(config.dest.css + '/*.css')
		.pipe(plugins.csscomb(ojbSetting))
		.pipe(gulp.dest(config.dest.css))
		.on('end', cb)
	};
};
