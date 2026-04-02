import './style.css'

type Landmark = {
  id: string
  name: string
  sign: string
  x: number
  y: number
  w: number
  h: number
  accent: string
  description: string
  details: string[]
}

const landmarks: Landmark[] = [
  {
    id: 'void',
    name: 'Escape the Void',
    sign: 'escape-the-void',
    x: 11,
    y: 39,
    w: 16,
    h: 16,
    accent: 'var(--wood)',
    description:
      'A newsstand-kiosk for dispatches, links, notes, and small portal-like experiments.',
    details: [
      'Looks like a cozy field library, but it works like a launcher for essays, side quests, and weird little prototypes.',
      'Good homepage pattern: each building is not just a card — it is a physical access point into a specific kind of work.',
      'Could become a real content node for posts, project logs, and experiments.'
    ]
  },
  {
    id: 'compose',
    name: 'Compose Boredom',
    sign: 'compose boredom',
    x: 4,
    y: 62,
    w: 14,
    h: 14,
    accent: 'var(--gramophone)',
    description:
      'A music hut for sound, atmosphere, stories, and ambient artifacts from the world.',
    details: [
      'The gramophone corner gives the homepage a personality anchor — not just utility, but culture.',
      'Could host soundtrack loops, spoken notes, or little story objects that make Cabbageland feel inhabited.',
      'This is the anti-corporate section: delight as infrastructure.'
    ]
  },
  {
    id: 'farm',
    name: "Nerd's Farm",
    sign: "nerd's farm",
    x: 63,
    y: 45,
    w: 16,
    h: 15,
    accent: 'var(--monitor)',
    description:
      'A research-lab landmark for experiments, code systems, datasets, and growing technical projects.',
    details: [
      'This is the strongest “builders live here” signal in the scene.',
      'The hydro-lab feeling maps nicely to engineering work: cultivation, instrumentation, iteration, strange crops.',
      'Could naturally route to repos, technical notes, demos, and lab notebooks.'
    ]
  },
  {
    id: 'gallery',
    name: 'My World in XD',
    sign: 'my-world-in-XD',
    x: 80,
    y: 60,
    w: 15,
    h: 13,
    accent: 'var(--gallery)',
    description:
      'A gallery node for visual work, concept art, interfaces, and finished weirdness.',
    details: [
      'Important because it keeps the homepage from becoming pure tech theming.',
      'Makes room for art, worlds, mockups, and visual experiments as first-class citizens.',
      'Could later support framed previews, rotating featured work, and enterable exhibits.'
    ]
  },
  {
    id: 'landmark',
    name: 'Cabbage Waterfall',
    sign: 'cabbage core',
    x: 40,
    y: 17,
    w: 22,
    h: 26,
    accent: 'var(--cabbage-glow)',
    description:
      'The giant cabbage fountain at the center of the world: identity, ecology, and the whole vibe concentrated into one landmark.',
    details: [
      'This is the main orientation device. Everything radiates out from it.',
      'As a homepage pattern, a central monument is better than a dead hero banner because it gives the world a memorable spine.',
      'The waterfall also gives motion, sound imagination, and a sense that the place is alive.'
    ]
  }
]

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <div class="shell">
    <header class="topbar panel pixel-frame">
      <div class="stat-badge"><span class="coin"></span><strong>COINS:</strong> 1050</div>
      <div class="brand">
        <span class="brand-kicker">CABBAGELAND</span>
        <h1>world homepage</h1>
      </div>
      <div class="stat-badge water"><span class="drop"></span><strong>WATER:</strong> 80%</div>
    </header>

    <main class="world-wrap">
      <section class="world panel pixel-frame" aria-label="Interactive Cabbageland world map">
        <div class="sky"></div>
        <div class="sun-arches arch-left"></div>
        <div class="sun-arches arch-right"></div>
        <div class="tree tree-left"></div>
        <div class="tree tree-right"></div>
        <div class="mountains"></div>
        <div class="river river-main"></div>
        <div class="river river-branch river-branch-a"></div>
        <div class="river river-branch river-branch-b"></div>
        <div class="footpath footpath-a"></div>
        <div class="footpath footpath-b"></div>
        <div class="field field-a"></div>
        <div class="field field-b"></div>
        <div class="field field-c"></div>
        <div class="cabbage-patch patch-a"></div>
        <div class="cabbage-patch patch-b"></div>
        <div class="cabbage-patch patch-c"></div>
        <div class="cabbage-patch patch-d"></div>
        <div class="dome dome-left"></div>
        <div class="dome dome-right"></div>
        <div class="dome dome-right-small"></div>
        <div class="bird bird-a"></div>
        <div class="bird bird-b"></div>
        <div class="bird bird-c"></div>
        <div class="farmer" aria-hidden="true">
          <div class="hat"></div>
          <div class="head"></div>
          <div class="body"></div>
          <div class="arm arm-left"></div>
          <div class="arm arm-right"></div>
          <div class="leg leg-left"></div>
          <div class="leg leg-right"></div>
          <div class="bucket"></div>
        </div>
        <div class="landmark-structure kiosk-building"></div>
        <div class="landmark-structure auditorium-building"></div>
        <div class="landmark-structure lab-building"></div>
        <div class="landmark-structure gallery-building"></div>
        <div class="landmark-structure cabbage-monument">
          <div class="cabbage-head"></div>
          <div class="waterfall waterfall-left"></div>
          <div class="waterfall waterfall-mid"></div>
          <div class="waterfall waterfall-right"></div>
          <div class="basin"></div>
        </div>

        ${landmarks
          .map(
            (landmark) => `
          <button
            class="landmark ${landmark.id === 'landmark' ? 'monument-hotspot' : ''}"
            data-landmark="${landmark.id}"
            style="left:${landmark.x}%; top:${landmark.y}%; width:${landmark.w}%; height:${landmark.h}%; --accent:${landmark.accent};"
            aria-label="Open ${landmark.name} details"
          >
            <span class="sign">${landmark.sign}</span>
          </button>
        `
          )
          .join('')}

        <div class="hud hud-day pixel-frame"><strong>DAY</strong><span>12</span></div>
      </section>

      <aside class="info panel pixel-frame" aria-live="polite">
        <div class="info-kicker">LANDMARK DOSSIER</div>
        <h2 id="panel-title">Cabbage Waterfall</h2>
        <p id="panel-description">Select a place in the world to inspect how the homepage is thinking about it.</p>
        <ul id="panel-details"></ul>
        <div class="panel-footer">
          <span class="status-led"></span>
          <span>clawlibrary-ish spatial homepage prototype for cabbageland</span>
        </div>
      </aside>
    </main>

    <section class="notes-grid">
      <article class="note-card panel pixel-frame">
        <h3>What this is</h3>
        <p>
          A browser homepage built as a tiny explorable world instead of a flat hero section. The layout borrows the
          concept art's greenhouse arches, cabbage ecology, and little domain-buildings.
        </p>
      </article>
      <article class="note-card panel pixel-frame">
        <h3>Implementation style</h3>
        <p>
          Lightweight Vite + TypeScript + DOM/CSS composition. No external art pipeline yet — the scene is constructed
          from stylized blocks, gradients, shadows, and chunky pixel framing so it ships fast but stays extensible.
        </p>
      </article>
      <article class="note-card panel pixel-frame">
        <h3>Next upgrades</h3>
        <p>
          Replace simplified landmarks with real sprite sheets, add camera panning / room transitions, and wire each
          landmark to live project content or routes.
        </p>
      </article>
    </section>
  </div>
`

const title = document.querySelector<HTMLHeadingElement>('#panel-title')!
const description = document.querySelector<HTMLParagraphElement>('#panel-description')!
const details = document.querySelector<HTMLUListElement>('#panel-details')!
const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>('.landmark'))

function renderLandmark(id: string) {
  const landmark = landmarks.find((item) => item.id === id)
  if (!landmark) return

  title.textContent = landmark.name
  description.textContent = landmark.description
  details.innerHTML = landmark.details.map((item) => `<li>${item}</li>`).join('')

  buttons.forEach((button) => {
    const active = button.dataset.landmark === id
    button.classList.toggle('active', active)
    button.setAttribute('aria-pressed', String(active))
  })
}

buttons.forEach((button) => {
  const id = button.dataset.landmark
  if (!id) return

  button.addEventListener('mouseenter', () => renderLandmark(id))
  button.addEventListener('focus', () => renderLandmark(id))
  button.addEventListener('click', () => renderLandmark(id))
})

renderLandmark('landmark')
