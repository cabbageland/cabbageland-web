# Cabbageland Web

A first-pass **Cabbageland homepage** built as a small interactive world instead of a flat landing page.

It is inspired by the ClawLibrary spatial-interface idea and grounded in the uploaded Cabbageland concept art:
- giant cabbage / waterfall landmark at center
- escape-the-void kiosk
- nerd's farm research lab
- compose boredom music hut
- my-world-in-XD gallery
- greenhouse arches, domes, fields, and river paths

## What it is

This version is a lightweight browser experience built with **Vite + TypeScript**.

Instead of using a heavy game stack immediately, the first implementation composes the scene with DOM + CSS:
- pixel-ish framing
- stylized landmark buildings
- layered landscape elements
- hover/click hotspots
- a side dossier panel that updates per landmark

That makes it fast to ship, easy to edit, and a decent foundation for later upgrades.

## Run locally

```bash
npm install
npm run dev
```

Then open the local Vite URL.

## Build

```bash
npm run build
npm run preview
```

## Notes

This is intentionally a **prototype-quality first product**, not final pixel art.

What is real already:
- the spatial homepage structure
- landmark interaction model
- visual language and palette derived from the concept art
- architecture that can grow into a larger interactive world

What I would likely do next:
1. replace simplified CSS landmarks with real sprite assets / sheets
2. add panning / room transitions / camera behavior
3. wire landmarks to real routes or content sources
4. deepen the ambient world with sound, hover animations, and characters
5. decide whether to stay DOM/CSS-driven or migrate to Phaser for richer scene logic
