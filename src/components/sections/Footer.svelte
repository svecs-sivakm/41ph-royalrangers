<script lang="ts">
  import Section from "../Section.svelte";
  import facebookIcon from "../../assets/svg/facebook.svg";
  import instagramIcon from "../../assets/svg/instagram.svg";
  import youtubeIcon from "../../assets/svg/youtube.svg";
  import data from "../../data.json";
</script>

<Section
  id="kontakt"
  title={data.footer.title}
  className="bg-gray-800 dark:bg-neutral-900 px-4"
  titleEnabled={false}
  padding={false}
>
  <div class="container block w-full pt-4">
    <div class="grid grid-cols-1 gap-16 py-10 lg:grid-cols-2">
      <div
        class="flex flex-col items-center justify-between space-y-8 text-white"
      >
        <h2 class="font-semibold">{data.footer.title}</h2>
        <div>
          <p>{data.footer.text_group_1.line_1.text}</p>
          <a class="hover:underline" href={data.footer.text_group_1.line_2.url}
            >{data.footer.text_group_1.line_2.text}</a
          >
        </div>
        <div class="text-center">
          <a class="hover:underline" href={data.footer.text_group_2.line_1.url}
            >{data.footer.text_group_2.line_1.text}</a
          >
          <div class="flex space-x-5">
            <a
              class="hover:underline"
              href={data.footer.text_group_2.line_2_group.left.url}
              >{data.footer.text_group_2.line_2_group.left.text}</a
            >
            <p>{data.footer.text_group_2.line_2_group.right.text}</p>
          </div>
        </div>
        <div class="flex justify-between text-center space-x-28">
          <a href={data.footer.links.facebook}>
            <img src={facebookIcon} alt="facebook" class="w-12" />
          </a>
          <a href={data.footer.links.instagram}>
            <img src={instagramIcon} alt="instagram" class="w-12" />
          </a>
          <a href={data.footer.links.youtube}>
            <img src={youtubeIcon} alt="youtube" class="w-12" />
          </a>
        </div>
      </div>

      <iframe
        height="310"
        class="rounded-md lg:w-[450px] w-full"
        title="map"
        src="https://maps.google.com/maps?q=Su%C5%A1ilova%2058,%20789%2001%20Z%C3%A1b%C5%99eh&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
        frameborder="0"
        allowfullscreen={false}
        style="border: 0"
      />
    </div>

    <span class="block w-full text-lg text-center text-white"
      >&copy; 2023 - 2024 studio <a
        href="https://github.com/svecs-sivakm"
        target="_blank"
        class="font-semibold transition-all duration-200 text-cyan-400 hover:text-cyan-200"
        >svecs&sivakm</a
      ></span
    >
  </div>
</Section>
