import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="container-narrow py-16 md:py-24">
      {/* Hero */}
      <section className="mb-20">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:gap-14">
          <div className="flex-1 mt-8 md:mt-0">
            <h1 className="mb-6">
              AI förändrar hur arbete<br />
              kan utföras
            </h1>
            <p className="text-xl text-text-muted max-w-lg mb-8">
              Jag dokumenterar hur jag praktiskt använder AI inom marknad, data,
              automation och företagsbyggande. Inte teori – verkligt arbete.
            </p>
            <Link
              href="/arbete"
              className="inline-flex items-center bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent-hover transition-colors"
            >
              Se mitt arbete
            </Link>
          </div>
          <div className="flex-shrink-0 flex justify-center md:justify-end">
            <Image
              src="/torbjorn_ai_hero_comics.jpg"
              alt="Torbjörn Sandblad"
              width={260}
              height={260}
              className="rounded-2xl shadow-sm w-[160px] h-[160px] md:w-[260px] md:h-[260px]"
              priority
            />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="prose mb-20">
        <h2>Om arbetet</h2>
        <p>
          Under över ett år har AI i grunden förändrat hur jag utför mitt arbete
          som marknadsförare. Det är inga färdiga modeller eller universella råd.
          Det är dokumentation av verkligt arbete, under tidspress och med ansvar
          för resultat.
        </p>
        <p>
          AI är inte ett verktyg att "lägga till". Det är nya tekniska
          förutsättningar som förändrar hur själva arbetet kan utföras.
          Begränsningarna har flyttats från systemen till människan.
        </p>
      </section>

      {/* Vad du hittar */}
      <section className="mb-20">
        <h2 className="text-2xl mb-8">Vad du hittar här</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <ClusterCard
            title="Tracking, data & analys"
            description="Hur jag sätter upp mätning, strukturerar data och använder AI för insikter."
          />
          <ClusterCard
            title="Content & kreativ produktion"
            description="Arbetsflöden för text, bild och video med AI som produktionsstöd."
          />
          <ClusterCard
            title="Automation & arbetsflöden"
            description="Processer som tidigare krävde manuella moment men nu kan fortsätta."
          />
          <ClusterCard
            title="Beslutsstöd & prioritering"
            description="Hur AI hjälper mig resonera, prioritera och fatta bättre beslut."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-12 border-t border-border">
        <p className="text-text-muted mb-4">
          Vill du förstå min syn på AI och arbete?
        </p>
        <Link
          href="/riktning"
          className="text-accent hover:text-accent-hover font-medium"
        >
          Läs om min riktning →
        </Link>
      </section>
    </div>
  )
}

function ClusterCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 bg-white border border-border rounded-lg">
      <h3 className="text-lg font-display mb-2">{title}</h3>
      <p className="text-sm text-text-muted">{description}</p>
    </div>
  )
}
