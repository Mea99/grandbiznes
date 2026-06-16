# GrandBiznes — strona-wizytówka + portfolio

Mobilna wizytówka jednoosobowego studia stron internetowych **GrandBiznes**.
Ciemny, premium styl (neon / glow / glassmorphism), 3 motywy kolorystyczne
(Aurora / Acid / Aurum), przełącznik PL/EN oraz sekcja **„Systemy"** z 12
działającymi demami na żywo (sklep, lojalność, rezerwacje, newsletter, panel,
blog, kody rabatowe, ruch, live-powiadomienia, Mystery Box, opinie, języki).

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind v4** + własny system motywów na zmiennych CSS (`data-theme`)
- **Static export** (`output: 'export'`) — strona to czyste pliki statyczne

## Rozwój lokalny

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build

```bash
npm run build      # generuje statyczny eksport do ./out
```

## Deploy

Automatyczny: **push do `main`** → GitHub Actions buduje `out/` na runnerze
i wgrywa go na VPS do `/var/www/grandbiznes.pl` (serwowane przez nginx).
Workflow: [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

Wymagane sekrety repo (Settings → Secrets and variables → Actions):

| Sekret | Wartość |
|---|---|
| `VPS_HOST` | `57.128.249.140` |
| `VPS_USER` | `ubuntu` |
| `VPS_SSH_KEY` | prywatny klucz SSH z dostępem do VPS |
| `VPS_PORT` | `22` (opcjonalnie) |

## Do podmiany (placeholdery)

W [`src/lib/site.ts`](src/lib/site.ts):
- e-mail, telefon, Instagram, NIP
- screenshoty 3 realizacji (obecnie pasiaste placeholdery)
- logo i portret w sekcji „O mnie"

Formularz kontaktowy: ustaw `FORM_ENDPOINT` w
[`src/components/Kontakt.tsx`](src/components/Kontakt.tsx) (np. Formspree),
aby podłączyć realną wysyłkę.

## Referencja projektowa

`design_handoff_grandbiznes/` — oryginalny handoff (prototyp HTML + opis).
Plik `support.js` to runtime prototypu, **nie** jest używany w produkcji.
