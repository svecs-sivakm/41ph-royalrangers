<script lang="ts">
  import data from "../../data.json";
  import arrowDown from "../../assets/svg/arrow-down.svg";
</script>

<section class="cs-hero js-hero">
  <div
    class="flex flex-col items-center justify-center w-full h-full text-center text-white ap-bg-gradient"
  >
    <div class="container flex flex-col items-center lg:pb-32">
      <h1
        class="uppercase tracking-[1.2rem] text-center font-semibold text-2xl lg:text-3xl"
      >
        {data.hero_title}
      </h1>
      <h2 class="mb-12 text-xl font-light text-center lg:text-2xl">
        {data.hero_subtitle}
      </h2>
      <a href="#o-nas" class="flex justify-center w-12 -mb-24">
        <img class="animate-bounce" src={arrowDown} alt="" />
      </a>
    </div>
  </div>
</section>

<style scoped lang="scss">
  .cs-hero {
    @apply h-screen;
    background-image: url("/uvod-box-pozadi.jpg");
    background-position-y: bottom;
    background-position-x: center;
    background-size: cover;
  }

  .ap-bg-gradient {
    @apply bg-gradient-to-b from-[#000000e0] to-[#00000020];
  }
</style>
