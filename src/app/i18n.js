// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      order: "Try Pure Water",
      name: "Name",
      city: "City",
      state: "State/Province",
      country: "Country",
      product: "Product",
      quantity: "Quantity",
      select_product: "Select product",
      submit_order: "Try Pure Water",
      copyright:"Blue Water. All rights reserved.",
      advantage_title:"Advantages:",
      advantage_1:"✔ Purity and natural softness of water.",
      advantage_2:"✔ Bottling from one source, without blending.",
      advantage_3:"✔ We do not use artificial mineral saturation.",
      advantage_4:"✔ Natural filtration, without the use of osmosis.",
      advantage_5:"✔ Canada's first premium water with a deep history.",
      nav_advantages:"Advantages",
      nav_order:"Try Pure Water",
      slogan:"Pure Water, Pure Life"
    },
  },
  fr: {
    translation: {
      order: "Essayez l'eau pure",
      name: "Nom",
      city: "Ville",
      state: "État/Province",
      country: "Les pays",
      product: "Produit",
      quantity: "Quantité",
      select_product: "Sélectionner le produit",
      submit_order: "Essayez l'eau pure",
      copyright:"Eau Bleue. Tous droits réservés.",
      advantage_title:"Avantages:",
      advantage_1:"✔ Pureté et douceur naturelle de l'eau.",
      advantage_2:"✔ Mise en bouteille à partir d'une seule source, sans assemblage.",
      advantage_3:"✔ Nous n'utilisons pas de saturation minérale artificielle.",
      advantage_4:"✔ Filtration naturelle, sans recours à l'osmose.",
      advantage_5:"✔ La première eau de qualité supérieure du Canada avec une longue histoire.",
      nav_advantages:"Avantages",
      nav_order:"Essayez l'eau pure",
      slogan:"Eau pure, vie pure"
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Default language
  fallbackLng: 'en', // Fallback language
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
