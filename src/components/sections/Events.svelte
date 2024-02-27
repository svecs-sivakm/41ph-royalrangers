<script lang="ts">
  import data from "../../data.json";
  import Section from "../Section.svelte";
  import Event from "../events/Event.svelte";
</script>

<Section id="akce" title={data.upcoming_events_title}>
  <div class="flex-wrap justify-center w-full gap-10 lg:flex">
    {#each data.upcoming_events as event}
      <Event
        img={event.image}
        title={event.title}
        description={event.subtitle}
        data={event.data}
        url={event.url}
      />
    {/each}
  </div>
</Section>
