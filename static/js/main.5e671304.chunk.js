(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{15:function(e,t,n){e.exports=n(24)},24:function(e,t,n){"use strict";n.r(t);n(16);var o=n(4),a=n.n(o),r=n(13),c=n.n(r),i=n(8),s=(n(25),n(26),n(14));const l={apiKey:"AIzaSyCPhqcw6V8-wTSCkfDe-K2XGE2mGboUGY4",authDomain:"sharprpm-7e0c1.firebaseapp.com",projectId:"sharprpm-7e0c1",storageBucket:"sharprpm-7e0c1.appspot.com",messagingSenderId:"748428012046",appId:"1:748428012046:web:34306907146c8efdd1ea5f",measurementId:"G-X6MFFFESZ1"};i.a.apps.length||i.a.initializeApp(l);const p=i.a.storage(),d=i.a.firestore();var m=function(){const[e,t]=Object(o.useState)(null),[n,r]=Object(o.useState)(null),c="i05EO2hyN3Qjqb0kFgyUKR3zYs13";return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("h1",null,"SharpRPM with Camera"),a.a.createElement("button",{onClick:async()=>{try{const e=await async function(){return new Promise((e,t)=>{const n=document.createElement("input");n.type="file",n.accept="image/*",n.capture="environment",n.addEventListener("change",n=>{const o=n.target.files[0];o?e(o):t(new Error("No image selected"))}),n.click()})}(),n="".concat(c,"/").concat(Object(s.v4)()),o=p.ref("images/".concat(n)),a=await o.put(e),i=await a.ref.getDownloadURL(),l=await fetch("https://us-central1-sharprpm.cloudfunctions.net/sharprpm_ocr",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:i})});if(!l.ok)throw new Error("Failed to process image");{const e=await l.json();r(i),t(e)}}catch(e){console.error("Error capturing or processing image:",e)}}},"Capture Image"),e&&a.a.createElement("div",null,a.a.createElement("h2",null,"Output:"),a.a.createElement("pre",null,JSON.stringify(e,null,2)),a.a.createElement("button",{onClick:async()=>{try{await d.collection("posts").add({userId:c,timestamp:i.a.firestore.FieldValue.serverTimestamp(),image:n,response:e}),alert("Post confirmed successfully")}catch(t){console.error("Error confirming post:",t)}}},"Confirm Post"))))};const u=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(e){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=()=>{const t=e.installing;t.onstatechange=()=>{"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(e=>{console.error("Error during service worker registration:",e)})}c.a.render(a.a.createElement(m,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",()=>{const e="".concat("","/service-worker.js");u?(!function(e){fetch(e).then(t=>{404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):h(e)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):h(e)})}}()}},[[15,1,2]]]);
//# sourceMappingURL=main.5e671304.chunk.js.map