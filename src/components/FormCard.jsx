import { useState } from "preact/hooks";

const FormCard = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
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
        const phonePattern =
          /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
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
      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData({
      ...formData,
      [id]: value,
    });

    validateField(id, value);
  };

  const validateForm = () => {
    const newErrors = {};
    for (const key in formData) {
      validateField(key, formData[key]);
      if (formData[key].trim() === "") {
        newErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } es obligatorio.`;
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

  return (
    <form className="bg-white shadow-lg rounded-lg p-8 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Nombre y apellido
          </label>
          <input
            type="text"
            id="name"
            onChange={handleChange}
            placeholder="ej. John Doe"
            className={`shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.name ? "border-red-500" : ""
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs italic mt-2">{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            onChange={handleChange}
            placeholder="ej. john@mail.com"
            className={`shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic mt-2">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div>
          <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
            Celular
          </label>
          <input
            type="tel"
            id="phone"
            onChange={handleChange}
            placeholder="ej. +1-234-567-7890"
            className={`shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.phone ? "border-red-500" : ""
            }`}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs italic mt-2">{errors.phone}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-gray-700 font-bold mb-2"
          >
            Motivo
          </label>
          <input
            type="text"
            id="subject"
            onChange={handleChange}
            placeholder="ej. Necesito un mueble personalizado"
            className={`shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.subject ? "border-red-500" : ""
            }`}
          />
          {errors.subject && (
            <p className="text-red-500 text-xs italic mt-2">{errors.subject}</p>
          )}
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
          Mensaje
        </label>
        <textarea
          id="message"
          onChange={handleChange}
          placeholder="Hola, estoy interesado en muebles a medida. Me gustaría discutir las opciones y obtener una cotización."
          className={`shadow appearance-none border rounded h-24 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.message ? "border-red-500" : ""
          }`}
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-xs italic mt-2">{errors.message}</p>
        )}
      </div>

      <div className="flex justify-center mt-6">
        <button
          type="button"
          onClick={submitForm}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
        >
          Enviar correo <i class="ms-2 fa-solid fa-paper-plane"></i>
        </button>
      </div>

      {!isFormValid && errors.general && (
        <div className="text-red-500 text-center mt-4">
          <p>{errors.general}</p>
        </div>
      )}
    </form>
  );
};

export default FormCard;
