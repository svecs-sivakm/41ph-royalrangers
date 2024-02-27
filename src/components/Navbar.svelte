<script lang="ts">
  import menu from "../assets/svg/menu.svg";
  import { onMount } from "svelte";

  let navClass = "";
  let menuDropdownOpened = false;
  let menuDropdownClass = "opacity-0";

  let navBarFixed = true;

  function toggleMenu() {
    menuDropdownOpened = !menuDropdownOpened;

    if (menuDropdownClass === "opacity-100") {
      menuDropdownClass = "opacity-0";
      navClass = "";

      setTimeout(() => {
        menuDropdownClass = "opacity-0 hidden";
      }, 500);
    } else {
      menuDropdownClass = "opacity-0";
      setTimeout(() => {
        menuDropdownClass = "opacity-100";
        navClass = "bg-gray-800";
      }, 1);
    }
  }

  onMount(() => {
    const hero = document.querySelector(".js-hero");
    const bottom = (hero?.getBoundingClientRect().bottom || 0) - 150;
    navBarFixed = !(bottom < 0);
    window.addEventListener("scroll", (e) => {
      const hero = document.querySelector(".js-hero");
      const bottom = (hero?.getBoundingClientRect().bottom || 0) - 150;

      navBarFixed = !(bottom < 0);
    });
  });
</script>

<!-- HERO NAVBAR -->
<nav class="absolute top-0 w-full transition-all duration-500 z-[9999]">
  <div
    class={`flex justify-between lg:justify-center items-center px-8 lg:space-x-6 text-lg w-full py-4 lg:py-8 transition-all duration-500 ${navClass}`}
  >
    <a class="hidden text-white lg:inline" href="#o-nas">O&nbsp;nás</a>
    <a class="hidden text-white lg:inline" href="#akce">Akce</a>
    <img
      src="/Royal-Rangers-logo.png"
      alt="Royal Rangers Logo"
      class="h-16 lg:h-24"
    />
    <a class="hidden text-white lg:inline" href="#tym">Tým</a>
    <a class="hidden text-white lg:inline" href="#kontakt">Kontakt</a>
    <button class="lg:mr-10 lg:hidden" on:click|preventDefault={toggleMenu}>
      <img src={menu} alt="Menu" class="w-16 h-8" />
    </button>
  </div>
  <div
    class={`absolute top-20 flex flex-col items-start justify-center w-full pl-4 py-4 space-y-4 bg-white text-black mt-4 lg:hidden font-montserrat uppercase text-left transition-all duration-500 js-menu-dropdown ${menuDropdownClass}`}
  >
    <a href="#o-nas">O&nbsp;nás</a>
    <a href="#akce">Akce</a>
    <a href="#tym">Tým</a>
    <a href="#kontakt">Kontakt</a>
  </div>
</nav>

<!-- SCROLL NAVBAR -->
<nav
  class={(navBarFixed ? "-translate-y-[1000px]" : "translate-y-0") +
    " fixed top-0 w-full transition-all duration-500 z-[9999] bg-gray-800 dark:bg-neutral-900"}
>
  <div
    class={`flex justify-between lg:justify-center items-center px-8 lg:space-x-6 text-lg w-full py-4 lg:py-8 transition-all duration-500 ${navClass}`}
  >
    <a class="hidden text-white lg:inline" href="#o-nas">O&nbsp;nás</a>
    <a class="hidden text-white lg:inline" href="#akce">Akce</a>
    <img
      src="/Royal-Rangers-logo.png"
      alt="Royal Rangers Logo"
      class="h-16 lg:h-16"
    />
    <a class="hidden text-white lg:inline" href="#tym">Tým</a>
    <a class="hidden text-white lg:inline" href="#kontakt">Kontakt</a>
    <button class="lg:mr-10 lg:hidden" on:click|preventDefault={toggleMenu}>
      <img src={menu} alt="Menu" class="w-16 h-8" />
    </button>
  </div>
  <div
    class={`absolute top-20 flex flex-col items-start justify-center w-full pl-4 py-4 space-y-4 bg-white text-black mt-4 lg:hidden font-montserrat uppercase text-left transition-all duration-500 js-menu-dropdown ${menuDropdownClass}`}
  >
    <a href="#o-nas">O&nbsp;nás</a>
    <a href="#akce">Akce</a>
    <a href="#tym">Tým</a>
    <a href="#kontakt">Kontakt</a>
  </div>
</nav>
