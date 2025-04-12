let message = document.querySelector(".message");
let sendButton = document.querySelector(".send");
let iFrame = document.querySelector("iframe");
let messages = document.querySelector(".messages");

sendButton.addEventListener("click", () => {
   if (message.value) {
      sendMessage(message.value);
      message.value = "";
   } 
});

window.addEventListener("message", (event) => {
   if (typeof event.data === "string") {
      let newMessage = document.createElement("li");
      newMessage.innerText = event.data;
      messages.appendChild(newMessage);
   }
   else if (typeof event.data === "object") {
      if (event.data?.clickInfo) {
         console.log(`A URL is received=> ${event.data.clickInfo}`);
      }
      else {
         console.log(`Height received ${event.data.height}`);
      }
   }
});

message.addEventListener("keydown", (event) => {
   if (event.key === "Enter") {
      if (message.value) {
         sendMessage(message.value);
         message.value = "";
      }
   }
});

function sendMessage(message) {
   iFrame.contentWindow.postMessage(message, "*");
}
