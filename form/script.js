let form = document.body.querySelector("form");
let addSet = document.body.querySelector(".add-sets");
let targetArea = document.body.querySelector(".outside");
let set = document.body.querySelector(".set");
let numberOfFeilds = 0;


addSet.addEventListener("click", () => {
   let container = document.createElement("div");
   container.setAttribute("class", `set set-${++numberOfFeilds}`);
   let label = document.createElement("label");
   label.innerText = "Head";
   container.appendChild(label);
   let inputField = document.createElement("input");
   inputField.setAttribute("type", "text");
   container.appendChild(inputField);
   targetArea.appendChild(container);
});


form.addEventListener("submit", (event) => {
   event.preventDefault();
   let fData = new FormData(form);
   console.log(fData);
   for (let value of fData) {
      console.log(value);
   }

   let fDataObj = Object.fromEntries(fData);
   console.log(fDataObj)
});

/*
form.addEventListener("formdata", (event) => {
   console.log("form data FIRED 🔫");
   let data = event.formData;
   console.log(data);
})
*/
