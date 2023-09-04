let target = document.getElementsByClassName("social")[0];
let links = target.querySelectorAll('a');
links = Array.from(links);
let currentIndex;
for (let link of links) {
    link.addEventListener('focus', ()=>{
        console.log(links.indexOf(link));
        link.addEventListener('keydown', (event) => {
            let key = event.key;
            currentIndex = links.indexOf(link);

            if (key === 'ArrowUp') {
                if (currentIndex > 0) {
                    currentIndex = currentIndex - 1;
                    console.log(currentIndex);
                }
                else {
                    currentIndex = -(currentIndex - --(links.length));
                    console.log(currentIndex);
                }
                
            }
            else if (key === 'ArrowDown') {
                if ( currentIndex < --(links.length)) {
                    currentIndex = currentIndex + 1;
                    console.log(currentIndex);
                }
                else {
                    currentIndex = currentIndex - --(links.length);
                    console.log(currentIndex);
                }
            }
            links[currentIndex].focus();
        })
    })  
}
