let increament = document.body.querySelector(".increase");
let decrement = document.body.querySelector(".decrease");
let savingElement = document.body.querySelector(".saving");
let value = Boolean(localStorage.getItem("counterValue")) ? localStorage.getItem("counterValue") : 0;
let view = document.body.querySelector(".counter-value");
let visits = 0;
let debounceTimer;
let debounceInterval = 1;
if (!localStorage.getItem("counterValue")) {
   localStorage.setItem("counterValue", value);
}
view.innerText = value;

increament.addEventListener("click", () => { 
   ++value;
   view.innerText = value;
   savingElement.innerHTML = "saving . . .";
   clearTimeout(debounceTimer);
   debounceTimer = setTimeout(function(){
      localStorage.setItem("counterValue", value);
      savingElement.innerHTML = "saved  &check;";
      setTimeout(function(){savingElement.innerHTML = "";
}, 500);
   }, 1000);
});

decrement.addEventListener("click", () => {
   --value;
   view.innerText = value;
   savingElement.innerHTML = "saving . . .";
   clearTimeout(debounceTimer);
   debounceTimer = setTimeout(function(){
      localStorage.setItem("counterValue", value);
      savingElement.innerHTML = "saved  &check;";
      setTimeout(function(){savingElement.innerHTML = "";
}, 500);
   }, 1000);
});
