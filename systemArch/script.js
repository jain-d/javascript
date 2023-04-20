let text=document.querySelector('#text')
let btn=document.querySelector('#clk')
let data= navigator.userAgentData.getHighEntropyValues(["platform"]);
data.then((result)=>{
    ans=result.platform;
})
if(btn){
    btn.addEventListener('click', ()=>{
        text.innerHTML=ans;
        console.log(data)
    })
}