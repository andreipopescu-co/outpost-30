# Text for the Space Apps project form

Copy each block into the matching field on the team's Project tab.

## Project name

Outpost 30

## High-level summary

Outpost 30 is a browser game where a student commands four astronauts on the Moon or Mars for 30 days. Each day the player reads a power forecast and splits a limited supply of kilowatts between life support, a greenhouse, a radiation shield and a science lab. Dust storms, dark periods, solar storms and equipment failures force real trade-offs, and a debrief at the end explains why the mission succeeded or failed. It addresses the challenge by keeping one authentic engineering trade-off at the centre of a ten-minute game that 9 to 14 year olds can play on any phone or laptop, using published NASA figures for oxygen, water recycling and radiation.

## Link to project demo

https://github.com/andreipopescu-co/outpost-30/blob/main/docs/demo-slides.pdf

## Link to final project

https://github.com/andreipopescu-co/outpost-30

(Playable version: https://andreipopescu-co.github.io/outpost-30/)

## Detailed project description

**What it does.** The player picks a landing site (Shackleton Rim on the Moon or Jezero Crater on Mars) and a rank (Cadet with hints, or Commander). Each day they see the outpost, six gauges (oxygen, water, food, battery, radiation, crew health), a five-day power forecast, and four systems that all want the same power: life support, greenhouse, shield rover, science lab. They set the levels and run the day. A log explains each change in plain language.

**How it teaches trade-offs.** Nothing is free. Science is the purpose of the mission, but the lab needs power and crew time. Shielding has to be built before a solar storm, at the cost of science now. A greenhouse takes days to pay back. Repairs close the lab. The two sites fail in different ways: the Moon punishes late shielding, Mars punishes an empty battery during a dust storm.

**Why it holds attention.** One decision per day, one minute per day, a visible outpost that changes with the choices, and events with a real story attached ("It really happened"). The debrief gives a mission patch, charts of every resource, and discussion questions.

**Classroom use.** A 4-digit mission code reproduces the same storms and events, so a class can play the same mission and compare decisions. No install, no account, no data collected.

**How we built it.** One HTML file with plain JavaScript, CSS and inline SVG. A seeded random generator makes missions reproducible. A headless script plays 2,400 missions with three scripted strategies to check that careless play loses, careful play survives, and gold needs skill.

**What we simplified.** Power comes in whole blocks, the greenhouse is more productive than a real one, and solar storm doses are tuned so that shielding matters within 30 days. The README lists every simplification next to the real figure.

**Next steps.** Translations (Romanian, Spanish), optional live space-weather missions from NASA DONKI, a 500-day Mars mission, and a teacher guide.

## NASA data and resources

- NASA ECLSS reference (oxygen and water needs per astronaut)
- NASA ISS water recovery milestone, 2023 (98% recovery)
- NASA Curiosity rover RAD instrument (0.67 mSv per day on Mars; September 2017 solar storm)
- NASA Opportunity rover (2018 global dust storm) and InSight lander (dust on solar panels)
- NASA Veggie plant growth system
- NASA Fission Surface Power
- NASA Artemis (lunar south pole)
- NASA Human Research Program, space radiation and the 600 mSv career limit
- NASA DONKI space weather database (planned for the next version)

Full links are in the README.

## Space agency partner and other data

- Zhang et al. 2020, Science Advances: lunar surface dose measured by the LND instrument on Chang'e 4 (1.37 mSv per day)
- Google Fonts: Chakra Petch, Atkinson Hyperlegible, JetBrains Mono (Open Font License)

## Use of artificial intelligence

The game code, visual design, in-game text, README and demo slides were generated with Claude (Anthropic) as a coding assistant, directed and reviewed by the team. The outpost illustration is SVG drawn in code. No AI-generated images, audio or video are used, and no NASA logos or branding appear in the project.
