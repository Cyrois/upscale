sendStartupEvents();

var events = []

window.addEventListener(
  "message",
  event => {
    events.push(event.data);
    document.getElementById("eventPrintout").innerHTML = JSON.stringify(events, null, 4);
  },
  false
)

function sendStartupEvents() {
  let initEvent = { type: 'initialized'. data: null};
  sendEvent(initEvent);

  let sizeEvent = { type: 'sizeChange', data: { height: 200}}
  sendEvent(sizeEvent);
}

function sendEvent(event, origin="*") {
  window.parent.postMessage(event, origin)
}
