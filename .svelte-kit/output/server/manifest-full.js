export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","Royal-Rangers-logo.png","hostejn.jpg","leaders/.DS_Store","leaders/jakub-pohanka.jpg","leaders/marketa-heclova.jpg","leaders/matthew-sivak.jpg","leaders/misa-srokova.jpg","leaders/ondrej-mlcoch.jpg","leaders/ondrej-reichel.jpg","nacvik_ringa.jpg","prihlaska_rok.png","uvod-box-pozadi.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.35acc36a.js","app":"_app/immutable/entry/app.fd728337.js","imports":["_app/immutable/entry/start.35acc36a.js","_app/immutable/chunks/scheduler.14a511a7.js","_app/immutable/chunks/singletons.f745bfb7.js","_app/immutable/entry/app.fd728337.js","_app/immutable/chunks/scheduler.14a511a7.js","_app/immutable/chunks/index.77c54ead.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
