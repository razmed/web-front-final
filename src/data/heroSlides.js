// src/data/heroSlides.js
import slide1 from '../images/home/slide1.jpg'; // ⬅️ .jpg
import slide2 from '../images/home/slide2.jpg';
import slide3 from '../images/home/slide3.jpg';
import slide4 from '../images/home/slide4.jpg';
import slide5 from '../images/home/slide5.jpg';
export const heroSlides = [
  {
    id: 1,
    image: slide1,
    title: "CONSTRUIRE L'ALGÉRIE D'AUJOURD'HUI",
    subtitle: "BÂTIR CELLE DE DEMAIN",
    description: "La SNTP s'engage à construire les infrastructures d'aujourd'hui tout en bâtissant celles de demain, pour une Algérie moderne et prospère.",
    ctaPrimary: { text: "Notre engagement", link: "/about" },
    ctaSecondary: { text: "En savoir plus", link: "/about" }
  },
  {
    id: 2,
    image: slide2,
    title: "VISION & IDENTITÉ",
    subtitle: "DES INFRASTRUCTURES DURABLES POUR UN AVENIR MEILLEUR",
    description: "Acteur majeur des infrastructures durables en Algérie, la SNTP s'engage pour un développement responsable et durable.",
    ctaPrimary: { text: "Nos engagements", link: "/nos-engagements" },
    ctaSecondary: { text: "En savoir plus", link: "/nos-engagements" }
  },
  {
    id: 3,
    image: slide3,
    title: "EXCELLENCE ET SAVOIR-FAIRE",
    subtitle: "Routes, Ferroviaire, Maritimes, Hydraulique, Génie Civil & Bâtiments Industriels",
    description: "Une expertise complète dans tous les domaines de la construction et des infrastructures pour répondre à vos besoins.",
    ctaPrimary: { text: "Nos services", link: "/services" },
    ctaSecondary: { text: "En savoir plus", link: "/services" }
  },
  {
    id: 4,
    image: slide4,
    title: "EXCELLENCE ET INNOVATION",
    subtitle: "BÂTISSEURS DE GRANDES INFRASTRUCTURES",
    description: "Des projets d'envergure nationale réalisés avec excellence technique et innovation constante pour bâtir l'avenir.",
    ctaPrimary: { text: "Nos réalisations", link: "/projects" },
    ctaSecondary: { text: "En savoir plus", link: "/projects" }
  },
  {
    id: 5,
    image: slide5,
    title: "UNE ORGANISATION AU SERVICE DE TOUT LE TERRITOIRE",
    subtitle: "3 Unités d'Excellence • 5 Directions Opérationnelles • Présence Nationale",
    description: "Une organisation structurée et déployée nationalement pour intervenir partout en Algérie avec les mêmes standards d'excellence.",
    ctaPrimary: { text: "Nos implantations", link: "/implantations" },
    ctaSecondary: { text: "En savoir plus", link: "/implantations" }
  }
];
