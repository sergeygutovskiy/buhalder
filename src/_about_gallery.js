function init() {    
    let gallery_slider = new Swiper('.about-gallery__slider', {
        slidesPerView: 1,
        speed: 400,
        spaceBetween: 48,
        allowTouchMove: false,
        pagination: {
            el: ".about-gallery__pagination",
            bulletClass: "dft-pagination__bullet",
            bulletActiveClass: "active",
            clickable: true
        },
        navigation: {
            nextEl: ".about-gallery__button_right",
            prevEl: ".about-gallery__button_left",
        },
        breakpoints: {
            601: {
                slidesPerView: 2,
            },
            1025: {
                slidesPerView: 3,
            },
        }
    });   
}

module.exports = { init };