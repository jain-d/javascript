let text=document.querySelector('#text')
let btn=document.querySelector('#clk')
let data= navigator.userAgentData.getHighEntropyValues(["architecture","bitness"]);
data.then((result)=>{
    chip=result.architecture;
    bitness=result.bitness;
})
if(btn){
    btn.addEventListener('click', ()=>{
        text.innerHTML=chip+bitness+' chip';
        console.log(data)
    })
}