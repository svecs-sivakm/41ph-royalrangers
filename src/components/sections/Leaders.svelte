<script lang="ts">
  import Section from "../Section.svelte";
  import Leader from "../leaders/Leader.svelte";

  import data from "../../data.json";
</script>

<Section id="tym" title={data.leaders_title}>
  <div
    class="flex-wrap justify-center gap-16 px-4 space-y-16 lg:flex lg:px-16 lg:space-y-0"
  >
    {#each data.leaders as leader}
      <Leader
        image={leader.image}
        name={leader.name}
        position={leader.post}
        description={leader.description}
        facebook={leader.links.facebook}
        whatsapp={leader.links.whatsapp}
        email={leader.links.email}
        tel={leader.tel}
      />
    {/each}
  </div>
</Section>
