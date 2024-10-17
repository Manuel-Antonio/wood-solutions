/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro, d as renderComponent } from '../chunks/astro/server_BfSrewWf.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Layout } from '../chunks/Layout_C4AiLuE5.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$QuestionCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$QuestionCard;
  const { question, answer, category } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"> <h3 class="text-xl font-semibold text-gray-800 mb-4"> ${question} </h3> <p class="text-gray-600 text-sm sm:text-base mb-4"> ${answer} </p> <div class="text-sm text-gray-500"> <span class="bg-red-100 text-red-500 py-1 px-3 rounded-full"> ${category} </span> </div> </div>`;
}, "C:/Users/Magtanio/Documents/PROYECTOS/professional-furniture/src/components/QuestionCard.astro", void 0);

const faqs = [{
  id: "1",
  question: "¿Qué incluye el servicio de Carpintería Artesanal?",
  answer: "Nuestro servicio de carpintería artesanal incluye la creación de muebles a medida, mesas personalizadas, puertas únicas, y más. Utilizamos madera de alta calidad para transformar tus ideas en piezas que combinan funcionalidad y estilo.",
  category: "Servicios de Carpintería"
}, {
  id: "2",
  question: "¿Cómo funciona el servicio de Diseño y Fabricación de Muebles a Medida?",
  answer: "Nos especializamos en diseñar y fabricar muebles personalizados que se adaptan perfectamente a cualquier espacio y necesidad. Trabajamos contigo para asegurar que el diseño final refleje tu estilo y funcionalidad deseada.",
  category: "Diseño y Fabricación"
}, {
  id: "3",
  question: "¿Ofrecen Restauración y Renovación de Muebles Antiguos?",
  answer: "Sí, devolvemos la vida a tus muebles antiguos mediante un proceso detallado de restauración, asegurando acabados de alta calidad que respeten el carácter original de las piezas.",
  category: "Restauración"
}, {
  id: "4",
  question: "¿Qué incluye el servicio de Construcción de Mini-Casas y Cabañas en Madera?",
  answer: "Ofrecemos el diseño y construcción de mini-casas y cabañas en madera, creando espacios acogedores y funcionales que se adaptan a tus necesidades específicas.",
  category: "Construcción"
}, {
  id: "5",
  question: "¿Pueden instalar Pisos de Cemento Pulido?",
  answer: "Sí, instalamos pisos de cemento con un acabado moderno y duradero, ideal para interiores y exteriores.",
  category: "Instalación de Pisos"
}, {
  id: "6",
  question: "¿Qué servicios de Pintura y Acabado de Madera ofrecen?",
  answer: "Ofrecemos servicios de pintura y acabado de alta calidad para superficies de madera tanto en interiores como en exteriores, asegurando protección y belleza duradera.",
  category: "Pintura y Acabado"
}, {
  id: "7",
  question: "¿Realizan Fabricación e Instalación de Puertas y Ventanas de Madera?",
  answer: "Sí, fabricamos e instalamos puertas y ventanas de madera con diseños personalizados, asegurando durabilidad y estilo.",
  category: "Fabricación e Instalación"
}, {
  id: "8",
  question: "¿Qué incluye el servicio de Diseño e Instalación de Cocinas Integrales?",
  answer: "Diseñamos cocinas integrales que combinan funcionalidad y estilo, optimizando cada rincón de tu espacio para un uso eficiente y elegante.",
  category: "Cocinas Integrales"
}, {
  id: "9",
  question: "¿Construyen Pérgolas y Estructuras de Jardín?",
  answer: "Sí, diseñamos y construimos pérgolas y estructuras en madera para mejorar y personalizar tus espacios exteriores, brindando sombra y estilo.",
  category: "Estructuras de Jardín"
}, {
  id: "10",
  question: "¿Ofrecen Asesoría y Diseño de Interiores en Madera?",
  answer: "Ofrecemos asesoría experta para diseñar interiores únicos y acogedores utilizando madera, ayudándote a crear ambientes personalizados.",
  category: "Diseño de Interiores"
}, {
  id: "11",
  question: "¿Fabrican Closets y Alacenas Personalizadas?",
  answer: "Sí, diseñamos y fabricamos closets y alacenas a medida para maximizar el espacio de almacenamiento en cualquier habitación.",
  category: "Closets y Alacenas"
}];

const $$Question = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Preguntas frecuentes" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="text-center max-w-5xl mx-auto px-6"> <p class="text-sm font-bold text-red-500 mb-2 uppercase tracking-widest leading-tight">
Preguntas frecuentes
</p> <h1 class="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
Muebles Artesanales y a Medida para Cada Espacio
</h1> <img class="w-full mt-8 sm:mt-12 md:mt-16 h-64 sm:h-80 md:h-96 object-cover object-center sm:object-top rounded-lg" src="https://images.pexels.com/photos/5428829/pexels-photo-5428829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Consulting Team"> </section> <section class="mt-12 sm:mt-16 md:mt-20 max-w-5xl mx-auto px-6"> <div class="grid grid-cols-1 sm:grid-cols-2 gap-6"> ${faqs.map(({ question, answer, category }) => renderTemplate`${renderComponent($$result2, "QuestionCard", $$QuestionCard, { "question": question, "answer": answer, "category": category })}`)} </div> <!-- Contacto de Soporte --> <footer class="text-center text-gray-500 mt-16 sm:mt-20">
¿Aún tienes preguntas?
<a href="/contact" class="text-red-500 hover:underline">
Contáctanos sin costo alguno.
</a> </footer> </section> ` })}`;
}, "C:/Users/Magtanio/Documents/PROYECTOS/professional-furniture/src/pages/question.astro", void 0);

const $$file = "C:/Users/Magtanio/Documents/PROYECTOS/professional-furniture/src/pages/question.astro";
const $$url = "/question";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Question,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
