// Fetching all the buttons
const add = document.body.querySelector('.add');
const remove = document.body.querySelector('.remove');

const startObserving = document.body.querySelector('.observe');
const stopObserving = document.body.querySelector('.disconnect');
let count = 0;

const observer = new MutationObserver((records, observer) => {
  console.log(`inside mutationObserver callback`);
});

add.addEventListener('click', addNode);
remove.addEventListener('click', removeNode);

startObserving.addEventListener('click', () => {
  observer.observe(document.body, { childList: true });
});
stopObserving.addEventListener('click', () => {
  observer.disconnect();
});

function addNode() {
  const newElement = document.createElement('div');
  newElement.classList.add('node');
  count += 1;
  newElement.setAttribute('id', count);
  document.body.appendChild(newElement);
}
function removeNode() {
  let nedStark = document.getElementById(count);
  if (nedStark) {
    nedStark.remove();
    count -= 1; 
  }
  else {
    console.log('Sorry, Ned Stark is nowhere to be found');
  }
}
