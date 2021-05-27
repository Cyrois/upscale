sendStartupEvents();

var events = []

// window.addEventListener(
//   "message",
//   event => {
//     events.push(event.data);
//     document.getElementById("eventPrintout").innerHTML = JSON.stringify(events, null, 4);
//   },
//   false
// )

window.addEventListener(
  "message",
  event => {
    events.push(event.data);
    document.getElementById("eventPrintout").innerHTML = JSON.stringify(events, null, 4);

    if(event.data.eventType == "component_context") {
      let customerSessionId = event.data.keys.customerSessionId

      $.ajax({
         url: "https://hackathon-ecenta-official-approuter-caas2-sap-stage.cfapps.us10.hana.ondemand.com/schema-service/attribute-sets?resourceType=sap_customer&pageNumber=1&pageSize=20&sort=period%3Aasc%2Cname%3Aasc",
         type: "GET",
         beforeSend: function(xhr){
           xhr.setRequestHeader('customer-session-id', customerSessionId);
           xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
           xhr.setRequestHeader('Access-Control-Allow-Credentials', 'true');
         },
         success: function(res) { console.log(res) }
      });
    }


  },
  false
)

function sendStartupEvents() {
  let initEvent = { type: 'initialized', data: null};
  sendEvent(initEvent);

  let sizeEvent = { type: 'sizeChange', data: { height: 200}}
  sendEvent(sizeEvent);
}

function sendEvent(event, origin="*") {
  window.parent.postMessage(event, origin)
}
