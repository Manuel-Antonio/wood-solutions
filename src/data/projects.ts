import type { Project } from "../models/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "Mesa de Comedor Personalizada",
    description: "Diseño y fabricación de una mesa de comedor a medida, combinando elegancia y funcionalidad. Ideal para cualquier estilo de hogar.",
    materials: ["Madera de roble", "Barniz natural"],
    services: ["Diseño y fabricación", "Acabado personalizado"],
    testimonial: {
      name: "Carlos Martínez",
      feedback: "La mesa es impresionante, hecha con gran detalle y calidad. Superó nuestras expectativas."
    },
    imageUrls: [
      "https://example.com/images/project1-1.jpg",
      "https://example.com/images/project1-2.jpg"
    ],
    featureImage: "https://example.com/images/project1-main.jpg"
  },
  {
    id: 2,
    title: "Restauración de Silla Antigua",
    description: "Restauración completa de una silla antigua, manteniendo su valor histórico y funcionalidad. Acabado en madera oscura con tapizado nuevo.",
    materials: ["Madera de caoba", "Tela de lino"],
    services: ["Restauración", "Tapizado"],
    testimonial: {
      name: "Ana Rodríguez",
      feedback: "El trabajo de restauración fue excelente. La silla parece nueva, pero con el encanto antiguo que buscábamos."
    },
    imageUrls: [
      "https://example.com/images/project2-1.jpg",
      "https://example.com/images/project2-2.jpg"
    ],
    featureImage: "https://example.com/images/project2-main.jpg"
  },
  {
    id: 3,
    title: "Construcción de Mini-Casa",
    description: "Construcción de una mini-casa en madera para un espacio exterior. Diseñada para ofrecer comodidad y estilo en un espacio compacto.",
    materials: ["Madera de pino", "Teja de cerámica"],
    services: ["Construcción", "Diseño personalizado"],
    testimonial: {
      name: "José Pérez",
      feedback: "La mini-casa es perfecta para nuestro jardín. La calidad de la construcción y el diseño superaron nuestras expectativas."
    },
    imageUrls: [
      "https://example.com/images/project3-1.jpg",
      "https://example.com/images/project3-2.jpg"
    ],
    featureImage: "https://example.com/images/project3-main.jpg"
  },
  {
    id: 4,
    title: "Instalación de Piso de Cemento Pulido",
    description: "Instalación profesional de piso de cemento pulido en una sala de estar. Proporciona un acabado moderno y duradero.",
    materials: ["Cemento pulido", "Sellador"],
    services: ["Instalación de piso", "Acabado y sellado"],
    testimonial: {
      name: "Luis Gómez",
      feedback: "El piso de cemento pulido transformó completamente la sala. Excelente trabajo y acabado duradero."
    },
    imageUrls: [
      "https://example.com/images/project4-1.jpg",
      "https://example.com/images/project4-2.jpg"
    ],
    featureImage: "https://example.com/images/project4-main.jpg"
  },
  {
    id: 5,
    title: "Diseño e Instalación de Cocina Integral",
    description: "Diseño y instalación de una cocina integral que combina funcionalidad y estilo. Incluye muebles a medida y acabados de alta calidad.",
    materials: ["Madera contrachapada", "Granito para encimeras"],
    services: ["Diseño de cocina", "Instalación y ajuste"],
    testimonial: {
      name: "María Fernández",
      feedback: "La nueva cocina es increíble. El diseño es perfecto para nuestro espacio y la instalación fue impecable."
    },
    imageUrls: [
      "https://example.com/images/project5-1.jpg",
      "https://example.com/images/project5-2.jpg"
    ],
    featureImage: "https://example.com/images/project5-main.jpg"
  }
];
