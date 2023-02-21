const target = document.querySelector('#testBtn');

const Job=()=> {
    console.log("addEventListener Working!");
}

if(target){
    target.addEventListener('click', Job);
}
