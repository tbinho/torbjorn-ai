# META_API_SETUP

**Startdatum:** 2026-01-19  
**Status:** implementerad  
**Projekt:** flocken  
**Verktyg:** ChatGPT, Cursor, Meta Marketing API, Node.js  
**Senast uppdaterad:** 2026-02-19

---

## Kontext

Flocken-appen var live i App Store och Google Play. Behovet var att skapa en skalbar Meta Ads-struktur via API, inte manuellt i Ads Manager.

---

## Problem

App-installkampanjer via Meta Marketing API visade sig mer komplexa än via UI. Utmaningar uppstod kring objective-val, budgetstruktur och creative-krav.

---

## Initial riktning

Första hypotesen var att använda `OUTCOME_APP_PROMOTION`. Det misslyckades på grund av krav på app-koppling och `promoted_object`.

Beslut: pivotera till `OUTCOME_TRAFFIC` med `LANDING_PAGE_VIEWS`.

---

## Hur AI användes

- ChatGPT användes för API-arkitektur och felsökning.
- Cursor användes för att strukturera Node.js-scripts.
- AI användes för att tolka felkoder och identifiera bid-strategikonflikter.

---

## Konkreta artefakter

### Campaign-struktur

```javascript
{
  objective: 'OUTCOME_TRAFFIC',
  is_adset_budget_sharing_enabled: false,
  status: 'PAUSED'
}
```

### Ad Set-struktur

```javascript
{
  daily_budget: 5000,
  optimization_goal: 'LANDING_PAGE_VIEWS',
  bid_strategy: 'LOWEST_COST_WITHOUT_CAP',
  billing_event: 'IMPRESSIONS',
  status: 'PAUSED'
}
```

---

## Problem & pivotar

1. App Promotion objective övergavs.
2. Budget flyttades från campaign till ad set.
3. Dynamic Creative ersattes med separata ads.
4. Thumbnail-krav för video upptäcktes och hanterades.

---

## Resultat / Nuläge

En repeterbar, script-baserad kampanjstruktur där:
- Naming följer cid-logik
- Alla objekt skapas pausade
- Aktivering sker kontrollerat

Setup-tid reducerades avsevärt.

---

## Lärdomar

**Tekniskt:** Budget på ad set-nivå är stabilast.

**Strategiskt:** Struktur före kreativ produktion.

**AI:** Effektivast i debug och arkitekturfas.

---

## Tidslinje

### 2026-01-19
- Första API-försök.
- Objective-fel identifierades.

### 2026-01-20
- Pivot till Traffic.
- Stabil scriptordning etablerades.

---

## Nästa steg

- Integrera statistik-hämtning.
- Koppla struktur mot BigQuery.
