import Link from 'next/link'

// Temporär data - ersätts med Keystatic
const mockProcesser = [
  {
    slug: 'tracking-setup-flocken',
    titel: 'Tracking-setup för Flocken',
    sammanfattning: 'Strukturerad approach för att sätta upp GA4, GTM och BigQuery från dag ett. Eventstruktur designad med AI-stöd.',
    kluster: 'tracking-data-analys',
    status: 'aktiv',
    uppdaterad: '2026-02-03',
  },
  {
    slug: 'content-pipeline-meta-ads',
    titel: 'Content pipeline för Meta Ads',
    sammanfattning: 'Hur jag använder AI för att skapa, testa och iterera på annonsinnehåll i snabb takt.',
    kluster: 'content-kreativ-produktion',
    status: 'aktiv',
    uppdaterad: '2026-01-28',
  },
  {
    slug: 'automated-growth-loop',
    titel: 'Automated Growth Loop',
    sammanfattning: 'Vision och implementation av ett system som automatiskt analyserar, skapar och optimerar marknadsföring.',
    kluster: 'automation-arbetsfloden',
    status: 'parkerad',
    uppdaterad: '2026-01-15',
  },
]

const klusterNamn: Record<string, string> = {
  'tracking-data-analys': 'Tracking, data & analys',
  'content-kreativ-produktion': 'Content & kreativ produktion',
  'automation-arbetsfloden': 'Automation & arbetsflöden',
  'beslutsstod-prioritering': 'Beslutsstöd & prioritering',
  'foretagsbyggande-ai': 'Företagsbyggande med AI',
}

export default function ArbetePage() {
  return (
    <div className="container-wide py-16 md:py-24">
      {/* Header */}
      <div className="max-w-content mb-16">
        <h1 className="mb-4">Arbete & processer</h1>
        <p className="text-xl text-text-muted">
          Dokumenterade arbetsprocesser där AI är en integrerad del.
          Verkliga projekt, verkliga resultat.
        </p>
      </div>

      {/* Filter - kan byggas ut */}
      <div className="flex gap-4 mb-12 flex-wrap">
        <button className="px-4 py-2 bg-accent text-white text-sm rounded-lg">
          Alla
        </button>
        {Object.entries(klusterNamn).map(([value, label]) => (
          <button
            key={value}
            className="px-4 py-2 bg-base-subtle text-text-muted text-sm rounded-lg hover:bg-border transition-colors"
          >
            {label}
          </button>
        ))}
      </div>

      {/* Process-grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockProcesser.map((process) => (
          <ProcessCard key={process.slug} {...process} />
        ))}
      </div>

      {/* Placeholder för fler */}
      <div className="mt-12 p-8 border-2 border-dashed border-border rounded-lg text-center">
        <p className="text-text-muted mb-2">Fler processer kommer</p>
        <p className="text-sm text-text-subtle">
          Dokumentationen byggs kontinuerligt baserat på verkligt arbete
        </p>
      </div>
    </div>
  )
}

function ProcessCard({
  slug,
  titel,
  sammanfattning,
  kluster,
  status,
  uppdaterad,
}: {
  slug: string
  titel: string
  sammanfattning: string
  kluster: string
  status: string
  uppdaterad: string
}) {
  return (
    <article className="process-card group">
      {/* Meta */}
      <div className="flex items-center justify-between mb-4">
        <span className="kluster-tag">{klusterNamn[kluster]}</span>
        <span className={`status-badge status-badge--${status}`}>
          {status}
        </span>
      </div>

      {/* Content */}
      <h3 className="text-lg font-display mb-2 group-hover:text-accent transition-colors">
        <Link href={`/arbete/${slug}`}>
          {titel}
        </Link>
      </h3>
      <p className="text-sm text-text-muted mb-4">
        {sammanfattning}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <time className="text-xs text-text-subtle">
          Uppdaterad {uppdaterad}
        </time>
        <Link
          href={`/arbete/${slug}`}
          className="text-sm text-accent hover:text-accent-hover"
        >
          Läs mer →
        </Link>
      </div>
    </article>
  )
}
