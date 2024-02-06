let image = document.querySelector('.image');
let switchButton = document.querySelector('.switch');
let createLSI = document.querySelector('.test');
let theme = 'theme';

localStorage.setItem(theme, 'special');

switchButton.addEventListener('click', () => {
  let dataSrc = image.getAttribute("data-src");
  image.setAttribute("src", dataSrc) 
});

createLSI.addEventListener('click', () => {
  if (localStorage.getItem(theme) === "normal") 
    console.log('works as expected');

  else
    console.log('something\'s wrong');
});
