// TabGroove – side panel.
// Two normal YouTube tabs are the decks. A small controller is injected into each tab
// (MAIN world): it routes the page's <video> through a Web Audio gain node, which is
// all the crossfade needs. The panel only sends commands and polls the status.

const STRINGS = {
  en: {
    slogan: "Two tabs. Your mix.",
    fadeToA: "Fade to A", fadeToB: "Fade to B",
    duration: "Fade duration", pauseOut: "Pause outgoing deck", master: "Master",
    autoMix: "Fade automatically at the end of a song", autoIn: "auto fade in",
    outro: "Skip outro (automatic fade)",
    normalize: "Match loudness (raise quiet videos)",
    reload: "Reload this tab once (extension was updated)",
    settings: "Settings", colorA: "Colour of deck A", colorB: "Colour of deck B",
    custom: "Custom colour", reset: "Default", save: "Save", cancel: "Cancel", version: "Version",
    language: "Language",
    freeNote: "TabGroove is free and always will be – no ads, no tracking, no subscription. If you like it, tell your friends. ❤️",
    appearance: "Appearance",
    playback: "Playback",
    themeLabel: "Theme",
    modeLight: "Light",
    modeDark: "Dark",
    modeSystem: "System",
    about: "About TabGroove",
    whatsNew: "What’s new",
    guide: "Quick guide",
    guideTitle: "How it works",
    guide1: "Open two YouTube tabs and start a song in each.",
    guide2: "Choose them above as deck A and deck B.",
    guide3: "Fade with the fader or the fade buttons – or switch on the automatic fade at the end of a song.",
    gotIt: "Let’s go",
    report: "Report a problem",
    resetAll: "Reset all settings",
    resetConfirm: "Sure? Click again to reset",
    close: "Close",
    hint: "Keys: Left/Right move the fader, F fades to the other side. Open two YouTube tabs and pick them above.",
    pickTab: "Choose tab", noTab: "No tab connected", noVideo: "No video",
    left: "left", openTab: "Show tab", play: "Play", pause: "Pause",
    muted: "Muted by the browser – click once in this tab",
    needBoth: "Connect both decks first",
    themeLight: "Switch to light theme", themeDark: "Switch to dark theme",
    untitled: "Untitled",
  },
  de: {
    slogan: "Zwei Tabs. Dein Mix.",
    fadeToA: "Zu A blenden", fadeToB: "Zu B blenden",
    duration: "Dauer der Blende", pauseOut: "Ausgeblendetes Deck pausieren", master: "Master",
    autoMix: "Automatisch am Liedende überblenden", autoIn: "Auto-Blende in",
    outro: "Outro überspringen (automatische Blende)",
    normalize: "Lautstärke angleichen (leise Videos anheben)",
    reload: "Diesen Tab einmal neu laden (Erweiterung wurde aktualisiert)",
    settings: "Einstellungen", colorA: "Farbe von Deck A", colorB: "Farbe von Deck B",
    custom: "Eigene Farbe", reset: "Standard", save: "Speichern", cancel: "Abbrechen", version: "Version",
    language: "Sprache",
    freeNote: "Die TabGroove-Erweiterung ist kostenlos und bleibt es auch – ohne Werbung, ohne Tracking, ohne Abo. Wenn sie dir gefällt, erzähl es weiter. ❤️",
    appearance: "Darstellung",
    playback: "Wiedergabe",
    themeLabel: "Design",
    modeLight: "Hell",
    modeDark: "Dunkel",
    modeSystem: "System",
    about: "Über TabGroove",
    whatsNew: "Was ist neu",
    guide: "Kurzanleitung",
    guideTitle: "So geht’s",
    guide1: "Öffne zwei YouTube-Tabs und starte in jedem ein Lied.",
    guide2: "Wähle sie oben als Deck A und Deck B aus.",
    guide3: "Blende mit dem Fader oder den Blende-Knöpfen über – oder schalte die automatische Blende am Liedende ein.",
    gotIt: "Los geht’s",
    report: "Fehler melden",
    resetAll: "Alle Einstellungen zurücksetzen",
    resetConfirm: "Sicher? Zum Zurücksetzen nochmal klicken",
    close: "Schließen",
    hint: "Tasten: Links/Rechts bewegen den Fader, F blendet zur anderen Seite. Zwei YouTube-Tabs öffnen und oben auswählen.",
    pickTab: "Tab wählen", noTab: "Kein Tab verbunden", noVideo: "Kein Video",
    left: "verbleibend", openTab: "Tab anzeigen", play: "Start", pause: "Pause",
    muted: "Vom Browser stumm – einmal in diesen Tab klicken",
    needBoth: "Zuerst beide Decks verbinden",
    themeLight: "Zum hellen Design wechseln", themeDark: "Zum dunklen Design wechseln",
    untitled: "Ohne Titel",
  },
  fr: {
    slogan: "Deux onglets. Ton mix.",
    fadeToA: "Fondu vers A", fadeToB: "Fondu vers B",
    duration: "Durée du fondu", pauseOut: "Mettre en pause la platine sortante", master: "Master",
    autoMix: "Fondu automatique en fin de morceau", autoIn: "fondu auto dans",
    outro: "Ignorer l’outro (fondu automatique)",
    normalize: "Égaliser le volume (remonter les vidéos trop faibles)",
    reload: "Rechargez cet onglet une fois (extension mise à jour)",
    settings: "Paramètres", colorA: "Couleur de la platine A", colorB: "Couleur de la platine B",
    custom: "Couleur personnalisée", reset: "Par défaut", save: "Enregistrer", cancel: "Annuler", version: "Version",
    language: "Langue",
    freeNote: "TabGroove est gratuit et le restera – sans publicité, sans pistage, sans abonnement. Si vous l’aimez, parlez-en autour de vous. ❤️",
    appearance: "Apparence",
    playback: "Lecture",
    themeLabel: "Thème",
    modeLight: "Clair",
    modeDark: "Sombre",
    modeSystem: "Système",
    about: "À propos de TabGroove",
    whatsNew: "Nouveautés",
    guide: "Guide rapide",
    guideTitle: "Comment ça marche",
    guide1: "Ouvrez deux onglets YouTube et lancez un morceau dans chacun.",
    guide2: "Choisissez-les ci-dessus comme platine A et platine B.",
    guide3: "Faites le fondu avec le crossfader ou les boutons – ou activez le fondu automatique en fin de morceau.",
    gotIt: "C’est parti",
    report: "Signaler un problème",
    resetAll: "Réinitialiser tous les paramètres",
    resetConfirm: "Sûr ? Cliquez à nouveau pour réinitialiser",
    close: "Fermer",
    hint: "Touches : Gauche/Droite déplacent le crossfader, F lance le fondu vers l’autre côté. Ouvrez deux onglets YouTube et choisissez-les ci-dessus.",
    pickTab: "Choisir un onglet", noTab: "Aucun onglet connecté", noVideo: "Aucune vidéo",
    left: "restant", openTab: "Afficher l’onglet", play: "Lecture", pause: "Pause",
    muted: "Coupé par le navigateur – cliquez une fois dans cet onglet",
    needBoth: "Connectez d’abord les deux platines",
    themeLight: "Passer au thème clair", themeDark: "Passer au thème sombre",
    untitled: "Sans titre",
  },
  es: {
    slogan: "Dos pestañas. Tu mezcla.",
    fadeToA: "Fundido a A", fadeToB: "Fundido a B",
    duration: "Duración del fundido", pauseOut: "Pausar el deck saliente", master: "Master",
    autoMix: "Fundido automático al final de la canción", autoIn: "fundido auto en",
    outro: "Saltar outro (fundido automático)",
    normalize: "Igualar volumen (subir los vídeos bajos)",
    reload: "Recarga esta pestaña una vez (la extensión se actualizó)",
    settings: "Ajustes", colorA: "Color del deck A", colorB: "Color del deck B",
    custom: "Color personalizado", reset: "Predeterminado", save: "Guardar", cancel: "Cancelar", version: "Versión",
    language: "Idioma",
    freeNote: "TabGroove es gratis y siempre lo será: sin anuncios, sin rastreo, sin suscripción. Si te gusta, compártelo con tus amigos. ❤️",
    appearance: "Apariencia",
    playback: "Reproducción",
    themeLabel: "Tema",
    modeLight: "Claro",
    modeDark: "Oscuro",
    modeSystem: "Sistema",
    about: "Acerca de TabGroove",
    whatsNew: "Novedades",
    guide: "Guía rápida",
    guideTitle: "Cómo funciona",
    guide1: "Abre dos pestañas de YouTube y pon una canción en cada una.",
    guide2: "Elígelas arriba como deck A y deck B.",
    guide3: "Haz el fundido con el crossfader o los botones, o activa el fundido automático al final de la canción.",
    gotIt: "¡Vamos!",
    report: "Informar de un problema",
    resetAll: "Restablecer todos los ajustes",
    resetConfirm: "¿Seguro? Haz clic de nuevo para restablecer",
    close: "Cerrar",
    hint: "Teclas: Izquierda/Derecha mueven el crossfader, F hace el fundido al otro lado. Abre dos pestañas de YouTube y elígelas arriba.",
    pickTab: "Elegir pestaña", noTab: "Ninguna pestaña conectada", noVideo: "Sin vídeo",
    left: "restante", openTab: "Mostrar pestaña", play: "Reproducir", pause: "Pausa",
    muted: "Silenciado por el navegador – haz clic una vez en esta pestaña",
    needBoth: "Conecta primero ambos decks",
    themeLight: "Cambiar al tema claro", themeDark: "Cambiar al tema oscuro",
    untitled: "Sin título",
  },
  it: {
    slogan: "Due schede. Il tuo mix.",
    fadeToA: "Dissolvenza su A", fadeToB: "Dissolvenza su B",
    duration: "Durata della dissolvenza", pauseOut: "Metti in pausa il deck in uscita", master: "Master",
    autoMix: "Dissolvenza automatica a fine brano", autoIn: "dissolvenza auto tra",
    outro: "Salta l’outro (dissolvenza automatica)",
    normalize: "Uniforma il volume (alza i video più bassi)",
    reload: "Ricarica questa scheda una volta (estensione aggiornata)",
    settings: "Impostazioni", colorA: "Colore del deck A", colorB: "Colore del deck B",
    custom: "Colore personalizzato", reset: "Predefinito", save: "Salva", cancel: "Annulla", version: "Versione",
    language: "Lingua",
    freeNote: "TabGroove è gratuito e lo resterà sempre: niente pubblicità, niente tracciamento, niente abbonamento. Se ti piace, passaparola! ❤️",
    appearance: "Aspetto",
    playback: "Riproduzione",
    themeLabel: "Tema",
    modeLight: "Chiaro",
    modeDark: "Scuro",
    modeSystem: "Sistema",
    about: "Informazioni su TabGroove",
    whatsNew: "Novità",
    guide: "Guida rapida",
    guideTitle: "Come funziona",
    guide1: "Apri due schede YouTube e avvia un brano in ciascuna.",
    guide2: "Selezionale qui sopra come deck A e deck B.",
    guide3: "Fai la dissolvenza con il crossfader o i pulsanti, oppure attiva la dissolvenza automatica a fine brano.",
    gotIt: "Iniziamo",
    report: "Segnala un problema",
    resetAll: "Ripristina tutte le impostazioni",
    resetConfirm: "Sicuro? Clicca di nuovo per ripristinare",
    close: "Chiudi",
    hint: "Tasti: Sinistra/Destra spostano il crossfader, F avvia la dissolvenza verso l’altro lato. Apri due schede YouTube e selezionale qui sopra.",
    pickTab: "Scegli scheda", noTab: "Nessuna scheda collegata", noVideo: "Nessun video",
    left: "rimanenti", openTab: "Mostra scheda", play: "Riproduci", pause: "Pausa",
    muted: "Silenziato dal browser – fai clic una volta in questa scheda",
    needBoth: "Collega prima entrambi i deck",
    themeLight: "Passa al tema chiaro", themeDark: "Passa al tema scuro",
    untitled: "Senza titolo",
  },
};
const CONTROLLER_VERSION = 2; // must match "version" inside installController

// Interface language: chosen in the settings, English by default.
const LANGUAGES = [["en", "English"], ["de", "Deutsch"], ["fr", "Français"], ["es", "Español"], ["it", "Italiano"]];
let lang = "en";
const t = (key) => STRINGS[lang][key] || STRINGS.en[key];

const $ = (id) => document.getElementById(id);
const IDS = ["A", "B"];
const YT_URLS = ["https://www.youtube.com/*", "https://music.youtube.com/*"];

const state = {
  tabs: new Map(), // tabId -> { id, windowId, title, url }
  deck: {
    A: { tabId: null, st: null, thumb: "", vid: "", autoDone: "" },
    B: { tabId: null, st: null, thumb: "", vid: "", autoDone: "" },
  },
  x: 0, // 0 = only A, 1 = only B
  master: 1,
  durationSec: 8,
  pauseOut: true,
  autoMix: false,
  normalize: true,
  outroSec: 0, // auto fade starts this much earlier, so the outro is skipped
  fade: null, // { raf, timer }
};

/* ---------- controller injected into the YouTube tab (runs in the page) ---------- */

// Must stay self-contained: it is serialized and executed inside the tab.
function installController() {
  if (window.__ytdj) return;
  const Ctx = window.AudioContext || window.webkitAudioContext;
  const ctx = new Ctx();
  // video -> norm (loudness boost) -> out (crossfade gain) -> limiter -> speakers
  const norm = ctx.createGain();
  const out = ctx.createGain();
  const limiter = ctx.createDynamicsCompressor();
  limiter.knee.value = 0;
  limiter.attack.value = 0.002;
  limiter.release.value = 0.15;
  norm.connect(out);
  out.connect(limiter);
  limiter.connect(ctx.destination);
  const param = out.gain;
  const routed = new WeakSet();

  const getVideo = () =>
    document.querySelector("video.html5-main-video") || document.querySelector("video");

  // createMediaElementSource works once per element; YouTube may swap the element.
  const attach = () => {
    const v = getVideo();
    if (!v || routed.has(v)) return;
    routed.add(v);
    try {
      ctx.createMediaElementSource(v).connect(norm);
    } catch (e) {
      // already routed by something else; leave it alone
    }
  };
  // A suspended context would silence the video, so keep trying to resume it.
  const resume = () => {
    if (ctx.state !== "running") ctx.resume().catch(() => {});
  };
  ["pointerdown", "keydown", "click"].forEach((ev) =>
    document.addEventListener(ev, resume, true)
  );

  // Loudness matching. YouTube lowers videos that are louder than its target, but does
  // not raise quieter ones. We read the same numbers YouTube shows in "Stats for nerds"
  // (content loudness, target) and raise quiet videos to the target.
  let normalize = true;
  let loudKey = "";
  let loud = null; // { db, target }
  let boostDb = 0;
  let normReady = false;

  const player = () => document.getElementById("movie_player");
  const readLoudness = () => {
    const mp = player();
    if (!mp || typeof mp.getStatsForNerds !== "function") return null;
    try {
      const text = JSON.stringify(mp.getStatsForNerds());
      const c = text.match(/cont[^-\d]{0,20}(-?\d+(?:\.\d+)?)\s*dB/i);
      if (!c) return null;
      const tg = text.match(/tgt[^-\d]{0,20}(-?\d+(?:\.\d+)?)\s*dB/i);
      return { db: Number(c[1]), target: tg ? Number(tg[1]) : -14 };
    } catch (e) {
      return null;
    }
  };
  const videoKey = () => {
    const mp = player();
    try {
      const d = mp && typeof mp.getVideoData === "function" ? mp.getVideoData() : null;
      if (d && d.video_id) return d.video_id;
    } catch (e) { /* fall through */ }
    return location.href;
  };

  const applyNorm = () => {
    const want = normalize && loud && loud.db < loud.target ? Math.min(6, loud.target - loud.db) : 0;
    if (normReady && Math.abs(want - boostDb) < 0.05) return;
    normReady = true; // first call always runs: the compressor starts with strong defaults
    boostDb = want;
    let g = 1;
    if (boostDb > 0) {
      // Limiter only while boosting. The compressor adds automatic makeup gain
      // (spec: (1 / gain at 0 dBFS) ^ 0.6), which we take back out of the boost.
      const T = -1, R = 20;
      limiter.threshold.value = T;
      limiter.ratio.value = R;
      const makeup = Math.pow(1 / Math.pow(10, (T + (0 - T) / R) / 20), 0.6);
      g = Math.pow(10, boostDb / 20) / makeup;
    } else {
      limiter.threshold.value = 0;
      limiter.ratio.value = 1;
    }
    norm.gain.cancelScheduledValues(0);
    norm.gain.setTargetAtTime(g, ctx.currentTime, 0.08);
  };

  const updateLoudness = () => {
    const key = videoKey();
    if (key !== loudKey) {
      loudKey = key;
      loud = null;
    }
    if (!loud) {
      loud = readLoudness();
      if (loud) applyNorm();
    }
  };

  setInterval(() => { attach(); resume(); updateLoudness(); }, 500);
  attach();
  resume();
  applyNorm();

  // YouTube may restart autoplay right after cue() paused it; pause again for a short while.
  let guardUntil = 0;
  const guarded = new WeakSet();
  const guard = (v) => {
    if (guarded.has(v)) return;
    guarded.add(v);
    v.addEventListener("play", () => {
      if (Date.now() < guardUntil) v.pause();
    });
  };

  // A background tab may have been autoplayed muted by the browser; make the deck audible.
  const unmute = (v) => {
    v.muted = false;
    resume();
  };

  const hold = () => {
    const cur = param.value;
    param.cancelScheduledValues(0);
    param.setValueAtTime(cur, ctx.currentTime);
  };

  window.__ytdj = {
    version: 2,
    setNormalize(on) {
      normalize = !!on;
      applyNorm();
    },
    setGain(v) {
      hold();
      param.setTargetAtTime(v, ctx.currentTime, 0.015);
    },
    curve(values, ms) {
      hold();
      param.setValueCurveAtTime(Float32Array.from(values), ctx.currentTime + 0.02, ms / 1000);
    },
    play() {
      const v = getVideo();
      if (!v) return;
      guardUntil = 0;
      unmute(v);
      v.play().catch(() => {});
    },
    unmute() {
      const v = getVideo();
      if (v) unmute(v);
    },
    pause() {
      const v = getVideo();
      if (v) v.pause();
    },
    cue() {
      const v = getVideo();
      if (!v) return;
      guard(v);
      guardUntil = Date.now() + 3000;
      v.pause();
      v.currentTime = 0;
    },
    seek(frac) {
      const v = getVideo();
      if (v && isFinite(v.duration)) v.currentTime = v.duration * frac;
    },
    status() {
      // Background tabs throttle timers, so also refresh here (the panel polls often).
      attach();
      updateLoudness();
      const v = getVideo();
      return {
        version: 2,
        boost: boostDb,
        loud: loud ? loud.db : null,
        ctx: ctx.state,
        has: !!v,
        playing: !!v && !v.paused && !v.ended,
        muted: !!v && v.muted,
        t: v ? v.currentTime : 0,
        d: v && isFinite(v.duration) ? v.duration : 0,
      };
    },
  };
}

/* ---------- talking to the tabs ---------- */

// Calls to one tab run strictly one after another, so a late setGain can never
// land after (and cancel) a fade curve that was sent later.
const queues = new Map();
function enqueue(tabId, job) {
  const next = (queues.get(tabId) || Promise.resolve()).then(job, job);
  queues.set(tabId, next);
  return next;
}

function inject(tabId) {
  return enqueue(tabId, async () => {
    try {
      await chrome.scripting.executeScript({ target: { tabId }, world: "MAIN", func: installController });
      return true;
    } catch (e) {
      return false;
    }
  });
}

function call(tabId, method, ...args) {
  return enqueue(tabId, async () => {
    try {
      const [res] = await chrome.scripting.executeScript({
        target: { tabId },
        world: "MAIN",
        func: (m, a) => {
          const c = window.__ytdj;
          return c ? { ok: true, v: c[m](...a) } : { ok: false };
        },
        args: [method, args],
      });
      return (res && res.result) || { ok: false };
    } catch (e) {
      return { ok: false };
    }
  });
}

/* ---------- gains and fades ---------- */

const gainA = (x) => Math.cos((x * Math.PI) / 2);
const gainB = (x) => Math.sin((x * Math.PI) / 2);
const gainOf = (id, x) => (id === "A" ? gainA(x) : gainB(x)) * state.master;
const connected = (id) => state.deck[id].tabId !== null;

let saveXTimer = 0;
function saveX() {
  clearTimeout(saveXTimer);
  saveXTimer = setTimeout(() => {
    chrome.storage.session.set({ x: state.x }).catch(() => {});
  }, 300);
}

// Latest value wins: while a send is in flight, only remember that another one is due.
let gainBusy = false;
let gainDirty = false;
function applyGains() {
  saveX();
  if (gainBusy) {
    gainDirty = true;
    return;
  }
  gainBusy = true;
  const sends = IDS.filter(connected).map((id) =>
    call(state.deck[id].tabId, "setGain", gainOf(id, state.x))
  );
  Promise.all(sends).then(() => {
    gainBusy = false;
    if (gainDirty) {
      gainDirty = false;
      applyGains();
    }
  });
}

function cancelFade() {
  if (!state.fade) return;
  cancelAnimationFrame(state.fade.raf);
  clearTimeout(state.fade.timer);
  state.fade = null;
  applyGains(); // also cancels the audio curve that may still be running in the tabs
}

async function fadeTo(target) {
  if (!connected("A") || !connected("B")) {
    flash(t("needBoth"));
    return;
  }
  cancelFade();
  const x0 = state.x;
  if (Math.abs(target - x0) < 0.01) return;

  // Claim the fade right away, so a second click while play() is pending is ignored.
  const job = { raf: 0, timer: 0 };
  state.fade = job;

  const incoming = target === 1 ? "B" : "A";
  const outgoing = target === 1 ? "A" : "B";
  const ms = state.durationSec * 1000 * Math.abs(target - x0);

  const inSt = state.deck[incoming].st;
  await call(state.deck[incoming].tabId, inSt && inSt.playing ? "unmute" : "play");
  if (state.fade !== job) return; // cancelled meanwhile (fader touched)

  gainDirty = false; // a queued setGain would cut into the curve
  const n = Math.max(24, Math.round(ms / 25));
  const curveFor = (id) =>
    Array.from({ length: n + 1 }, (_, i) => gainOf(id, x0 + ((target - x0) * i) / n));
  IDS.forEach((id) => call(state.deck[id].tabId, "curve", curveFor(id), ms));

  const t0 = performance.now();
  const step = (now) => {
    const p = Math.min(1, (now - t0) / ms);
    state.x = x0 + (target - x0) * p;
    $("fader").value = Math.round(state.x * 1000);
    if (p < 1) job.raf = requestAnimationFrame(step);
  };
  job.raf = requestAnimationFrame(step);
  job.timer = setTimeout(() => {
    cancelAnimationFrame(job.raf);
    state.fade = null;
    state.x = target;
    $("fader").value = Math.round(target * 1000);
    applyGains(); // picks up a master change made during the fade, saves the position
    if (state.pauseOut) call(state.deck[outgoing].tabId, "pause");
  }, ms + 60);
}

/* ---------- auto mix at the end of a song ---------- */

// Deck that is currently audible (the fader side it leans to).
const liveDeck = () => (state.x < 0.5 ? "A" : "B");

// Seconds until the auto fade starts, or null when it will not happen.
function autoFadeIn() {
  if (!state.autoMix || state.fade) return null;
  const live = liveDeck();
  const next = live === "A" ? "B" : "A";
  const d = state.deck[live];
  const st = d.st;
  const nextSt = state.deck[next].st;
  if (!st || !st.playing || !st.d || !nextSt || !nextSt.has) return null;
  if (d.autoDone === d.vid) return null; // already faded out of this song
  return st.d - st.t - state.durationSec - state.outroSec;
}

function checkAutoMix() {
  const wait = autoFadeIn();
  if (wait === null || wait > 0.3) return;
  const live = liveDeck();
  state.deck[live].autoDone = state.deck[live].vid;
  fadeTo(live === "A" ? 1 : 0);
}

/* ---------- UI ---------- */

function cleanTitle(s) {
  return (s || "")
    .replace(/^\(\d+\)\s*/, "")
    .replace(/ - YouTube( Music)?$/, "")
    .trim();
}

function videoId(url) {
  try {
    return new URL(url).searchParams.get("v") || "";
  } catch (e) {
    return "";
  }
}

function fmt(sec) {
  const s = Math.max(0, Math.round(sec));
  return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");
}

let flashTimer = 0;
function flash(msg) {
  const el = $("hint");
  el.textContent = msg;
  clearTimeout(flashTimer);
  flashTimer = setTimeout(() => { el.textContent = t("hint"); }, 3000);
}

function buildDecks() {
  $("decks").innerHTML = IDS.map((id) => {
    const l = id.toLowerCase();
    return `
    <article class="card deck ${l}" id="deck-${id}">
      <div class="deck-head">
        <span class="deck-tag">${id}</span>
        <select id="sel-${id}" aria-label="Deck ${id}"></select>
      </div>
      <div class="thumb"><img id="img-${id}" alt="" hidden></div>
      <div class="title" id="title-${id}"></div>
      <div class="meta" id="meta-${id}"></div>
      <div class="bar" id="bar-${id}"><div class="fill" id="fill-${id}"></div></div>
      <div class="deck-actions">
        <button class="play" id="play-${id}" type="button"><svg class="ic"><use id="play-ic-${id}" href="#i-play"/></svg></button>
        <button class="icon-btn" id="focus-${id}" type="button"><svg class="ic"><use href="#i-open"/></svg></button>
      </div>
    </article>`;
  }).join("");

  IDS.forEach((id) => {
    $("sel-" + id).addEventListener("change", (e) => assign(id, e.target.value ? Number(e.target.value) : null));
    $("play-" + id).addEventListener("click", () => {
      const d = state.deck[id];
      if (d.tabId !== null) call(d.tabId, d.st && d.st.playing ? "pause" : "play");
    });
    $("focus-" + id).addEventListener("click", async () => {
      const tab = state.tabs.get(state.deck[id].tabId);
      if (!tab) return;
      await chrome.tabs.update(tab.id, { active: true });
      chrome.windows.update(tab.windowId, { focused: true }).catch(() => {});
    });
    $("bar-" + id).addEventListener("click", (e) => {
      const d = state.deck[id];
      if (d.tabId === null) return;
      const r = e.currentTarget.getBoundingClientRect();
      call(d.tabId, "seek", Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)));
    });
    $("focus-" + id).title = t("openTab");
  });
}

let selectsKey = "";
function renderSelects() {
  // Rebuilding an open <select> closes it, so only rebuild when something changed.
  const key = JSON.stringify([
    lang,
    state.deck.A.tabId,
    state.deck.B.tabId,
    [...state.tabs.values()].map((tab) => [tab.id, tab.title]),
  ]);
  if (key === selectsKey) return;
  selectsKey = key;
  IDS.forEach((id) => {
    const other = state.deck[id === "A" ? "B" : "A"].tabId;
    const sel = $("sel-" + id);
    sel.replaceChildren(new Option(t("pickTab"), ""));
    state.tabs.forEach((tab) => {
      if (tab.id === other) return;
      sel.add(new Option(cleanTitle(tab.title) || t("untitled"), String(tab.id)));
    });
    sel.value = state.deck[id].tabId === null ? "" : String(state.deck[id].tabId);
  });
}

function renderDeck(id) {
  const d = state.deck[id];
  const tab = state.tabs.get(d.tabId);
  const st = d.st;
  const img = $("img-" + id);

  $("title-" + id).textContent = tab ? cleanTitle(tab.title) : "";
  const vid = tab ? videoId(tab.url) : "";
  const thumb = vid ? `https://i.ytimg.com/vi/${vid}/mqdefault.jpg` : "";
  if (thumb !== d.thumb) {
    d.thumb = thumb;
    if (thumb) img.src = thumb;
    img.hidden = !thumb;
  }

  const meta = $("meta-" + id);
  meta.classList.remove("warn");
  if (!tab) {
    meta.textContent = t("noTab");
  } else if (st && st.version !== CONTROLLER_VERSION) {
    meta.textContent = t("reload");
    meta.classList.add("warn");
  } else if (!st || !st.has) {
    meta.textContent = t("noVideo");
  } else if (st.ctx !== "running") {
    meta.textContent = t("muted");
    meta.classList.add("warn");
  } else {
    meta.textContent = st.d ? fmt(st.d - st.t) + " " + t("left") : "";
    if (st.boost > 0.05) meta.textContent += " · +" + st.boost.toLocaleString(lang, { maximumFractionDigits: 1 }) + " dB";
    const wait = id === liveDeck() ? autoFadeIn() : null;
    if (wait !== null && wait < 60) meta.textContent += " · " + t("autoIn") + " " + fmt(Math.max(0, wait));
  }

  const playing = !!(st && st.playing);
  $("fill-" + id).style.width = st && st.d ? Math.min(100, (st.t / st.d) * 100) + "%" : "0";
  $("play-ic-" + id).setAttribute("href", playing ? "#i-pause" : "#i-play");
  $("play-" + id).title = playing ? t("pause") : t("play");
  $("play-" + id).disabled = !tab || !st || !st.has;
  $("focus-" + id).disabled = !tab;
  $("deck-" + id).classList.toggle("live", playing);
}

let polling = false;
async function pollDecks() {
  if (polling) return;
  polling = true;
  try {
    await Promise.all(IDS.map(pollDeck));
    checkAutoMix();
    IDS.forEach(renderDeck);
  } finally {
    polling = false;
  }
}

async function pollDeck(id) {
  const d = state.deck[id];
  const tabId = d.tabId;
  if (tabId === null) return;
  let res = await call(tabId, "status");
  if (!res.ok && state.tabs.has(tabId) && (await inject(tabId))) {
    // controller missing: the tab was reloaded
    await call(tabId, "setGain", gainOf(id, state.x));
    await call(tabId, "setNormalize", state.normalize);
    res = await call(tabId, "status");
  }
  if (d.tabId !== tabId) return; // reassigned meanwhile
  d.st = res.ok ? res.v : null;

  // A new video opened in a silent deck: YouTube autoplays it, so stop it at the start.
  // That way it is ready to be faded in from the beginning.
  const tab = state.tabs.get(tabId);
  const vid = tab ? videoId(tab.url) : "";
  if (vid && vid !== d.vid) {
    d.vid = vid;
    const silent = (id === "A" ? gainA(state.x) : gainB(state.x)) < 0.05;
    if (!state.fade && silent) call(tabId, "cue");
  }
}

/* ---------- tab handling ---------- */

async function refreshTabs() {
  const list = await chrome.tabs.query({ url: YT_URLS });
  state.tabs = new Map(list.map((tab) => [tab.id, tab]));
  IDS.forEach((id) => {
    if (state.deck[id].tabId !== null && !state.tabs.has(state.deck[id].tabId)) {
      state.deck[id].tabId = null;
      state.deck[id].st = null;
    }
  });
  renderSelects();
  IDS.forEach(renderDeck);
}

async function assign(id, tabId) {
  const old = state.deck[id].tabId;
  // A tab leaving the mixer gets its normal volume back.
  if (old !== null && old !== tabId && state.tabs.has(old)) call(old, "setGain", 1);
  state.deck[id].tabId = tabId;
  state.deck[id].st = null;
  state.deck[id].thumb = "";
  const tab = state.tabs.get(tabId);
  state.deck[id].vid = tab ? videoId(tab.url) : "";
  if (tabId !== null) {
    await inject(tabId);
    await call(tabId, "setGain", gainOf(id, state.x));
    await call(tabId, "setNormalize", state.normalize);
  }
  saveAssignment();
  renderSelects();
  IDS.forEach(renderDeck);
}

function saveAssignment() {
  chrome.storage.session
    .set({ assign: { A: state.deck.A.tabId, B: state.deck.B.tabId } })
    .catch(() => {});
}

async function restoreAssignment() {
  let saved = null;
  try {
    const data = await chrome.storage.session.get(["assign", "x"]);
    saved = data.assign;
    // Keep the fader where it was, so reopening the panel does not change the mix.
    if (typeof data.x === "number") {
      state.x = data.x;
      $("fader").value = Math.round(state.x * 1000);
    }
  } catch (e) { /* ignore */ }
  for (const id of IDS) {
    const tabId = saved ? saved[id] : null;
    if (tabId !== null && tabId !== undefined && state.tabs.has(tabId)) await assign(id, tabId);
  }
  // First start with two or more YouTube tabs: suggest them.
  if (!connected("A") && !connected("B") && state.tabs.size >= 2) {
    const [first, second] = [...state.tabs.keys()];
    await assign("A", first);
    await assign("B", second);
  }
}

/* ---------- settings ---------- */

// Links in "About". Stay hidden while empty (no public repository yet).
const REPO_URL = "https://github.com/rofldark/tabgroove";

// Short release notes per version, shown under "What's new" after an update.
// Add an entry for every new version (all five languages).
const NEWS = {
  "0.1.0": {
    en: ["First version of TabGroove.",
      "Crossfade between two YouTube tabs, by hand or automatically at the end of a song.",
      "Match loudness, your own deck colours and five languages."],
    de: ["Erste Version von TabGroove.",
      "Überblenden zwischen zwei YouTube-Tabs, von Hand oder automatisch am Liedende.",
      "Lautstärke angleichen, eigene Deck-Farben und fünf Sprachen."],
    fr: ["Première version de TabGroove.",
      "Fondu entre deux onglets YouTube, à la main ou automatiquement en fin de morceau.",
      "Égalisation du volume, couleurs des platines au choix et cinq langues."],
    es: ["Primera versión de TabGroove.",
      "Fundido entre dos pestañas de YouTube, a mano o automáticamente al final de la canción.",
      "Igualar volumen, colores propios para los decks y cinco idiomas."],
    it: ["Prima versione di TabGroove.",
      "Dissolvenza tra due schede YouTube, a mano o automatica a fine brano.",
      "Volume uniformato, colori dei deck a scelta e cinque lingue."],
  },
};
const VERSION = chrome.runtime.getManifest().version;

// Deck colours. null = theme default (defined in sidepanel.css).
const DEFAULT_COLORS = {
  light: { A: "#1f6feb", B: "#e8711a" },
  dark: { A: "#4aa3ff", B: "#ffa24d" },
};
// 14 colours = two full rows of seven (see .swatches in the CSS), sorted by hue.
const PRESETS = [
  "#00e8e2", "#14b8a6", "#22c55e", "#84cc16", "#eab308", "#ffa24d", "#e8711a",
  "#ef4444", "#ec4899", "#d946ef", "#905cf6", "#1f6feb", "#4aa3ff", "#94a3b8",
];

// Everything the settings dialog edits. Changes are previewed live and only kept on "Save".
let saved = { colors: { A: null, B: null }, lang: "en", themeMode: "system", pauseOut: true, normalize: true, outroSec: 0 };
let draft = null;

const systemDark = window.matchMedia("(prefers-color-scheme: dark)");
const settingsOpen = () => !$("settings").hidden;
const current = () => draft || saved;

// Black or white text, whichever reads better on the given colour.
function textOn(hex) {
  const n = parseInt(hex.slice(1), 16);
  const lin = (c) => {
    c /= 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  };
  const L = 0.2126 * lin(n >> 16) + 0.7152 * lin((n >> 8) & 255) + 0.0722 * lin(n & 255);
  return L > 0.4 ? "#0f1114" : "#ffffff";
}

function applyColors(colors) {
  const root = document.documentElement.style;
  IDS.forEach((id) => {
    const key = id.toLowerCase();
    if (colors[id]) {
      root.setProperty("--" + key, colors[id]);
      root.setProperty("--on-" + key, textOn(colors[id]));
    } else {
      root.removeProperty("--" + key);
      root.removeProperty("--on-" + key);
    }
  });
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  $("theme-ic").setAttribute("href", theme === "dark" ? "#i-sun" : "#i-moon");
  $("theme").title = theme === "dark" ? t("themeLight") : t("themeDark");
}

function applyThemeMode(mode) {
  setTheme(mode === "system" ? (systemDark.matches ? "dark" : "light") : mode);
}

// Puts every text of the panel into the current language.
function applyTexts() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  IDS.forEach((id) => {
    const btn = $("focus-" + id);
    if (btn) btn.title = t("openTab");
  });
  $("version").textContent = "TabGroove · " + t("version") + " " + VERSION;
  $("settings-open").title = t("settings");
  $("settings-close").title = t("close");
  $("news-close").title = t("close");
  $("news-title").textContent = t("whatsNew") + " · " + VERSION;
  setTheme(document.documentElement.dataset.theme || "light");
  renderNews();
  if ($("sel-A")) {
    renderSelects();
    IDS.forEach(renderDeck);
  }
}

function setLang(code) {
  lang = STRINGS[code] ? code : "en";
  $("language").value = lang;
  applyTexts();
}

const shownColor = (id) =>
  current().colors[id] || DEFAULT_COLORS[document.documentElement.dataset.theme === "dark" ? "dark" : "light"][id];

function renderSettings() {
  const c = current();
  IDS.forEach((id) => {
    const group = document.querySelector(`.set-group[data-deck="${id}"]`);
    const col = shownColor(id).toLowerCase();
    group.querySelectorAll(".swatch").forEach((b) => b.classList.toggle("on", b.dataset.color === col));
    group.querySelector('input[type="color"]').value = col;
    group.querySelector(".reset").disabled = !c.colors[id];
  });
  document.querySelectorAll("#set-theme button").forEach((b) => b.classList.toggle("on", b.dataset.mode === c.themeMode));
  document.querySelectorAll("#set-outro button").forEach((b) => b.classList.toggle("on", Number(b.dataset.sec) === c.outroSec));
  $("set-pause-out").checked = c.pauseOut;
  $("set-normalize").checked = c.normalize;
  $("language").value = c.lang;
}

// Change one value of the draft and preview it.
function edit(patch) {
  Object.assign(draft, patch);
  applyColors(draft.colors);
  applyThemeMode(draft.themeMode);
  if (draft.lang !== lang) setLang(draft.lang);
  renderSettings();
}

function openSettings() {
  draft = JSON.parse(JSON.stringify(saved));
  resetArmed(false);
  renderSettings();
  $("settings").hidden = false;
  $("settings-close").focus();
}

function closeSettings(keep) {
  if (keep) {
    saved = draft;
    chrome.storage.local.set({
      colors: saved.colors, lang: saved.lang, themeMode: saved.themeMode,
      pauseOut: saved.pauseOut, normalize: saved.normalize, outro: saved.outroSec,
    }).catch(() => {});
    applyPlayback();
  }
  draft = null;
  applyColors(saved.colors);
  applyThemeMode(saved.themeMode);
  if (lang !== saved.lang) setLang(saved.lang);
  $("settings").hidden = true;
  $("settings-open").focus();
}

// Playback settings live in `state`; the tabs need to know about loudness matching.
function applyPlayback() {
  const normChanged = state.normalize !== saved.normalize;
  state.pauseOut = saved.pauseOut;
  state.normalize = saved.normalize;
  state.outroSec = saved.outroSec;
  if (normChanged) {
    IDS.forEach((id) => {
      if (connected(id)) call(state.deck[id].tabId, "setNormalize", state.normalize);
    });
  }
}

/* "Reset all" needs a second click within a few seconds. */
let resetTimer = 0;
function resetArmed(on) {
  clearTimeout(resetTimer);
  const b = $("reset-all");
  b.classList.toggle("confirm", on);
  b.textContent = t(on ? "resetConfirm" : "resetAll");
  b.dataset.armed = on ? "1" : "";
  if (on) resetTimer = setTimeout(() => resetArmed(false), 4000);
}

async function resetAll() {
  if (!$("reset-all").dataset.armed) {
    resetArmed(true);
    return;
  }
  await chrome.storage.local.clear().catch(() => {});
  // Remember the version, so the quick guide does not pop up again after the reset.
  await chrome.storage.local.set({ seenVersion: VERSION }).catch(() => {});
  location.reload();
}

/* ---------- quick guide and what's new ---------- */

function renderNews() {
  const items = (NEWS[VERSION] && (NEWS[VERSION][lang] || NEWS[VERSION].en)) || [];
  $("news-list").replaceChildren(...items.map((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    return li;
  }));
  $("news-open").hidden = items.length === 0;
}

function showUpdateDot(on) {
  $("gear-dot").hidden = !on;
  $("news-dot").hidden = !on;
}

function openSheet(id) {
  $(id).hidden = false;
  $(id).querySelector("button").focus();
}

function closeSheet(id) {
  $(id).hidden = true;
  (settingsOpen() ? $("settings-close") : $("settings-open")).focus();
}

function openNews() {
  openSheet("news");
  showUpdateDot(false);
  save({ seenVersion: VERSION });
}

function buildSettings() {
  IDS.forEach((id) => {
    const group = document.querySelector(`.set-group[data-deck="${id}"]`);
    const box = group.querySelector(".swatches");
    PRESETS.forEach((color) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "swatch";
      b.dataset.color = color;
      b.style.background = color;
      b.title = color;
      b.setAttribute("aria-label", color);
      b.addEventListener("click", () => edit({ colors: { ...draft.colors, [id]: color } }));
      box.appendChild(b);
    });
    group.querySelector('input[type="color"]').addEventListener("input", (e) =>
      edit({ colors: { ...draft.colors, [id]: e.target.value } }));
    group.querySelector(".reset").addEventListener("click", () => edit({ colors: { ...draft.colors, [id]: null } }));
  });
  LANGUAGES.forEach(([code, name]) => $("language").add(new Option(name, code)));
  $("language").addEventListener("change", (e) => edit({ lang: e.target.value }));
  document.querySelectorAll("#set-theme button").forEach((b) =>
    b.addEventListener("click", () => edit({ themeMode: b.dataset.mode })));
  document.querySelectorAll("#set-outro button").forEach((b) =>
    b.addEventListener("click", () => edit({ outroSec: Number(b.dataset.sec) })));
  $("set-pause-out").addEventListener("change", (e) => edit({ pauseOut: e.target.checked }));
  $("set-normalize").addEventListener("change", (e) => edit({ normalize: e.target.checked }));

  $("settings-open").addEventListener("click", openSettings);
  $("settings-close").addEventListener("click", () => closeSettings(false));
  $("settings-cancel").addEventListener("click", () => closeSettings(false));
  $("settings-save").addEventListener("click", () => closeSettings(true));
  $("reset-all").addEventListener("click", resetAll);
  $("news-open").addEventListener("click", openNews);
  $("news-close").addEventListener("click", () => closeSheet("news"));
  $("guide-open").addEventListener("click", () => openSheet("guide"));
  $("guide-close").addEventListener("click", () => closeSheet("guide"));

  // A click on the dimmed background closes the topmost sheet (settings: cancel).
  ["settings", "guide", "news"].forEach((id) => {
    $(id).addEventListener("click", (e) => {
      if (e.target !== $(id)) return;
      if (id === "settings") closeSettings(false);
      else closeSheet(id);
    });
  });

  if (REPO_URL) {
    $("links").hidden = false;
    $("link-repo").href = REPO_URL;
    $("link-issues").href = REPO_URL + "/issues";
  }

  // Follow the operating system while the theme is set to "System".
  systemDark.addEventListener("change", () => applyThemeMode(current().themeMode));
}

function save(patch) {
  chrome.storage.local.set(patch).catch(() => {});
}

function renderDuration() {
  document.querySelectorAll("#duration button").forEach((b) => {
    b.classList.toggle("on", Number(b.dataset.sec) === state.durationSec);
  });
}

async function init() {
  const stored = await chrome.storage.local
    .get(["theme", "themeMode", "duration", "pauseOut", "master", "autoMix", "outro", "normalize", "colors", "lang", "seenVersion"])
    .catch(() => ({}));

  saved = {
    colors: { A: (stored.colors && stored.colors.A) || null, B: (stored.colors && stored.colors.B) || null },
    lang: STRINGS[stored.lang] ? stored.lang : "en",
    // "theme" is the older key (light/dark only)
    themeMode: ["light", "dark", "system"].includes(stored.themeMode) ? stored.themeMode
      : ["light", "dark"].includes(stored.theme) ? stored.theme : "system",
    pauseOut: stored.pauseOut !== false,
    normalize: stored.normalize !== false,
    outroSec: Number(stored.outro) || 0,
  };
  lang = saved.lang;
  applyThemeMode(saved.themeMode);
  applyColors(saved.colors);
  applyPlayback();
  state.normalize = saved.normalize;

  state.durationSec = Number(stored.duration) || 8;
  state.master = typeof stored.master === "number" ? stored.master : 1;
  state.autoMix = stored.autoMix === true;
  $("auto-mix").checked = state.autoMix;
  $("master").value = Math.round(state.master * 100);
  renderDuration();

  buildSettings();
  buildDecks();
  setLang(lang);

  // First start: quick guide. After an update: dot on the gear for "What's new".
  if (!stored.seenVersion) {
    openSheet("guide");
    save({ seenVersion: VERSION });
  } else if (stored.seenVersion !== VERSION && NEWS[VERSION]) {
    showUpdateDot(true);
  }

  // Quick switch in the header: always light <-> dark, saved right away.
  $("theme").addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    saved.themeMode = next;
    applyThemeMode(next);
    save({ themeMode: next });
  });
  $("fader").addEventListener("pointerdown", cancelFade);
  $("fader").addEventListener("input", (e) => {
    cancelFade();
    state.x = Number(e.target.value) / 1000;
    applyGains();
  });
  $("fade-a").addEventListener("click", () => fadeTo(0));
  $("fade-b").addEventListener("click", () => fadeTo(1));
  document.querySelectorAll("#duration button").forEach((b) => {
    b.addEventListener("click", () => {
      state.durationSec = Number(b.dataset.sec);
      renderDuration();
      save({ duration: state.durationSec });
    });
  });
  $("auto-mix").addEventListener("change", (e) => {
    state.autoMix = e.target.checked;
    save({ autoMix: state.autoMix });
  });
  $("master").addEventListener("input", (e) => {
    state.master = Number(e.target.value) / 100;
    save({ master: state.master });
    if (!state.fade) applyGains();
  });

  document.addEventListener("keydown", (e) => {
    const top = ["news", "guide", "settings"].find((id) => !$(id).hidden);
    if (top) {
      if (e.key === "Escape") {
        if (top === "settings") closeSettings(false);
        else closeSheet(top);
      }
      return; // no mixer shortcuts while a dialog is open
    }
    const tag = e.target.tagName;
    if (tag === "SELECT" || e.target.id === "master") return;
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      e.preventDefault();
      cancelFade();
      state.x = Math.max(0, Math.min(1, state.x + (e.key === "ArrowRight" ? 0.04 : -0.04)));
      $("fader").value = Math.round(state.x * 1000);
      applyGains();
    } else if (e.key === "f" || e.key === "F") {
      fadeTo(state.x < 0.5 ? 1 : 0);
    }
  });

  chrome.tabs.onCreated.addListener(refreshTabs);
  chrome.tabs.onRemoved.addListener(refreshTabs);
  chrome.tabs.onUpdated.addListener((id, info) => {
    if (info.title || info.url || info.status === "complete") refreshTabs();
  });

  await refreshTabs();
  await restoreAssignment();
  setInterval(pollDecks, 500);
}

init();
