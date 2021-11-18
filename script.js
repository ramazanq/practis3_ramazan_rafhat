const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
})
const menuBtn2 = document.querySelector('.menu-btn2');
let menuOpen2 = false;
menuBtn2.addEventListener('click', () => {
  if(!menuOpen2) {
    menuBtn2.classList.add('open2');
    menuOpen2 = true;
  } else {
    menuBtn2.classList.remove('open2');
    menuOpen2 = false;
  }
});