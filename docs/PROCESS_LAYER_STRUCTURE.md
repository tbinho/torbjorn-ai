# PROCESS_LAYER_STRUCTURE – AI-arbetsdokumentation (låst)

**Syfte:**  
Dokumentera hur AI används i praktiskt arbete.  
Detta är intern arbetsdokumentation – inte publicerat material.

**Status:** LÅST  
**Senast uppdaterad:** 2026-02-19

---

## Grundprincip

En process = en mapp = en fil (`PROCESS.md`).

Om en process växer sig extremt stor är det troligen flera processer. Dela då upp den. Lös det när det händer – inte i förväg.

---

## Mappstruktur

```
torbjorn-ai/
  process/
    INDEX.md
    meta-api-setup/
      PROCESS.md
    dog-model-generation/
      PROCESS.md
    creative-base-system/
      PROCESS.md
```

Ingen datum-prefix i mappnamn. Startdatum dokumenteras i filen.

Ingen obligatorisk ASSETS-mapp. Skapas endast om verkliga artefakter behöver sparas.

---

## INDEX.md (obligatorisk)

| Process | Status | Startdatum | Kort beskrivning |
|---------|--------|------------|------------------|
| meta-api-setup | implementerad | 2026-01-19 | Strukturering av Meta API-kampanjer |
| dog-model-generation | pausad | 2026-01-22 | Discovery: hundmodeller med identitetskonsistens |

---

## Standardstruktur för PROCESS.md

```markdown
# PROCESS_NAME

**Startdatum:** ÅÅÅÅ-MM-DD
**Status:** aktiv / pausad / implementerad / ersatt
**Projekt:** flocken / nastahem / spitakolus / generellt
**Verktyg:** ChatGPT, Cursor, Claude, Vertex AI, Nano Banana etc.
**Senast uppdaterad:** ÅÅÅÅ-MM-DD

---

## Kontext
Vad som pågick när processen startade.

## Problem
Det konkreta problemet som behövde lösas.

## Initial riktning
Vad vi trodde skulle fungera.

## Hur AI användes
Konkret beskrivning: resonemang, promptdesign, kodgenerering, JSON-struktur, debug, verktygsjämförelse.

## Konkreta artefakter
### Prompt-exempel
### JSON / Kod

## Problem & pivotar
Vad fungerade inte? Vad ändrades? Varför?

## Resultat / Nuläge
Vad är möjligt nu? Vad lever vidare? Vad ersattes?

## Lärdomar
Tekniskt, strategiskt, AI-relaterat.

## Tidslinje
### ÅÅÅÅ-MM-DD
- Kort notering

## Nästa steg
Vad ska hända härnäst? Koppling till andra processer?
```

---

## Regler

1. En process = en `PROCESS.md`
2. Ingen separat TIMELINE.md
3. Ingen tom ASSETS-mapp
4. Datum dokumenteras i filen, inte i mappnamnet
5. Promptar och kod får visas ordagrant
6. Pivotar ska dokumenteras
7. Uppdatera "Senast uppdaterad" varje gång filen ändras
8. Verktygsbeskrivningar sker i varje process – aldrig globalt

---

## Namnkonvention för ChatGPT

- **Mapp:** alltid kebab-case, t.ex. `meta-api-setup`, `dog-model-generation`.
- **Fil:** alltid `PROCESS.md` (inte `META_API_SETUP_PROCESS.md`). Innehållet du exporterar hamnar i `process/[mappnamn]/PROCESS.md`.
- **Titel i filen (rad 1):** kan vara mer beskrivande, t.ex. `# META_API_SETUP` eller `# DOG_MODEL_GENERATION_DISCOVERY` – det är bara rubriken i dokumentet.
