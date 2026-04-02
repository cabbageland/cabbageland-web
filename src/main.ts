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
  district: string
  mood: string
  description: string
  details: string[]
}

const landmarks: Landmark[] = [
  {
    id: 'reading-room',
    name: 'Reading Room',
    sign: 'reading room',
    x: 10,
    y: 32,
    w: 18,
    h: 18,
    accent: '#d2c18c',
    district: 'Northwest stacks',
    mood: 'quiet lantern windows and laddered shelves',
    description:
      'A library lodge cut into the upper ridge, where essays, links, and dispatches feel like rooms you can enter.',
    details: [
      'This is the clearest clawlibrary signal in the scene: a structure with gravity, warmth, and a reason to explore.',
      'Its perch above the valley makes it read as a knowledge district instead of a floating navigation card.',
      'A good follow-on route is posts, notes, reading lists, experiments, and other browsable cabinets.'
    ]
  },
  {
    id: 'story-hut',
    name: 'Music and Story Hut',
    sign: 'compose boredom',
    x: 11,
    y: 67,
    w: 18,
    h: 16,
    accent: '#e08d47',
    district: 'Southwest creek bend',
    mood: 'fireside audio, reeds, and gramophone glow',
    description:
      'A tucked-away hut for songs, spoken fragments, ambient loops, and story objects that make the village feel inhabited.',
    details: [
      'Placing it in the lower creek bend makes it feel discovered rather than merely listed.',
      'The warmer palette and circular roof silhouette separate it from the bookish and technical districts.',
      'This zone can eventually hold soundtrack loops, voice notes, fiction snippets, and small narrative toys.'
    ]
  },
  {
    id: 'monument',
    name: 'Central Cabbage Monument',
    sign: 'cabbage core',
    x: 39,
    y: 30,
    w: 23,
    h: 24,
    accent: '#98ff8e',
    district: 'Valley heart',
    mood: 'terraced stone, mist, and falling water',
    description:
      'The identity anchor of Cabbageland: a ceremonial cabbage fountain where the whole map converges.',
    details: [
      'This is the scene spine. The river, paths, and sightlines should all make the monument feel central and inevitable.',
      'A monument works better than a normal hero because it gives the homepage memory and orientation.',
      'The water and glow imply life, ecology, and ongoing activity even when the page is still.'
    ]
  },
  {
    id: 'nerd-farm',
    name: "Nerd's Farm and Lab",
    sign: "nerd's farm",
    x: 66,
    y: 44,
    w: 21,
    h: 20,
    accent: '#8dcde3',
    district: 'Eastern glassworks',
    mood: 'greenhouse domes, monitors, and cultivated prototypes',
    description:
      'A research quarter for code, systems, datasets, technical writeups, and strange cultivated projects.',
    details: [
      'This needs to feel infrastructural, not decorative: the place where things are measured, grown, and iterated on.',
      'The greenhouse language ties engineering work to cultivation instead of generic dashboard aesthetics.',
      'A natural extension is repos, experiments, dashboards, field notes, and lab notebooks.'
    ]
  },
  {
    id: 'gallery',
    name: 'Gallery Ridge',
    sign: 'my world in xd',
    x: 80,
    y: 68,
    w: 16,
    h: 15,
    accent: '#ffcf95',
    district: 'Southeast overlook',
    mood: 'framed windows, banners, and evening light',
    description:
      'A ridge-top gallery for visual work, interfaces, concept art, worlds, and finished weirdness.',
    details: [
      'Its raised overlook makes the district feel curated and public-facing rather than like another utility box.',
      'This prevents the homepage from collapsing into pure tech theming by giving visual work equal spatial presence.',
      'A later version could show rotating frames, exhibit posters, and preview windows from featured projects.'
    ]
  }
]

const worldLayers = `
  <div class="sky-glow"></div>
  <div class="sun-disc"></div>
  <div class="sun-halo"></div>
  <div class="cloud-bank cloud-bank-a"></div>
  <div class="cloud-bank cloud-bank-b"></div>
  <div class="mountain-range mountain-back"></div>
  <div class="mountain-range mountain-mid"></div>
  <div class="forest-band forest-back"></div>
  <div class="forest-band forest-mid"></div>
  <div class="mist mist-a"></div>
  <div class="mist mist-b"></div>
  <div class="ridge ridge-left"></div>
  <div class="ridge ridge-right"></div>
  <div class="meadow meadow-top"></div>
  <div class="meadow meadow-bottom"></div>
  <div class="terrace terrace-left"></div>
  <div class="terrace terrace-center"></div>
  <div class="terrace terrace-right"></div>
  <div class="bridge bridge-main"></div>
  <div class="bridge bridge-lab"></div>
  <div class="river river-spine"></div>
  <div class="river river-fork-left"></div>
  <div class="river river-fork-right"></div>
  <div class="river-shine river-shine-a"></div>
  <div class="river-shine river-shine-b"></div>
  <div class="path path-reading"></div>
  <div class="path path-story"></div>
  <div class="path path-lab"></div>
  <div class="path path-gallery"></div>
  <div class="field field-lab"></div>
  <div class="field field-gallery"></div>
  <div class="cabbage-patch patch-lab"></div>
  <div class="cabbage-patch patch-valley"></div>
  <div class="reed-bed reed-bed-left"></div>
  <div class="reed-bed reed-bed-right"></div>
  <div class="lantern-post lantern-post-a"></div>
  <div class="lantern-post lantern-post-b"></div>
  <div class="lantern-post lantern-post-c"></div>
  <div class="tree-cluster tree-cluster-left"></div>
  <div class="tree-cluster tree-cluster-right"></div>
  <div class="tree-cluster tree-cluster-front"></div>
  <div class="bird bird-a"></div>
  <div class="bird bird-b"></div>
  <div class="bird bird-c"></div>
`

const landmarksMarkup = `
  <div class="structure reading-room">
    <div class="roof"></div>
    <div class="body"></div>
    <div class="window window-a"></div>
    <div class="window window-b"></div>
    <div class="window window-c"></div>
    <div class="door"></div>
    <div class="chimney"></div>
    <div class="annex"></div>
  </div>

  <div class="structure story-hut">
    <div class="roof"></div>
    <div class="body"></div>
    <div class="door"></div>
    <div class="round-window"></div>
    <div class="speaker-horn"></div>
    <div class="porch"></div>
  </div>

  <div class="structure monument-structure">
    <div class="plinth"></div>
    <div class="cabbage"></div>
    <div class="leaf leaf-left"></div>
    <div class="leaf leaf-right"></div>
    <div class="cascade cascade-left"></div>
    <div class="cascade cascade-center"></div>
    <div class="cascade cascade-right"></div>
    <div class="pool"></div>
    <div class="mist-ring"></div>
  </div>

  <div class="structure nerd-farm">
    <div class="greenhouse greenhouse-main"></div>
    <div class="greenhouse greenhouse-side"></div>
    <div class="lab-tower"></div>
    <div class="monitor-window monitor-a"></div>
    <div class="monitor-window monitor-b"></div>
    <div class="solar solar-a"></div>
    <div class="solar solar-b"></div>
  </div>

  <div class="structure gallery-ridge">
    <div class="roof"></div>
    <div class="body"></div>
    <div class="window window-a"></div>
    <div class="window window-b"></div>
    <div class="banner banner-a"></div>
    <div class="banner banner-b"></div>
    <div class="stairs"></div>
  </div>
`

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <div class="shell">
    <header class="topbar">
      <div class="topbar-copy">
        <div class="eyebrow">Cabbageland</div>
        <h1>explorable village homepage</h1>
        <p>
          A clawlibrary-inspired valley where each landmark reads like a place with a purpose, not a card in a grid.
        </p>
      </div>

      <div class="topbar-hud">
        <div class="hud-pill">
          <span class="hud-label">Season</span>
          <strong>Sproutfall</strong>
        </div>
        <div class="hud-pill">
          <span class="hud-label">Waterways</span>
          <strong>Calibrated</strong>
        </div>
        <div class="hud-pill">
          <span class="hud-label">Visitors</span>
          <strong>Welcome</strong>
        </div>
      </div>
    </header>

    <main class="world-frame" aria-label="Interactive Cabbageland world map">
      <section class="world panel-frame">
        ${worldLayers}
        ${landmarksMarkup}

        <div class="world-ui">
          <div class="world-badge">
            <span class="world-badge-label">Village atlas</span>
            <strong>Cabbageland valley</strong>
          </div>
          <div class="world-legend">
            <span><i class="legend-dot lore"></i> lore</span>
            <span><i class="legend-dot sound"></i> sound</span>
            <span><i class="legend-dot build"></i> build</span>
            <span><i class="legend-dot art"></i> art</span>
          </div>
        </div>

        <aside class="dossier panel-frame" aria-live="polite">
          <div class="dossier-kicker">Landmark dossier</div>
          <h2 id="panel-title"></h2>
          <p class="dossier-meta">
            <span id="panel-district"></span>
            <span class="meta-sep">/</span>
            <span id="panel-mood"></span>
          </p>
          <p id="panel-description"></p>
          <ul id="panel-details"></ul>
          <div class="panel-footer">
            <span class="status-led" aria-hidden="true"></span>
            <span>Hover or tap a landmark to inspect the village.</span>
          </div>
        </aside>

        ${landmarks
          .map(
            (landmark) => `
              <button
                class="landmark"
                data-landmark="${landmark.id}"
                style="left:${landmark.x}%; top:${landmark.y}%; width:${landmark.w}%; height:${landmark.h}%; --accent:${landmark.accent};"
                aria-label="Open ${landmark.name} details"
              >
                <span class="landmark-ring"></span>
                <span class="sign">${landmark.sign}</span>
                <span class="pulse"></span>
              </button>
            `
          )
          .join('')}
      </section>

      <section class="lower-grid">
        <article class="info-card panel-frame">
          <span class="card-kicker">Map logic</span>
          <h3>Spatial hierarchy first</h3>
          <p>
            The monument now anchors the valley, districts sit on distinct elevations, and the river and bridges explain
            how the world hangs together.
          </p>
        </article>

        <article class="info-card panel-frame">
          <span class="card-kicker">Interaction model</span>
          <h3>Hotspots as wayfinding</h3>
          <p>
            Hotspots are treated like survey markers inside the scene, while the dossier behaves like a field notebook
            pinned onto the map.
          </p>
        </article>

        <article class="info-card panel-frame">
          <span class="card-kicker">Future growth</span>
          <h3>Ready for real destinations</h3>
          <p>
            Each district can map cleanly to routes, content collections, or richer room transitions without replacing
            the current lightweight Vite and CSS approach.
          </p>
        </article>
      </section>
    </main>
  </div>
`

const title = document.querySelector<HTMLHeadingElement>('#panel-title')!
const district = document.querySelector<HTMLSpanElement>('#panel-district')!
const mood = document.querySelector<HTMLSpanElement>('#panel-mood')!
const description = document.querySelector<HTMLParagraphElement>('#panel-description')!
const details = document.querySelector<HTMLUListElement>('#panel-details')!
const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>('.landmark'))

function renderLandmark(id: string) {
  const landmark = landmarks.find((item) => item.id === id)
  if (!landmark) return

  title.textContent = landmark.name
  district.textContent = landmark.district
  mood.textContent = landmark.mood
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

renderLandmark('monument')
