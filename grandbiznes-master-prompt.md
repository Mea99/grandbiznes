# MASTER PROMPT — Przebudowa grandbiznes.pl do poziomu Awwwards Site of the Year

> **Jak używać tego pliku:** To jest brief dla Claude pracującego w VS Code. Wklej **SEKCJĘ 0–3 na początku** (kontekst + fundament), a potem realizuj **FAZY 4–9 pojedynczo**, jedna po drugiej. Nie każ Claude budować wszystkiego naraz — jakość spada. Po każdej fazie testuj na telefonie i sprawdzaj Lighthouse.

---

## SEKCJA 0 — ROLA I POPRZECZKA

Jesteś senior creative developerem na poziomie studiów OFF+BRAND, Lusion, Active Theory i Locomotive — tych, które wygrywają Awwwards Site of the Year. Twoim zadaniem jest przebudowa strony jednoosobowego studia stron internetowych **GrandBiznes** (grandbiznes.pl) tak, by:

1. Wyglądała i działała jak najlepsze studia kreatywne świata (poziom Awwwards / FWA / CSS Design Awards).
2. Miała **jeden wyróżnik, którego nie ma konkurencja** (opisany w Sekcji 3).
3. Realnie konwertowała — to narzędzie sprzedażowe, nie tylko galeria efektów.

Poprzeczka: każda decyzja ma przejść test „czy to wygląda jak zrobione przez topowe studio, czy jak szablon?". Jeśli coś wygląda domyślnie / templatowo — odrzuć i zaprojektuj od nowa.

---

## SEKCJA 1 — STACK TECHNICZNY (premium 2026)

Buduj na sprawdzonym produkcyjnym stacku, którego używają topowe studia:

- **Framework:** Next.js (App Router) + TypeScript + React.
- **Stylowanie:** Tailwind CSS z własnym design tokenem (kolory, spacing, typografia jako zmienne CSS — NIE hardcoduj wartości).
- **Smooth scroll:** Lenis.
- **Animacje:** GSAP + ScrollTrigger (do scroll-driven sekwencji i pinowania).
- **3D / WebGL:** Three.js (lub React Three Fiber + drei). Tylko tam, gdzie ma sens (hero + 1–2 momenty), NIE wszędzie.
- **Mikroanimacje UI:** Framer Motion.
- **Fonty:** zmienne (variable fonts), self-hosted, z `font-display: swap`.

### ŻELAZNE ZASADY WYDAJNOŚCI (to oddziela profesjonalistów od amatorów)
WebGL drenuje budżet wydajności. Topowe studia w 2026 robią to tak — i Ty też:

- **Device-tier detection:** wykryj klasę urządzenia ZANIM załadujesz scenę 3D. Słaby sprzęt / mobile → mniej cząsteczek, prostsze shadery, niższe FPS target.
- **Fallback bez WebGL:** urządzenia bez WebGL dostają statyczną wersję, która **zachowuje język wizualny i ścieżkę konwersji** (nie pustą stronę).
- **Lazy-load 3D:** scena ładuje się po pierwszym paint, nigdy nie blokuje LCP. Pokaż lekki poster/gradient zanim WebGL wstanie.
- **Cel wydajności:** Lighthouse Performance ≥ 90 na mobile, CLS < 0.1, LCP < 2.5s. 60fps desktop / min. 45fps mobile dla interakcji.
- **`prefers-reduced-motion`:** pełne wsparcie — kto wyłączył animacje, dostaje statyczną, czytelną wersję.

Zasada nadrzędna: **jeśli efekt psuje Core Web Vitals na telefonie — wytnij go.** Mobile-first, zawsze.

---

## SEKCJA 2 — JĘZYK WIZUALNY (Art Direction)

Zaprojektuj spójny system, nie zlepek modnych trików.

- **Baza:** dark mode (jest standardem premium 2026 i pasuje do `theme-color: #0a0a12`, które już masz). Głęboka, prawie-czarna baza z jednym mocnym kolorem akcentu.
- **Akcent:** wybierz JEDEN sygnaturowy kolor (np. elektryczny limonkowy / cyber-zielony / bursztyn) i trzymaj się go żelazną ręką — tylko na CTA i kluczowych interakcjach. (Wzór: Lando Norris site = czarne tło + sygnaturowy lime.)
- **Typografia jako bohater:** oversized, wariacyjny font display w hero. Duże, pewne nagłówki niosą design. Kinetic typography **tylko** na hero headline i przejściach sekcji — nigdy dziesiątki animowanych elementów (to zabija czytelność i SEO).
- **Layout:** bento grid do sekcji „Systemy" + jeden anti-grid / asymetryczny moment dla charakteru. Dużo whitespace, mocna hierarchia.
- **Spójność > eksperyment:** ograniczona paleta, jeden system typograficzny. Jury Awwwards punktuje spójność wyżej niż liczbę efektów.
- **Mikrointerakcje:** każdy hover, klik i submit ma satysfakcjonujący feedback (kinetic buttons, magnetyczny kursor na CTA, smooth state transitions). Opcjonalnie subtelny dźwięk/haptyka przy kluczowych akcjach — z możliwością wyłączenia.

---

## SEKCJA 3 — TWÓJ UNIKALNY WYRÓŻNIK: „Studio Sandbox" (Interaktywny Builder na Żywo)

To jest serce strategii — coś, czego **nie ma żadna konkurencja**. Łączy Twój istniejący atut (klikalne demo systemów) z mechaniką, która sama jest dowodem umiejętności.

### Koncept: „Zbuduj swoją stronę na żywo + natychmiastowa wycena"
Interaktywna sekcja-piaskownica, gdzie odwiedzający **składa swoją wymarzoną stronę z klocków-systemów** (Sklep, Lojalność, Rezerwacje, Panel gracza, Mystery Box, AI itd. — masz już te moduły!), a strona **w czasie rzeczywistym**:

1. **Wizualnie buduje podgląd** — dodawanie modułu animuje się i „wskakuje" do makiety strony obok (jak żywy konfigurator).
2. **Liczy wycenę na żywo** — pasek ceny aktualizuje się płynnie przy każdym wyborze (od pakietu Wizytówka → Biznes → Premium, w oparciu o Twój cennik 1200 / 2900 / 5900 zł).
3. **Generuje gotowy brief** — na końcu klient dostaje podsumowanie („Twoja konfiguracja: Sklep + Lojalność + Rezerwacje, szacunkowo od X zł") z przyciskiem „Wyślij to do wyceny", który **pre-wypełnia formularz kontaktowy** wybranymi modułami.

### Dlaczego to wygrywa
- **Sam mechanizm jest portfolio.** Klient widzi działający, płynny konfigurator i myśli: „skoro on to potrafi zbudować na własnej stronie, zbuduje i moją". To odpowiada na pytanie „czy on faktycznie umie?" zanim klient zapyta.
- **Konwersja:** zamienia pasywne przeglądanie w aktywne budowanie → użytkownik inwestuje czas → mocniejszy lead. Formularz przychodzi już z wypełnionym briefem (kwalifikowany lead, nie „dzień dobry, ile za stronę").
- **Zero konkurencji:** inne studia mają statyczny cennik i galerię. Nikt nie pozwala „zbudować i wycenić" w 30 sekund w przeglądarce.

### Wymagania techniczne
- Płynne animacje (GSAP/Framer Motion), drag-and-drop lub klik-to-add.
- Działa idealnie na telefonie (na mobile np. tap-to-add zamiast drag).
- Stan zapisywany w React state (NIE localStorage — nie zawsze działa).
- Na końcu: czytelne podsumowanie + CTA + integracja z formularzem.

> **Opcja rozszerzenia (jeśli chcesz pójść dalej):** mini-asystent AI przy Sandboxie — pole „opisz swój biznes", a on sugeruje zestaw modułów. Ale rdzeń = wizualny konfigurator z live wyceną. Zacznij od niego.

---

## SEKCJA 4 — FAZA 1: NAPRAW TO, CO ZABIJA WIARYGODNOŚĆ (zrób NAJPIERW)

Te rzeczy w 3 sekundy sygnalizują „strona w budowie". Napraw przed jakimkolwiek efektem wow:

- [ ] **Liczniki „0 realizacji / 0 systemów / 0% mobile"** → wstaw prawdziwe liczby (np. 3+ realizacje, 12 systemów, 100% mobile) z animacją odliczania (count-up on scroll). Zero zostawione = katastrofa zaufania.
- [ ] **Telefon `+48 600 000 000`** → prawdziwy numer lub usuń, jeśli wolisz tylko mail/formularz.
- [ ] **`kontakt@grandbiznes.pl`** → potwierdź, że działa.
- [ ] **Placeholder „[ portret / logo ]"** w sekcji O mnie → prawdziwe zdjęcie / logo / grafika sygnaturowa.
- [ ] **Stopka:** dodaj NIP, formę działalności, link do polityki prywatności (wymóg prawny w PL).
- [ ] **Opinie** — upewnij się, że to prawdziwe cytaty (masz zgody klientów Kamil/Marek/Artur). Dodaj nazwiska/firmy z linkiem do ich strony jako dowód.

---

## SEKCJA 5 — FAZA 2: HERO (pierwsze 3 sekundy decydują)

- WebGL hero jako sygnatura marki — ale z fallbackiem (patrz Sekcja 1). Pomysł: reaktywna na kursor scena (cząsteczki/płynna geometria reagująca na ruch myszy, custom shader z glow przy kursorze) LUB animowana typografia „Strony, które robią robotę" z kinetic effect na samym headline.
- Magnetyczny kursor / custom cursor na desktopie (z wyłączeniem na touch).
- Płynne wejście (staggered reveal) elementów hero przez GSAP.
- Marquee „Strony ✦ Sklepy ✦ Rezerwacje…" który już masz — uczyń go reaktywnym na scroll (zmiana prędkości/kierunku przy scrollu).
- CTA „Wyceń projekt" → magnetyczny, z mikrointerakcją, prowadzi do Studio Sandbox.

---

## SEKCJA 6 — FAZA 3: REALIZACJE + SYSTEMY (scroll-driven)

- **Realizacje:** zamiast statycznych kafelków — scroll-driven sekwencja. Każda realizacja (Akademia Wygrywania, Legalny Diler, Let's Art Barbershop) wjeżdża z cinematic reveal, z mockupem na żywo (iframe/screenshot z hover-play) i tagami systemów. Parallax na obrazach.
- **Systemy:** przebuduj na **bento grid**. Każdy kafelek (Sklep, Lojalność, Newsletter, Rezerwacje, Mystery Box, AI…) z hover-microinteraction zapowiadającą jego funkcję. „Zobacz demo" otwiera działające demo (to Twój atut — niech demo będą realnie klikalne, nie zrzuty).
- Połącz tę sekcję ze Studio Sandbox: „albo zbuduj własny zestaw →".

---

## SEKCJA 7 — FAZA 4: STUDIO SANDBOX (Twój wyróżnik — patrz Sekcja 3)

Zbuduj interaktywny konfigurator z live wyceną opisany w Sekcji 3. To najważniejsza i najbardziej czasochłonna faza — poświęć jej najwięcej uwagi. Ma być bezbłędna na telefonie.

---

## SEKCJA 8 — FAZA 5: PROCES, CENNIK, DOWÓD, KONTAKT

- **Proces (01–04):** scroll-pinned timeline — kroki odsłaniają się sekwencyjnie przy scrollu (ScrollTrigger pin). Każdy krok z mikroilustracją/ikoną w ruchu.
- **Cennik:** trzy pakiety, wyróżniony „Najczęściej wybierany" (Biznes). Hover unosi kartę. Dodaj toggle / połączenie ze Sandboxem („nie wiesz, który? zbuduj swój →").
- **Dowód społeczny (KLUCZOWE dla konwersji):** najlepsze studia sprzedają WYNIKAMI, nie estetyką. Jeśli masz JAKIEKOLWIEK dane od klientów (wzrost rezerwacji, sprzedaży, ruchu) — pokaż je jako liczby z animacją. Jeśli nie masz — zbierz je od obecnych klientów. Twardy wynik bije ładny obrazek.
- **Kontakt:** formularz z płynną walidacją inline, satysfakcjonującym stanem „wysłano", pre-wypełnieniem z Sandboxa. Dodaj realny czas odpowiedzi („odpiszę w 24h").

---

## SEKCJA 9 — FAZA 6: SEO, DOSTĘPNOŚĆ, WARSTWA AI-READABILITY (2026 must-have)

To, czego konkurencja nie robi, a co w 2026 realnie liczy:

- **Schema markup** (JSON-LD): LocalBusiness / ProfessionalService, oferty, opinie, FAQ. To pomaga i w Google, i w asystentach AI (ChatGPT/Perplexity coraz częściej są źródłem leadów).
- **`llms.txt`** w root — nowy standard 2026 dla czytelności przez asystentów AI. Opisz w nim, czym jest GrandBiznes i co oferujesz.
- **Pełne meta + OG + Twitter cards** (masz podstawy — rozbuduj, dodaj OG image generowany dynamicznie).
- **Wersja EN** — masz przełącznik PL/EN, dokończ tłumaczenia (i18n), to podwaja zasięg.
- **Dostępność (WCAG):** kontrast, focus states, alt-texty, nawigacja klawiaturą, `prefers-reduced-motion`. Jury Awwwards punktuje usability na równi z estetyką.
- **Core Web Vitals:** finalny audyt Lighthouse na mobile ≥ 90 we wszystkich kategoriach.

---

## SEKCJA 10 — CHECKLISTA „CZY TO POZIOM AWWWARDS?" (przed publikacją)

- [ ] Hero robi „wow" w pierwszych 3 sekundach, ale ładuje się < 2.5s i ma fallback.
- [ ] Jest JEDEN spójny język wizualny (kolor, typografia, ruch) — nie zlepek trendów.
- [ ] Studio Sandbox działa płynnie i bezbłędnie NA TELEFONIE.
- [ ] Wszystkie placeholdery (0, fałszywy telefon, [portret]) usunięte.
- [ ] Jest twardy dowód społeczny (liczby/wyniki, nie tylko cytaty).
- [ ] Lighthouse ≥ 90 mobile, CLS < 0.1, działa `prefers-reduced-motion`.
- [ ] Każda mikrointerakcja daje satysfakcjonujący feedback.
- [ ] Strona działa bez WebGL (fallback) i bez JS (podstawowa treść/SEO).
- [ ] Schema + llms.txt + OG image na miejscu.
- [ ] Test: pokaż 3 osobom przez 5 sekund — czy zapamiętały markę? Czy zrozumiały ofertę?

---

### Kolejność realizacji (nie rób wszystkiego naraz):
**Faza 1 (Sekcja 4) → Faza 2 (Sekcja 5) → Faza 3 (Sekcja 6) → Faza 4 SANDBOX (Sekcja 7) → Faza 5 (Sekcja 8) → Faza 6 (Sekcja 9) → Checklista (Sekcja 10).**

Po każdej fazie: commit, test na telefonie, Lighthouse. Dopiero potem następna.
