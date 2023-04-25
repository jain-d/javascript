let text = document.querySelector("#text");
let btn = document.querySelector("#clk");
let data;
if (btn) {
  btn.addEventListener("click", getArch().then((data)=>console.log(data.architecture)));
}
//----------
async function getArch() {
  data = await navigator.userAgentData.getHighEntropyValues(["architecture","bitness",]);
  console.log(data);
  return data; 
}