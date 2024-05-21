
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

let swiper = new Swiper('.slide-content', {
    loop: true,
    slidesPerView: 3,
    grabCursor: true,
    spaceBetween: 22,
  
    pagination: {
      el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 2,
        },
        780: {
            slidesPerView: 3,
        }
    },

});