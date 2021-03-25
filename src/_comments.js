function init() {
    let comments_slider = new Swiper('.comments__slider_lg', {
        slidesPerView: 1,
        spaceBetween: 64,
        centeredSlides: true,
        centeredSlides: true,
        speed: 400,
        pagination: {
            el: ".comments__pagination_lg",
            bulletClass: "dft-pagination__bullet",
            bulletActiveClass: "active",
            clickable: true
        }
    });
    
    let comments_slider_md = new Swiper('.comments__slider_md', {
        slidesPerView: 1,
        spaceBetween: 64,
        centeredSlides: true,
        centeredSlides: true,
        speed: 400,
        pagination: {
            el: ".comments__pagination_md",
            bulletClass: "dft-pagination__bullet",
            bulletActiveClass: "active",
            clickable: true
        }
    });
}

module.exports = { init };