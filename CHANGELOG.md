# Changelog

All notable changes to this project are documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), versions follow [Semantic Versioning](https://semver.org/).

## [Unreleased]

## [0.1.0] - 2026-10-10

First version of TabGroove – "Two tabs. Your mix."

### Added
- Chrome extension (Manifest V3) with a side panel: two normal YouTube tabs act as deck A and deck B, chosen in the panel (suggested automatically when two YouTube tabs are open).
- Crossfader with an equal-power curve; fades run on the audio clock inside the tabs, so they stay smooth.
- "Fade to A / Fade to B" buttons with 4/8/12/16 s duration; the incoming deck starts when the fade begins, the outgoing deck can be paused at the end.
- Automatic fade at the end of a song, with a countdown on the deck and an optional "skip outro" (5–30 s earlier).
- A new video opened in the silent deck is stopped at its start, ready to be faded in.
- Match loudness (on by default): quiet videos are raised to YouTube's loudness target (up to +6 dB) using the loudness YouTube reports; a limiter prevents clipping while a video is raised. The boost is shown on the deck.
- Deck cards with thumbnail, title, time left, progress bar with seek, play/pause and a button to jump to the tab; master volume; keyboard control (Left/Right, F).
- Settings grouped into Appearance (light/dark/system theme, language, colours of deck A and B), Playback (pause outgoing deck, match loudness, skip outro) and About (what's new, quick guide, links, reset all settings, version). Changes are previewed and kept with Save.
- Interface in English (default), German, French, Spanish and Italian.
- Quick guide on first start; after an update a dot on the gear points to "What's new".
- Warnings on the deck when the browser keeps a tab muted or when a tab needs a reload after an update.
- Fader position and deck assignment survive closing and reopening the side panel; a tab removed from a deck gets its normal volume back.
- Note in the settings: TabGroove is free and stays free – no ads, no tracking, no subscription.
