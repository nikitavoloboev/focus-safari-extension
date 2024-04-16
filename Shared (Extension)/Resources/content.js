// TODO: schedule
// TODO: open things
if (window.location.href === "https://news.ycombinator.com/") {
  // Use a self-invoking function to wrap the code
  ;(function () {
    function hideBodyAndAddText() {
      const style = document.createElement("style")
      style.innerHTML = `
        html {
          background-color: black !important;
        }
        body {
          display: none;
        }
      `
      document.head.appendChild(style)
    }

    if (document.readyState === "loading") {
      // If the document is still loading, add an event listener for DOMContentLoaded
      document.addEventListener("DOMContentLoaded", hideBodyAndAddText)
    } else {
      // If the document is already loaded, call the hideBodyAndAddText function directly
      hideBodyAndAddText()
    }
  })()
}

browser.runtime.sendMessage({ greeting: "hello" }).then((response) => {
  console.log("Received response: ", response)
})

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Received request: ", request)
})
