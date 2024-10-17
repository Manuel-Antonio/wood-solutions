/* empty css                                    */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead, a as addAttribute } from '../../chunks/astro/server_FcOIbzSd.mjs';
import 'kleur/colors';
import 'html-escaper';
import { p as projects, $ as $$Layout } from '../../chunks/Layout_VExZ1wIW.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  let { id } = Astro2.params;
  let project;
  if (id) {
    project = projects.find((p) => p.id === Number(id));
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": project ? project.title : "Proyecto no encontrado" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-project-header bg-cover bg-center h-72 flex items-center justify-center text-center text-white"> <div class="p-6 bg-black bg-opacity-50 rounded-lg"> <h1 class="text-3xl md:text-4xl font-bold mb-4">${project ? project.title : "Proyecto no encontrado"}</h1> <p class="text-lg md:text-xl">${project ? project.description : "El proyecto que buscas no est\xE1 disponible."}</p> </div> </section> ${project ? renderTemplate`<main class="max-w-7xl mx-auto p-6 md:p-12"> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <!-- Project Images --> <div class="space-y-4"> ${project.imageUrls?.map((url, index) => renderTemplate`<img${addAttribute(url, "src")}${addAttribute(`Imagen del proyecto ${index + 1}`, "alt")} class="w-full h-64 object-cover rounded-lg shadow-md">`)} </div> <!-- Project Details --> <div> <h2 class="text-2xl font-bold mb-4">Detalles del Proyecto</h2> ${project.materials && project.materials.length > 0 && renderTemplate`<div class="mb-4"> <h3 class="text-xl font-semibold mb-2">Materiales Utilizados</h3> <ul class="list-disc pl-5 text-gray-700"> ${project.materials.map((material) => renderTemplate`<li>${material}</li>`)} </ul> </div>`} ${project.services && project.services.length > 0 && renderTemplate`<div class="mb-4"> <h3 class="text-xl font-semibold mb-2">Servicios Ofrecidos</h3> <ul class="list-disc pl-5 text-gray-700"> ${project.services.map((service) => renderTemplate`<li>${service}</li>`)} </ul> </div>`} ${project.testimonial && renderTemplate`<div class="mt-6 border-t pt-4"> <h3 class="text-xl font-semibold mb-2">Testimonio</h3> <p class="text-gray-700 italic">"${project.testimonial.feedback}"</p> <p class="text-gray-700 font-semibold mt-2">- ${project.testimonial.name}</p> </div>`} </div> </div> </main>` : renderTemplate`<main class="max-w-7xl mx-auto p-6 text-center"> <p class="text-gray-700">El proyecto que buscas no está disponible.</p> </main>`}` })}`;
}, "C:/Users/Magtanio/Documents/PROYECTOS/professional-furniture/src/pages/projects/[id].astro", void 0);

const $$file = "C:/Users/Magtanio/Documents/PROYECTOS/professional-furniture/src/pages/projects/[id].astro";
const $$url = "/projects/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
