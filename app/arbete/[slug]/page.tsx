import Link from 'next/link'
import { notFound } from 'next/navigation'
import { createReader } from '@keystatic/core/reader'
import keystaticConfig from '@/keystatic.config'
import { marked } from 'marked'
import { promises as fs } from 'fs'
import path from 'path'

const reader = createReader('', keystaticConfig)

const klusterNamn: Record<string, string> = {
  'tracking-data-analys': 'Tracking, data & analys',
  'content-kreativ-produktion': 'Content & kreativ produktion',
  'automation-arbetsfloden': 'Automation & arbetsflöden',
  'beslutsstod-prioritering': 'Beslutsstöd & prioritering',
  'foretagsbyggande-ai': 'Företagsbyggande med AI',
}

export default async function ProcessPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  // Läs från Keystatic för metadata
  const entry = await reader.collections.processer.read(slug)

  if (!entry) {
    notFound()
  }

  // Läs markdown-innehållet direkt från filen
  const filePath = path.join(process.cwd(), 'content', 'processer', `${slug}.mdoc`)
  const fileContent = await fs.readFile(filePath, 'utf-8')

  // Ta bort frontmatter
  const contentWithoutFrontmatter = fileContent.replace(/^---[\s\S]*?---[\r\n]+/, '').trim()

  // Pre-processa tooltips: TERM*(tooltip: förklaring)* → <abbr>
  // Matchar exakt ett ord omedelbart före *(tooltip:...)*
  const contentWithTooltips = contentWithoutFrontmatter.replace(
    /(\w[\w\-]*)\*\(tooltip:\s*([^)]+)\)\*/g,
    '<abbr class="tooltip-term" title="$2">$1</abbr>'
  ).replace(
    // Ensamma *(tooltip:...)* utan term framför (t.ex. i verktygslistan)
    /\*\(tooltip:\s*([^)]+)\)\*/g,
    '<abbr class="tooltip-term" title="$1">ⓘ</abbr>'
  )

  const htmlContent = await marked(contentWithTooltips)

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
          <span className="kluster-tag">{klusterNamn[entry.kluster]}</span>
          <span className={`status-badge status-badge--${entry.status}`}>
            {entry.status}
          </span>
        </div>
        <h1 className="mb-4">{entry.titel}</h1>
        <p className="text-xl text-text-muted">
          {entry.sammanfattning}
        </p>
      </header>

      {/* Innehåll från Markdown */}
      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />

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
