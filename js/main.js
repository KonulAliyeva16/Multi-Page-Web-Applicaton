// menu bar js 
let openBtn = document.querySelector('.menu button');
let closeBtn = document.querySelector('.close-btn');
let menuList = document.querySelector('.menu-list');



openBtn.addEventListener('click', () => {
    menuList.classList.remove('d-none');
});

closeBtn.addEventListener('click', () => {
    menuList.classList.add('d-none');
});

let topHeader = document.querySelector('.top-header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 280) {
        topHeader.classList.add('fixed-top')
    } else {
        topHeader.classList.remove('fixed-top')
    }
});



// filter dropdown js 

let filterBtnDown = document.querySelectorAll('.filter-btn');
let filterList = document.querySelectorAll('.filter-list');
let filterIcon = document.querySelectorAll('.filter-top i');

filterBtnDown.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        filterList[index].classList.toggle('d-none');
        filterIcon[index].classList.toggle('btn-after')
    })
});


