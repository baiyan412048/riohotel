let menuclose = document.getElementById('menuClose');
let menubutton = document.getElementById('menuSwitch');
let searchBlockOpen = document.getElementById('searchOpen');
let searchBlockClose = document.getElementById('searchClose');

menuclose.addEventListener('click', menuSwitch);
menubutton.addEventListener('click',menuSwitch);
searchBlockOpen.addEventListener('click',searchBlockSwitch);
searchBlockClose.addEventListener('click',searchBlockSwitch);

function menuSwitch() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('navbar__open');
  menu.classList.toggle('navbar__close');
}

function searchBlockSwitch(event) {
  event.preventDefault();
  let searchBlock = document.getElementById('searchBlock');
  searchBlock.classList.toggle('mobile__open');
}
