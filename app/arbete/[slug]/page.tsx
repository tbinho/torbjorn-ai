import Link from 'next/link'

// Temporär - ersätts med Keystatic content loading
export default async function ProcessPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
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
          <span className="kluster-tag">Tracking, data & analys</span>
          <span className="status-badge status-badge--aktiv">aktiv</span>
        </div>
        <h1 className="mb-4">Tracking-setup för Flocken</h1>
        <p className="text-xl text-text-muted">
          Strukturerad approach för att sätta upp GA4, GTM och BigQuery
          från dag ett. Eventstruktur designad med AI-stöd.
        </p>
      </header>

      {/* Innehåll - Fast processmall */}
      <article className="prose">
        {/* Syfte & avgränsning */}
        <h2>Syfte & avgränsning</h2>
        <p>
          Målet var att från start ha en mätningsstruktur som möjliggör
          datadriven optimering av marknadsföringen. Avgränsningen är
          att fokusera på events som direkt påverkar affärsbeslut, inte
          att mäta allt som går att mäta.
        </p>

        {/* AI-first angreppssätt */}
        <h2>AI-first angreppssätt</h2>
        <p>
          Istället för att börja med att googla "GA4 best practices"
          startade jag med en dialog med Claude för att designa
          eventstrukturen. AI:n hjälpte mig resonera kring:
        </p>
        <ul>
          <li>Vilka events som faktiskt behövs för att svara på affärsfrågor</li>
          <li>Namnkonventioner som är konsekventa och framtidssäkra</li>
          <li>Hur data ska struktureras för att fungera i BigQuery</li>
        </ul>

        {/* Verktyg & system */}
        <h2>Verktyg & system</h2>
        <ul>
          <li><strong>GA4</strong> – Web property med enhanced measurement</li>
          <li><strong>GTM</strong> – Server-side tagging via gtm.nastahem.com</li>
          <li><strong>BigQuery</strong> – Export för djupare analys</li>
          <li><strong>Claude</strong> – Eventstruktur och validering</li>
        </ul>

        {/* Resultat / nuläge */}
        <h2>Resultat / nuläge</h2>
        <p>
          Implementerad och live. Eventdata flödar korrekt till BigQuery
          och kan användas för analys. Nästa steg är att bygga dashboards
          för ongoing monitoring.
        </p>

        {/* Placeholder för bild */}
        <div className="my-8 aspect-video bg-base-subtle rounded-lg border border-border flex items-center justify-center not-prose">
          <div className="text-center text-text-muted">
            <p className="text-sm uppercase tracking-wide mb-2">Placeholder</p>
            <p className="text-xs">Screenshot: GA4 realtime eller BigQuery schema</p>
          </div>
        </div>

        {/* Lärdomar */}
        <h2>Lärdomar</h2>
        <ul>
          <li>Att designa eventstrukturen med AI sparade tid och gav bättre resultat än att börja från scratch</li>
          <li>Server-side tagging är mer komplext att sätta upp men ger bättre datakvalitet</li>
          <li>Dokumentera namnkonventioner tidigt – det är smärtsamt att ändra senare</li>
        </ul>

        {/* Fortsättning */}
        <h2>Fortsättning</h2>
        <blockquote>
          <strong>Status: Aktiv</strong><br />
          Nästa steg är att bygga automatiserade rapporter i BigQuery
          och koppla till dashboards för ongoing monitoring.
        </blockquote>

        {/* Uppdateringar */}
        <h2>Uppdateringar</h2>

        <h3>2026-02-03</h3>
        <p>
          Lade till consent-hantering efter GDPR-genomgång. Implementerade
          consent mode v2 i GTM.
        </p>

        <h3>2026-01-20</h3>
        <p>
          Första implementation klar. Alla core events triggar korrekt.
        </p>

        <h3>2026-01-15</h3>
        <p>
          Startade processen. Designade eventstruktur tillsammans med Claude.
        </p>
      </article>

      {/* Navigation */}
      <div className="mt-16 pt-8 border-t border-border">
        <Link
          href="/arbete"
          className="text-accent hover:text-accent-hover"
        >
          ← Tillbaka till alla processer
        </Link>
      </div>
    </div>
  )
}
