<script lang="ts">
  export let title: string;
  export let id: string;
  export let className: string = "container px-4";
  export let titleEnabled: boolean = true;
  export let padding: boolean = true;
  export let style: string = "";
</script>

<section {id} class={padding ? "py-24" : ""} {style}>
  <div class={className}>
    <h2
      hidden={!titleEnabled}
      class={"mb-8 font-semibold text-center uppercase"}
    >
      {title}
    </h2>
    <slot />
  </div>
</section>
