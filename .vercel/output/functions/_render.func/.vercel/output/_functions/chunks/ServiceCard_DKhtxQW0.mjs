import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro } from './astro/server_BfSrewWf.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$ServiceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const { name, description, icon, color } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "rounded-lg text-white p-8 hover:shadow-lg transition text-center sm:text-left",
    `${color}`
  ], "class:list")}> <div class="flex justify-center mb-6"> <i${addAttribute(`fas ${icon} h-24 w-24 flex items-center justify-center text-5xl`, "class")}></i> </div> <h3 class="text-xl font-bold mb-4">${name}</h3> <p class="mb-6"> ${description} </p> </div> `;
}, "C:/Users/Magtanio/Documents/PROYECTOS/professional-furniture/src/components/ServiceCard.astro", void 0);

export { $$ServiceCard as $ };
