/**
 * Browser Sync
 *
 * Syncs browsers
 * 
 * @version        0.1.0 beta
 * @author         Matthias Morin <matthias.morin@gmail.com>
 * @last-modified  18:14 28/08/2016
 */

module.exports = function(gulp, plugins){
	return function(cb){

		console.log('----------> Init Browser Sync server');

		/**
		 * Browser Sync config
		 * @type {Object}
		 */
		var objConfig = {
			server: {
				baseDir: plugins.cfg.dist
			},
			options: {
				reloadDelay: 250
			},
			notify: false
		};

		plugins.browserSync.init(objConfig);
		cb();
	};
};
