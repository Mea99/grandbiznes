export type Lang = "pl" | "en";

export const dict = {
  pl: {
    // nav
    "nav.work": "Realizacje",
    "nav.systems": "Systemy",
    "nav.process": "Proces",
    "nav.pricing": "Cennik",
    "nav.faq": "FAQ",
    "nav.quote": "Wyceń projekt",
    "nav.theme": "Motyw",

    // hero
    "hero.eyebrow": "Studio stron internetowych",
    "hero.title1": "Strony, które",
    "hero.title2": "robią robotę.",
    "hero.lead":
      "Projektuję i buduję nowoczesne strony i sklepy — z systemami lojalności, rezerwacji i sprzedaży. Szybko, mobilnie, z charakterem.",
    "hero.cta1": "Wyceń projekt →",
    "hero.cta2": "Zobacz realizacje",
    "hero.stat1": "realizacje",
    "hero.stat2": "systemów",
    "hero.stat3": "mobile",

    // realizacje
    "real.eyebrow": "Wybrane realizacje",
    "real.title": "Strony na żywo, realne systemy",
    "real.c1.desc": "Platforma społecznościowa",
    "real.c2.desc": "Sklep e-commerce 18+",
    "real.c3.desc": "Strona z rezerwacją",

    // systemy
    "sys.eyebrow": "Co potrafię zbudować",
    "sys.title": "Systemy do Twojej strony",
    "sys.sub":
      "Kliknij dowolny kafelek, aby zobaczyć działające demo na żywo.",
    "sys.cta":
      "Nie ma Twojej funkcji? Buduję też systemy szyte na miarę — opisz pomysł, a wycenię.",
    "sys.demoMore": "Zobacz demo →",
    "sys.sandbox": "Zbuduj swoj zestaw →",

    // proces
    "proc.eyebrow": "Jak pracuję",
    "proc.title": "Od pomysłu do startu",
    "proc.s1.t": "Rozmowa i brief",
    "proc.s1.d":
      "Poznaję Twój biznes, cele i grupę odbiorców. Ustalamy zakres i budżet.",
    "proc.s2.t": "Projekt i makieta",
    "proc.s2.d":
      "Projektuję wygląd mobile-first. Akceptujesz makietę zanim zacznę kodować.",
    "proc.s3.t": "Budowa z AI",
    "proc.s3.d":
      "Buduję stronę szybko i precyzyjnie, wspierając się narzędziami AI.",
    "proc.s4.t": "Wdrożenie i opieka",
    "proc.s4.d":
      "Publikuję na Twojej domenie, konfiguruję SSL i zostaję na opiece.",

    // cennik
    "price.eyebrow": "Cennik",
    "price.title": "Pakiety",
    "price.badge": "Najczęściej wybierany",
    "price.from": "od",
    "price.p1.name": "Wizytówka",
    "price.p1.amt": "1 990 zł",
    "price.p1.f1": "Strona one-page, mobilna",
    "price.p1.f2": "Formularz kontaktowy",
    "price.p1.f3": "Podstawowe SEO",
    "price.p2.name": "Biznes",
    "price.p2.amt": "3 990 zł",
    "price.p2.f1": "Strona wielostronowa + blog",
    "price.p2.f2": "Newsletter + integracje",
    "price.p2.f3": "Animacje i efekty premium",
    "price.p2.f4": "SEO rozszerzone",
    "price.p3.name": "Premium / Sklep",
    "price.p3.amt": "7 990 zł",
    "price.p3.f1": "E-commerce lub panel użytkownika",
    "price.p3.f2": "Lojalność / rezerwacje / płatności",
    "price.p3.f3": "Systemy szyte na miarę",
    "price.note": "Ceny przykładowe — ostateczna wycena po rozmowie.",
    "price.cta": "Wyceń projekt",
    "price.sandbox": "Nie wiesz, ktory pakiet? Zbuduj swoj zestaw →",
    "price.g1": "3 rundy poprawek w cenie",
    "price.g2": "Wdrozenie i konfiguracja w cenie",
    "price.g3": "30 dni wsparcia po starcie",

    // opinie
    "rev.eyebrow": "Opinie",
    "rev.title": "Co mówią klienci",
    "rev.emptyTitle": "Pierwsze realizacje w toku",
    "rev.empty":
      "Studio właśnie wystartowało. Opinie pierwszych klientów pojawią się tu wkrótce — śledź postępy na Instagramie.",
    "rev.r1.q": "",
    "rev.r1.name": "",
    "rev.r1.role": "",
    "rev.r2.q": "",
    "rev.r2.name": "",
    "rev.r2.role": "",
    "rev.r3.q": "",
    "rev.r3.name": "",
    "rev.r3.role": "",

    // o mnie
    "about.eyebrow": "O mnie",
    "about.title": "GrandBiznes — Twoja strona od A do Z",
    "about.body":
      "Jestem jednoosobowym studiem stron internetowych. Łączę projektowanie, kod i myślenie biznesowe — dzięki temu dostajesz nie tylko ładną stronę, ale narzędzie, które realnie pracuje na Twój biznes. Od briefu, przez projekt, po wdrożenie i opiekę.",

    // faq
    "faq.eyebrow": "FAQ",
    "faq.title": "Częste pytania",
    "faq.q1": "Ile trwa realizacja strony?",
    "faq.a1":
      "Wizytówka zwykle 1–2 tygodnie, strona biznesowa 2–4 tygodnie, sklep lub platforma 4–8 tygodni — zależnie od zakresu.",
    "faq.q2": "Czy robisz sklepy internetowe?",
    "faq.a2":
      "Tak. Buduję sklepy z płatnościami (Przelewy24/BLIK), koszykiem, panelem zamówień i systemami lojalnościowymi.",
    "faq.q3": "Czy strona będzie działać na telefonie?",
    "faq.a3":
      "Zawsze projektuję mobile-first — strona wygląda i działa idealnie na telefonie, tablecie i komputerze.",
    "faq.q4": "Czy mogę sam edytować treści?",
    "faq.a4":
      "Tak — mogę podłączyć prosty panel do edycji treści lub przeszkolić Cię z obsługi. Dobieramy rozwiązanie do potrzeb.",
    "faq.q5": "Co po uruchomieniu strony?",
    "faq.a5":
      "Zostaję na opiece — aktualizacje, drobne zmiany, monitoring i pomoc techniczna. Nie zostawiam klienta samego.",

    // kontakt
    "contact.response": "Odpiszę w ciągu 24 godzin",
    "contact.eyebrow": "Kontakt",
    "contact.title": "Zróbmy coś dobrego",
    "contact.sub":
      "Opisz krótko swój projekt — odpiszę z pomysłem i wyceną.",
    "contact.name": "Imię / firma",
    "contact.email": "E-mail",
    "contact.type": "Rodzaj projektu",
    "contact.type1": "Wizytówka",
    "contact.type2": "Strona biznesowa",
    "contact.type3": "Sklep internetowy",
    "contact.type4": "Platforma na miarę",
    "contact.msg": "Wiadomość",
    "contact.msgph": "Czego potrzebujesz?",
    "contact.send": "Wyślij wiadomość",
    "contact.okTitle": "Dzięki! Wiadomość wysłana.",
    "contact.okSub": "Odezwę się najszybciej jak to możliwe.",
    "contact.again": "Wyślij kolejną",

    // sandbox
    "sandbox.eyebrow": "Studio Sandbox",
    "sandbox.title": "Zbuduj swoja strone",
    "sandbox.sub": "Zaznacz moduly, ktore chcesz na swojej stronie — wycena aktualizuje sie na zywo.",
    "sandbox.preview": "Twoj projekt",
    "sandbox.empty": "Zaznacz pierwszy modul, aby zobaczyc podglad",
    "sandbox.pkg.wizytowka": "Wizytowka",
    "sandbox.pkg.biznes": "Biznes",
    "sandbox.pkg.premium": "Premium / Sklep",
    "sandbox.from": "od",
    "sandbox.send": "Wyslij konfiguracje do wyceny",
    "sandbox.sendSub": "Formularz wypelni sie Twoja konfiguracja",
    "sandbox.nextBiznes": "Dodaj jeszcze 1 modul → pakiet Biznes",
    "sandbox.nextPremium1": "Jeszcze 1 modul → pakiet Premium",
    "sandbox.nextPremium2": "Jeszcze kilka modulow → pakiet Premium",
    "sandbox.cfgLabel": "Twoja konfiguracja z Sandbox",
    "sandbox.cfgNote": "Zmien lub uzupelnij wiadomosc ponizej",
    "sandbox.reset": "Wyczysc",

    // footer
    "footer.desc":
      "Studio stron internetowych i sklepów. Projekt, kod i opieka — wszystko w jednym miejscu.",
    "footer.work": "Realizacje",
    "footer.systems": "Systemy",
    "footer.pricing": "Cennik",
    "footer.contact": "Kontakt",
    "footer.ig": "Instagram",
    "footer.rights": "Wszelkie prawa zastrzeżone.",
  },

  en: {
    "nav.work": "Work",
    "nav.systems": "Systems",
    "nav.process": "Process",
    "nav.pricing": "Pricing",
    "nav.faq": "FAQ",
    "nav.quote": "Get a quote",
    "nav.theme": "Theme",

    "hero.eyebrow": "Web design studio",
    "hero.title1": "Sites that",
    "hero.title2": "get the job done.",
    "hero.lead":
      "I design and build modern websites and online stores — with loyalty, booking and sales systems. Fast, mobile-first, with character.",
    "hero.cta1": "Get a quote →",
    "hero.cta2": "See work",
    "hero.stat1": "projects",
    "hero.stat2": "systems",
    "hero.stat3": "mobile",

    "real.eyebrow": "Selected work",
    "real.title": "Live sites, real systems",
    "real.c1.desc": "Community platform",
    "real.c2.desc": "E-commerce store 18+",
    "real.c3.desc": "Booking website",

    "sys.eyebrow": "What I can build",
    "sys.title": "Systems for your site",
    "sys.sub": "Tap any tile to see a working live demo.",
    "sys.cta":
      "Don't see your feature? I also build custom systems — describe the idea and I'll quote it.",
    "sys.demoMore": "See demo →",
    "sys.sandbox": "Build your bundle →",

    "proc.eyebrow": "How I work",
    "proc.title": "From idea to launch",
    "proc.s1.t": "Talk & brief",
    "proc.s1.d":
      "I learn your business, goals and audience. We set the scope and budget.",
    "proc.s2.t": "Design & mockup",
    "proc.s2.d":
      "I design mobile-first. You approve the mockup before I write code.",
    "proc.s3.t": "Build with AI",
    "proc.s3.d": "I build fast and precisely, supported by AI tooling.",
    "proc.s4.t": "Launch & care",
    "proc.s4.d":
      "I publish on your domain, set up SSL and stay on for support.",

    "price.eyebrow": "Pricing",
    "price.title": "Packages",
    "price.badge": "Most popular",
    "price.from": "from",
    "price.p1.name": "Business card",
    "price.p1.amt": "1 990 zł",
    "price.p1.f1": "One-page, mobile site",
    "price.p1.f2": "Contact form",
    "price.p1.f3": "Basic SEO",
    "price.p2.name": "Business",
    "price.p2.amt": "3 990 zł",
    "price.p2.f1": "Multi-page site + blog",
    "price.p2.f2": "Newsletter + integrations",
    "price.p2.f3": "Premium animations & effects",
    "price.p2.f4": "Advanced SEO",
    "price.p3.name": "Premium / Store",
    "price.p3.amt": "7 990 zł",
    "price.p3.f1": "E-commerce or user panel",
    "price.p3.f2": "Loyalty / booking / payments",
    "price.p3.f3": "Custom-built systems",
    "price.note": "Sample prices — final quote after a chat.",
    "price.cta": "Get a quote",
    "price.sandbox": "Not sure which package? Build your bundle →",
    "price.g1": "3 rounds of revisions included",
    "price.g2": "Deployment & setup included",
    "price.g3": "30 days post-launch support",

    "contact.response": "I'll reply within 24 hours",

    "rev.eyebrow": "Reviews",
    "rev.title": "What clients say",
    "rev.emptyTitle": "First projects in progress",
    "rev.empty":
      "The studio just launched. Reviews from our first clients will appear here soon — follow the updates on Instagram.",
    "rev.r1.q": "",
    "rev.r1.name": "",
    "rev.r1.role": "",
    "rev.r2.q": "",
    "rev.r2.name": "",
    "rev.r2.role": "",
    "rev.r3.q": "",
    "rev.r3.name": "",
    "rev.r3.role": "",

    "about.eyebrow": "About",
    "about.title": "GrandBiznes — your site from A to Z",
    "about.body":
      "I'm a one-person web design studio. I combine design, code and business thinking — so you get not just a pretty site, but a tool that truly works for your business. From brief, through design, to launch and support.",

    "faq.eyebrow": "FAQ",
    "faq.title": "Frequently asked",
    "faq.q1": "How long does a site take?",
    "faq.a1":
      "A business card usually 1–2 weeks, a business site 2–4 weeks, a store or platform 4–8 weeks — depending on scope.",
    "faq.q2": "Do you build online stores?",
    "faq.a2":
      "Yes. I build stores with payments (Przelewy24/BLIK), cart, an order panel and loyalty systems.",
    "faq.q3": "Will the site work on mobile?",
    "faq.a3":
      "I always design mobile-first — the site looks and works perfectly on phone, tablet and desktop.",
    "faq.q4": "Can I edit the content myself?",
    "faq.a4":
      "Yes — I can connect a simple content panel or train you to use it. We pick the right fit for your needs.",
    "faq.q5": "What happens after launch?",
    "faq.a5":
      "I stay on for support — updates, small changes, monitoring and tech help. I don't leave clients on their own.",

    "contact.eyebrow": "Contact",
    "contact.title": "Let's build something",
    "contact.sub":
      "Briefly describe your project — I'll reply with an idea and a quote.",
    "contact.name": "Name / company",
    "contact.email": "E-mail",
    "contact.type": "Project type",
    "contact.type1": "Business card",
    "contact.type2": "Business site",
    "contact.type3": "Online store",
    "contact.type4": "Custom platform",
    "contact.msg": "Message",
    "contact.msgph": "What do you need?",
    "contact.send": "Send message",
    "contact.okTitle": "Thanks! Message sent.",
    "contact.okSub": "I'll get back to you as soon as possible.",
    "contact.again": "Send another",

    "sandbox.eyebrow": "Studio Sandbox",
    "sandbox.title": "Build your site",
    "sandbox.sub": "Select the modules you want — live pricing updates instantly.",
    "sandbox.preview": "Your project",
    "sandbox.empty": "Select a module to see the preview",
    "sandbox.pkg.wizytowka": "Business card",
    "sandbox.pkg.biznes": "Business",
    "sandbox.pkg.premium": "Premium / Store",
    "sandbox.from": "from",
    "sandbox.send": "Send config for a quote",
    "sandbox.sendSub": "Form will be pre-filled with your config",
    "sandbox.nextBiznes": "Add 1 more module → Business package",
    "sandbox.nextPremium1": "1 more module → Premium package",
    "sandbox.nextPremium2": "A few more modules → Premium package",
    "sandbox.cfgLabel": "Your Sandbox configuration",
    "sandbox.cfgNote": "Edit or add to the message below",
    "sandbox.reset": "Clear",

    "footer.desc":
      "A studio for websites and online stores. Design, code and care — all in one place.",
    "footer.work": "Work",
    "footer.systems": "Systems",
    "footer.pricing": "Pricing",
    "footer.contact": "Contact",
    "footer.ig": "Instagram",
    "footer.rights": "All rights reserved.",
  },
} as const;

export type DictKey = keyof (typeof dict)["pl"];
