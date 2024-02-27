<script lang="ts">
  export let color: "blue" | "yellow" | "red";
  export let verse: string;

  import background from "../../assets/images/verse-background.webp";
</script>

<div class="ap-verse-background" style="background-image: url('{background}');">
  <div class="ap-verse ap-{color}">„{verse}“</div>
</div>

<style scoped lang="scss">
  .ap-verse {
    @apply text-center text-white text-lg lg:text-2xl py-14 z-20 px-3;

    &.ap-blue {
      @apply bg-blue-600 bg-opacity-70;
    }

    &.ap-red {
      @apply bg-red-600 bg-opacity-70;
    }

    &.ap-yellow {
      @apply bg-yellow-600 bg-opacity-70;
    }
  }

  .ap-verse-background {
    background-size: cover;
    background-position: center;
  }
</style>
