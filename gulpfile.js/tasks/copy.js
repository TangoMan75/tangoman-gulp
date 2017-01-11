/**
 * Copies all files from your source folder into distribution folder
 * This task uses a callback and all tasks will run asynchronously
 * 
 * @version  1.0.1
 * @author   Matthias Morin <tangoman@free.fr>
 */

module.exports = function(gulp){
	return function(cb){

		arCSS = [
			config.src.assets + 'css/**/*.*',
			config.src.vendors + 'css/**/*.*',
			config.src.css + 'css/**/*.*',
		];

		arJS = [
			config.src.assets + 'js/**/*.*',
			config.src.vendors + 'js/**/*.*',
			config.src.js + 'js/**/*.*',
		];

		console.log('\r\n\r\n----------> Copying CSS');
		gulp.src(arCSS)
		.pipe(gulp.dest(config.dest.css)).on('end', function(){

			console.log('\r\n\r\n----------> Copying JS');
			gulp.src(arJS)
			.pipe(gulp.dest(config.dest.js)).on('end', function(){

				console.log('\r\n\r\n----------> Copying Fonts');
				gulp.src(config.src.fonts + '/**/*.*')
				.pipe(gulp.dest(config.dest.fonts)).on('end', function(){

					console.log('\r\n\r\n----------> Copying Images');
					gulp.src(config.src.img + '/**/*.*')
					.pipe(gulp.dest(config.dest.img)).on('end', cb);
				});
			});
		});
	};
};
