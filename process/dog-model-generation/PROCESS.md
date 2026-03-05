# DOG_MODEL_GENERATION_DISCOVERY

**Startdatum:** 2026-01-22  
**Status:** pausad (manual lösning aktiv)  
**Projekt:** flocken  
**Verktyg:** ChatGPT, Cursor, Vertex AI (Imagen 3), Google AI Studio (Gemini 3 Pro Image Preview), Nano Banana, Replicate (research)  
**Senast uppdaterad:** 2026-02-19

---

## Kontext

Flocken behövde ett konsekvent bildbibliotek för återkommande hundmodeller. Varje hund skulle ha tre referensbilder (profil, 3/4, liggande) med identitetskonsistens och vit studiobakgrund.

Målet var att automatisera genereringen via API.

---

## Problem

Text-to-image via Vertex AI Imagen 3 gav:
- Inkonsistent hundidentitet mellan generationer
- Fel bakgrundsfärg
- Variation i proportioner och pälsstruktur
- Generisk ras istället för specifik individ

Det gick inte att uppnå character consistency med enbart textprompter.

---

## Initial riktning

Hypotes: Extremt detaljerade prompter + konsekvent parametrisering skulle räcka.

Modell: `imagen-3.0-generate-001` via Vertex AI.

---

## Hur AI användes

### 1. Promptdesign

ChatGPT användes för att:
- Strukturera detaljerade visuella beskrivningar
- Specificera RGB-värden för bakgrund
- Standardisera ljus och kameravinkel

**Exempel på promptstruktur:**

```text
Photorealistic studio image of a red/apricot toy poodle, 26-27 cm tall, 3.5 kg,
white background RGB 255,255,255, soft studio lighting, no shadows,
profile view, neutral expression, full body visible.
```

### 2. JSON-struktur via Vertex

```json
{
  "instances": [
    {
      "prompt": "Photorealistic studio image..."
    }
  ],
  "parameters": {
    "sampleCount": 1,
    "aspectRatio": "1:1",
    "negativePrompt": "text, watermark, extra animals"
  }
}
```

Cursor användes för att strukturera API-anrop och organisera scripts.

### 3. Debug och analys

När inkonsistens uppstod användes ChatGPT för att:
- Resonera kring modellbegränsningar
- Identifiera skillnaden mellan Imagen och Gemini
- Kartlägga Googles olika bildsystem

---

## Problem & pivotar

### Pivot 1 – Imagen räcker inte

Upptäckt: Imagen 3 saknar stöd för reference images i text-to-image-mode.

Beslut: undersöka alternativ.

### Pivot 2 – Reverse engineering av AI Studio

Genom network inspection identifierades:
- Gemini 3 Pro Image Preview
- Intern RPC-endpoint
- File ID-system för referensbilder

Slutsats: Funktionen finns i UI men är inte publikt API-exponerad.

### Pivot 3 – Manuell generation

Tillfällig lösning:
- Ladda upp referensbilder manuellt i AI Studio
- Generera en pose i taget
- Spara enligt fast namnkonvention

Automation pausades tills publikt API eller alternativ lösning finns.

### Alternativ utvärderat

DreamBooth via Replicate:
- Träna modell per hund
- Kostnad låg
- Full kontroll över identitet

Ej implementerat – dokumenterat som framtida alternativ.

---

## Resultat / Nuläge

- 3 referensbilder per hund genereras manuellt
- Konsistens uppnås via reference images
- Automatisering väntar på:
  - Publik Gemini image-API
  - Eller beslut om DreamBooth

---

## Lärdomar

**Tekniskt:** Textprompt räcker inte för individidentitet. Reference images är avgörande.

**Strategiskt:** Verktygsval styr output mer än promptprecision. UI-funktioner ≠ publikt API.

**AI-relaterat:** AI är effektiv i hypotesformulering. Begränsningar identifieras först genom praktisk testning. Reverse engineering kan ge insikt men är inte långsiktigt hållbart.

---

## Tidslinje

### 2026-01-22
- Första Imagen-testet.
- Inkonsistens identifierad.

### 2026-01-23
- Research kring Googles bildmodeller.
- Gemini Image Preview identifierad.

### 2026-01-24
- Manuell generation etablerad som temporär lösning.

---

## Nästa steg

- Bevaka publik release av Gemini image-API.
- Alternativt testa DreamBooth i kontrollerad miljö.
- Utvärdera kostnad vs kontroll för produktion.
