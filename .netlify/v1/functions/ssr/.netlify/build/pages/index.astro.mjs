/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_FcOIbzSd.mjs';
import 'kleur/colors';
import 'html-escaper';
import { s as servicios, p as projects, $ as $$Layout } from '../chunks/Layout_Dcn087oi.mjs';
import { $ as $$ProjectCard } from '../chunks/ProjectCard_BKIeZ5GU.mjs';
import { $ as $$ServiceCard } from '../chunks/ServiceCard_DDpYVIh5.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const reasons = [
    {
      color: "blue",
      title: "Personalizaci\xF3n Total",
      description: "Dise\xF1amos cada proyecto a medida, adapt\xE1ndonos a tus necesidades y preferencias \xFAnicas."
    },
    {
      color: "red",
      title: "Calidad Impecable",
      description: "Utilizamos materiales de primera y t\xE9cnicas avanzadas para garantizar resultados duraderos y est\xE9ticamente sobresalientes."
    },
    {
      color: "green",
      title: "Experiencia y Profesionalismo",
      description: "Nuestro equipo de expertos ofrece habilidad y profesionalismo para asegurar que tu proyecto se ejecute con precisi\xF3n."
    },
    {
      color: "gray",
      title: "Atenci\xF3n al Cliente Excepcional",
      description: "Brindamos un servicio atento y personalizado, manteni\xE9ndote informado y satisfecho en cada etapa del proceso."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="-mt-36 relative" data-astro-cid-j7pv25f6> <div class="hidden md:block banner-hero" data-astro-cid-j7pv25f6></div> <div class="flex flex-col md:flex-row items-center max-w-5xl px-6 mx-auto pt-36 pb-16" data-astro-cid-j7pv25f6> <div class="lg:w-1/2 text-center lg:text-left" data-astro-cid-j7pv25f6> <p class="text-sm font-bold text-red-500 mb-2 uppercase tracking-widest leading-tight" data-astro-cid-j7pv25f6>
Transforma tu Espacio
</p> <h1 class="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4" data-astro-cid-j7pv25f6>
Soluciones en Madera Personalizadas para Hogar y Negocio
</h1> <p class="text-gray-600 mb-6" data-astro-cid-j7pv25f6>
Desde muebles a medida hasta casas prefabricadas: calidad, diseño y
          durabilidad en cada proyecto.
</p> <a href="/contact" class="inline-block bg-red-600 text-white text-sm font-semibold py-3 px-6 rounded hover:bg-red-700 transition" data-astro-cid-j7pv25f6>
Comienza tu proyecto
</a> </div> <div class="hidden lg:w-1/2 mt-8 md:mt-0 lg:flex justify-center" data-astro-cid-j7pv25f6> <div class="relative" data-astro-cid-j7pv25f6> <img class="rotate-mouse rotate-90 absolute w-44 h-44 -bottom-10 -left-20 z-20" src="https://res.cloudinary.com/djsl4a5py/image/upload/v1724532273/MueblesProfesionales/adicional/round_dlnr6g.svg" data-astro-cid-j7pv25f6> <img src="https://res.cloudinary.com/djsl4a5py/image/upload/v1724532531/MueblesProfesionales/adicional/Fill_1_qvizpn.svg" class="rotate-90 absolute w-36 h-36 -top-10 z-0" data-astro-cid-j7pv25f6> <img src="https://res.cloudinary.com/djsl4a5py/image/upload/v1724532746/MueblesProfesionales/adicional/waves_rdmaly.svg" class="absolute rotate-180 w-24 h-24 right-0 bottom-0 z-20" data-astro-cid-j7pv25f6> <!-- Main Image --> <img src="https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Smiling person" class="w-96 h-96 object-cover rounded-full shadow-lg z-10 relative" data-astro-cid-j7pv25f6> </div> </div> </div> </section> <section class="mt-12 sm:mt-16 md:mt-20 max-w-5xl px-6 mx-auto" data-astro-cid-j7pv25f6> <!-- Header --> <div class="text-center mb-12" data-astro-cid-j7pv25f6> <p class="text-sm font-bold text-red-500 mb-2 uppercase tracking-widest leading-tight" data-astro-cid-j7pv25f6>
Nuestros Servicios
</p> <h2 class="text-3xl md:text-4xl font-bold text-gray-800 sm:w-2/3 mx-auto" data-astro-cid-j7pv25f6>
Servicios a la medida de tus necesidades
</h2> </div> <!-- Services Grid --> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-j7pv25f6> ${servicios.slice(0, 3).map(({ name, description, icon, color }) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "name": name, "description": description, "icon": icon, "color": color, "data-astro-cid-j7pv25f6": true })}`)} </div> </section> <section class="mt-12 sm:mt-16 md:mt-20 max-w-5xl px-6 mx-auto" data-astro-cid-j7pv25f6> <div class="flex flex-col md:flex-row items-center gap-10" data-astro-cid-j7pv25f6> <img class="w-40 lg:w-50 rounded-xl shadow-xl" src="https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Testimonial" data-astro-cid-j7pv25f6> <div class="space-y-4" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <i class="fas fa-star text-orange-400" data-astro-cid-j7pv25f6></i> <i class="fas fa-star text-orange-400" data-astro-cid-j7pv25f6></i> <i class="fas fa-star text-orange-400" data-astro-cid-j7pv25f6></i> <i class="fas fa-star text-orange-400" data-astro-cid-j7pv25f6></i> <i class="fas fa-star text-orange-400" data-astro-cid-j7pv25f6></i> </div> <div data-astro-cid-j7pv25f6> <h5 class="text-lg font-bold" data-astro-cid-j7pv25f6>
"El equipo entendió mi visión a la perfección. Diseñaron los muebles
            a medida y renovaron el piso de cemento con un acabado impecable.
            Excelente calidad y atención al detalle."
</h5> <p class="text-gray-500 mt-1 leading-4" data-astro-cid-j7pv25f6>
María Gutiérrez, Cliente Satisfecha
</p> </div> </div> </div> </section> <section class="mt-12 sm:mt-16 md:mt-20 w-full h-full relative overflow-hidden px-6 py-30 banner-started-project" data-astro-cid-j7pv25f6> <div class="max-w-5xl mx-auto px-6" data-astro-cid-j7pv25f6> <div class="text-center mb-12" data-astro-cid-j7pv25f6> <p class="text-sm font-bold text-red-500 mb-2 uppercase tracking-widest leading-tight" data-astro-cid-j7pv25f6>
POR QUÉ ELEGIRNOS
</p> <h2 class="text-3xl md:text-4xl font-bold text-gray-800 sm:w-2/3 mx-auto" data-astro-cid-j7pv25f6>
La gente nos elige porque servimos lo mejor para todos.
</h2> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16" data-astro-cid-j7pv25f6> ${reasons.map((reason) => renderTemplate`<div class="sm:flex items-center justify-center gap-8 bg-white rounded-lg shadow-lg p-10 text-center sm:text-left" data-astro-cid-j7pv25f6> <div${addAttribute(`bg-${reason.color}-100 text-xl text-${reason.color}-500 rounded-full p-2 inline-block mb-3 md:mb-0`, "class")} data-astro-cid-j7pv25f6> <i class="fas fa-cogs h-10 w-10 flex items-center justify-center" data-astro-cid-j7pv25f6></i> </div> <div class="w-full" data-astro-cid-j7pv25f6> <h3 class="text-xl font-bold text-gray-800" data-astro-cid-j7pv25f6> ${reason.title} </h3> <p class="text-gray-600" data-astro-cid-j7pv25f6> ${reason.description} </p> </div> </div>`)} </div> </div> <div class="max-w-5xl px-6 mx-auto flex flex-col md:flex-row justify-center md:justify-between items-start md:items-center md:gap-4 border-t-2 mt-12 sm:mt-16 pt-12 md:mt-20 sm:pt-16 md:pt-20" data-astro-cid-j7pv25f6> <div class="md:w-2/3" data-astro-cid-j7pv25f6> <h5 class="text-3xl font-bold mb-4" data-astro-cid-j7pv25f6>
¿Preparado para transformar tu espacio?
</h5> <p class="text-gray-600 mb-8" data-astro-cid-j7pv25f6>
Con nuestras soluciones personalizadas, desde muebles a medida hasta
          pisos y minicasas, puedes darle vida a tus ideas sin complicaciones.
          Comienza tu próximo proyecto con nosotros.
</p> </div> <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-astro-cid-j7pv25f6>Iniciar un proyecto</button> </div> </section> <section class="max-w-5xl px-6 mx-auto py-16" data-astro-cid-j7pv25f6> <div class="text-center mb-12" data-astro-cid-j7pv25f6> <p class="text-sm font-bold text-red-500 mb-2 uppercase tracking-widest leading-tight" data-astro-cid-j7pv25f6>
ESTUDIOS DE CASOS
</p> <h2 class="text-3xl md:text-4xl font-bold text-gray-800 sm:w-2/3 mx-auto" data-astro-cid-j7pv25f6>
Nuestros trabajos describen por qué somos los mejores en el negocio.
</h2> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-j7pv25f6> ${projects.slice(0, 3).map(({ id, title, description, featureImage }) => renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "id": id, "title": title, "description": description, "featureImage": featureImage, "data-astro-cid-j7pv25f6": true })}`)} </div> <div class="mt-12 text-center" data-astro-cid-j7pv25f6> <a href="/projects" class="inline-block text-red-500 hover:text-red-700 font-bold py-2 px-4 rounded" data-astro-cid-j7pv25f6>Ver más →</a> </div> </section> ` })} `;
}, "C:/Users/Magtanio/Documents/PROYECTOS/professional-furniture/src/pages/index.astro", void 0);

const $$file = "C:/Users/Magtanio/Documents/PROYECTOS/professional-furniture/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
