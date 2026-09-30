// Alle Projekte der Seite. Neues Projekt = neuer Eintrag hier.
//
// status:  'live' | 'prototyp' | 'konzept'
// image:   Pfad unter /public, z. B. '/images/lampe.jpg'. Leer lassen → Platzhalter.
// imageHint: Was auf das Foto soll (wird im Platzhalter angezeigt).
// featured: true → erscheint groß oben statt im Grid.

export const projects = [
  {
    id: 'profilestickr',
    title: 'Route Profile Stickr',
    teaser: 'GPX hochladen, Höhenprofil gestalten, als Sticker aufs Oberrohr.',
    status: 'live',
    href: '/profilestickr/',
    cta: 'Zum Generator',
    image: '/images/profilestickr.png',
    imageHint: 'Sticker auf dem Oberrohr, Detailaufnahme',
    featured: true,
  },
  {
    id: 'designerlampe',
    title: 'Designerlampe',
    teaser: 'DIY-Fahrradlicht mit Charakter statt Plastikklotz.',
    status: 'prototyp',
    href: 'https://www.instagram.com/velominar.de/',
    image: '',
    imageHint: 'Lampe am Lenker',
  },
  {
    id: 'bike-computer',
    title: 'Bike Computer',
    teaser: 'Farbdisplay im Querformat, gebaut für den Lenker.',
    status: 'konzept',
    href: '',
    image: '',
    imageHint: 'Rendering oder Skizze',
  },
  {
    id: 'felgenaufkleber',
    title: 'Felgenaufkleber',
    teaser: 'Grafik für die Laufräder, passend zum Rad.',
    status: 'prototyp',
    href: 'https://www.instagram.com/velominar.de/',
    image: '',
    imageHint: 'Felge im Detail',
  },
  {
    id: 'tischaufsteller',
    title: 'Tischaufsteller',
    teaser: 'Aus Lampen-Reststücken wird Deko für den Schreibtisch.',
    status: 'prototyp',
    href: 'https://www.instagram.com/velominar.de/',
    image: '',
    imageHint: 'Aufsteller auf dem Schreibtisch',
  },
]

export const statusLabel = {
  live: 'Live',
  prototyp: 'Prototyp',
  konzept: 'Konzept',
}

export const INSTAGRAM_URL = 'https://www.instagram.com/velominar.de/'
