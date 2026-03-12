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
              AI förändrar hur arbete
              <br />
              kan utföras
            </h1>
            <p className="text-xl text-text-muted max-w-lg mb-8">
              Här beskriver jag hur jag praktiskt använder AI inom marknadsföring och företagsbyggande.
              Det är inte teoretiska resonemang om vad AI kan göra, utan projekt jag faktiskt genomfört
              tillsammans med AI.
            </p>
            <Link
              href="/arbete"
              className="inline-flex items-center bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent-hover transition-colors"
            >
              Läs om projekten
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
        <h2>Om mitt arbete med AI</h2>
        <p>
          AI har i grunden förändrat hur jag utför mitt arbete. Just nu förändras allt så snabbt
          att det inte finns färdiga mallar att gå efter. Det handlar om att göra, testa och lära
          sig av resultatet.
        </p>
        <p>
          AI är inte ytterligare ett verktyg eller en teknik. Det förändrar helt hur vi arbetar.
          Den kanske största utmaningen är att hela tiden pusha sig att tänka utanför boxen, att
          göra saker på nya sätt precis hela tiden. Jag skulle vilja säga att begränsningarna har
          flyttats från systemen till människan.
        </p>
        <p>
          På den här sajten beskriver jag hur jag skapar saker som jag tills nyligen inte ens hade
          inom räckhåll inom olika områden genom att använda min nyfikenhet, som har blivit en
          viktigare kompetens än tekniskt kunnande.
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
