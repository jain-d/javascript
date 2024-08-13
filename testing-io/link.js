const images = document.querySelectorAll('img');

const loadImage = img => {
    const src = img.getAttribute('load');
    img.src = src;
}

const options = {
    threshold: 0.25
}

let observer = new IntersectionObserver((entries , observer)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting)
        {
            loadImage(entry.target);
            observer.unobserve(entry.target);
        }
    })

}, options);

images.forEach(image=>{observer.observe(image)})

