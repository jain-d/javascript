let message = document.querySelector(".message");
let sendButton = document.querySelector(".send");
let messages = document.querySelector(".messages");
let heightButton = document.querySelector(".height-button");
let clickButton = document.querySelector(".click-button");

let WHITE_LISTED_URL = "http://localhost:8080";

heightButton.addEventListener("click", () => {
   window.parent.postMessage({ height: 34 }, WHITE_LISTED_URL);
});

clickButton.addEventListener("click", () => {
   window.parent.postMessage({ clickInfo: "http://x.com" }, WHITE_LISTED_URL);
});

sendButton.addEventListener("click", () => {
   sendMessage(message.value);
   message.value = "";
});

window.addEventListener("message", (event) => {
   let newMessage = document.createElement("li");
   newMessage.innerText = event.data;
   messages.appendChild(newMessage);
});

message.addEventListener("keydown", (event) => {
   if (event.key === "Enter") {
      sendMessage(message.value);
      message.value = "";
   }
});

function sendMessage(message) {
   if (message) {
      window.parent.postMessage(message, "*");
   }
}
