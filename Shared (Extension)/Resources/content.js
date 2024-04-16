const allowedUrls = [
  "https://news.ycombinator.com/",
  "https://www.reddit.com/",
  "https://lobste.rs/",
  "https://github.com/dashboard-feed/",
  "https://twitter.com/home/",
  "https://twitter.com/i/lists/1351120526220152839/",
]

if (allowedUrls.some((url) => window.location.href.startsWith(url))) {
  const now = new Date()
  const hours = now.getHours()
  const minutes = now.getMinutes()

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

  // if within these intervals (it's break time, so website can be open)
  if (
    !(
      (hours === 10 && minutes >= 30 && minutes <= 50) ||
      (hours === 12 && minutes >= 30 && minutes <= 50) ||
      (hours === 14 && minutes >= 30 && minutes <= 50) ||
      (hours === 16 && minutes >= 30 && minutes <= 50) ||
      (hours === 18 && minutes >= 30 && minutes <= 50) ||
      (hours === 20 && minutes >= 30 && minutes <= 50)
    )
  ) {
    hideBodyAndAddText()

    // opens `Things` app in `Today` view
    window.location.href = "things:///show?id=today"
  }
}

// TODO: needed?
// browser.runtime.sendMessage({ greeting: "hello" }).then((response) => {
//   console.log("Received response: ", response)
// })

// browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   console.log("Received request: ", request)
// })

// Use a self-invoking function to wrap the code
// ;(function () {
//   if (document.readyState === "loading") {
//     // If the document is still loading, add an event listener for DOMContentLoaded
//     document.addEventListener("DOMContentLoaded", hideBodyAndAddText)
//   } else {
//     // If the document is already loaded, call the hideBodyAndAddText function directly
//     hideBodyAndAddText()
//   }
// })()
