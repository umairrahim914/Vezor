const menu = document.getElementById('menu');
const open1 = document.getElementById('open');
const close1 = document.getElementById('close');
const atag = document.querySelectorAll('.a-tag');

open1.addEventListener('click', ()=>{
    menu.style.transform = 'translateY(0vh)';
});

close1.addEventListener('click', ()=>{
    menu.style.transform = 'translateY(-110vh)';
});

atag.forEach((anchor) => {
  anchor.addEventListener('click', () => {
    menu.style.transform = 'translateY(-110vh)';
  });
});