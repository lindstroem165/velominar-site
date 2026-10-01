# velominar.de – Landing Page

Einstiegsseite für velominar.de: Hero, Featured-Projekt (Route Profile Stickr), Projekt-Grid, Instagram-Streifen, Footer mit „provided by velominar.de".

Vite + React, Schriften (Anton, DM Sans) selbst gehostet über `@fontsource`. Es gibt keine Requests an Google Fonts, das ist DSGVO-freundlich.

## Lokal starten

```bash
npm install
npm run dev
```

## Inhalte pflegen

- **Projekte:** Sie stehen in `src/projects.js`. Ein neues Projekt ist ein neuer Eintrag. Mit `featured: true` erscheint es groß oben.
- **Bilder:** Lege sie nach `public/images/` und trage sie als `image: '/images/datei.jpg'` ein. Ohne Bild zeigt die Seite einen Platzhalter mit dem `imageHint`. Das Format ist 4:5 für Karten, 4:3 für Featured und quer für den Hero.
- **Hero-Foto:** Das ist in `src/App.jsx` die `<Media dark className="hero__media" …/>`. Dort ergänzt du `src="/images/hero.jpg"`.
- **Instagram-Feed:** `InstaFeed` in `src/App.jsx` bindet das offizielle Profil-Embed von Instagram ein. Es lädt erst nach Klick auf „Instagram-Feed laden", vorher gehen keine Daten an Meta.
- **Logo:** `src/components/Logo.jsx` enthält das Rad als Pfad und die Wortmarke in Pfade umgewandelt. Die Farbe folgt CSS `color`.

## Deploy

Ein Push auf `main` startet `.github/workflows/deploy.yml`. Der Workflow baut die Seite und lädt `dist/` per SFTP (lftp) in den Webspace-Root. `/profilestickr/` ist ausgeschlossen, und es wird nichts gelöscht.

Folgende Repository-Secrets brauchst du (Settings → Secrets → Actions):

| Secret | Inhalt |
|---|---|
| `SFTP_HOST` | z. B. `access-XXXX.webspace-host.com` |
| `SFTP_USER` | SFTP-Benutzer |
| `SFTP_PASSWORD` | SFTP-Passwort |
| `SFTP_REMOTE_DIR` | optional, Standard `/` |

## Umzug des Route Profile Stickr nach /profilestickr/

Im Repo `lindstroem165/Route-Profile-Sticker` sind vier Änderungen nötig:

1. **`vite.config.js`:** Ergänze `base: '/profilestickr/'`.
2. **Deploy-Workflow:** Setze das Zielverzeichnis auf `/profilestickr/`. Falls der Workflow mit `--delete` auf `/` synchronisiert, musst du das unbedingt ändern. Sonst löscht jeder Stickr-Deploy die Landing Page.
3. **Absolute Pfade im Code:** Prüfe z. B. `fetch('/presets/…')` oder Share-Links mit `location.origin + '/?…'`. Nutze stattdessen `import.meta.env.BASE_URL`.
4. **Reihenfolge:** Deploye zuerst den Stickr nach `/profilestickr/` und danach die Landing Page auf den Root.

Alte Share-Links auf der Root landen automatisch bei `/profilestickr/`. Links mit Query-Parametern leitet `public/.htaccess` weiter, Links mit `#hash` ein kleines Skript in `index.html`.

## Offen

- Impressum und Datenschutz verlinken auf `/impressum.html` und `/datenschutz.html`. Beide Seiten müssen noch angelegt werden.
