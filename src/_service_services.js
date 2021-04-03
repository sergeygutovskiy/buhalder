function init() {
    let buttons = document.getElementsByClassName("service-services__btn");
    let active_btn_index = 0;

    let titles_slider = new Swiper('.service-services__titles-slider', {
        slidesPerView: 1,
        speed: 400,
        effect: 'fade',
        allowTouchMove: false,
        fadeEffect: {
            crossFade: true
        },
        autoHeight: true,
        breakpoints: {
            1025: {
                autoHeight: false,
            }
        }
    });

    let texts_slider = new Swiper('.service-services__texts-slider', {
        slidesPerView: 1,
        speed: 400,
        effect: 'fade',
        allowTouchMove: false,
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: ".service-services__pagination",
            bulletClass: "dft-pagination__bullet",
            bulletActiveClass: "active",
            clickable: true
        },
        navigation: {
            nextEl: ".service-services__button_right",
            prevEl: ".service-services__button_left",
        },
        on: {
            slideChange: function() {
                titles_slider.slideTo(this.activeIndex);
                
                buttons[active_btn_index].classList.remove("active");
    
                buttons[this.activeIndex].classList.add("active");
                active_btn_index = this.activeIndex;
            },
        },
    });

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            buttons[active_btn_index].classList.remove("active");
    
            this.classList.add("active");
            texts_slider.slideTo(i);
        
            active_btn_index = i;
        });
    }
}

module.exports = { init };