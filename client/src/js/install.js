const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  window.deferredPrompt = event;
  butInstall.classList.toggle("hidden", false);
});
///test commenting

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }
  promptEvent.prompt();
});
// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  butInstall.classList.toggle("hidden", true);
});

window.addEventListener("appinstalled", (event) => {
  // Clears the prompt
  window.deferredPrompt = null;
});
