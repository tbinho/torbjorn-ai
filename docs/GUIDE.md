# torbjorn-ai – Projektguide & skrivguide

Samlad referens för projektet och hur innehållet skrivs.
Senast uppdaterad: 2026-02-18.

---

## Vad webbplatsen är

**torbjorn-ai** är en portfölj av verkliga processer. Inte en blogg, inte en guide, inte teori. Varje artikel dokumenterar något som faktiskt gjorts – med de beslut, misstag och lärdomar som hör till.

Sajten är ett komplement till CV:t. Den berättar det CV:t inte kan berätta.

- **URL:** Vercel-deploy via tbinho GitHub → main branch auto-deploy
- **Dev-server:** `localhost:3000` (ibland 3001/3002 om andra projekt kör)
- **Keystatic editor:** `localhost:3000/keystatic`

---

## Kommandon

```bash
npm install          # Installera beroenden
npm run dev          # Dev-server (localhost:3000)
npm run build        # Produktionsbygg
npm run lint         # ESLint
```

---

## Sidstruktur

| Sida | Syfte | Status |
|------|-------|--------|
| `/` (startsida) | Intro, klusteröversikt, CTA | Klar |
| `/arbete` | Lista över alla processer | Klar |
| `/arbete/[slug]` | Individuell processartikel | Klar |
| `/riktning` | Torbjörns syn på AI och arbete | Klar, komplett |

---

## Vad som är gjort

### Teknisk grund (komplett)
- [x] Next.js 15 + TypeScript + Tailwind + Keystatic
- [x] Sidstruktur (start, arbete, riktning)
- [x] Dynamiska processidor `/arbete/[slug]`
- [x] CSS-rendering fixad (prose-text var osynlig – löst 2026-02-17)
- [x] Keystatic CMS med schema för processer

### Innehåll
- [x] `/riktning` – Komplett. Sju välskrivna avsnitt om syn på AI och arbete.
- [x] Startsidans intro och klusterkort – klart
- [x] Första processen: **"Tracking byggt för att svara på affärsfrågor"** (`tracking-setup-flocken.mdoc`)
  - Kluster: Tracking, data & analys
  - Status: Aktiv
  - Uppdaterad artikel klar, ej publicerad i mdoc än

---

## Vad som återstår

### Tekniskt att implementera
- **Tooltips** – fackbegrepp ska ha tooltip första gången de nämns (se skrivguide). Behöver teknisk implementation i markdoc/rendering.
- Hero-bild på startsidan (placeholder finns)
- Filterknapparna på `/arbete` är inte kopplade än

### Innehåll att skriva

| Kluster | Artiklar | Status |
|---------|----------|--------|
| Tracking, data & analys | 1 artikel klar | Behöver fler |
| Content & kreativ produktion | 0 | Tomt |
| Automation & arbetsflöden | 0 | Tomt |
| Beslutsstöd & prioritering | 0 | Tomt |
| Företagsbyggande med AI | 0 | Tomt |

---

## Filstruktur

```
torbjorn-ai/
├── app/
│   ├── page.tsx              # Startsida
│   ├── arbete/
│   │   ├── page.tsx          # Processlista
│   │   └── [slug]/page.tsx   # Individuell process
│   ├── riktning/page.tsx     # Riktning (statisk)
│   ├── globals.css           # Global CSS (inkl. prose-fix)
│   └── layout.tsx
├── components/
│   ├── Header.tsx
│   └── Footer.tsx
├── content/
│   └── processer/            # .mdoc-filer, en per process
├── docs/
│   └── GUIDE.md              # Denna fil
├── keystatic.config.ts       # Content-schema
└── tailwind.config.js        # Design tokens
```

---

## Ämneskluster

| Kluster-ID | Visningsnamn |
|------------|--------------|
| `tracking-data-analys` | Tracking, data & analys |
| `content-kreativ-produktion` | Content & kreativ produktion |
| `automation-arbetsfloden` | Automation & arbetsflöden |
| `beslutsstod-prioritering` | Beslutsstöd & prioritering |
| `foretagsbyggande-ai` | Företagsbyggande med AI |

---

## Hur man lägger till en ny process

1. Skapa fil i `content/processer/[slug].mdoc`
2. Följ frontmatter-strukturen nedan
3. Skriv alla avsnitt enligt artikelstrukturen i skrivguiden
4. Kör `npm run dev` och verifiera på `localhost:3000/arbete/[slug]`
5. Publicera: `git add . && git commit -m "..." && git push origin main`

### Frontmatter-format

```yaml
---
titel: Titeln på processen
sammanfattning: >-
  En till två meningar som visas i listvy. Ska locka läsaren att klicka.
kluster: tracking-data-analys
status: aktiv
skapad: 2026-01-15
uppdaterad: 2026-02-18
---
```

---

# Skrivguide

---

## Vem vi skriver för

Den ideala läsaren är en rekryterare, marknadschef eller potentiell uppdragsgivare. De har ungefär samma behov som Torbjörn men lite mindre teknisk djupdykning. De förstår marknadsföring, de är nyfikna på AI, men de är inte nördar.

De ska lämna med känslan:

> "Den här personen tänker annorlunda, kan sin domän och får saker gjorda – en sådan person behöver vi i vårt team. Honom skulle jag vilja prata med."

---

## Positionen

Torbjörn är marknadsförare som behärskar AI i praktiken – inte tvärtom. Domänkunskapen är grunden, AI är förstärkaren.

Det som sticker ut är problemlösningsförmågan, arbetskapaciteten och viljan att prova nytt. Det ska aldrig kännas som självmarknadsföring. Det ska kännas som dokumentation av verkligt arbete – och låta resultaten tala.

---

## Ton och röst

- **Professionell men mänsklig.** Inte akademisk, inte konsultig, inte blogg-casual.
- **Jag-form.** Torbjörn skriver om sitt eget arbete.
- **Arbetet och resultaten i fokus** – inte personen.
- **Affärsvärde, alltid.** Det som driver varje beslut är att bygga något som levererar verkligt affärsvärde: snabbare iteration, bättre data, lägre kostnad, smartare system.
- **Delarna hänger ihop.** Varje artikel är ett steg i något större. Koppla gärna tillbaka till helheten när det är naturligt.
- **Ärlighet om svårigheter är en styrka.** Återvändsgränder, omtag och byten av verktyg visar problemlösningsförmåga. Det ska in i texten, inte döljas.
- **Lite tempo.** Texten ska röra sig framåt. Inga onödiga omvägar.
- **Fackspråk är ok** – men introduceras med tooltip första gången det dyker upp. Akronymer förklaras.

### Undvik
- Produktnamn eller företagsnamn som huvudfokus – det handlar om processen och tänket
- Ord som "underlättar", "möjliggör", "optimerar" – för konsultigt
- Passiv form i onödan – "beslutades" → "vi beslutade"
- Listor som ersätter resonemang
- Inledningar som börjar med bakgrund – börja med problemet eller insikten
- **Klyschiga inledningar på avsnitt.** Undvik "Målet var att..." eller "Syftet med detta var...". Börja med saken direkt.
- **Upprepningar av samma poäng** inom ett avsnitt – säg det en gång, säg det bra
- **Tankestreck som bindemedel.** Ett av de tydligaste AI-tecknen i löptext. Ersätt med kommatecken, eller skriv om till två meningar. Undantaget är rubriker.

---

## Hur strikt är strukturen?

Strukturen är obligatorisk som riktning – inte som checklista.

- **Komplex process som täcker mycket** → följ strukturen fullt ut
- **Smal process, tidigt skede eller specifikt beslut** → skippa avsnitt som inte tillför något. En kort, skarp artikel slår alltid en utfylld.
- **Samma process i flera artiklar** → helt ok. Stora ämnen kan och bör delas upp i separata vinklar som refererar till varandra.

---

## Artikelstruktur

### 1. Inledning (ingen rubrik)
Börja med problemet, insikten eller beslutet – inte med bakgrund. Sätt läsaren i situationen direkt. 2–4 meningar.

### 2. Vad vi ville uppnå
Vad var syftet? Vilket problem skulle lösas? Vad var det affärsmässiga värdet? Här säljer vi in *varför det spelar roll*.

### 3. Hur vi tänkte
Hur användes AI? Hur såg beslutsprocessen ut? Konkreta exempel på dialog, val och resonemang. Det är här rösten och tänkandet syns.

### 4. Vad vi skapade
Verktyg, system, struktur. Hur hänger det ihop? Varför valdes det? Teknisk detalj är ok här – men förklarat, inte listat.

### 5. Resultat och lärdomar
Vad är möjligt nu som inte var möjligt innan? Vad var oväntat? Vad skulle gjorts annorlunda? Det viktigaste avsnittet – ge det utrymme.

### 6. Hur vi går vidare
Nästa steg och längre vision. Markerar att processen lever. Koppla gärna till andra processer när det finns naturliga beröringspunkter.

### 7. Verktyg i den här processen
Kompakt block. Verktyget + en rad om vad det gör och varför det valdes. Ger snabbläsaren en direkt överblick.

---

## Artiklar är levande dokument

Artiklar skrivs om när projektet rör sig. Ingen ändringslogg under texten. Om något förändrats – uppdatera texten så att den alltid reflekterar nuläget.

---

## Internlänkning

Länka till andra artiklar när det finns en naturlig koppling. Efter att en ny artikel är skriven, kör ett internlänkningspass över hela sajten. Internlänkar ska alltid kännas naturliga i texten – aldrig påklistrade.

---

## Läsbarhet på två nivåer

**Skumläsaren (3 min):** Rubriker, fetstilta nyckelord och verktygslistan räcker för att förstå vad som gjorts och varför det är intressant.

**Djupläsaren (10+ min):** Löptexten är heltäckande, konkret och ger verklig insikt i hur Torbjörn tänker och jobbar.

Tumregel: om man bara läser rubriker och fet text ska man ändå förstå poängen.

---

## Formatregler

- **Löptext dominerar** – punktlistor är komplement, aldrig huvudform
- **Korta stycken** – 2–4 meningar, skrivet för mobilläsning
- **Fetstil** för nyckelinsikter och konkreta exempel – sparsamt
- **Kodformat** för eventnamn och tekniska strängar: `sign_up`, `[action]_[object]`
- **Tooltips** på fackbegrepp första gången de nämns *(kräver teknisk implementation)*
- Inga långa listor utan förklaring – varje punkt förtjänar ett sammanhang

---

## Titlar

Titeln ska kommunicera värde, inte ämne.

| Undvik | Gör istället |
|--------|--------------|
| "Tracking-setup för Flocken" | "Tracking byggt för att svara på affårsfrågor" |
| "GTM-implementation" | "Hur ett delat GTM-container sparade hundratals timmar" |
| "BigQuery-struktur" | "Data som faktiskt går att analysera" |

Fråga: *Vad får läsaren ut av att läsa detta?* Det är titeln.

---

## Sammanfattning (frontmatter)

1–2 meningar. Ska väcka nyfikenhet och ge ett löfte. Visas i listytan på `/arbete`.

Bra test: skulle du klicka på det här om du såg det på LinkedIn?

---

## Verktygslistan – format

Avsluta varje artikel med ett block. Verktyg ska vara exakta och ärliga, inklusive byten under resans gång. Det bygger trovärdighet.

```
**Verktyg i den här processen**
- **GA4** – Googles analysplattform. Tar emot events från webb och app. *(tooltip: Google Analytics 4)*
- **GTM** – Mellanhand som hanterar vilka events som skickas var. *(tooltip: Google Tag Manager)*
- **BigQuery** – Googles databas för storskalig dataanalys.
- **ChatGPT** – Användes som designpartner i arkitekturfasen.
```

---

## Design & färger

```css
base:          #FAFAF8   /* Varm off-white bakgrund */
text:          #1A1A1A   /* Primär text */
text-muted:    #6B7280   /* Sekundär text */
accent:        #3D6B5C   /* Primär accent (dämpad grön) */
accent-hover:  #4A7C6F   /* Hover */
border:        #E5E7EB   /* Kanter */
```

**Typografi:** Headlines: Georgia (serif) · Body: Inter (sans-serif) · Kod: JetBrains Mono

**Designprinciper:** Text först. Generöst whitespace. Professionell men mänsklig.

---

## Workflow-rekommendation

1. Skriv utkast i Cursor eller claude.ai (bättre för längre text)
2. Spara som `.md` i `docs/` för granskning
3. När artikeln är godkänd – flytta innehållet till `.mdoc` i `content/processer/`
4. Verifiera rendering på `localhost:3000`
5. Committa och pusha

Keystatic editor (`/keystatic`) funkar för snabba edits men är inte optimal för längre skrivsessioner.
