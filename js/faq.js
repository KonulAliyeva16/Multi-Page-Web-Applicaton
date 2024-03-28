// faq js 

let arrowBtns = document.querySelectorAll('.faq-heading button');
let content = document.querySelectorAll('.faq-content');
let icon = document.querySelectorAll('.faq-button i');

arrowBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        content[index].classList.toggle('d-none');
        icon[index].classList.toggle('btn-after')
    });
    
})
