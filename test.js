sendStartupEvents();

function sendStartupEvents() {
  let initEvent = { type: 'initialized'. data: null};
  sendEvent(initEvent);

  let sizeEvent = { type: 'sizeChange', data: { height: 200}}
  sentEvent(sizeEvent);
}

function sendEvent(event, origin="*") {
  window.parant.postMessage(event, origin)
}
