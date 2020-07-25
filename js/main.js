const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');
const welcomeContent = document.querySelector('.welcome-content');
const body = document.body;

const main = () => {
    const expandMenu = () => {
        burgerMenu.classList.toggle('burger-active');
        menu.classList.toggle('menu-active')
        welcomeContent.classList.toggle('move-content')
        body.classList.toggle('disable-scroll')
    }

    burgerMenu.addEventListener('click', expandMenu);
    menu.addEventListener('click', e => {
        const hasClass = e.target.classList.contains('menu');
        if (hasClass) { expandMenu() }
    })
    
    // swiper
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,
        autoplay: {
            delay: 2000,
        },
        breakpoints: {
            320:{
                slidesPerView: 1,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        }
    });
    // end swiper
}
document.addEventListener('DOMContentLoaded', main);

