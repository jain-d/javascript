let target = document.getElementsByClassName("social")[0];
let links = target.querySelectorAll('a');
links = Array.from(links);
let currentIndex;
for (let link of links) {
    link.addEventListener('focus', ()=>{
        let count = links.length-1;
        link.addEventListener('keydown', (event) => {
            let key = event.key;
            let subsequent;
            currentIndex = links.indexOf(link);
            if(key === 'ArrowUp' || key === 'ArrowDown') {
                
                if (key === 'ArrowUp') {
                    if(currentIndex === 0)
                    {
                        subsequent = count;
                    }
                    else {
                        subsequent = currentIndex - 1;
                    }
                }
                else if (key === 'ArrowDown') {
                    if(currentIndex === count) {
                        subsequent = currentIndex - count;
                    }
                    else {
                        subsequent = currentIndex + 1;
                    }

                }
                links[subsequent].focus();
            }
        })
    })  
}
