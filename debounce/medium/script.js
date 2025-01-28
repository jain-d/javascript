let searchBox = document.body.querySelector(".search-box");
let debounceKiller;
searchBox.addEventListener("keypress", () => {
   clearTimeout(debounceKiller);
   debounceKiller = setTimeout(() => {
   console.log(searchBox.value);
   }, 500);
});
