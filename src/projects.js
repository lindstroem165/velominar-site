// Alle Projekte der Seite. Neues Projekt = neuer Eintrag hier.
//
// status:  'live' | 'prototyp' | 'konzept' | 'bald'
// image:   Pfad unter /public, z. B. '/images/lampe.jpg'. Leer lassen → Platzhalter.
// imageHint: Was auf das Foto soll (wird im Platzhalter angezeigt).
// featured: true → erscheint groß oben statt im Grid (gedacht für drei Hauptprodukte).

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
    teaser: 'Die Liebe zum Rad im Wohnzimmer: Rennrad-Silhouette als Wandlampe, clean und stylisch.',
    status: 'live',
    href: 'https://www.instagram.com/velominar.de/',
    cta: 'Auf Instagram ansehen',
    image: '/images/designerlampe.webp',
    imageHint: 'Lampe an der Wand',
    featured: true,
  },
  {
    id: 'cap',
    title: 'Cap',
    teaser: 'Die Velominar Cap',
    status: 'live',
    href: '',
    image: '/images/cap.webp',
    imageHint: 'Cap mit Rad-Logo',
    featured: true,
  },
  {
    id: 'bike-computer',
    title: 'Bike Computer',
    teaser: 'Farbdisplay im Querformat, gebaut für den Lenker.',
    status: 'konzept',
    href: '',
    image: '/images/bikepc.webp',
    imageHint: 'Rendering oder Skizze',
  },
  {
    id: 'felgenaufkleber',
    title: 'Felgenaufkleber',
    teaser: 'Grafik für die Laufräder, passend zum Rad.',
    status: 'prototyp',
    href: 'https://www.instagram.com/velominar.de/',
    image: '/images/felgenaufkleber.webp',
    imageHint: 'Felge im Detail',
  },
  {
    id: 'tischaufsteller',
    title: 'Tischaufsteller',
    teaser: 'Aus Lampen-Reststücken wird Deko für den Schreibtisch.',
    status: 'prototyp',
    href: 'https://www.instagram.com/velominar.de/',
    image: '/images/tischaufsteller.webp',
    imageHint: 'Aufsteller auf dem Schreibtisch',
  },
]

export const statusLabel = {
  live: 'Live',
  prototyp: 'Prototyp',
  konzept: 'Konzept',
  bald: 'Demnächst',
}

export const INSTAGRAM_URL = 'https://www.instagram.com/velominar.de/'
