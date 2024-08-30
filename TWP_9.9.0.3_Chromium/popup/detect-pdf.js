"use strict";

chrome.tabs.query({
  active: true,
  currentWindow: true
}, tabs => {
  const url = tabs[0].url.toLowerCase();
  if (url.startsWith("file:") && url.endsWith(".pdf")) {
    window.location = "popup-translate-document.html";
  }
});
chrome.runtime.sendMessage({
  action: "getTabMimeType"
}, mimeType => {
  checkedLastError();
  if (mimeType && mimeType.toLowerCase() === "application/pdf") {
    window.location = "popup-translate-document.html";
  }
});
//# sourceMappingURL=https://raw.githubusercontent.com/FilipePS/TWP---Source-Maps/main/maps/9.9.0.3/detect-pdf.js.map
