'use client'

import { useState } from 'react'

type StepId = 'collect' | 'shape' | 'activate'

type Step = {
  id: StepId
  label: string
  role: string
  system: string
  aiRole: string
}

const STEPS: Step[] = [
  {
    id: 'collect',
    label: '1. Fånga signaler',
    role: 'Tracking & insamling',
    system: 'Analytics, CRM, formulär',
    aiRole: 'Sorterare – lyfter fram relevanta datapunkter',
  },
  {
    id: 'shape',
    label: '2. Forma underlag',
    role: 'Struktur & förståelse',
    system: 'Notion, dokument, dashboards',
    aiRole: 'Analytiker – summerar, jämför, hittar mönster',
  },
  {
    id: 'activate',
    label: '3. Aktivera i arbete',
    role: 'Utförande & automation',
    system: 'Ads, e-post, automation, scripts',
    aiRole: 'Medskapare – genererar, testar, itererar',
  },
]

function getStepAccent(id: StepId) {
  switch (id) {
    case 'collect':
      return 'bg-accent-subtle text-accent'
    case 'shape':
      return 'bg-secondary-subtle text-secondary'
    case 'activate':
      return 'bg-base-subtle text-text-muted'
    default:
      return ''
  }
}

export function SystemFlowPuzzle() {
  const [activeId, setActiveId] = useState<StepId | null>('shape')

  return (
    <div className="bg-white border border-border rounded-2xl p-6 md:p-8 shadow-sm animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-10 mb-8">
        <div className="max-w-md">
          <p className="text-sm uppercase tracking-wide text-text-subtle mb-2">
            SystemFlowPuzzle
          </p>
          <h3 className="text-xl md:text-2xl mb-3">Så rör sig arbetet genom systemen</h3>
          <p className="text-sm md:text-base text-text-muted">
            En förenklad karta över hur data, beslut och utförande hänger ihop. Varje steg kan
            bli en egen process – men pusslet är helheten.
          </p>
        </div>
        <div className="hidden md:flex items-center gap-2 text-xs text-text-subtle">
          <span className="inline-flex h-2 w-2 rounded-full bg-accent" />
          <span>Aktivt steg</span>
          <span className="inline-flex h-2 w-2 rounded-full bg-border-strong ml-4" />
          <span>Övriga steg</span>
        </div>
      </div>

      <div className="grid gap-4 md:gap-6 md:grid-cols-3">
        {STEPS.map((step) => {
          const isActive = step.id === activeId
          return (
            <button
              key={step.id}
              type="button"
              onClick={() => setActiveId(step.id)}
              className={[
                'group text-left rounded-xl border transition-all duration-200 flex flex-col h-full',
                isActive ? 'border-accent shadow-sm bg-base-subtle' : 'border-border bg-white hover:border-border-strong',
              ].join(' ')}
            >
              <div className="flex items-start justify-between px-4 pt-4 pb-3">
                <span
                  className={[
                    'inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium',
                    getStepAccent(step.id),
                  ].join(' ')}
                >
                  {step.label}
                </span>
                <span
                  className={[
                    'ml-3 inline-flex h-6 w-6 items-center justify-center rounded-full border text-[11px]',
                    isActive
                      ? 'border-accent text-accent bg-accent-subtle'
                      : 'border-border text-text-subtle bg-base',
                  ].join(' ')}
                >
                  {step.id === 'collect' ? 'IN' : step.id === 'shape' ? 'Δ' : 'OUT'}
                </span>
              </div>

              <div className="px-4 pb-4 pt-1 flex-1 flex flex-col gap-2 border-t border-dashed border-border/60">
                <div className="text-xs font-medium text-text mb-1">{step.role}</div>
                <div className="text-[13px] text-text-muted leading-relaxed">{step.system}</div>
                <div className="mt-2 rounded-md bg-base-subtle px-3 py-2 text-[12px] text-text-muted">
                  <span className="block text-[11px] uppercase tracking-wide text-text-subtle mb-0.5">
                    AI:s roll här
                  </span>
                  <span>{step.aiRole}</span>
                </div>
              </div>
            </button>
          )
        })}
      </div>

      <div className="mt-6 border-t border-border pt-4">
        <p className="text-xs text-text-subtle">
          Klicka på ett steg för att se hur systemen används där. I mina processer bryter jag ned
          varje ruta till konkret dokumentation.
        </p>
      </div>
    </div>
  )
}

