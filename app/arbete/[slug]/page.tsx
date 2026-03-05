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

  // Ladda tooltip-biblioteket
  const tooltipsPath = path.join(process.cwd(), 'lib', 'tooltips.json')
  const tooltips: Record<string, string> = JSON.parse(await fs.readFile(tooltipsPath, 'utf-8'))

  // Pre-processa NextThreshold-callouts
  // Syntax i mdoc: :::nexttreshold[Rubrik]\nInnehåll\n:::
  const contentWithCallouts = contentWithoutFrontmatter.replace(
    /^:::nexttreshold\[([^\]]*)\]\n([\s\S]*?)\n^:::\s*$/gm,
    (_, title, body) => {
      const bodyHtml = body.trim().replace(/\n/g, '<br>')
      return `<div class="callout-nexttreshold"><p class="callout-nexttreshold__title">${title}</p><p class="callout-nexttreshold__body">${bodyHtml}</p></div>`
    }
  )

  // Pre-processa tooltips i tre steg:
  const contentWithTooltips = contentWithCallouts
    // 1. TERM*(tooltip)* – slår upp TERM i JSON (ny ren syntax)
    .replace(/(\w[\w\-]*)\*\(tooltip\)\*/g, (_, term) => {
      const explanation = tooltips[term]
      return explanation
        ? `<abbr class="tooltip-term" title="${explanation}">${term}</abbr>`
        : term
    })
    // 2. TERM*(tooltip: NYCKEL_ELLER_FÖRKLARING)* – om NYCKEL finns i JSON används den, annars används texten direkt
    .replace(/(\w[\w\-]*)\*\(tooltip:\s*([^)]+)\)\*/g, (_, term, content) => {
      const explanation = tooltips[content.trim()] ?? content.trim()
      return `<abbr class="tooltip-term" title="${explanation}">${term}</abbr>`
    })
    // 3. *(tooltip: NYCKEL_ELLER_FÖRKLARING)* utan föregående term – visas som ⓘ
    .replace(/\*\(tooltip:\s*([^)]+)\)\*/g, (_, content) => {
      const explanation = tooltips[content.trim()] ?? content.trim()
      return `<abbr class="tooltip-term" title="${explanation}">ⓘ</abbr>`
    })

  const htmlContent = await marked(contentWithTooltips)

  // Post-processa HTML: lös upp JSON-nycklar i <abbr title="NYCKEL"> från hårdkodade taggar i mdoc
  const htmlWithResolvedTitles = htmlContent.replace(
    /(<abbr[^>]*\s)title="([^"]+)"/g,
    (match, prefix, title) => {
      const resolved = tooltips[title]
      return resolved ? `${prefix}title="${resolved}"` : match
    }
  )

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
        dangerouslySetInnerHTML={{ __html: htmlWithResolvedTitles }}
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
