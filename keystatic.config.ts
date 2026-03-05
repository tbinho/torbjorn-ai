import { config, fields, collection } from '@keystatic/core'

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    processer: collection({
      label: 'Processer',
      slugField: 'titel',
      path: 'content/processer/*',
      format: { contentField: 'content' },
      schema: {
        titel: fields.slug({ name: { label: 'Titel' } }),
        sammanfattning: fields.text({
          label: 'Sammanfattning',
          multiline: true,
          description: 'Kort beskrivning som visas i listvy',
        }),
        kluster: fields.select({
          label: 'Ämneskluster',
          options: [
            { label: 'Tracking, data & analys', value: 'tracking-data-analys' },
            { label: 'Content & kreativ produktion', value: 'content-kreativ-produktion' },
            { label: 'Automation & arbetsflöden', value: 'automation-arbetsfloden' },
            { label: 'Beslutsstöd & prioritering', value: 'beslutsstod-prioritering' },
            { label: 'Företagsbyggande med AI', value: 'foretagsbyggande-ai' },
          ],
          defaultValue: 'tracking-data-analys',
        }),
        status: fields.select({
          label: 'Status',
          options: [
            { label: 'Aktiv', value: 'aktiv' },
            { label: 'Parkerad', value: 'parkerad' },
            { label: 'Avslutad', value: 'avslutad' },
          ],
          defaultValue: 'aktiv',
        }),
        skapad: fields.date({ label: 'Skapad' }),
        uppdaterad: fields.date({ label: 'Senast uppdaterad' }),
        content: fields.markdoc({
          label: 'Innehåll',
          description: 'Processens fullständiga innehåll',
        }),
      },
    }),
  },
})
