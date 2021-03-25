function init() {
    let work_slider = new Swiper(".work-timeline__body .swiper-container", {
        speed: 150,
        slidesPerView: 1,
        effect: 'fade',
        allowTouchMove: false,
        fadeEffect: {
            crossFade: true
        },
    });
    
    let work_steps = document.getElementsByClassName("work-timeline__step");
    let work_step_infos = document.getElementsByClassName("work-timeline__info");
    
    let work_step_info_active_index = 0;
    
    for (let i = 0; i < work_steps.length; i++)
    {
        let work_step = work_steps[i];
        let work_step_info = work_step_infos[i];
    
        work_step.addEventListener("click", function() {
            work_step_infos[work_step_info_active_index].classList.remove("active");
            work_step_info_active_index = i;
            work_step_info.classList.add("active");
    
            work_slider.slideTo(work_step_info_active_index);
    
            let has_active = 0;
            for (let j = 0; j <= i; j++)
            {
                if (work_steps[j].classList.contains("active"))
                {
                    has_active++;
                    continue;
                }
    
                setTimeout(() => {
                    work_steps[j].classList.add("active");
                }, (j - has_active) * 150);
            }
    
            let has_not_active = 0;
            for (let j = work_steps.length - 1; j > i; j--)
            {
                if (!work_steps[j].classList.contains("active"))
                {
                    has_not_active++;
                    continue;
                }
    
                setTimeout(() => {
                    work_steps[j].classList.remove("active");
                }, (work_steps.length - j - has_not_active - 1) * 150);
            }
        });
    }
}

module.exports = { init };