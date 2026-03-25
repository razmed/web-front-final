// Données des implantations (Directions et Unités uniquement)
export const implantations = [
  {
    id: 1,
    nom: "Direction Générale",
    type: "direction",
    wilaya: "Alger",
    ville: "Alger Centre",
    adresse: "Route nationale N°5, Bab Ezzouar",
    latitude: 36.7167,
    longitude: 3.1833,
    telephone: "+213 21 XX XX XX",
    email: "[email protected]"
  },
  {
    id: 2,
    nom: "Direction Centre",
    type: "direction",
    wilaya: "Alger",
    ville: "Cheraga",
    adresse: "Cheraga, Alger, Algérie",
    latitude: 36.7538,
    longitude: 3.0588,
    telephone: "+213 23 XX XX XX",
    email: "[email protected]"
  },
  {
    id: 3,
    nom: "Direction d'Oran",
    type: "direction",
    wilaya: "Oran",
    ville: "Oran",
    adresse: "Oran, Algérie",
    latitude: 35.6969,
    longitude: -0.6331,
    telephone: "+213 41 XX XX XX",
    email: "[email protected]"
  },
  {
    id: 4,
    nom: "Direction d'Annaba",
    type: "direction",
    wilaya: "Annaba",
    ville: "Annaba",
    adresse: "Rue de la Révolution, Annaba",
    latitude: 36.9000,
    longitude: 7.7667,
    telephone: "+213 38 XX XX XX",
    email: "[email protected]"
  },
  {
    id: 5,
    nom: "Direction de Béjaïa",
    type: "direction",
    wilaya: "Béjaïa",
    ville: "Béjaïa",
    adresse: "Béjaïa, Algérie",
    latitude: 36.7525,
    longitude: 5.0556,
    telephone: "+213 34 XX XX XX",
    email: "[email protected]"
  },
  {
    id: 6,
    nom: "Direction d'Ouargla",
    type: "direction",
    wilaya: "Ouargla",
    ville: "Ouargla",
    adresse: "Ouargla, Algérie",
    latitude: 32.9147,
    longitude: 5.3333,
    telephone: "+213 29 XX XX XX",
    email: "[email protected]"
  },
  {
    id: 7,
    nom: "Direction de Tindouf",
    type: "direction",
    wilaya: "Tindouf",
    ville: "Tindouf",
    adresse: "Tindouf, Algérie",
    latitude: 27.6776,
    longitude: -8.1478,
    telephone: "+213 49 XX XX XX",
    email: "[email protected]"
  },
  {
    id: 8,
    nom: "SNTP Engineering",
    type: "unite",
    wilaya: "Alger",
    ville: "Dely Ibrahim",
    adresse: "Villa 8 Bois des Cars 3, Dely Ibrahim",
    latitude: 36.7474,
    longitude: 2.9990,
    telephone: "+213 21 XX XX XX",
    email: "[email protected]"
  },
  {
    id: 9,
    nom: "SNTP Anabibe",
    type: "unite",
    wilaya: "Chlef",
    ville: "Fornaka",
    adresse: "Zone Industrielles Usine ANABIB SNTP, Fornaka",
    latitude: 36.1833,
    longitude: 1.3667,
    telephone: "+213 27 XX XX XX",
    email: "[email protected]"
  },
  {
    id: 10,
    nom: "SNTP Logistique et Maintenance",
    type: "unite",
    wilaya: "Boumerdès",
    ville: "Khemis El Khechna",
    adresse: "M87C+QH, Khemis El Khechna",
    latitude: 36.6644,
    longitude: 3.3214,
    telephone: "+213 24 XX XX XX",
    email: "[email protected]"
  }
];

// Types d'implantation (uniquement Direction et Unité)
export const typesImplantation = [
  { value: "direction", label: "Direction" },
  { value: "unite", label: "Unité" }
];

// Liste des wilayas d'Algérie
export const wilayas = [
  "Adrar", "Chlef", "Laghouat", "Oum El Bouaghi", "Batna", "Béjaïa",
  "Biskra", "Béchar", "Blida", "Bouira", "Tamanrasset", "Tébessa",
  "Tlemcen", "Tiaret", "Tizi Ouzou", "Alger", "Djelfa", "Jijel",
  "Sétif", "Saïda", "Skikda", "Sidi Bel Abbès", "Annaba", "Guelma",
  "Constantine", "Médéa", "Mostaganem", "M'Sila", "Mascara", "Ouargla",
  "Oran", "El Bayadh", "Illizi", "Bordj Bou Arréridj", "Boumerdès",
  "El Tarf", "Tindouf", "Tissemsilt", "El Oued", "Khenchela",
  "Souk Ahras", "Tipaza", "Mila", "Aïn Defla", "Naâma",
  "Aïn Témouchent", "Ghardaïa", "Relizane"
];
