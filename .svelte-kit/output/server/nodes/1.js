

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.43ad6f14.js","_app/immutable/chunks/scheduler.14a511a7.js","_app/immutable/chunks/index.77c54ead.js","_app/immutable/chunks/singletons.f745bfb7.js"];
export const stylesheets = [];
export const fonts = [];
