<div align="center">

<img src="docs/img/logo.png" width="140" alt="TabGroove logo">

# TabGroove

### Two tabs. Your mix.

**A free Chrome extension that crossfades between two YouTube tabs like a DJ –<br>by hand or automatically at the end of a song.**

![Free forever](https://img.shields.io/badge/price-free%20forever-2ea44f)
![No tracking](https://img.shields.io/badge/tracking-none-2ea44f)
![Chrome](https://img.shields.io/badge/Chrome-116%2B-4285F4?logo=googlechrome&logoColor=white)
![Manifest V3](https://img.shields.io/badge/Manifest-V3-555)
![License MIT](https://img.shields.io/badge/license-MIT-blue)

[Deutsch](README.de.md) · [Why TabGroove?](#why-tabgroove) · [Install](#install) · [Usage](#usage) · [Report a bug](#found-a-bug)

</div>

---

> ❤️ **TabGroove is free – and it will stay free.** No ads, no tracking, no subscription, no account. If you like it, tell your friends.

## What is TabGroove?

You love listening to music on YouTube – the versions, live recordings and remixes you can't find anywhere else – and you have YouTube Premium. But switching songs means hard cuts, silence or juggling two tabs and their volume sliders.

**TabGroove turns two ordinary YouTube tabs into deck A and deck B of a small DJ mixer.** A side panel next to YouTube gives you a crossfader and fade buttons. One song keeps playing while you search for the next one in the other tab – and when you are ready, the music flows smoothly from one song into the next.

<div align="center">
<img src="docs/img/panel-dark.png" width="300" alt="TabGroove side panel, dark theme">
&nbsp;&nbsp;
<img src="docs/img/panel-light.png" width="300" alt="TabGroove side panel, light theme">
</div>

## Why TabGroove?

What changes compared to using two YouTube tabs by hand:

| | Two tabs by hand | With TabGroove |
|---|---|---|
| **Changing songs** | Pause one, play the other – hard cut or silence | Smooth crossfade with an equal-power curve |
| **Timing** | Click at the right moment in two places | One click, or fully automatic at the end of a song |
| **Preparing the next song** | It starts playing the moment you click it | It waits at 0:00 in the silent deck until you fade it in |
| **Outros** | Long video outros play to the end | Optionally skipped by the automatic fade |
| **Loudness** | Quiet uploads stay quieter than others | Quiet videos are raised to YouTube's loudness target |
| **Overview** | Jump between tabs to see what is playing | Both decks with title, time left and progress in one panel |
| **Your YouTube** | ✔ | ✔ Same tabs, same search, same login – YouTube Premium keeps working |

## Features

- **Two decks, real YouTube.** Each deck is a normal YouTube tab with its own search, playlists and your login.
- **Crossfader and fade buttons.** Fade by hand, or press *Fade to A* / *Fade to B* (4, 8, 12 or 16 seconds). The incoming deck starts by itself, the outgoing one is paused at the end.
- **Automatic fade at the end of a song.** Switch it on and TabGroove fades into the song waiting on the other deck shortly before the current one ends. A countdown shows when it will happen.
- **Skip outro.** Start the automatic fade 5–30 seconds earlier for videos with long outros or end screens.
- **Ready-to-go next song.** A video you open in the silent deck is stopped at its beginning, so it is ready to be faded in.
- **Match loudness.** YouTube lowers videos that are too loud but leaves quiet ones as they are. TabGroove raises quiet videos to the same level (up to +6 dB, with a limiter that prevents clipping).
- **Your look.** Light, dark or system theme and your own colours for deck A and B.
- **Five languages.** English (default), German, French, Spanish and Italian.
- **Keyboard.** `←` / `→` move the fader, `F` fades to the other side.
- **Quick guide and "What's new"** right inside the extension.

No EQ, no effects, no beat matching – TabGroove does one thing: the fade.

## Install

TabGroove is not in the Chrome Web Store yet. You install it as an "unpacked extension" – it takes about a minute.

**Requirements:** Google Chrome 116 or newer on Windows, macOS or Linux. Other Chromium-based browsers may work but are not tested.

1. **Download** the latest `TabGroove-x.y.z.zip` from the [Releases](https://github.com/rofldark/tabgroove/releases) page<br>
   (or click **Code → Download ZIP** on this page, or clone the repository).
2. **Unzip** it to a folder that stays where it is, for example `Documents\TabGroove`.<br>
   Chrome loads the extension from this folder – do not delete or move it later.
3. Open **`chrome://extensions`** in the address bar.
4. Switch on **Developer mode** (top right).
5. Click **Load unpacked** and select the folder that contains `manifest.json`<br>
   (the unzipped release folder, or the `extension` folder if you downloaded the whole repository).
6. **Pin TabGroove:** click the puzzle icon in the toolbar and pin TabGroove, so the icon is always visible.
7. Click the **TabGroove icon** – the side panel opens and shows a short quick guide.

### Update

1. Download the new version and replace the files in your TabGroove folder.
2. On `chrome://extensions`, click the **reload** arrow on the TabGroove card.
3. Reload your open YouTube tabs once (the panel reminds you if needed).

Your settings are kept.

### Uninstall

On `chrome://extensions`, click **Remove** on the TabGroove card. Then you can delete the folder.

## Usage

1. Open **two YouTube tabs** and start a song in each.
2. Click the **TabGroove icon**. In the side panel, choose the tabs for **deck A** and **deck B** – with two YouTube tabs open they are picked automatically.
3. Listen to deck A. In the other tab, **search for the next song** and click it – it waits at the start.
4. When you are ready, press **Fade to B** (or press `F`). Or switch on **Fade automatically at the end of a song** and lean back.
5. Prepare the next song on the now silent deck – and so on.

Tip: the arrow button on each deck jumps straight to its tab, so you can search there.

### Settings

Click the gear button. Changes are previewed right away and kept with **Save**.

| Section | Options |
|---|---|
| **Appearance** | Theme (light, dark, system), language, colours of deck A and B |
| **Playback** | Pause the outgoing deck after a fade, match loudness, skip outro for the automatic fade |
| **About TabGroove** | What's new, quick guide, links, reset all settings, version |

<div align="center">
<img src="docs/img/settings.png" width="300" alt="TabGroove settings">
&nbsp;&nbsp;
<img src="docs/img/guide.png" width="300" alt="TabGroove quick guide">
</div>

## How it works

- When you choose a tab as a deck, TabGroove places a small controller inside that YouTube page. It routes the page's video through a Web Audio gain node – the crossfader only changes this gain.
- Fades are scheduled on the audio clock inside the tab, so they stay smooth even when the panel or the tab is busy.
- For loudness matching, TabGroove reads the same loudness values YouTube shows under *Stats for nerds*.
- Everything happens locally in your browser.

## Privacy and permissions

TabGroove has **no servers, no analytics and no tracking**. It does not collect or send any data about you or what you listen to. Settings are stored locally by Chrome. The only network requests of the side panel are the video thumbnails, loaded from YouTube's image server – the same images YouTube shows you anyway. Details: [Privacy policy](PRIVACY.md).

| Permission | Why it is needed |
|---|---|
| `tabs` | To list your YouTube tabs with title and address, so you can choose them as decks |
| `scripting` | To place the small audio controller into the two chosen YouTube tabs |
| `sidePanel` | To show the mixer next to YouTube |
| `storage` | To remember your settings |
| `youtube.com`, `music.youtube.com` | TabGroove only works on these sites |

## Known limits

- **Chrome only** (desktop). Not for phones.
- The side panel has to stay open for the automatic fade.
- Closing the side panel keeps the current volumes in the tabs – a faded-out deck stays silent. Reload the tab to reset it.
- If a deck says *"Muted by the browser – click once in this tab"*, Chrome is blocking sound in that tab until you click into it once.
- After updating TabGroove, open YouTube tabs need to be reloaded once.
- Loudness matching relies on YouTube's internal data. If YouTube changes it, quiet videos simply stay as they are.
- The automatic fade only knows the length of the video, not where the music really ends – use *Skip outro* for long outros.
- YouTube Music tabs can be chosen too, but have been tested less.
- Changes to the YouTube website can break things. Please report it if that happens.

## Found a bug?

**Please report it – every report helps!** Open an [issue](https://github.com/rofldark/tabgroove/issues) and include, if you can:

- the **TabGroove version** (settings → bottom) and your **Chrome version** (`chrome://version`),
- **what you did, what you expected and what happened**,
- a **screenshot** of the side panel – and for loudness problems also of YouTube's *Stats for nerds* (right-click on the video),
- the two **YouTube links**, if it only happens with certain videos.

Ideas and suggestions are welcome too.

## FAQ

**Does YouTube Premium work?**
Yes. The decks are your normal YouTube tabs with your login, so Premium works as usual.

**Does TabGroove block ads?**
No. Without Premium, YouTube shows its ads as usual.

**Is this DJ software?**
No beat matching, no EQ, no effects. TabGroove is made for listening: smooth transitions between the songs you choose.

**Is it really free?**
Yes, and it will stay that way.

## Legal

TabGroove is a free hobby project. It is not affiliated with, endorsed or sponsored by YouTube or Google. YouTube is a trademark of Google LLC. TabGroove does not download or store any content – it only changes the volume of the YouTube tabs you choose. Intended for personal listening; mixing copyrighted music in public may conflict with YouTube's terms of service.

## License

[MIT](LICENSE) © 2026 rofldark
