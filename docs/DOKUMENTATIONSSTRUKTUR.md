# Hur vi dokumenterar processer

Samlad referens över dokumentationsstruktur och principer i Spitakolus-repona.
Senast uppdaterad: 2026-02-18.

---

## Grundprincipen: tre repo-lager

```
spitakolus/          → Delat för alla produkter (infrastruktur, standarder)
flocken-website/     → Flocken-specifikt
nastahem/            → Nästa Hem-specifikt
torbjorn-ai/         → Personlig AI-portfolio
```

**Tumregeln:** Gäller det flera produkter → spitakolus. Gäller det ett projekt → det projektets repo.

---

## Vad som dokumenteras – och var

### I spitakolus (delat)
- Delad tracking-infrastruktur (GTM-container, BigQuery-projekt)
- Meta Ads naming conventions
- Git-workflow och asset-standarder
- Mallar för nya repos

### I flocken-website/docs (och motsvarande i nastahem)
- Tracking-setup specifik för produkten (`docs/tracking/`)
- Analytics-arkitektur, KPI:er, funnlar (`docs/analytics/`)
- Meta Ads-kampanjer (`docs/meta/`)
- BigQuery-setup (`docs/bigquery/`)
- A/B-tester (`docs/ab-testing/`)
- Utvecklingsverktyg (`docs/development/`)

### Varje repo har dessutom
- `README.md` – projektöversikt med tydlig varning om vilket repo det är
- `DOCUMENTATION_MAP.md` – komplett index med länkar till allt

---

## Hur ett typiskt dokument ser ut

Filerna är Markdown med denna uppbyggnad:

```markdown
# Dokumentets namn

**Datum:** 2026-01-28
**Syfte:** En rad om varför detta dokument finns

---

## Bakgrund / Vad vi ville uppnå
## Hur vi gjorde
## Resultat / Nuläge
## Nästa steg

---
**Senast uppdaterad:** 2026-01-28
```

**Naming:** `VERSALER_MED_UNDERSTRECK.md` för viktiga dokument, `gemener-med-bindestreck.md` för övriga.

---

## Regler som gäller

1. **En källa per ämne** – samma info ska aldrig finnas på två ställen. Länka istället.
2. **Alltid uppdatera "senast uppdaterad"** – aldrig låta ett dokument bli inaktuellt utan att det syns.
3. **Ta bort det som inte längre stämmer** – arkivera inte allt, radera det som är passerat.
4. **Temporära arbetsfiler hör inte hemma i repot** – session-notes och scratchpads rensas bort.

---

## Vad som saknas – det gjorda i ChatGPT

Det finns ingen strukturerad form för att fånga beslut och insikter från ChatGPT-chattar. Det som finns är:
- `SESSION_2026-02-17.md` i torbjorn-ai – en fri sessionslogg
- Processartiklar i torbjorn-ai – men det är publicerat innehåll, inte arbetsdokumentation

Det som behövs är ett enkelt format för **processbeslutsdokumentation** – ett ställe där man snabbt kan skriva ner vad som beslutades, varför och vad nästa steg är, direkt efter en session.

---

## Mall för processbeslutsdokumentation (förslag)

```markdown
# [Ämne/process]

**Datum:** ÅÅÅÅ-MM-DD
**Verktyg:** ChatGPT / Claude / Cursor
**Projekt:** flocken / nastahem / spitakolus / torbjorn-ai

---

## Vad vi ville lösa
[Problemet eller frågan som drev sessionen]

## Vad vi beslutade
[Konkreta beslut – vad som ska göras och varför]

## Vad vi skapade / förändrade
[Filer, strukturer, kod, texter som kom ut av sessionen]

## Lärdomar
[Vad som var oväntat, vad som fungerade, vad som inte funkade]

## Nästa steg
[Vad som ska hända härnäst – gärna med ansvar och tidshorisont]
```

---

## Relaterade filer i detta repo

| Fil | Innehåll |
|-----|---------|
| `GUIDE.md` | Projektguide + skrivguide för torbjorn-ai |
| `skrivguide.md` | Skrivguiden som originalfil |
| `GROWTH_LOOP_VISION.md` | AI Growth Loop – vision, steg och principer |
| `tracking-setup-flocken-UPPDATERAD.md` | Uppdaterad artikel, ej publicerad i mdoc |
| `riktning-page.tsx` | Gamla riktning-versionen (referens) |
