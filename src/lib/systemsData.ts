export type SystemKey =
  | "sklep"
  | "lojalnosc"
  | "newsletter"
  | "rezerwacje"
  | "panel"
  | "blog"
  | "kody"
  | "ruch"
  | "live"
  | "mystery"
  | "opinie"
  | "jezyki";

export type SystemMeta = {
  key: SystemKey;
  icon: string;
  title: { pl: string; en: string };
  desc: { pl: string; en: string };
};

export const systems: SystemMeta[] = [
  {
    key: "sklep",
    icon: "⬢",
    title: { pl: "Sklep", en: "Store" },
    desc: {
      pl: "Koszyk, produkty i płatności Przelewy24/BLIK.",
      en: "Cart, products and Przelewy24/BLIK payments.",
    },
  },
  {
    key: "lojalnosc",
    icon: "↺",
    title: { pl: "Punkty lojalnościowe", en: "Loyalty points" },
    desc: {
      pl: "Zbieranie punktów i odblokowywanie nagród.",
      en: "Earn points and unlock rewards.",
    },
  },
  {
    key: "newsletter",
    icon: "✦",
    title: { pl: "Newsletter", en: "Newsletter" },
    desc: {
      pl: "Zapis na listę i automatyczne maile.",
      en: "Sign-ups and automated emails.",
    },
  },
  {
    key: "rezerwacje",
    icon: "◷",
    title: { pl: "Rezerwacje", en: "Booking" },
    desc: {
      pl: "Wybór usługi i terminu online.",
      en: "Pick a service and time slot online.",
    },
  },
  {
    key: "panel",
    icon: "◈",
    title: { pl: "Panel użytkownika", en: "User panel" },
    desc: {
      pl: "Logowanie, pulpit, zamówienia, kupony.",
      en: "Login, dashboard, orders, coupons.",
    },
  },
  {
    key: "blog",
    icon: "▦",
    title: { pl: "Blog", en: "Blog" },
    desc: {
      pl: "Wpisy, artykuły i treści pod SEO.",
      en: "Posts, articles and SEO content.",
    },
  },
  {
    key: "kody",
    icon: "％",
    title: { pl: "Kody rabatowe", en: "Discount codes" },
    desc: {
      pl: "Kupony z limitem czasu i walidacją.",
      en: "Coupons with time limits and validation.",
    },
  },
  {
    key: "ruch",
    icon: "◴",
    title: { pl: "Śledzenie ruchu", en: "Traffic tracking" },
    desc: {
      pl: "Statystyki odwiedzin na żywo.",
      en: "Live visitor statistics.",
    },
  },
  {
    key: "live",
    icon: "◎",
    title: { pl: "Live powiadomienia", en: "Live notifications" },
    desc: {
      pl: "Wyskakujące „ktoś właśnie kupił”.",
      en: "Pop-ups: “someone just bought”.",
    },
  },
  {
    key: "mystery",
    icon: "⬡",
    title: { pl: "Mystery Box", en: "Mystery Box" },
    desc: {
      pl: "Losowa nagroda z animacją otwierania.",
      en: "Random reward with an opening animation.",
    },
  },
  {
    key: "opinie",
    icon: "★",
    title: { pl: "Opinie", en: "Reviews" },
    desc: {
      pl: "Oceny gwiazdkowe i recenzje klientów.",
      en: "Star ratings and customer reviews.",
    },
  },
  {
    key: "jezyki",
    icon: "⚑",
    title: { pl: "Wielojęzyczność", en: "Multi-language" },
    desc: {
      pl: "Przełączanie języków strony.",
      en: "Switch the site's language.",
    },
  },
];
