/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro, d as renderComponent } from '../chunks/astro/server_FcOIbzSd.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_VExZ1wIW.mjs';
import { useState } from 'preact/hooks';
import { jsxs, jsx } from 'preact/jsx-runtime';
import 'clsx';
export { renderers } from '../renderers.mjs';

const FormCard = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [formattedData, setFormattedData] = useState("");
  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "name":
        if (!value.trim()) {
          error = "Nombre y apellido son obligatorios.";
        }
        break;
      case "email":
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) {
          error = "Correo electrónico es obligatorio.";
        } else if (!emailPattern.test(value)) {
          error = "Correo electrónico no es válido.";
        }
        break;
      case "phone":
        const phonePattern = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
        if (!value.trim()) {
          error = "Número de celular es obligatorio.";
        } else if (!phonePattern.test(value)) {
          error = "Número de celular no es válido.";
        }
        break;
      case "subject":
        if (!value.trim()) {
          error = "Motivo es obligatorio.";
        }
        break;
      case "message":
        if (!value.trim()) {
          error = "Mensaje es obligatorio.";
        }
        break;
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error
    }));
  };
  const handleChange = (e) => {
    const {
      id,
      value
    } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
    validateField(id, value);
  };
  const validateForm = () => {
    const newErrors = {};
    for (const key in formData) {
      validateField(key, formData[key]);
      if (formData[key].trim() === "") {
        newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} es obligatorio.`;
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const submitForm = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsFormValid(true);
      const formattedString = `
      🌟 ¡Hola, me gustaría solicitar sus servicios! 🌟

      👤 Nombre: ${formData.name}
      📧 Correo Electrónico: ${formData.email}
      📞 Celular: ${formData.phone}

      🎯 Asunto: ${formData.subject}

      📝 Mensaje:
      -----------------------------------
      "${formData.message}"
      -----------------------------------

      🚀 Este mensaje fue enviado desde la web más chida de muebles a medida. ¡Transformamos tus espacios con estilo!
      `;
      const subject = `${formData.subject} - Web TaskWorld`;
      setFormattedData(formattedString);
      const mailtoLink = `mailto:manuelhuaman1998@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(formattedString)}`;
      window.location.href = mailtoLink;
    } else {
      setIsFormValid(false);
    }
  };
  return jsxs("form", {
    className: "bg-white shadow-lg rounded-lg p-8 mt-16",
    children: [jsxs("div", {
      className: "grid grid-cols-1 md:grid-cols-2 gap-6",
      children: [jsxs("div", {
        children: [jsx("label", {
          htmlFor: "name",
          className: "block text-gray-700 font-bold mb-2",
          children: "Nombre y apellido"
        }), jsx("input", {
          type: "text",
          id: "name",
          onChange: handleChange,
          placeholder: "ej. John Doe",
          className: `shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? "border-red-500" : ""}`
        }), errors.name && jsx("p", {
          className: "text-red-500 text-xs italic mt-2",
          children: errors.name
        })]
      }), jsxs("div", {
        children: [jsx("label", {
          htmlFor: "email",
          className: "block text-gray-700 font-bold mb-2",
          children: "Correo electrónico"
        }), jsx("input", {
          type: "email",
          id: "email",
          onChange: handleChange,
          placeholder: "ej. john@mail.com",
          className: `shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? "border-red-500" : ""}`
        }), errors.email && jsx("p", {
          className: "text-red-500 text-xs italic mt-2",
          children: errors.email
        })]
      })]
    }), jsxs("div", {
      className: "grid grid-cols-1 md:grid-cols-2 gap-6 mt-4",
      children: [jsxs("div", {
        children: [jsx("label", {
          htmlFor: "phone",
          className: "block text-gray-700 font-bold mb-2",
          children: "Celular"
        }), jsx("input", {
          type: "tel",
          id: "phone",
          onChange: handleChange,
          placeholder: "ej. +1-234-567-7890",
          className: `shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.phone ? "border-red-500" : ""}`
        }), errors.phone && jsx("p", {
          className: "text-red-500 text-xs italic mt-2",
          children: errors.phone
        })]
      }), jsxs("div", {
        children: [jsx("label", {
          htmlFor: "subject",
          className: "block text-gray-700 font-bold mb-2",
          children: "Motivo"
        }), jsx("input", {
          type: "text",
          id: "subject",
          onChange: handleChange,
          placeholder: "ej. Necesito un mueble personalizado",
          className: `shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.subject ? "border-red-500" : ""}`
        }), errors.subject && jsx("p", {
          className: "text-red-500 text-xs italic mt-2",
          children: errors.subject
        })]
      })]
    }), jsxs("div", {
      className: "mt-4",
      children: [jsx("label", {
        htmlFor: "message",
        className: "block text-gray-700 font-bold mb-2",
        children: "Mensaje"
      }), jsx("textarea", {
        id: "message",
        onChange: handleChange,
        placeholder: "Hola, estoy interesado en muebles a medida. Me gustaría discutir las opciones y obtener una cotización.",
        className: `shadow appearance-none border rounded h-24 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.message ? "border-red-500" : ""}`
      }), errors.message && jsx("p", {
        className: "text-red-500 text-xs italic mt-2",
        children: errors.message
      })]
    }), jsx("div", {
      className: "flex justify-center mt-6",
      children: jsxs("button", {
        type: "button",
        onClick: submitForm,
        className: "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline",
        children: ["Enviar correo ", jsx("i", {
          class: "ms-2 fa-solid fa-paper-plane"
        })]
      })
    }), !isFormValid && errors.general && jsx("div", {
      className: "text-red-500 text-center mt-4",
      children: jsx("p", {
        children: errors.general
      })
    })]
  });
};

const $$Astro = createAstro();
const $$ContactCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContactCard;
  const { icon, bgColor, textColor, title, details } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col sm:flex-row items-center gap-6"> <div${addAttribute(`flex items-center justify-center w-16 h-16 rounded-full ${bgColor} ${textColor}`, "class")}> <i${addAttribute(`${icon} text-2xl`, "class")}></i> </div> <div class=" text-center sm:text-left"> <h3 class="text-lg font-bold mt-4">${title}</h3> ${details.map((detail, index) => renderTemplate`<p class="text-gray-600 mt-2">${detail}</p>`)} </div> </div>`;
}, "C:/Users/Magtanio/Documents/PROYECTOS/professional-furniture/src/components/ContactCard.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const contactData = [
    {
      icon: "fas fa-phone-alt",
      bgColor: "bg-red-100",
      textColor: "text-red-500",
      title: "Celular",
      details: ["+1-940-394-2948", "+1-389-385-3807"]
    },
    {
      icon: "fas fa-envelope",
      bgColor: "bg-red-100",
      textColor: "text-red-500",
      title: "Correo",
      details: ["support@brainwave.io", "contact@brainwave.io"]
    },
    {
      icon: "fas fa-map-marker-alt",
      bgColor: "bg-red-100",
      textColor: "text-red-500",
      title: "Vis\xEDtanos",
      details: ["34 Madison Street,", "NY, USA 10005"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contacto" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="text-center max-w-5xl mx-auto px-6"> <p class="text-sm font-bold text-red-500 mb-2 uppercase tracking-widest leading-tight">Contacta con nosotros</p> <h1 class="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
Consultoría en cuestión de minutos
</h1> <img class="w-full mt-8 sm:mt-12 md:mt-16 h-64 sm:h-80 md:h-96 object-cover object-center sm:object-bottom rounded-lg" src="https://images.pexels.com/photos/46924/pexels-photo-46924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Consulting Team"> </section> <section class="max-w-5xl mx-auto px-6 mt-12 sm:mt-16 md:mt-20"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-12"> ${contactData.map((data) => renderTemplate`${renderComponent($$result2, "ContactCard", $$ContactCard, { "icon": data.icon, "bgColor": data.bgColor, "textColor": data.textColor, "title": data.title, "details": data.details })}`)} </div> <!-- Contact Form --> ${renderComponent($$result2, "FormCard", FormCard, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Magtanio/Documents/PROYECTOS/professional-furniture/src/components/FormCard", "client:component-export": "default" })} </section> ` })}`;
}, "C:/Users/Magtanio/Documents/PROYECTOS/professional-furniture/src/pages/contact.astro", void 0);

const $$file = "C:/Users/Magtanio/Documents/PROYECTOS/professional-furniture/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
