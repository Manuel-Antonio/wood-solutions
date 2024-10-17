/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro, d as renderComponent } from '../chunks/astro/server_BfSrewWf.mjs';
import 'kleur/colors';
import { s as servicios, $ as $$Layout } from '../chunks/Layout_e7gBJXTU.mjs';
import 'clsx';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$ServiceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const { name, description, imageUrl } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-white rounded-lg shadow-lg p-6 card-service" data-astro-cid-uhzbvkqe> <div class="w-full h-48 overflow-hidden rounded-lg" data-astro-cid-uhzbvkqe> <img${addAttribute(imageUrl, "src")}${addAttribute(name, "alt")} class="w-full h-48 object-cover  " data-astro-cid-uhzbvkqe> </div> <h3 class="text-2xl font-semibold mt-4" data-astro-cid-uhzbvkqe>${name}</h3> <p class="text-gray-600 mt-2" data-astro-cid-uhzbvkqe>${description}</p> </div> `;
}, "C:/Users/USER/Desktop/ASTRO PROJECTS/elegant-spaces/src/components/ServiceCard.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Servicios" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="text-center max-w-5xl mx-auto px-6"> <p class="text-sm font-bold text-red-500 mb-2 uppercase tracking-widest leading-tight">Servicios de Carpintería Artesanal</p> <h1 class="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
Convertimos madera en estilo y funcionalidad.
</h1> <img class="w-full mt-8 sm:mt-12 md:mt-16 h-64 sm:h-80 md:h-96 object-cover object-center sm:object-center rounded-lg" src="https://images.pexels.com/photos/7218525/pexels-photo-7218525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Consulting Team"> </section> <section class="mt-12 sm:mt-16 md:mt-20 max-w-5xl mx-auto px-6"> <div class="text-center mb-12"> <p class="text-sm font-bold text-red-500 mb-2 uppercase tracking-widest leading-tight">Nuestros Servicios</p> <h2 class="text-3xl md:text-4xl font-bold text-gray-800 w-2/3 mx-auto">Servicios a la medida de tus necesidades</h2> </div> <div class=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  mt-12 "> ${servicios.map(({ name, description, imageUrl }) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "name": name, "description": description, "imageUrl": imageUrl })}`)} </div> </section> <section class="mt-12 sm:mt-16 md:mt-20 max-w-5xl mx-auto px-6"> <div class="text-center"> <div class="mb-12"> <p class="text-sm font-bold text-red-500 mb-2 uppercase tracking-widest leading-tight">Nuestros Servicios</p> <h2 class="text-3xl md:text-4xl font-bold text-gray-800 w-full md:w-2/3 mx-auto">Nuestro proceso</h2> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <div class="text-center bg-white p-6 rounded-lg shadow-lg"> <div class="text-4xl mb-4 text-red-500"> <i class="fa-solid fa-comments"></i> </div> <h4 class="text-2xl font-semibold mb-2 text-gray-900">Consulta</h4> <p class="text-gray-700">Analizamos tus necesidades y proponemos las mejores opciones.</p> </div> <div class="text-center bg-white p-6 rounded-lg shadow-lg"> <div class="text-4xl mb-4 text-blue-500"> <i class="fa-solid fa-pencil-ruler"></i> </div> <h4 class="text-2xl font-semibold mb-2 text-gray-900">Diseño y Creación</h4> <p class="text-gray-700">Elaboramos un diseño único y lo llevamos a cabo con los mejores materiales.</p> </div> <div class="text-center bg-white p-6 rounded-lg shadow-lg"> <div class="text-4xl mb-4 text-green-500"> <i class="fa-solid fa-truck"></i> </div> <h4 class="text-2xl font-semibold mb-2 text-gray-900">Entrega e Instalación</h4> <p class="text-gray-700">Te entregamos el producto final y, si es necesario, lo instalamos para ti.</p> </div> </div> </div> </section> <section class="mt-12 sm:mt-16 md:mt-20 max-w-5xl mx-auto px-6"> <div class="text-center"> <h3 class="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Lo que dicen nuestros clientes</h3> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"> <!-- Testimonio 1 --> <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200"> <p class="text-gray-700 italic mb-4">"El nivel de detalle en cada pieza es impresionante. Superaron todas mis expectativas."</p> <h4 class="text-gray-800 font-semibold">- Juan Pérez</h4> </div> <!-- Testimonio 2 --> <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200"> <p class="text-gray-700 italic mb-4">"El servicio es excelente y la calidad de sus productos es insuperable. Recomiendo totalmente."</p> <h4 class="text-gray-800 font-semibold">- Ana Rodríguez</h4> </div> </div> </div> </section> ` })}`;
}, "C:/Users/USER/Desktop/ASTRO PROJECTS/elegant-spaces/src/pages/services.astro", void 0);

const $$file = "C:/Users/USER/Desktop/ASTRO PROJECTS/elegant-spaces/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Services,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
