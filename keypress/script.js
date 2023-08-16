// let btn = document.querySelector('button');
// if (btn) {
//     btn.addEventListener('click',()=>{console.log("Yes it is !")})
// }
let keypress = document.querySelector('.keypress');

document.addEventListener('keydown', (event)=>{
    keypress.innerHTML = event.key;
})