const ghost = document.getElementById('container');
const message = document.getElementById('message');
// const arr = Array(10).fill('')

ghost.addEventListener('click', onClick);

function onClick(evt) {
  if (message.style.visibility === 'visible') {
    return (message.style.visibility = 'hidden');
  }
  return (message.style.visibility = 'visible');
}
