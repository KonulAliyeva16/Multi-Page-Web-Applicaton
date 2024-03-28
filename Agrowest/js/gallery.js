
// gallery js 

let allButtons = document.querySelectorAll('.head button');
let galleryRows = document.querySelectorAll('.gallery-row');

allButtons[0].classList.add('active');
galleryRows[0].classList.remove('d-none');

allButtons.forEach((btn) => {
    btn.addEventListener('click', function () {
        for (let i = 0; i < allButtons.length; i++) {
            allButtons[i].classList.remove('active')
        };
        btn.classList.add('active');
        let id = btn.getAttribute('data-id');
        let activeGallery = Array.from(galleryRows).find((row) => row.getAttribute('data-id') == id);
        for (let i = 0; i < galleryRows.length; i++) {
            galleryRows[i].classList.add('d-none')

        };
        activeGallery.classList.remove('d-none');
    })
})