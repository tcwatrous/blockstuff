var blockedUrls = ["*://*.twitter.com/*","*://*.reddit.com/*","*://*.facebook.com/*"];

function redirect(requestDetails) {
  console.log("Redirecting: " + requestDetails.url);
  return {
    redirectUrl: "https://google.com/"
  };
}

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  {urls:blockedUrls},
  ["blocking"]
);
