/**
 * Browser Sync
 *
 * Syncs browsers
 * 
 * @version        0.2.0
 * @author         Matthias Morin <tangoman@free.fr>
 * @last-modified  00:00 31/08/2016
 */

module.exports = function(gulp, plugins, config){
	return function(cb){

		console.log('----------> Init Browser Sync server');

		/**
		 * Browser Sync config
		 * @type {Object}
		 */
		var objConfig = {
			server: {
				baseDir: config.dist
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
