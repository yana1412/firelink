const slider = document.querySelector('#slider');
const arrows = document.querySelectorAll('.arrow');
const firstCartWidth = slider.querySelector('.categories__link').offsetWidth;
const loginBtn = document.querySelector('#login');
const registerBtn = document.querySelector('#register');
const modalWindow = document.querySelector('#modal');
const menuBtn = document.querySelector('#btn-menu');
const menu = document.querySelector('#menu');

arrows.forEach( btn =>{
    btn.addEventListener('click', ()=>{
        slider.scrollLeft += btn.id === 'left' ? -firstCartWidth : firstCartWidth;
    })
})   

loginBtn.addEventListener('click', () => {
    modalWindow.style.display = 'block';
})

registerBtn.addEventListener('click', () => {
    modalWindow.style.display = 'block';
})

modalWindow.addEventListener('click', (e) => {
    if (e.target.classList[0] !== 'modal-inner') {
        modalWindow.style.display = 'none';
    }
})   

menuBtn.addEventListener('click', () =>{
    menu.classList.toggle('menu__show-js');
})

