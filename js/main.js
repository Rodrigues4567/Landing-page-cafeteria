
const mobileButton = document.querySelector('.menu-burguer-link');

mobileButton.addEventListener('click', menuShow = (e) => {
    e.preventDefault();
    let menuMobile = document.querySelector('.menu-mobile');

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    }
    else {
        menuMobile.classList.add('open');
    }
})