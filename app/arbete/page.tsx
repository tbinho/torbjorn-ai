import Link from 'next/link'
import { createReader } from '@keystatic/core/reader'
import keystaticConfig from '@/keystatic.config'

const reader = createReader('', keystaticConfig)

const klusterNamn: Record<string, string> = {
  'tracking-data-analys': 'Tracking, data & analys',
  'content-kreativ-produktion': 'Content & kreativ produktion',
  'automation-arbetsfloden': 'Automation & arbetsflöden',
  'beslutsstod-prioritering': 'Beslutsstöd & prioritering',
  'foretagsbyggande-ai': 'Företagsbyggande med AI',
}

export default async function ArbetePage() {
  // Läs alla processer från Keystatic
  const processSlugs = await reader.collections.processer.list()
  const processer = await Promise.all(
    processSlugs.map(async (slug) => {
      const process = await reader.collections.processer.read(slug)
      return {
        slug,
        ...process,
      }
    })
  )

  // Sortera efter uppdaterad datum (nyast först)
  const sortedProcesser = processer.sort((a, b) => {
    if (!a || !b) return 0
    return new Date(b.uppdaterad ?? 0).getTime() - new Date(a.uppdaterad ?? 0).getTime()
  })
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
        {sortedProcesser.map((process) => (
          process && <ProcessCard
            key={process.slug}
            slug={process.slug}
            titel={process.titel ?? undefined}
            sammanfattning={process.sammanfattning ?? undefined}
            kluster={process.kluster ?? undefined}
            status={process.status ?? undefined}
            uppdaterad={process.uppdaterad ?? undefined}
          />
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
  titel = '',
  sammanfattning = '',
  kluster = '',
  status = '',
  uppdaterad = '',
}: {
  slug: string
  titel?: string
  sammanfattning?: string
  kluster?: string
  status?: string
  uppdaterad?: string
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
