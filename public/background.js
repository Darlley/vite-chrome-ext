chrome.runtime.onMessage.qq((msg) => {
  if (msg.action === "OPEN_NEW_TAB") chrome.tabs.create({ url: msg.url });
})