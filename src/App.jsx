import { useEffect, useState } from 'react'
import Logo from './components/Logo.jsx'
import { projects, statusLabel, INSTAGRAM_URL } from './projects.js'

// Offizielles Instagram-Profil-Embed. Es wird erst nach Klick geladen, damit
// ohne Einwilligung keine Daten an Meta gehen. Die Wahl merkt sich der Browser.
const INSTA_CONSENT_KEY = 'insta-consent'
const instaEmbed = `<blockquote class="instagram-media" data-instgrm-permalink="${INSTAGRAM_URL}" data-instgrm-version="14"></blockquote>`

function readInstaConsent() {
  try {
    return localStorage.getItem(INSTA_CONSENT_KEY) === '1'
  } catch {
    return false
  }
}

function InstaFeed() {
  const [consent, setConsent] = useState(readInstaConsent)

  useEffect(() => {
    if (!consent) return
    if (window.instgrm) {
      window.instgrm.Embeds.process()
    } else {
      const script = document.createElement('script')
      script.src = 'https://www.instagram.com/embed.js'
      script.async = true
      document.body.appendChild(script)
    }
  }, [consent])

  function accept() {
    try {
      localStorage.setItem(INSTA_CONSENT_KEY, '1')
    } catch {
      // ohne Speicher gilt die Einwilligung nur für diesen Besuch
    }
    setConsent(true)
  }

  if (consent) return <div className="insta__embed" dangerouslySetInnerHTML={{ __html: instaEmbed }} />
  return (
    <div className="insta__consent">
      <p>Beim Laden des Feeds werden Daten an Instagram (Meta) übertragen.</p>
      <button type="button" className="button" onClick={accept}>
        Instagram-Feed laden
      </button>
    </div>
  )
}

function Media({ src, alt, hint, className = '', dark = false }) {
  if (src) return <img className={`media ${className}`} src={src} alt={alt} loading="lazy" />
  return (
    <div className={`media placeholder ${dark ? 'placeholder--dark' : ''} ${className}`} aria-hidden="true">
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="9" cy="10" r="1.6" />
        <path d="m21 16-5-5-8 8" />
      </svg>
      {hint && <span>{hint}</span>}
    </div>
  )
}

function Status({ status }) {
  return <span className={`status status--${status}`}>{statusLabel[status]}</span>
}

// Dekoratives Höhenprofil, Leitmotiv der Seite
function ProfileLine({ className }) {
  return (
    <svg className={className} viewBox="0 0 640 60" preserveAspectRatio="none" aria-hidden="true">
      <polyline
        points="0,54 40,50 80,52 120,38 150,42 190,22 220,30 260,12 300,34 340,30 380,44 420,24 460,36 500,16 540,38 580,46 640,50"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

function FeaturedCard({ p }) {
  const external = p.href.startsWith('http')
  return (
    <article className="featured__item">
      <Media src={p.image} alt={p.title} hint={p.imageHint} className="featured__media" />
      <Status status={p.status} />
      <h2 className="featured__title">{p.title}</h2>
      <p className="featured__teaser">{p.teaser}</p>
      {p.href && (
        <a className="button" href={p.href} {...(external ? { target: '_blank', rel: 'noopener' } : {})}>
          {p.cta || 'Ansehen'} →
        </a>
      )}
    </article>
  )
}

function ProjectCard({ p }) {
  const inner = (
    <>
      <Media src={p.image} alt={p.title} hint={p.imageHint} className="card__media" />
      <h3 className="card__title">{p.title}</h3>
      <p className="card__teaser">{p.teaser}</p>
      <Status status={p.status} />
    </>
  )
  if (!p.href) return <article className="card card--static">{inner}</article>
  const external = p.href.startsWith('http')
  return (
    <a className="card" href={p.href} {...(external ? { target: '_blank', rel: 'noopener' } : {})}>
      {inner}
    </a>
  )
}

export default function App() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <>
      <header className="header wrap">
        <a href="/" className="header__logo" aria-label="velominar – Startseite">
          <Logo />
        </a>
        <nav className="nav">
          <a href="#projekte">Projekte</a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener" className="nav__accent">
            Instagram
          </a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <img
            className="hero__media"
            src="/images/hero-2400.webp"
            srcSet="/images/hero-1200.webp 1200w, /images/hero-2400.webp 2400w"
            sizes="100vw"
            alt="Leuchtende Rad-Silhouette als Wandlampe über einem Sideboard"
            fetchPriority="high"
          />
          <div className="hero__text wrap">
            <p className="eyebrow">Werkstatt-Journal</p>
            <h1>
              Gebaut fürs Rad.
              <br />
              <span className="accent">Nicht von der Stange.</span>
            </h1>
            <ProfileLine className="hero__profile" />
          </div>
        </section>

        {featured.length > 0 && (
          <section className="featured wrap" aria-label="Hauptprodukte">
            {featured.map((p) => (
              <FeaturedCard key={p.id} p={p} />
            ))}
          </section>
        )}

        <section id="projekte" className="projects wrap">
          <h2 className="section-title">Weitere Projekte</h2>
          <div className="grid">
            {rest.map((p) => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </div>
        </section>

        <section id="instagram" className="insta wrap">
          <div className="insta__head">
            <h2 className="section-title">@velominar.de</h2>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener">Auf Instagram folgen →</a>
          </div>
          <InstaFeed />
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer__inner">
          <a href="/" className="footer__brand">
            <Logo className="footer__logo" />
            <span>provided by velominar.de</span>
          </a>
          <nav className="footer__links">
            <a href="/impressum.html">Impressum</a>
            <a href="/datenschutz.html">Datenschutz</a>
          </nav>
        </div>
      </footer>
    </>
  )
}
