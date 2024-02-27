<script lang="ts">
  export let img: string;
  export let title: string;
  export let description: string;
  export let data: { title: string; text: string }[];
  export let url: string;
</script>

<div
  class="p-4 flex flex-col space-y-5 rounded-lg shadow-xl dark:shadow-neutral-900 dark:bg-neutral-850 basis-1/4"
>
  <img src={img} alt="test" class="rounded aspect-video" />
  <h4 class="font-semibold text-center">{title}</h4>
  <div class="grow">
    <p>{description}</p>
  </div>

  <div>
    {#each data as entry, i}
      <p class="ml-4">
        <span class="font-semibold">{entry.title}</span>: {entry.text}
      </p>
    {/each}
  </div>
  <a
    class="block py-3 font-semibold text-center text-white bg-blue-500 rounded-md"
    href={url}>Přihláška</a
  >
</div>
