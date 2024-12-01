
function increaseLikesCount() {
   let buttons = document.body.querySelectorAll("button.likes");
   buttons.forEach((button) => {
      let count = 0;
      let supElement = button.querySelector("sup");
      button.addEventListener("click", () => {
         count++;
         supElement.innerText = count;
      })
   })
}


increaseLikesCount();
