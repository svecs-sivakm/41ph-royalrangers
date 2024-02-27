import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.7af5c2db.js","_app/immutable/chunks/scheduler.14a511a7.js","_app/immutable/chunks/index.77c54ead.js"];
export const stylesheets = ["_app/immutable/assets/0.777bc74c.css"];
export const fonts = [];
