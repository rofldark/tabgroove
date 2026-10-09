// Clicking the toolbar icon opens the side panel with the deck controls.
chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));
