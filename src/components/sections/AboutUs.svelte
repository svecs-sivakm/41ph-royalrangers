<script lang="ts">
  import royalUOhne from "../../assets/images/royal-rangers-about-background.jpg";
  import Section from "../Section.svelte";
  import data from "../../data.json";
</script>

<!-- 
  style={"background-image: linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5) ), url('" +
    royalUOhne +
    "'); background-position: center; background-size: cover"}
-->

<Section id="o-nas" title={data.about_us_title} className="container py-4 pt-8">
  <div class="lg:space-x-8 lg:flex">
    <p class="text-lg lg:w-5/12 text-center lg:text-left">
      {data.about_us_text}
    </p>

    <div
      class="w-7/12 min-h-64 hidden lg:block rounded-md"
      style={"background-image:url('" +
        royalUOhne +
        "'); background-position: center; background-size: cover"}
    />
  </div>
</Section>
