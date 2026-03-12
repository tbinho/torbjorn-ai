import Link from 'next/link'
import { SystemFlowPuzzle } from '@/components/SystemFlowPuzzle'

const klusterNamn: Record<string, string> = {
  'automation-arbetsfloden': 'Automation & arbetsflöden',
}

export default function MetaAdsGameDemoPage() {
  const kluster = 'automation-arbetsfloden'
  const status = 'aktiv'

  return (
    <div className="container-narrow py-16 md:py-24">
      {/* Tillbaka-länk */}
      <Link
        href="/arbete"
        className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text mb-8"
      >
        <span aria-hidden="true">←</span>
        Alla processer
      </Link>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <span className="kluster-tag">{klusterNamn[kluster]}</span>
          <span className={`status-badge status-badge--${status}`}>{status}</span>
        </div>
        <h1 className="mb-4">Meta-annonsering utan Ads Manager</h1>
        <p className="text-xl text-text-muted">
          Meta Ads Manager kräver en manuell session för varje optimering – det är en flaskhals i
          allt som kan automatiseras. Vi hanterar Meta Ads via API och scripts i stället, med en
          namnkonvention som gör kampanjdata direkt analyserbar i BigQuery.
        </p>
      </header>

      {/* Innehåll + SystemFlowPuzzle-demo */}
      <article className="prose">
        <p>
          Den första versionen av kampanjupplägget var helt manuellt. Canva, ett Google Doc med
          copy, uppladdning via Ads Manager. Inte för att vi inte kunde använda API, vi hade redan
          byggt en första API-setup och aktivt valt att pausa den. Vi automatiserade innan vi
          förstod vad vi automatiserade.
        </p>
        <p>
          Vi tog ett steg tillbaka. Jobbade manuellt, förstod hur Metas algoritmer faktiskt
          fungerar, testade vinklar och fattade besluten vi behövde fatta. Sedan byggde vi om
          API-strukturen, inte som en kopia av den första, utan med riktig kunskap bakom varje val.
        </p>
        <p>Det är skillnaden mellan att bygga snabbare och att bygga rätt.</p>

        <h2>Vad vi ville uppnå</h2>
        <p>
          Det handlar inte om att spara tid på att skapa en enskild kampanj. Meta Ads Manager
          fungerar, det är inte problemet.
        </p>
        <p>
          Problemet är att Meta Ads Manager kräver en manuell session varje gång något ska pausas,
          justeras eller lanseras. Det är en flaskhals för allt som ska kunna automatiseras och det
          stänger ute AI:n helt från att agera.
        </p>
        <p>
          När varje annons är ett skriptobjekt och kampanjdata flödar till BigQuery kan ett system
          läsa prestanda och skriva tillbaka ändringar utan att en människa behöver logga in. Det
          är grunden i den growth loop vi bygger, ett automatiserat system där data driver beslut
          och beslut går tillbaka ut som API-anrop.
        </p>
        <p>
          Men det förutsätter att strukturen är byggd för det. En API-setup som speglar gamla Meta
          Ads Manager-vanor automatiserar ingenting av värde.
        </p>

        <h2>SystemFlowPuzzle – speltest</h2>
        <p>
          Nedan testar jag en interaktiv visualisering av hur data, beslut och utförande hänger
          ihop i det här systemet. Det här är en ren demo-yta – inte en färdig del av processen.
        </p>
        <div className="my-6">
          <SystemFlowPuzzle />
        </div>

        <h2>Hur vi tänkte</h2>
        <p>Det viktigaste beslutet handlade egentligen om kreativ strategi, inte teknik.</p>
        <p>
          Meta har allt svårare att avgöra vem som är rätt person att visa annonsen för. iOS och
          privacy-förändringar innebär att algoritmerna får färre signale. Konsekvensen är att det
          kreativa materialet nu gör en del av jobbet som targeting brukade göra. Olika vinklar i
          annonseringen är inte bara kreativ variation, de avgör hur Meta identifierar olika
          segment.
        </p>
        <p>
          En &quot;vinkel&quot; i det här sammanhanget är inte en ny rubrik på samma annons. Det är
          ett skifte i vilket problem som är i centrum, vilken situation personen befinner sig i
          och vilken känsla som driver klicket. Byter du inte problemformulering byter du inte
          vinkel. Och utan riktiga vinklar ger du inte Meta någonting att jobba med.
        </p>
        <p>
          Det beslutet formade hur API-strukturen designades. Varje annons är sin egen hypotes,
          inte ett kreativt byggblock som Meta kombinerar fritt, utan ett komplett påstående om ett
          specifikt problem och en specifik person.
        </p>
        <p>
          Det andra beslutet gällde namnkonventionen. Ett kampanjnamn som{' '}
          <code>c_flo_swe_init_dogowner_inst_h01_cid001</code> ser tekniskt ut men är egentligen en
          datarad. Varumärke, land, fas, målgrupp, mål, hypotesnummer och kampanj-ID är kodade
          direkt i strängen. Hypotesnumret bär en extra dimension. H01 och H02 är strategiska
          hypoteser som bara en människa ska ändra. Bokstavsvarianter (A, B) är taktiska
          justeringar inom en hypotes, det är nivån som ett system kan ändra autonomt.
        </p>
        <p>
          Det tredje beslutet var att börja smalt. Inte med ett generiskt ramverk, utan ett script
          per operation. Fristående delar som kan köras i sekvens eller anropas enskilt, ett system
          som kan utökas utan att ritas om.
        </p>

        <h2>Vad vi skapade</h2>
        <p>
          Systemet bygger på en hierarki med tre nivåer, kampanj, annonsgrupp och annons. Varje
          nivå skapas som pausad och aktiveras manuellt efter det har godkänts. Det är en viktig
          säkerhetsventil, i alla fall i uppstarten, för att undvika att undermåliga annonser
          slinker igenom.
        </p>
        <p>
          Namnkonventionen bär metadata i tre lager. Kampanjnamnet kodar varumärke, land, fas och
          mål. Annonsgruppens namn kodar koncept och optimeringsmål. Annonsens namn kodar hook,
          kreativbas, copyvariant och format. Strukturen är läsbar för människor och analyserbar
          för system.
        </p>
        <p>
          Scripten hanterar hela flödet genom att skapa kampanjstruktur, ladda upp video, hämta
          thumbnail, skapa kreativa annonser och aktivera det hela i rätt ordning. Allt lever i
          separata <code>.js</code>-filer i repot, aldrig direkt i terminalen, vilket var en av de
          första hårda lärdomarna.
        </p>
        <p>
          UTM-parametrarna är standardiserade och medföljer varje annons-URL. Det gör att GA4 och
          BigQuery kan koppla en session till en specifik annonsvariant, inte bara till
          &quot;meta/paid_social&quot; som kanal.
        </p>

        <h2>Resultat och lärdomar</h2>
        <p>
          Kampanjen levererade resultat som bekräftade riktningen. Datamängden är liten men
          signalen är tillräcklig för att forma nästa hypotes.
        </p>
        <p>
          Det verkliga värdet av den genomarbetade setupen visade sig inte i att första körningen
          var snabb, det var den inte. Det visade sig i att nästa körning kan göras av vem eller
          vad som helst, med samma struktur och utan att börja om.
        </p>
        <p>Tre saker visade sig fungera annorlunda än förväntat.</p>
        <p>
          <strong>Dynamic Creative fungerar annorlunda än vi trodde.</strong> DCO via API
          genererade konsekvent fel. Men den egentliga insikten var djupare. Klassisk Dynamic
          Creative, där Meta kombinerar dina material fritt inom en annons, har ersatts av ett nytt
          mönster. Istället för att ge Meta byggblock att leka med kör du separata annonser med
          distinkta vinklar och låter Meta bestämma vem som ser vilken. Dynamic Creative har i
          praktiken förflyttats från inom annonsen till mellan annonserna. Det är därför separata
          annonser per copyvariant ger renare analys, varje annons är sin egna hypotes.
        </p>
        <p>
          <strong>App Promotion som kampanjmål</strong> krävde beroenden vi inte hade på plats.
          App-SDK:n var inte integrerad, inga in-app events nådde Meta. Utan dem optimerar App
          Promotion mot fel sak. Vi bytte till trafikmål med visning av landningssida som
          optimeringsmål, samma destination, men med hälften så många rörliga delar och en struktur
          som kan användas för App Promotion när spårningen är på plats.
        </p>
        <p>
          <strong>Budget ska alltid sättas på annonsgruppsnivå</strong>, inte kampanjnivå. Omvänt
          skapar en konflikt med Metas budstrategi som genererar kryptiska felmeddelanden utan
          tydlig koppling till det verkliga problemet. Det var i alla fall vår erfarenhet i testet.
        </p>

        <h2>Fortsatt utveckling</h2>
        <p>
          Grunden är lagd för att automatisera optimeringen. Nästa steg är att koppla ihop BigQuery
          med scripten så att en daglig automatiserad körning analyserar hur varje annonsvariant
          presterar, stänger av de som inte levererar och ökar budgeten på de som vinner. Människan
          sätter gränserna och godkänner besluten, men det manuella arbetet i Meta Ads Manager är
          något vi vill minska kraftigt på sikt.
        </p>

        <h2>Hur vi går vidare</h2>
        <p>
          Nästa steg är att koppla UTM-data från BigQuery mot kampanjprestanda. Det ger en bild som
          Metas egna rapporter inte kan ge över vilka annonsvarianter som driver faktiska
          installationer och inte bara landningssidebesök.
        </p>
        <p>
          På längre sikt är målet att AI läser BigQuery, identifierar vinnare och uppdaterar
          annonser via Meta API. Inte för att eliminera mänsklig bedömning, utan för att korta ner
          ledtiderna mellan analys och att agera på insikter som kommer från data. AI ska kunna ta
          beslut om vilken hook som testas härnäst, vilket segment som är outnyttjat och när det är
          rätt att skala.
        </p>

        <h2>Verktyg i den här processen</h2>
        <ul>
          <li>
            <strong>Meta Marketing API</strong> – Hela kampanjstrukturen skapas och hanteras via
            API. Ads Manager används enbart för visuell verifiering.
          </li>
          <li>
            <strong>Node.js scripts</strong> – Ett script per operation, versionshanterade i repot.
            Körs sekventiellt vid ny kampanjlansering.
          </li>
          <li>
            <strong>BigQuery</strong> – Tar emot GA4-export och UTM-taggad trafik. Grunden för
            framtida automatiserad analys.
          </li>
          <li>
            <strong>ChatGPT</strong> – Deep research om Metas algoritmlogik, Dynamic Creative och
            kampanjstruktur för tidig fas med begränsad budget och saknad app-tracking.
          </li>
          <li>
            <strong>Cursor / Claude Sonnet</strong> – Designade scriptstrukturen, debuggade API-fel
            och identifierade mönster i prestanda-data.
          </li>
        </ul>
      </article>

      {/* Navigation */}
      <div className="mt-16 pt-8 border-t border-border">
        <Link href="/arbete" className="text-accent hover:text-accent-hover">
          ← Tillbaka till alla processer
        </Link>
      </div>
    </div>
  )
}

