<script>
  import icon from "../assets/favicon.ico";

  import "../scss/app.scss";
</script>

<svelte:head>
  <title>41. PH Royal Rangers Zábřeh</title>
  <link rel="shortcut icon" href={icon} type="image/x-icon" />
  <script
    src="https://kit.fontawesome.com/21fe75aa25.js"
    crossorigin="anonymous"
  ></script>
</svelte:head>

<main class="dark:bg-neutral-800 dark:text-neutral-300">
  <slot />
</main>
