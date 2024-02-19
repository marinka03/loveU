const ghost = document.getElementById('container');
const message = document.getElementById('message');
// const arr = Array(10).fill('')

ghost.addEventListener('click', onClick);

function onClick(evt) {
  if (message.style.opacity) {
    return (message.style.opacity = '0');
  }
  return (message.style.opacity = '1');
}
