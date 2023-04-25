let text = document.querySelector("#text");
let btn = document.querySelector("#clk");

  window.onload=function(){
    let data = navigator.userAgentData.getHighEntropyValues([
      "architecture",
      "bitness",
    ]);
    data
      .then((result) => {
        chip = result.architecture;
        bitness = result.bitness;
        text.innerHTML=chip+'_'+bitness+' chip';
        console.log(data)
      })
      .catch((error) => {
        console.log("the thrown error is -> " + error);
      });
    }
  
