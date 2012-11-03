function checkForValidUrl(tabId, changeInfo, tab) {
  if (tab.url && tab.url.indexOf('getprismatic') > -1) {
    chrome.pageAction.show(tabId);
  }
};
chrome.tabs.onUpdated.addListener(checkForValidUrl);

chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	if(request.option == "settings") {
  		sendResponse(localStorage);
  	}
  }
);
