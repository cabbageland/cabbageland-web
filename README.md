# Cabbageland Web

A stronger **Cabbageland homepage** built as an explorable village valley instead of a flat landing page.

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
- hand-built valley composition and terrain layers
- district-specific landmark architecture
- atmospheric mountains, waterways, bridges, and terraces
- hover/click hotspots as in-world survey markers
- an integrated dossier panel that updates per landmark

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

This is intentionally a **lightweight authored prototype**, not a full game scene or sprite pipeline yet.

What is real already:
- the world-map homepage structure
- landmark interaction and dossier model
- stronger visual hierarchy, silhouette work, and atmospheric framing
- architecture that can grow into a larger interactive world

What I would likely do next:
1. replace simplified CSS landmarks with real sprite assets / sheets
2. add panning / room transitions / camera behavior
3. wire landmarks to real routes or content sources
4. deepen the ambient world with sound, hover animations, and characters
5. decide whether to stay DOM/CSS-driven or migrate to Phaser for richer scene logic
