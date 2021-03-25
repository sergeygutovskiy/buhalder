function init() {
    let slider = new Swiper(".work-timeline__body .swiper-container", {
        speed: 150,
        slidesPerView: 1,
        effect: 'fade',
        allowTouchMove: false,
        fadeEffect: {
            crossFade: true
        },
    });
    
    let steps = document.getElementsByClassName("work-timeline__step");
    let step_infos = document.getElementsByClassName("work-timeline__info");
    
    let active_index = 0;
    
    for (let i = 0; i < steps.length; i++) {
        let step = steps[i];
        let step_info = step_infos[i];
    
        step.addEventListener("click", function() {
            step_infos[active_index].classList.remove("active");
            step_info.classList.add("active");
            active_index = i;
    
            slider.slideTo(active_index);
    
            let has_active = 0;
            for (let j = 0; j <= i; j++) {
                if (steps[j].classList.contains("active")) {
                    has_active++;
                    continue;
                }
    
                setTimeout(() => {
                    steps[j].classList.add("active");
                }, (j - has_active) * 150);
            }
    
            let has_not_active = 0;
            for (let j = steps.length - 1; j > i; j--) {
                if (!steps[j].classList.contains("active")) {
                    has_not_active++;
                    continue;
                }
    
                setTimeout(() => {
                    steps[j].classList.remove("active");
                }, (steps.length - j - has_not_active - 1) * 150);
            }
        });
    }
}

module.exports = { init };