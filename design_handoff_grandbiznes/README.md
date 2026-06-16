# Handoff: Strona-wizytówka GrandBiznes (portfolio + prezentacja systemów)

## Overview
GrandBiznes to jednoosobowe studio tworzące strony internetowe i sklepy. Ta strona to **mobilna wizytówka + portfolio**, której kluczową funkcją jest **sekcja „Systemy"**: 12 klikalnych kafelków, z których każdy otwiera **działające demo na żywo** danego systemu (sklep, punkty lojalnościowe, newsletter, rezerwacje, panel użytkownika, blog, kody rabatowe, śledzenie ruchu, live‑powiadomienia, Mystery Box, opinie, wielojęzyczność). Demo służy do pokazywania klientom „na żywo", jak dana funkcja działa.

Strona jest **mobile‑first** (projektowana pod telefon), w stylu **ciemnym/premium z efektami neon, glow i glassmorphism**, z **3 wymiennymi motywami kolorystycznymi** i **przełącznikiem języka PL/EN**.

## About the Design Files
Pliki w tej paczce (`GrandBiznes.dc.html` + `support.js`) to **referencja projektowa stworzona w HTML** — prototyp pokazujący docelowy wygląd i zachowanie, **nie** kod produkcyjny do skopiowania 1:1. Zadaniem jest **odtworzenie tego projektu w docelowym środowisku** (np. Next.js/React, Astro, Vue, WordPress itp.) z użyciem jego konwencji, komponentów i bibliotek. Jeśli projekt zaczyna się od zera — wybierz najlepszy framework (rekomendacja: **Next.js + React + Tailwind CSS** lub czysty **Astro**, bo to głównie strona content/marketing z interaktywnymi „wyspami").

Uwaga techniczna: `GrandBiznes.dc.html` to tzw. „Design Component" — jeden plik z szablonem (markup) i klasą logiki (`class Component extends DCLogic`). `support.js` to runtime potrzebny tylko do uruchomienia prototypu lokalnie (otwórz `GrandBiznes.dc.html` w przeglądarce). W docelowej apce **nie używaj** tego runtime — przepisz markup na komponenty, a logikę (klasa `Component`, metody + `renderVals`) na stan/handlery frameworka.

## Fidelity
**High‑fidelity (hifi).** Finalne kolory, typografia, odstępy, animacje i interakcje. Odtwórz UI pixel‑perfect, używając bibliotek/konwencji docelowego kodu. Wszystkie wartości (hex, px, czcionki) są podane niżej.

> Treści kontaktowe są **placeholderami** (e‑mail, telefon, Instagram, NIP) — do podmiany. Ceny w cenniku również są przykładowe.

---

## Architektura / Layout ogólny
- **Mobile‑first**, szerokość kanwy treści **≈ 430 px** (w prototypie pokazana w ramce telefonu; w realnej apce to po prostu responsywna strona, ale projekt zoptymalizowany pod ~390–430 px szerokości).
- Strona = pionowy stack sekcji wewnątrz przewijanego kontenera. Pasek nawigacji **sticky** u góry.
- Tło sekcji jednolite (`--bg`), karty na `--panel`/`--panel2` z subtelnym gradientem i obrysem `--border`.
- **Scroll‑reveal**: sekcje pojawiają się (fade + translateY 26px → 0) przy wejściu w viewport.
- Efekty: rozmyte „glow orby" w hero, marquee (przewijający się pasek haseł), glassmorphism na nav (backdrop‑blur), liczby animowane (count‑up).

## Motywy (3 warianty do wyboru przez klienta)
Cała kolorystyka i czcionki są sterowane **zmiennymi CSS** ustawianymi na kontenerze. Przełącznik (segmented control) zmienia zestaw zmiennych. Zaimplementuj jako theme switcher (np. `data-theme` na `<html>` + zestawy CSS variables, lub context w React).

### Theme „Aurora" (domyślny) — fiolet/cyan
```
--bg:        #0a0a12
--bg2:       #12121f
--panel:     rgba(255,255,255,.045)
--panel2:    rgba(255,255,255,.075)
--border:    rgba(255,255,255,.10)
--text:      #f4f3ff
--muted:     #a6a3c4
--accent:    #8b5cf6   (rgb 139,92,246)
--accent2:   #22d3ee   (rgb 34,211,238)
--font-display: 'Space Grotesk'
--font-body:    'Manrope'
--font-eyebrow: 'Space Grotesk'
```

### Theme „Acid" — limonka/neon cyan
```
--bg:        #07100b
--bg2:       #0c1812
--panel:     rgba(255,255,255,.035)
--panel2:    rgba(180,255,120,.06)
--border:    rgba(198,255,74,.14)
--text:      #eafff0
--muted:     #8fb39c
--accent:    #c6ff4a   (rgb 198,255,74)
--accent2:   #2ce0ff   (rgb 44,224,255)
--font-display: 'Sora'
--font-body:    'Space Grotesk'
--font-eyebrow: 'JetBrains Mono'
```

### Theme „Aurum" — złoto premium (display serif)
```
--bg:        #0b0908
--bg2:       #14100c
--panel:     rgba(255,255,255,.035)
--panel2:    rgba(245,196,81,.06)
--border:    rgba(245,196,81,.16)
--text:      #f7f1e8
--muted:     #b6a88f
--accent:    #f5c451   (rgb 245,196,81)
--accent2:   #e8a04a   (rgb 232,160,74)
--font-display: 'Marcellus' (serif)
--font-body:    'Manrope'
--font-eyebrow: 'Marcellus'
```

## Design Tokens (wspólne)
- **Czcionki (Google Fonts):** Space Grotesk (400–700), Manrope (400–800), Sora (400–800), Marcellus (400), JetBrains Mono (400–500).
- **Skala typografii:**
  - H1 hero: `font-display`, 42px / line‑height 1.04 / weight 700 / letter‑spacing −0.02em
  - H2 sekcji: `font-display`, 29px / 1.1 / 700 / −0.01em
  - „Eyebrow" (nadtytuł): `font-eyebrow`, 10.5px / UPPERCASE / letter‑spacing 0.26em / weight 600 / kolor `--accent`
  - Body: `font-body`, 13–15.5px / line‑height 1.5–1.6 / kolor `--muted`
  - Etykiety mono/akcent: `font-eyebrow`, 10–11px / letter‑spacing 0.03–0.18em
- **Border‑radius:** karty 16–18px; duże karty/sekcje 22–24px; kafelki demo 14px; przyciski 11–14px; pigułki/chipy 999px; ramka telefonu 43–54px.
- **Odstępy:** padding sekcji 30–38px (pionowy) × 22px (poziomy); gap w gridach 9–13px; padding kart 14–18px.
- **Cienie/Glow:**
  - CTA: `0 14px 34px rgba(var(--accent-rgb),.4)`
  - Karta hover: `0 24px 50px rgba(var(--accent-rgb),.22)`, translateY(−4px)
  - Glow orb (hero): koło z `radial-gradient(closest-side, rgba(accent,.5), transparent)`, `filter: blur(18px)`, animacja float + pulsowanie opacity
- **Gradient akcentowy (przyciski/teksty):** `linear-gradient(120deg, var(--accent), var(--accent2))`, tekst na nim ciemny `#0a0a12`.
- **Tło kart:** `linear-gradient(165deg, var(--panel2), var(--panel))` + `1px solid var(--border)`.

## Animacje / efekty (do odtworzenia)
- **Scroll‑reveal:** każda sekcja startuje `opacity:0; translateY(26px)`, po wejściu w viewport → `opacity:1; translateY(0)` przez `0.75s cubic-bezier(.2,.7,.2,1)`. (W prototypie sterowane IntersectionObserver/scroll; w React użyj IntersectionObserver + klasa, lub `framer-motion whileInView`.)
- **Count‑up:** liczby w hero (3 / 12 / 100%) animowane od 0 do wartości w ~1.4s, easing `easeOutCubic`.
- **Marquee:** pasek haseł (Strony · Sklepy · Rezerwacje · Lojalność · Newsletter · Panel gracza · AI) przewijany w pętli (`translateX 0 → -50%`, 20s linear, treść zduplikowana).
- **Glow orby:** 2 rozmyte koła w hero, animacja float (±14px, 7–9s) + zmiana opacity (0.5↔0.95).
- **Hover kart:** translateY(−3/−4px) + obrys w kolorze akcentu + glow.
- **Marka tekstu hero:** druga linia ma animowany gradient (`background-position` 0→100%, 6s).

---

## Ekrany / Sekcje (kolejność na stronie)

### 1. Top bar / Nav (sticky)
- Lewo: logo „GRAND" + „BIZNES" (akcent), poprzedzone kwadratem‑rombem w gradiencie akcentu (16px, obrót 45°, glow).
- Prawo: hamburger (3 kreski, ostatnia krótsza, w kolorze akcentu).
- Tło: `linear-gradient(180deg, rgba(10,10,18,.92), rgba(10,10,18,.55))` + `backdrop-filter: blur(14px)`, dolny border `--border`.
- Klik hamburgera → rozwijane menu (glass panel) z linkami: Realizacje, Systemy, Proces, Cennik, FAQ + CTA „Wyceń projekt". Kliknięcie linku = płynny scroll do sekcji i zamknięcie menu.

### 2. Hero
- Eyebrow „STUDIO STRON INTERNETOWYCH" (EN: „Web design studio") z kropką‑glow.
- H1: „Strony, które **robią robotę.**" (EN: „Sites that **get the job done.**") — druga linia w animowanym gradiencie akcentu.
- Akapit (max‑width 340px, `--muted`).
- 2 CTA: „Wyceń projekt →" (gradient, ciemny tekst, scroll do kontaktu) + „Zobacz realizacje" (panel + border, scroll do portfolio).
- 3 statystyki (count‑up): **3** realizacje · **12** systemów · **100%** mobile — karty `--panel`, liczba `font-display` 26px w kolorze akcentu.
- Tło: 2 glow orby (akcent i akcent2), animowane.

### 3. Marquee
Pasek z `✦`‑oddzielonymi hasłami, przewijany w pętli; border góra/dół `--border`, tło `--panel`, tekst `--muted`, `✦` w akcencie.

### 4. Realizacje (portfolio) — `#s-real`
Eyebrow „Wybrane realizacje", H2 „Strony na żywo, realne systemy". 3 karty (klikalne, `target=_blank`):
1. **Akademia Wygrywania** → https://akademiawygrywania.pl — „Platforma społecznościowa". Tagi: Sklep, Panel gracza, Rankingi, Newsletter.
2. **Legalny Diler** → https://legalnydiler.pl — „Sklep e‑commerce 18+". Tagi: E‑commerce, Mystery Box, Live feed, Opinie.
3. **Let's Art Barbershop** → https://letsartbarbershop.pl — „Strona z rezerwacją". Tagi: Rezerwacje, Galeria, PL/EN, SEO lokalne.

Każda karta = makieta przeglądarki (3 kropki + pasek URL z domeną + nazwa projektu na pasiastym tle `repeating-linear-gradient` w kolorze akcentu) + opis + chipy tagów. Hover: lift + glow. **Podmień pasiaste placeholdery na realne screenshoty stron.**

### 5. Systemy — `#s-sys`  ★ NAJWAŻNIEJSZE
Eyebrow „Co potrafię zbudować", H2 „Systemy do Twojej strony", podtytuł „Kliknij dowolny kafelek, aby zobaczyć działające demo na żywo…".
Grid **2 kolumny**, 12 klikalnych kafelków. Każdy: ikona (glif geometryczny w kafelku 34px z tłem `rgba(accent,.14)`), tytuł (`font-display` 14px), opis (`--muted` 11.5px), stopka „Zobacz demo →" (akcent, `font-eyebrow`). Hover: lift + obrys akcentu + glow.
Pod gridem: ramka przerywana „Nie ma Twojej funkcji? Buduję też systemy szyte na miarę…".

**Kliknięcie kafelka otwiera bottom‑sheet / pełnoekranowy panel demo NAD ekranem telefonu** (patrz „Demo systemów" niżej). 12 kluczy: `sklep, lojalnosc, newsletter, rezerwacje, panel, blog, kody, ruch, live, mystery, opinie, jezyki`.

### 6. Proces — `#s-proc`
H2 „Od pomysłu do startu". 4 kroki (numer 01–04 w kafelku, krok 04 wyróżniony gradientem): Rozmowa i brief → Projekt i makieta → Budowa z AI → Wdrożenie i opieka. Każdy: tytuł + krótki opis.

### 7. Cennik — `#s-price`
H2 „Pakiety". 3 karty (środkowa wyróżniona obrysem akcentu + badge „NAJCZĘŚCIEJ WYBIERANY"):
- **Wizytówka** — od **1 200 zł** — one‑page mobilna, formularz, SEO podstawowe.
- **Biznes** — od **2 900 zł** — wielostronowa + blog, newsletter + integracje, animacje, SEO rozszerzone.
- **Premium / Sklep** — od **5 900 zł** — e‑commerce/panel, lojalność/rezerwacje/płatności, systemy na miarę.
Lista cech z „✓" w akcencie. **Ceny przykładowe — do ustalenia.**

### 8. Opinie — `#s-opinie`
H2 „Co mówią klienci". 3 karty: 5 gwiazdek (akcent), cytat, awatar (inicjał w kółku gradientowym) + nazwa + rola. (Kamil/Akademia Wygrywania, Legalny Diler, Let's Art Barbershop.)

### 9. O mnie — `#s-about`
Karta z pasiastym placeholderem na górze („[ portret / logo ]" — **podmień na zdjęcie/logo**), eyebrow „O mnie", H2 „GrandBiznes — Twoja strona od A do Z", akapit.

### 10. FAQ — `#s-faq`
H2 „Częste pytania". 5 pozycji jako accordion (`<details>/<summary>`): ikona „+" obraca się o 45° i zmienia kolor na akcent po otwarciu. Pytania: czas realizacji, sklepy, mobile, edycja treści, opieka po starcie.

### 11. Kontakt — `#s-kontakt`
Karta z obrysem/tłem akcentowym + glow orb. Formularz: Imię/firma, E‑mail, select „Rodzaj projektu" (Wizytówka/Strona biznesowa/Sklep/Platforma na miarę), textarea. Submit → ekran sukcesu („Dzięki! Wiadomość wysłana."). Pod spodem 2 przyciski: e‑mail i telefon (**placeholdery:** `kontakt@grandbiznes.pl`, `+48 600 000 000`). **Podłącz realną wysyłkę (np. API route / Formspree / własny endpoint).**

### 12. Footer
Logo, krótki opis, linki (Realizacje/Systemy/Cennik/Kontakt/Instagram), copyright. **Podmień socjale/dane firmy.**

---

## Demo systemów (panel otwierany z sekcji „Systemy")
Panel pełnoekranowy nad ekranem (header: ikona + tytuł systemu + „DEMO NA ŻYWO" + przycisk zamknięcia ✕; body przewijane). Treść zależna od klucza systemu. Wszystkie demo dziedziczą aktualny motyw i działają w PL/EN.

| Klucz | Co pokazuje demo (interaktywne) |
|---|---|
| `sklep` | Lista 2 produktów z „Dodaj"; pasek koszyka z licznikiem i sumą (aktualizowane); przycisk „Do kasy — Przelewy24/BLIK". |
| `lojalnosc` | Duży licznik punktów; pasek postępu do 500; przycisk „+50 punktów"; po 500 → karta „Nagroda odblokowana: darmowa dostawa". |
| `newsletter` | Formularz e‑mail → ekran sukcesu „Zapisano!"; licznik subskrybentów. |
| `rezerwacje` | Usługa (Strzyżenie męskie, 45 min, 100 zł) + 5 slotów godzin (10:00–17:00); wybór slotu → potwierdzenie rezerwacji. |
| `panel` | Logowanie (e‑mail/hasło) → pulpit: powitanie, statystyki (450 pkt / 8 zamówień / 2 kupony), ostatnie zamówienia, „Wyloguj". |
| `blog` | Lista 3 wpisów (data + tytuł + „Czytaj →") → widok artykułu z przyciskiem „← Wróć do listy". |
| `kody` | Pole kodu; poprawny kod = `MUNDIAL` → karta „−10%" + **odliczanie czasu mm:ss** (start 6:00); błędny kod → komunikat. |
| `ruch` | Dashboard: licznik „Teraz online" tykający na żywo (interval ~1.5s), „Odwiedzin dziś" rosnące, wykres słupkowy 7 dni (Pn–Nd). |
| `live` | Przycisk „Włącz demo" → wyskakujące powiadomienia „[Imię] właśnie kupił(a) [produkt] · przed chwilą" co ~2.6s (max 4 widoczne), z awatarem‑inicjałem. |
| `mystery` | Klikalny „box"; po kliknięciu animacja „Otwieram…" (~0.95s) → losowa nagroda; „Otwórz ponownie". |
| `opinie` | Klikalne 5 gwiazdek (ustawia ocenę) + textarea → „Dodaj opinię" dopisuje recenzję na górę listy. |
| `jezyki` | Segmented control PL/EN/DE → przykładowa karta (tytuł/podtytuł/CTA) zmienia język natychmiast. |

## State Management (do odtworzenia w docelowym frameworku)
Stan w prototypie (klasa `Component`): 
- `theme` (aurora/acid/aurum), `lang` (pl/en), `menuOpen`, `contactSent`
- demo: `activeDemo` (null | klucz), oraz stany per‑demo: `cart`/`cartTotal`, `points`, `subscribed`/`subCount`, `bookedSlot`, `loggedIn`, `openPost`, `code`/`codeOk`/`codeErr`/`codeLeft`(timer), `boxResult`/`boxSpinning`, `rating`/`reviews[]`, `demoLang`(pl/en/de), `liveNotifsOn`/`notifs[]`, `online`/`visitorsToday`/`series[7]`.
- Timery (interval): licznik „online" (ruch), wyskakiwanie powiadomień (live), odliczanie kodu (kody). **Pamiętaj o czyszczeniu interwałów przy zamknięciu demo/unmount.**

## i18n (PL/EN)
Prototyp trzyma polski jako tekst widoczny, a angielski w atrybutach `data-en` (przełącznik podmienia `textContent`). W docelowej apce użyj normalnego i18n (np. `next-intl`, słowniki PL/EN). Demo „jezyki" pokazuje dodatkowo DE jako przykład — to tylko ilustracja, nie pełne tłumaczenie strony.

## Assets (do dostarczenia przez klienta)
- **Logo GrandBiznes** (obecnie zastępcze: romb w gradiencie + tekst).
- **Screenshoty 3 realizacji** (obecnie pasiaste placeholdery) — akademiawygrywania.pl, legalnydiler.pl, letsartbarbershop.pl.
- **Portret / zdjęcie** do sekcji „O mnie".
- **Dane kontaktowe** (e‑mail, telefon, Instagram, ew. NIP/REGON) — obecnie placeholdery.
- Ikony systemów: użyte proste glify Unicode (⬢ ↺ ✦ ◷ ◈ ▦ ％ ◴ ◎ ⬡ ★ ⚑) — w docelowej apce zastąp spójnym zestawem ikon (np. lucide/heroicons).

## Files
- `GrandBiznes.dc.html` — kompletny prototyp (markup + logika). Otwórz w przeglądarce z `support.js` obok, aby zobaczyć działanie (przełączniki motywu/języka są nad ramką telefonu w widoku prototypu — w realnej apce motyw/język to ustawienia strony).
- `support.js` — runtime prototypu (tylko do podglądu lokalnego; nie przenosić do produkcji).
