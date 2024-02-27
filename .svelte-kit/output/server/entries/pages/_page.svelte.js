import { c as create_ssr_component, e as escape, b as add_attribute, v as validate_component, f as each } from "../../chunks/ssr.js";
const hero_title = "ROYAL RANGERS";
const hero_subtitle = "41. přední hlídka Zábřeh";
const meeting_date = "pátek 16:00";
const main_tel = "+420 732 507 855";
const address = "Sušilova 58, 789 01 Zábřeh";
const about_us_title = "JSME ROYAL RANGERS";
const about_us_text = "Royal Rangers je mezinárodní křesťanská organizace pro děti a mládež, která v ČR působí od počátku 90. let. Její oddíly se nazývají přední hlídky. V Zábřehu byla taková hlídka založena v listopadu 2006 jakožto 41. přední hlídka Royal Rangers v ČR. Scházíme se každý pátek od 16.00 do 18.00 v naší klubovně v klubovně v budově Apoštolské církve. Na každé schůzce se dovídáme o poselství Bible pro nás, hrajeme zajímavé hry a učíme se dovednosti jako uzlování, orientace v přírodě, luštění šifer či zdravověda. To všechno si děti mohou prakticky vyzkoušet také na výpravách, víkendovkách a táborech.";
const verse_1 = "Neboť Bůh tak miloval svět, že dal svého jednorozeného Syna, aby žádný, kdo v něj věří, nezahynul, ale měl věčný život.";
const upcoming_events_title = "NADCHÁZEJÍCÍ AKCE";
const upcoming_events = [
  {
    image: "/nacvik_ringa.jpg",
    title: "Krajský Nácvik Ringa",
    subtitle: "Krajský nácvik před RingoTurnajem.",
    data: [
      {
        title: "Datum",
        text: "12. -  14. 4."
      },
      {
        title: "Cena",
        text: "500 Kč"
      }
    ],
    button_text: "Přihláška",
    url: "https://forms.gle/NGKqshPJDCmHdmCV8"
  },
  {
    image: "/prihlaska_rok.png",
    title: "Přihláška na školní rok 2023/2024",
    subtitle: "Přihláška je na celý školní rok a pokrývá skoro všechny potřeby pravidelných schůzek.",
    data: [
      {
        title: "Datum",
        text: "2023 - 2024"
      },
      {
        title: "Cena",
        text: "300 Kč"
      }
    ],
    button_text: "Přihláška",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSes3agqBqWgPUkm2kpa0BA5yahVjlB-nakgKBOwiIvYgHVuNA/viewform"
  },
  {
    image: "/hostejn.jpg",
    title: "Jarní víkendovka v Hoštejně",
    subtitle: "Jarní víkendovka Royal Rangers Zábřeh",
    data: [
      {
        title: "Datum",
        text: "15 - 17. 3."
      },
      {
        title: "Cena",
        text: "500 Kč"
      }
    ],
    button_text: "Přihláška",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSenrn9npt-IgKJN7j64ivZYi4LfNyaxXQjbcJlq8E1QZ2uiWw/viewform"
  }
];
const verse_2 = "Ve všem dělám druhým to, co chci, aby oni dělali mně.";
const leaders_title = "TÝM VEDOUCÍCH";
const leaders = [
  {
    image: "/leaders/jakub-pohanka.jpg",
    name: "Jakub Pohanka",
    post: "HLAVNÍ VEDOUCÍ",
    description: "Velitel, odborník na sociální sítě, zkušený organizátor táborů a šifrovacích her.",
    links: {
      facebook: "https://www.facebook.com/kuba.pohanka",
      whatsapp: "https://wa.me/420732507855",
      email: "mailto:jakub.pohanka@gmail.com"
    },
    tel: "+420 732 507 855"
  },
  {
    image: "/leaders/misa-srokova.jpg",
    name: "Míša Sroková",
    post: "VEDOUCÍ",
    description: "Royalistka celým srdcem od doby, kdy byla dítě. Největší pracant naší přední hlídky.",
    links: {
      email: "mailto:misasrokova@seznam.cz"
    },
    tel: "+420 731 252 868"
  },
  {
    image: "/leaders/marketa-heclova.jpg",
    name: "Markéta Heclová",
    post: "JUNIORSKÁ VEDOUCÍ",
    description: "Vedoucí s neotřelými nápady, stálice a velká opora royalovských schůzek.",
    links: {
      email: "mailto:heclova.marketa1@gmail.com"
    },
    tel: "+420 736 618 263"
  },
  {
    image: "/leaders/matthew-sivak.jpg",
    name: "Matthew Sivák",
    post: "JUNIORSKÝ VEDOUCÍ",
    description: "Něco určitě umí",
    links: {
      email: "mailto:matthew@thesivak.net"
    },
    tel: "+420 731 252 868"
  },
  {
    image: "/leaders/ondrej-mlcoch.jpg",
    name: "Ondřej Mlčoch",
    post: "JUNIORSKÝ VEDOUCÍ",
    description: "Taky určitě něco umí",
    links: {
      email: "mailto:ondramlcoch07@gmail.com"
    },
    tel: "+420 734 369 368"
  },
  {
    image: "/leaders/ondrej-reichel.jpg",
    name: "Ondřej Reichel",
    post: "JUNIORSKÝ VEDOUCÍ",
    description: "Možná taky něco umí",
    links: {},
    tel: "+420 778 261 906"
  }
];
const verse_3 = "„Jak vidíte, nezmocnilo se vás pokušení, které by pro lidi nebylo běžné. Ale Bůh je věrný! Nedovolí, abyste byli pokoušeni nad své možnosti; uprostřed zkoušky vám poskytne východisko, abyste mohli obstát.“";
const footer = {
  title: "Royal Rangers",
  text_group_1: {
    line_1: {
      text: "Adresa: Sušilova 58, 789 01 Zábřeh"
    },
    line_2: {
      url: "https://www.kb.cz/cs/transparentni-ucty/107-8553150267",
      text: "Veřejný účet: 107-8553150267/0100"
    }
  },
  text_group_2: {
    line_1: {
      url: "mailto:rrzabreh@gmail.com",
      text: "E-mail: rrzabreh@gmail.com"
    },
    line_2_group: {
      left: {
        url: "tel:+420732507855",
        text: "Tel.: +420 732 507 855"
      },
      right: {
        text: "IČ: 75104245"
      }
    }
  },
  links: {
    facebook: "https://www.facebook.com/groups/495284997175605/",
    instagram: "https://www.instagram.com/rrzabreh/",
    youtube: "https://www.youtube.com/user/41PHRoyalRangers"
  },
  map_link: "https://maps.google.com/maps?q=Su%C5%A1ilova%2058,%20789%2001%20Z%C3%A1b%C5%99eh&t=&z=13&ie=UTF8&iwloc=&output=embed/"
};
const data = {
  hero_title,
  hero_subtitle,
  meeting_date,
  main_tel,
  address,
  about_us_title,
  about_us_text,
  verse_1,
  upcoming_events_title,
  upcoming_events,
  verse_2,
  leaders_title,
  leaders,
  verse_3,
  footer
};
const background = "/_app/immutable/assets/verse-background.BhULuAx1.webp";
const css$2 = {
  code: ".ap-verse.svelte-sonfai{z-index:20;padding-top:3.5rem;padding-bottom:3.5rem;padding-left:0.75rem;padding-right:0.75rem;text-align:center;font-size:1.3rem;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}@media(min-width: 1024px){.ap-verse.svelte-sonfai{font-size:2.5rem}}.ap-verse.ap-blue.svelte-sonfai{background-color:rgb(37 99 235 / var(--tw-bg-opacity));--tw-bg-opacity:0.7}.ap-verse.ap-red.svelte-sonfai{background-color:rgb(220 38 38 / var(--tw-bg-opacity));--tw-bg-opacity:0.7}.ap-verse.ap-yellow.svelte-sonfai{background-color:rgb(202 138 4 / var(--tw-bg-opacity));--tw-bg-opacity:0.7}.ap-verse-background.svelte-sonfai{background-size:cover;background-position:center}",
  map: null
};
const Verse = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color } = $$props;
  let { verse } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.verse === void 0 && $$bindings.verse && verse !== void 0)
    $$bindings.verse(verse);
  $$result.css.add(css$2);
  return `<div class="ap-verse-background svelte-sonfai" style="${"background-image: url('" + escape(background, true) + "');"}"><div class="${"ap-verse ap-" + escape(color, true) + " svelte-sonfai"}">„${escape(verse)}“</div> </div>`;
});
const arrowDown = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='2em'%20viewBox='0%200%20384%20512'%3e%3c!--%20Font%20Awesome%20Free%206.4.2%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license%20(Commercial%20License)%20Copyright%202023%20Fonticons,%20Inc.%20--%3e%3cstyle%3esvg{fill:%23ffffff}%3c/style%3e%3cpath%20d='M169.4%20470.6c12.5%2012.5%2032.8%2012.5%2045.3%200l160-160c12.5-12.5%2012.5-32.8%200-45.3s-32.8-12.5-45.3%200L224%20370.8%20224%2064c0-17.7-14.3-32-32-32s-32%2014.3-32%2032l0%20306.7L54.6%20265.4c-12.5-12.5-32.8-12.5-45.3%200s-12.5%2032.8%200%2045.3l160%20160z'/%3e%3c/svg%3e";
const css$1 = {
  code: '.cs-hero.svelte-d0xxqo{height:100vh;background-image:url("/uvod-box-pozadi.jpg");background-position-y:bottom;background-position-x:center;background-size:cover\n}.ap-bg-gradient.svelte-d0xxqo{background-image:linear-gradient(to bottom, var(--tw-gradient-stops));--tw-gradient-from:#000000e0 var(--tw-gradient-from-position);--tw-gradient-to:rgb(0 0 0 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to);--tw-gradient-to:#00000020 var(--tw-gradient-to-position)\n}',
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section class="cs-hero js-hero svelte-d0xxqo"><div class="flex flex-col items-center justify-center w-full h-full text-center text-white ap-bg-gradient svelte-d0xxqo"><div class="container flex flex-col items-center lg:pb-32"><h1 class="uppercase tracking-[1.2rem] text-center font-semibold text-2xl lg:text-3xl">${escape(data.hero_title)}</h1> <h2 class="mb-12 text-xl font-light text-center lg:text-2xl">${escape(data.hero_subtitle)}</h2> <a href="#o-nas" class="flex justify-center w-12 -mb-24" data-svelte-h="svelte-157r7p6"><img class="animate-bounce"${add_attribute("src", arrowDown, 0)} alt=""></a></div></div> </section>`;
});
const royalUOhne = "/_app/immutable/assets/royal-rangers-about-background.DZ5VrAOF.jpg";
const Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { id } = $$props;
  let { className = "container px-4" } = $$props;
  let { titleEnabled = true } = $$props;
  let { padding = true } = $$props;
  let { style = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.titleEnabled === void 0 && $$bindings.titleEnabled && titleEnabled !== void 0)
    $$bindings.titleEnabled(titleEnabled);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  return `<section${add_attribute("id", id, 0)}${add_attribute("class", padding ? "py-24" : "", 0)}${add_attribute("style", style, 0)}><div${add_attribute("class", className, 0)}><h2 ${!titleEnabled ? "hidden" : ""}${add_attribute("class", "mb-8 font-semibold text-center uppercase", 0)}>${escape(title)}</h2> ${slots.default ? slots.default({}) : ``}</div></section>`;
});
const AboutUs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Section, "Section").$$render(
    $$result,
    {
      id: "o-nas",
      title: data.about_us_title,
      style: "background-image: linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5) ), url('" + royalUOhne + "'); background-position: center; background-size: cover",
      className: "text-white container py-4 pt-8"
    },
    {},
    {
      default: () => {
        return `<div class="flex-col space-x-8 tems-center lg:flex"><p class="text-lg text-justify grow">${escape(data.about_us_text)}</p></div>`;
      }
    }
  )}`;
});
const Event = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { img } = $$props;
  let { title } = $$props;
  let { description } = $$props;
  let { data: data2 } = $$props;
  let { url } = $$props;
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.data === void 0 && $$bindings.data && data2 !== void 0)
    $$bindings.data(data2);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  return `<div class="p-4 flex flex-col space-y-5 rounded-lg shadow-xl dark:shadow-neutral-900 dark:bg-neutral-850 basis-1/4"><img${add_attribute("src", img, 0)} alt="test" class="rounded aspect-video"> <h4 class="font-semibold text-center">${escape(title)}</h4> <div class="grow"><p>${escape(description)}</p></div> <hr class="mt-5"> ${each(data2, (entry, i) => {
    return `<p class="ml-4"><span class="font-semibold">${escape(entry.title)}</span>: ${escape(entry.text)}</p> ${i != data2.length - 1 ? `<hr>` : ``}`;
  })} <hr> <a class="block py-3 font-semibold text-center text-white bg-blue-500 rounded-md"${add_attribute("href", url, 0)}>Přihláška</a></div>`;
});
const Events = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Section, "Section").$$render(
    $$result,
    {
      id: "akce",
      title: data.upcoming_events_title
    },
    {},
    {
      default: () => {
        return `<div class="flex-wrap justify-center w-full gap-10 lg:flex">${each(data.upcoming_events, (event) => {
          return `${validate_component(Event, "Event").$$render(
            $$result,
            {
              img: event.image,
              title: event.title,
              description: event.subtitle,
              data: event.data,
              url: event.url
            },
            {},
            {}
          )}`;
        })}</div>`;
      }
    }
  )}`;
});
const css = {
  code: "svg.svelte-zkfyj0{width:2rem;height:2rem}",
  map: null
};
const Leader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { image } = $$props;
  let { name } = $$props;
  let { position } = $$props;
  let { description } = $$props;
  let { email = "" } = $$props;
  let { facebook = "" } = $$props;
  let { whatsapp = "" } = $$props;
  let { tel = "" } = $$props;
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.email === void 0 && $$bindings.email && email !== void 0)
    $$bindings.email(email);
  if ($$props.facebook === void 0 && $$bindings.facebook && facebook !== void 0)
    $$bindings.facebook(facebook);
  if ($$props.whatsapp === void 0 && $$bindings.whatsapp && whatsapp !== void 0)
    $$bindings.whatsapp(whatsapp);
  if ($$props.tel === void 0 && $$bindings.tel && tel !== void 0)
    $$bindings.tel(tel);
  $$result.css.add(css);
  return `<div class="flex flex-col items-center justify-between basis-1/5 shrink-0"><div class="flex flex-col items-center"><img${add_attribute("src", image, 0)}${add_attribute("alt", name, 0)} class="mb-4 border-4 border-white rounded-full shadow-xl h-[160px] w-[160px]"> <div class="text-lg font-medium">${escape(name)}</div> <div class="font-medium uppercase text-md">${escape(position)}</div> ${tel !== "" ? `<div class="font-medium"><a${add_attribute("href", "tel:" + tel, 0)}>${escape(tel)}</a></div>` : ``} <p class="my-4 font-light text-center">${escape(description)}</p></div> <div class="flex space-x-4">${facebook !== "" ? `<a${add_attribute("href", facebook, 0)}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" class="fill-current hover:fill-[#3C5A99] svelte-zkfyj0"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg></a>` : ``} ${whatsapp !== "" ? `<a${add_attribute("href", whatsapp, 0)}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" class="fill-current hover:fill-[#25D366] svelte-zkfyj0"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg></a>` : ``} ${email !== "" ? `<a${add_attribute("href", `mailto:${email}`, 0)}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" class="fill-current hover:fill-[#F1C40F] svelte-zkfyj0"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path></svg></a>` : ``}</div> </div>`;
});
const Leaders = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Section, "Section").$$render($$result, { id: "tym", title: data.leaders_title }, {}, {
    default: () => {
      return `<div class="flex-wrap justify-center gap-16 px-4 space-y-16 lg:flex lg:px-16 lg:space-y-0">${each(data.leaders, (leader) => {
        return `${validate_component(Leader, "Leader").$$render(
          $$result,
          {
            image: leader.image,
            name: leader.name,
            position: leader.post,
            description: leader.description,
            facebook: leader.links.facebook,
            whatsapp: leader.links.whatsapp,
            email: leader.links.email,
            tel: leader.tel
          },
          {},
          {}
        )}`;
      })}</div>`;
    }
  })}`;
});
const facebookIcon = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='1em'%20viewBox='0%200%20512%20512'%3e%3c!--!%20Font%20Awesome%20Free%206.4.2%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license%20(Commercial%20License)%20Copyright%202023%20Fonticons,%20Inc.%20--%3e%3cstyle%3esvg{fill:%23ffffff}%3c/style%3e%3cpath%20d='M504%20256C504%20119%20393%208%20256%208S8%20119%208%20256c0%20123.78%2090.69%20226.38%20209.25%20245V327.69h-63V256h63v-54.64c0-62.15%2037-96.48%2093.67-96.48%2027.14%200%2055.52%204.84%2055.52%204.84v61h-31.28c-30.8%200-40.41%2019.12-40.41%2038.73V256h68.78l-11%2071.69h-57.78V501C413.31%20482.38%20504%20379.78%20504%20256z'/%3e%3c/svg%3e";
const instagramIcon = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='1em'%20viewBox='0%200%20448%20512'%3e%3c!--!%20Font%20Awesome%20Free%206.4.2%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license%20(Commercial%20License)%20Copyright%202023%20Fonticons,%20Inc.%20--%3e%3cstyle%3esvg{fill:%23ffffff}%3c/style%3e%3cpath%20d='M224.1%20141c-63.6%200-114.9%2051.3-114.9%20114.9s51.3%20114.9%20114.9%20114.9S339%20319.5%20339%20255.9%20287.7%20141%20224.1%20141zm0%20189.6c-41.1%200-74.7-33.5-74.7-74.7s33.5-74.7%2074.7-74.7%2074.7%2033.5%2074.7%2074.7-33.6%2074.7-74.7%2074.7zm146.4-194.3c0%2014.9-12%2026.8-26.8%2026.8-14.9%200-26.8-12-26.8-26.8s12-26.8%2026.8-26.8%2026.8%2012%2026.8%2026.8zm76.1%2027.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9%200-35.8%201.7-67.6%209.9-93.9%2036.1s-34.4%2058-36.2%2093.9c-2.1%2037-2.1%20147.9%200%20184.9%201.7%2035.9%209.9%2067.7%2036.2%2093.9s58%2034.4%2093.9%2036.2c37%202.1%20147.9%202.1%20184.9%200%2035.9-1.7%2067.7-9.9%2093.9-36.2%2026.2-26.2%2034.4-58%2036.2-93.9%202.1-37%202.1-147.8%200-184.8zM398.8%20388c-7.8%2019.6-22.9%2034.7-42.6%2042.6-29.5%2011.7-99.5%209-132.1%209s-102.7%202.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7%209-132.1c7.8-19.6%2022.9-34.7%2042.6-42.6%2029.5-11.7%2099.5-9%20132.1-9s102.7-2.6%20132.1%209c19.6%207.8%2034.7%2022.9%2042.6%2042.6%2011.7%2029.5%209%2099.5%209%20132.1s2.7%20102.7-9%20132.1z'/%3e%3c/svg%3e";
const youtubeIcon = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='1em'%20viewBox='0%200%20576%20512'%3e%3c!--!%20Font%20Awesome%20Free%206.4.2%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license%20(Commercial%20License)%20Copyright%202023%20Fonticons,%20Inc.%20--%3e%3cstyle%3esvg{fill:%23ffffff}%3c/style%3e%3cpath%20d='M549.655%20124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781%2064%20288%2064%20288%2064S117.22%2064%2074.629%2075.486c-23.497%206.322-42.003%2024.947-48.284%2048.597-11.412%2042.867-11.412%20132.305-11.412%20132.305s0%2089.438%2011.412%20132.305c6.281%2023.65%2024.787%2041.5%2048.284%2047.821C117.22%20448%20288%20448%20288%20448s170.78%200%20213.371-11.486c23.497-6.321%2042.003-24.171%2048.284-47.821%2011.412-42.867%2011.412-132.305%2011.412-132.305s0-89.438-11.412-132.305zm-317.51%20213.508V175.185l142.739%2081.205-142.739%2081.201z'/%3e%3c/svg%3e";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Section, "Section").$$render(
    $$result,
    {
      id: "kontakt",
      title: data.footer.title,
      className: "bg-gray-800 dark:bg-neutral-900 px-4",
      titleEnabled: false,
      padding: false
    },
    {},
    {
      default: () => {
        return `<div class="container block w-full pt-4"><div class="grid grid-cols-1 gap-16 py-10 lg:grid-cols-2"><div class="flex flex-col items-center justify-between space-y-8 text-white"><h2 class="font-semibold">${escape(data.footer.title)}</h2> <div><p>${escape(data.footer.text_group_1.line_1.text)}</p> <a class="hover:underline"${add_attribute("href", data.footer.text_group_1.line_2.url, 0)}>${escape(data.footer.text_group_1.line_2.text)}</a></div> <div class="text-center"><a class="hover:underline"${add_attribute("href", data.footer.text_group_2.line_1.url, 0)}>${escape(data.footer.text_group_2.line_1.text)}</a> <div class="flex space-x-5"><a class="hover:underline"${add_attribute("href", data.footer.text_group_2.line_2_group.left.url, 0)}>${escape(data.footer.text_group_2.line_2_group.left.text)}</a> <p>${escape(data.footer.text_group_2.line_2_group.right.text)}</p></div></div> <div class="flex justify-between text-center space-x-28" data-svelte-h="svelte-1enm1bg"><a${add_attribute("href", data.footer.links.facebook, 0)}><img${add_attribute("src", facebookIcon, 0)} alt="facebook" class="w-12"></a> <a${add_attribute("href", data.footer.links.instagram, 0)}><img${add_attribute("src", instagramIcon, 0)} alt="instagram" class="w-12"></a> <a${add_attribute("href", data.footer.links.youtube, 0)}><img${add_attribute("src", youtubeIcon, 0)} alt="youtube" class="w-12"></a></div></div> <iframe height="310" class="rounded-md lg:w-[450px] w-full" title="map" src="https://maps.google.com/maps?q=Su%C5%A1ilova%2058,%20789%2001%20Z%C3%A1b%C5%99eh&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" ${""} style="border: 0"></iframe></div> <span class="block w-full text-lg text-center text-white" data-svelte-h="svelte-in8x9q">© 2023 studio <a href="https://github.com/svecs-sivakm" target="_blank" class="font-semibold transition-all duration-200 text-cyan-400 hover:text-cyan-200">svecs&amp;sivakm</a></span></div>`;
      }
    }
  )}`;
});
const calendar = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='3em'%20viewBox='0%200%20448%20512'%3e%3c!--%20Font%20Awesome%20Free%206.4.2%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license%20(Commercial%20License)%20Copyright%202023%20Fonticons,%20Inc.%20--%3e%3cstyle%3esvg{fill:%23ffffff}%3c/style%3e%3cpath%20d='M128%200c17.7%200%2032%2014.3%2032%2032V64H288V32c0-17.7%2014.3-32%2032-32s32%2014.3%2032%2032V64h48c26.5%200%2048%2021.5%2048%2048v48H0V112C0%2085.5%2021.5%2064%2048%2064H96V32c0-17.7%2014.3-32%2032-32zM0%20192H448V464c0%2026.5-21.5%2048-48%2048H48c-26.5%200-48-21.5-48-48V192zm64%2080v32c0%208.8%207.2%2016%2016%2016h32c8.8%200%2016-7.2%2016-16V272c0-8.8-7.2-16-16-16H80c-8.8%200-16%207.2-16%2016zm128%200v32c0%208.8%207.2%2016%2016%2016h32c8.8%200%2016-7.2%2016-16V272c0-8.8-7.2-16-16-16H208c-8.8%200-16%207.2-16%2016zm144-16c-8.8%200-16%207.2-16%2016v32c0%208.8%207.2%2016%2016%2016h32c8.8%200%2016-7.2%2016-16V272c0-8.8-7.2-16-16-16H336zM64%20400v32c0%208.8%207.2%2016%2016%2016h32c8.8%200%2016-7.2%2016-16V400c0-8.8-7.2-16-16-16H80c-8.8%200-16%207.2-16%2016zm144-16c-8.8%200-16%207.2-16%2016v32c0%208.8%207.2%2016%2016%2016h32c8.8%200%2016-7.2%2016-16V400c0-8.8-7.2-16-16-16H208zm112%2016v32c0%208.8%207.2%2016%2016%2016h32c8.8%200%2016-7.2%2016-16V400c0-8.8-7.2-16-16-16H336c-8.8%200-16%207.2-16%2016z'/%3e%3c/svg%3e";
const phoneImage = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='3em'%20viewBox='0%200%20512%20512'%3e%3c!--%20Font%20Awesome%20Free%206.4.2%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license%20(Commercial%20License)%20Copyright%202023%20Fonticons,%20Inc.%20--%3e%3cstyle%3esvg{fill:%23ffffff}%3c/style%3e%3cpath%20d='M164.9%2024.6c-7.7-18.6-28-28.5-47.4-23.2l-88%2024C12.1%2030.2%200%2046%200%2064C0%20311.4%20200.6%20512%20448%20512c18%200%2033.8-12.1%2038.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3%2011.6L304.7%20368C234.3%20334.7%20177.3%20277.7%20144%20207.3L193.3%20167c13.7-11.2%2018.4-30%2011.6-46.3l-40-96z'/%3e%3c/svg%3e";
const location = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='3em'%20viewBox='0%200%20384%20512'%3e%3c!--%20Font%20Awesome%20Free%206.4.2%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license%20(Commercial%20License)%20Copyright%202023%20Fonticons,%20Inc.%20--%3e%3cstyle%3esvg{fill:%23ffffff}%3c/style%3e%3cpath%20d='M215.7%20499.2C267%20435%20384%20279.4%20384%20192C384%2086%20298%200%20192%200S0%2086%200%20192c0%2087.4%20117%20243%20168.3%20307.2c12.3%2015.3%2035.1%2015.3%2047.4%200zM192%20128a64%2064%200%201%201%200%20128%2064%2064%200%201%201%200-128z'/%3e%3c/svg%3e";
const Cards = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="justify-center hidden w-full space-y-8 -mt-28 xl:flex absolute"><div class="container flex justify-center w-full space-x-64"><div class="flex flex-col items-center flex-1 p-6 space-y-6 text-white bg-red-600 border-b border-red-600 rounded-md shadow-lg"><img${add_attribute("src", calendar, 0)} alt="calendar" class="h-16"> <div class="flex flex-col justify-center flex-grow w-full text-center"><h5 data-svelte-h="svelte-l1k1qb">pravidelné schůzky</h5> <h4 class="font-semibold">${escape(data.meeting_date)}</h4></div></div> <div class="flex flex-col items-center flex-1 p-6 space-y-6 text-white bg-orange-600 border-b border-orange-600 rounded-md shadow-lg"><img${add_attribute("src", phoneImage, 0)} alt="calendar" class="h-16"> <div class="flex flex-col justify-center flex-grow w-full text-center"><h5 data-svelte-h="svelte-1tzxwje">hlavní kontakt</h5> <h4 class="font-semibold">${escape(data.main_tel)}</h4></div></div> <div class="flex flex-col items-center flex-1 p-6 space-y-6 text-white bg-blue-800 border-b border-blue-800 rounded-md shadow-lg"><img${add_attribute("src", location, 0)} alt="calendar" class="h-16"> <div class="flex flex-col justify-center flex-grow w-full text-center"><h5 data-svelte-h="svelte-1fos3o">adresa</h5> <h4 class="font-semibold">${escape(data.address)}</h4></div></div></div></div>`;
});
const menu = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='2em'%20viewBox='0%200%20448%20512'%3e%3c!--%20Font%20Awesome%20Free%206.4.2%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license%20(Commercial%20License)%20Copyright%202023%20Fonticons,%20Inc.%20--%3e%3cstyle%3esvg{fill:%23ffffff}%3c/style%3e%3cpath%20d='M0%2096C0%2078.3%2014.3%2064%2032%2064H416c17.7%200%2032%2014.3%2032%2032s-14.3%2032-32%2032H32C14.3%20128%200%20113.7%200%2096zM0%20256c0-17.7%2014.3-32%2032-32H416c17.7%200%2032%2014.3%2032%2032s-14.3%2032-32%2032H32c-17.7%200-32-14.3-32-32zM448%20416c0%2017.7-14.3%2032-32%2032H32c-17.7%200-32-14.3-32-32s14.3-32%2032-32H416c17.7%200%2032%2014.3%2032%2032z'/%3e%3c/svg%3e";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let navClass = "";
  let menuDropdownClass = "opacity-0";
  return ` <nav class="absolute top-0 w-full transition-all duration-500 z-[9999]"><div${add_attribute("class", `flex justify-between lg:justify-center items-center px-8 lg:space-x-6 text-lg w-full py-4 lg:py-8 transition-all duration-500 ${navClass}`, 0)}><a class="hidden text-white lg:inline" href="#o-nas" data-svelte-h="svelte-yk0v5m">O nás</a> <a class="hidden text-white lg:inline" href="#akce" data-svelte-h="svelte-1uloylf">Akce</a> <img src="/Royal-Rangers-logo.png" alt="Royal Rangers Logo" class="h-16 lg:h-24"> <a class="hidden text-white lg:inline" href="#tym" data-svelte-h="svelte-5dxxpb">Tým</a> <a class="hidden text-white lg:inline" href="#kontakt" data-svelte-h="svelte-1qgq6gr">Kontakt</a> <button class="lg:mr-10 lg:hidden" data-svelte-h="svelte-xk26pw"><img${add_attribute("src", menu, 0)} alt="Menu" class="w-16 h-8"></button></div> <div${add_attribute("class", `absolute top-20 flex flex-col items-start justify-center w-full pl-4 py-4 space-y-4 bg-white text-black mt-4 lg:hidden font-montserrat uppercase text-left transition-all duration-500 js-menu-dropdown ${menuDropdownClass}`, 0)}><a href="#o-nas" data-svelte-h="svelte-lv8sbq">O nás</a> <a href="#akce" data-svelte-h="svelte-mop2af">Akce</a> <a href="#tym" data-svelte-h="svelte-13rpjy3">Tým</a> <a href="#kontakt" data-svelte-h="svelte-gkt3m7">Kontakt</a></div></nav>  <nav${add_attribute("class", "-translate-y-[1000px] fixed top-0 w-full transition-all duration-500 z-[9999] bg-gray-800 dark:bg-neutral-900", 0)}><div${add_attribute("class", `flex justify-between lg:justify-center items-center px-8 lg:space-x-6 text-lg w-full py-4 lg:py-8 transition-all duration-500 ${navClass}`, 0)}><a class="hidden text-white lg:inline" href="#o-nas" data-svelte-h="svelte-yk0v5m">O nás</a> <a class="hidden text-white lg:inline" href="#akce" data-svelte-h="svelte-1uloylf">Akce</a> <img src="/Royal-Rangers-logo.png" alt="Royal Rangers Logo" class="h-16 lg:h-16"> <a class="hidden text-white lg:inline" href="#tym" data-svelte-h="svelte-5dxxpb">Tým</a> <a class="hidden text-white lg:inline" href="#kontakt" data-svelte-h="svelte-1qgq6gr">Kontakt</a> <button class="lg:mr-10 lg:hidden" data-svelte-h="svelte-xk26pw"><img${add_attribute("src", menu, 0)} alt="Menu" class="w-16 h-8"></button></div> <div${add_attribute("class", `absolute top-20 flex flex-col items-start justify-center w-full pl-4 py-4 space-y-4 bg-white text-black mt-4 lg:hidden font-montserrat uppercase text-left transition-all duration-500 js-menu-dropdown ${menuDropdownClass}`, 0)}><a href="#o-nas" data-svelte-h="svelte-lv8sbq">O nás</a> <a href="#akce" data-svelte-h="svelte-mop2af">Akce</a> <a href="#tym" data-svelte-h="svelte-13rpjy3">Tým</a> <a href="#kontakt" data-svelte-h="svelte-gkt3m7">Kontakt</a></div> </nav>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} ${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})} ${validate_component(Cards, "Cards").$$render($$result, {}, {}, {})} ${validate_component(AboutUs, "AboutUs").$$render($$result, {}, {}, {})} ${validate_component(Verse, "Verse").$$render($$result, { color: "blue", verse: data.verse_1 }, {}, {})} ${validate_component(Events, "Events").$$render($$result, {}, {}, {})} ${validate_component(Verse, "Verse").$$render($$result, { color: "yellow", verse: data.verse_2 }, {}, {})} ${validate_component(Leaders, "Leaders").$$render($$result, {}, {}, {})}  ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
