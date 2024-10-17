/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_FcOIbzSd.mjs';
import 'kleur/colors';
import 'html-escaper';
import { p as projects, $ as $$Layout } from '../chunks/Layout_VExZ1wIW.mjs';
import { $ as $$ProjectCard } from '../chunks/ProjectCard_BKIeZ5GU.mjs';
export { renderers } from '../renderers.mjs';

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Proyectos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="text-center max-w-5xl mx-auto px-6"> <p class="text-sm font-bold text-red-500 mb-2 uppercase tracking-widest leading-tight">Nuestros proyectos</p> <h1 class="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
Nuestros Proyectos Recientes en Madera
</h1> <img class="w-full mt-8 sm:mt-12 md:mt-16 h-64 sm:h-80 md:h-96 object-cover object-center sm:object-top rounded-lg" src="https://images.pexels.com/photos/6332975/pexels-photo-6332975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Consulting Team"> </section> <section class="mt-12 sm:mt-16 md:mt-20  max-w-5xl mx-auto px-6"> <!-- Grid de Proyectos --> <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10"> ${projects.map(({ id, title, description, featureImage }) => renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "id": id, "title": title, "description": description, "featureImage": featureImage })}`)} </div> </section> ` })}`;
}, "C:/Users/Magtanio/Documents/PROYECTOS/professional-furniture/src/pages/projects.astro", void 0);

const $$file = "C:/Users/Magtanio/Documents/PROYECTOS/professional-furniture/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
