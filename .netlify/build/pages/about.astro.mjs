/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro, d as renderComponent } from '../chunks/astro/server_FcOIbzSd.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_Dcn087oi.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const persons = [{
  id: 1,
  name: "Joe Bridges",
  role: "Founder",
  imageUrl: "https://res.cloudinary.com/djsl4a5py/image/upload/v1724352506/MueblesProfesionales/Persons/Person1_i8uohj.webp"
}, {
  id: 2,
  name: "Jeffrey Walters",
  role: "Cheif Executive Officer",
  imageUrl: "https://res.cloudinary.com/djsl4a5py/image/upload/v1724358468/MueblesProfesionales/Persons/Person7_hodavc.webp"
}, {
  id: 3,
  name: "Jason Reed",
  role: "Chief Technology Officer",
  imageUrl: "https://res.cloudinary.com/djsl4a5py/image/upload/v1724352505/MueblesProfesionales/Persons/Person6_ujct4v.webp"
}, {
  id: 4,
  name: "Nellie Padilla",
  role: "Creative Director",
  imageUrl: "https://res.cloudinary.com/djsl4a5py/image/upload/v1724352505/MueblesProfesionales/Persons/Person5_bmt0ym.webp"
}, {
  id: 5,
  name: "Dean Bell",
  role: "Lead Programmer",
  imageUrl: "https://res.cloudinary.com/djsl4a5py/image/upload/v1724352505/MueblesProfesionales/Persons/Person4_hqvao8.webp"
}, {
  id: 6,
  name: "Pearl Brooks",
  role: "Digital Marketer",
  imageUrl: "https://res.cloudinary.com/djsl4a5py/image/upload/v1724352505/MueblesProfesionales/Persons/Person3_h33jwe.webp"
}, {
  id: 7,
  name: "Isaiah Griffin",
  role: "UX Designer",
  imageUrl: "https://res.cloudinary.com/djsl4a5py/image/upload/v1724352505/MueblesProfesionales/Persons/Person2_j9oyn4.webp"
}];

const $$Astro = createAstro();
const $$PersonCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PersonCard;
  const { imageUrl, name, role } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="text-center"> <img class="rounded w-full object-cover"${addAttribute(imageUrl, "src")}${addAttribute(`Person ${name}`, "alt")}> <div class="mt-4 text-left"> <h5 class="font-bold">${name}</h5> <h6 class="text-sm font-thin">${role}</h6> </div> </div>`;
}, "C:/Users/Magtanio/Documents/PROYECTOS/professional-furniture/src/components/PersonCard.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Acerca de nuestra empresa", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="text-center max-w-5xl mx-auto px-6" data-astro-cid-kh7btl4r> <p class="text-sm font-bold text-red-500 mb-2 uppercase tracking-widest leading-tight" data-astro-cid-kh7btl4r>Nuestra historia</p> <h1 class="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4" data-astro-cid-kh7btl4r>
Pasión por el diseño y la calidad.
</h1> <img class="w-full mt-8 sm:mt-12 md:mt-16 h-64 sm:h-80 md:h-96 object-cover object-center sm:object-top rounded-lg" src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Consulting Team" data-astro-cid-kh7btl4r> </section>  <section class="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-4 md:gap-4 lg:gap-8 max-w-5xl px-6 mx-auto " data-astro-cid-kh7btl4r> <h2 class="text-3xl font-bold text-gray-800 max-w-2xl" data-astro-cid-kh7btl4r>Estamos aquí para ayudar a los clientes a lograr el éxito.</h2> <div class="space-y-4 md:space-y-6" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>
Compartimos tendencias y estrategias comunes para mejorar sus ingresos por alquiler y asegurarnos de que mantenga una alta demanda de servicio.
</p> <p data-astro-cid-kh7btl4r>
Con muchos bloques únicos, puedes crear fácilmente una página sin codificación. Cree su próxima página de destino. Con muchos bloques únicos, puedes crear fácilmente una página sin codificar ninguna otra página.
</p> </div> </section>  <section class="mt-12 sm:mt-16 md:mt-20 relative px-6 " data-astro-cid-kh7btl4r> <div class=" max-w-5xl mx-auto py-12 sm:py-16 md:py-20 grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8" data-astro-cid-kh7btl4r> <div class="text-left" data-astro-cid-kh7btl4r> <img class="w-48 md:w-80 xl:w-96 rounded-lg shadow-md" src="https://images.pexels.com/photos/4491858/pexels-photo-4491858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="High skilled coders" data-astro-cid-kh7btl4r> </div> <div data-astro-cid-kh7btl4r> <p class="text-sm font-bold text-red-500 mb-2 uppercase tracking-widest leading-tight" data-astro-cid-kh7btl4r>Dedicación y esfuerzo</p> <h2 class="text-3xl md:text-4xl font-bold text-gray-800" data-astro-cid-kh7btl4r>Expertos en Carpintería y Diseño de Muebles</h2> <div class="mt-6 sm:mt-8 md:mt-10 space-y-4 sm:space-y-6" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>
Contamos con un equipo de artesanos altamente calificados y apasionados por la carpintería y el diseño de muebles, con experiencia global en técnicas y estilos innovadores.
</p> <p data-astro-cid-kh7btl4r>
Con una amplia variedad de bloques personalizados, puedes participar en el diseño de tus muebles sin necesidad de conocimientos técnicos. Diseña el espacio de tus sueños con facilidad y asegura la integración perfecta de cada pieza en tu hogar.
</p> </div> </div> </div> </section>  <section class="mt-12 sm:mt-16 md:mt-20 max-w-5xl mx-auto px-6" data-astro-cid-kh7btl4r> <div class="text-center" data-astro-cid-kh7btl4r> <p class="text-sm font-bold text-red-500 mb-2 uppercase tracking-widest leading-tight" data-astro-cid-kh7btl4r>Conoce a nuestro equipo</p> <h2 class="text-3xl md:text-4xl font-bold text-gray-800 w-2/3 mx-auto" data-astro-cid-kh7btl4r>Expertos en Carpintería y Diseño de Muebles</h2> </div> <div class="grid  grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-16 gap-x-4 gap-y-10" data-astro-cid-kh7btl4r> ${persons.map(({ name, role, imageUrl }) => renderTemplate`${renderComponent($$result2, "PersonCard", $$PersonCard, { "name": name, "role": role, "imageUrl": imageUrl, "data-astro-cid-kh7btl4r": true })}`)} <div class="flex flex-col items-center justify-center px-5" data-astro-cid-kh7btl4r> <div data-astro-cid-kh7btl4r> <h5 class="font-bold" data-astro-cid-kh7btl4r>Interested to join 
                our team ?</h5> <a href="/" class="mt-3 inline-block font-bold text-red-500 hover:text-red-600 transition-all duration-100" data-astro-cid-kh7btl4r>
Apply now
<i class="ms-4 fa-solid fa-arrow-right" data-astro-cid-kh7btl4r></i> </a> </div> </div> </div> </section> ` })} `;
}, "C:/Users/Magtanio/Documents/PROYECTOS/professional-furniture/src/pages/about.astro", void 0);

const $$file = "C:/Users/Magtanio/Documents/PROYECTOS/professional-furniture/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
