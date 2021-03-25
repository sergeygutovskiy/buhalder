function init() {
    let slider = new Swiper('.service-main__slider', {
        slidesPerView: 1,
        speed: 400,
        effect: 'fade',
        allowTouchMove: false,
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: ".service-main__pagination",
            bulletClass: "dft-pagination__bullet",
            bulletActiveClass: "active",
            clickable: true
        },
        navigation: {
            nextEl: ".service-main__button_right",
            prevEl: ".service-main__button_left",
        },
        on: {
            slideChange: function() {
                gallery_slider.slideTo(this.activeIndex);
            },
        },
    });
    
    let gallery_slider = new Swiper('.service-main__gallery-slider', {
        slidesPerView: 1,
        speed: 400,
        spaceBetween: 48,
        allowTouchMove: false,
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