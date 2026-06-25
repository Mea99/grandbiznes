// Dane kontaktowe / firmowe — PLACEHOLDERY do podmiany przez klienta.
export const site = {
  email: "kontakt@grandbiznes.pl",
  phone: "+48 787 754 147",
  phoneHref: "+48787754147",
  instagram: "https://instagram.com/grandbiznes",
  instagramHandle: "@grandbiznes",
  nip: "9182178204",
};

// Realizacje (portfolio)
export const projects = [
  {
    name: "Akademia Wygrywania",
    url: "https://akademiawygrywania.pl",
    descKey: "real.c1.desc",
    shot: "/realizacje/akademia.jpg",
    tags: ["Sklep", "Panel gracza", "Rankingi", "Newsletter"],
  },
  {
    name: "Legalny Diler",
    url: "https://legalnydiler.pl",
    descKey: "real.c2.desc",
    shot: "/realizacje/legalny.jpg",
    tags: ["E-commerce", "Mystery Box", "Live feed", "Opinie"],
  },
  {
    name: "Let's Art Barbershop",
    url: "https://letsartbarbershop.pl",
    descKey: "real.c3.desc",
    shot: "/realizacje/letsart.jpg",
    tags: ["Rezerwacje", "Galeria", "PL/EN", "SEO lokalne"],
  },
] as const;
