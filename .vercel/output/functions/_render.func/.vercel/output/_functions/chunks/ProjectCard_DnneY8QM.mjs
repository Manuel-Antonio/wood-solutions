import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro } from './astro/server_BfSrewWf.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { id, title, description, featureImage } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300"> <div class="relative"> <img${addAttribute(featureImage, "src")}${addAttribute(title, "alt")} class="w-full h-64 object-cover rounded-t-lg"> <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div> </div> <div class="p-6"> <h3 class="text-2xl font-bold text-gray-800 mb-2">${title}</h3> <p class="text-gray-700 mb-4">${description}</p> <a${addAttribute(`/projects/${id}`, "href")} class="inline-block bg-red-500 text-white text-sm font-semibold py-2 px-4 rounded hover:bg-red-600 transition-colors duration-300">
Ver Proyecto
</a> </div> </div>`;
}, "C:/Users/USER/Desktop/ASTRO PROJECTS/elegant-spaces/src/components/ProjectCard.astro", void 0);

export { $$ProjectCard as $ };
