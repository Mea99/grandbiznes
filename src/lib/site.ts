// Dane kontaktowe / firmowe — PLACEHOLDERY do podmiany przez klienta.
export const site = {
  email: "kontakt@grandbiznes.pl",
  phone: "+48 600 000 000",
  phoneHref: "+48600000000",
  instagram: "https://instagram.com/grandbiznes",
  instagramHandle: "@grandbiznes",
  nip: "", // do uzupełnienia
};

// Realizacje (portfolio)
export const projects = [
  {
    name: "Akademia Wygrywania",
    url: "https://akademiawygrywania.pl",
    descKey: "real.c1.desc",
    tags: ["Sklep", "Panel gracza", "Rankingi", "Newsletter"],
  },
  {
    name: "Legalny Diler",
    url: "https://legalnydiler.pl",
    descKey: "real.c2.desc",
    tags: ["E-commerce", "Mystery Box", "Live feed", "Opinie"],
  },
  {
    name: "Let's Art Barbershop",
    url: "https://letsartbarbershop.pl",
    descKey: "real.c3.desc",
    tags: ["Rezerwacje", "Galeria", "PL/EN", "SEO lokalne"],
  },
] as const;
