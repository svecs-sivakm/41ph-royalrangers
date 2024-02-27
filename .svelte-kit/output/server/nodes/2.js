

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.bd641095.js","_app/immutable/chunks/scheduler.14a511a7.js","_app/immutable/chunks/index.77c54ead.js"];
export const stylesheets = ["_app/immutable/assets/2.e31ce0a6.css"];
export const fonts = [];
