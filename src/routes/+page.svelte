<script lang="ts">
  import data from "../data.json";
  import Verse from "../components/sections/Verse.svelte";
  import Hero from "../components/sections/Hero.svelte";
  import AboutUs from "../components/sections/AboutUs.svelte";
  import Events from "../components/sections/Events.svelte";
  import Leaders from "../components/sections/Leaders.svelte";
  import Footer from "../components/sections/Footer.svelte";
  import Cards from "../components/sections/Cards.svelte";
  import Navbar from "../components/Navbar.svelte";
</script>

<Navbar />
<Hero />
<Cards />
<AboutUs />
<Verse color="blue" verse={data.verse_1} />
<Events />
<Verse color="yellow" verse={data.verse_2} />
<Leaders />
<Footer />

<!--
<Verse
  color="red"
  verse="Jak vidíte, nezmocnilo se vás pokušení, které by pro lidi nebylo běžné. Ale Bůh je věrný! Nedovolí, abyste byli pokoušeni nad své možnosti; uprostřed zkoušky vám poskytne východisko, abyste mohli obstát."
/>
-->
