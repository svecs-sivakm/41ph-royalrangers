import { c as create_ssr_component, b as add_attribute } from "../../chunks/ssr.js";
const icon = "/_app/immutable/assets/favicon.DQCtSpip.ico";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1eo1g17_START -->${$$result.title = `<title>41. PH Royal Rangers Zábřeh</title>`, ""}<link rel="shortcut icon"${add_attribute("href", icon, 0)} type="image/x-icon"><script src="https://kit.fontawesome.com/21fe75aa25.js" crossorigin="anonymous" data-svelte-h="svelte-5m2mpi"><\/script><!-- HEAD_svelte-1eo1g17_END -->`, ""} <main class="dark:bg-neutral-800 dark:text-neutral-300">${slots.default ? slots.default({}) : ``}</main>`;
});
export {
  Layout as default
};
