//

let nav_btn = document.getElementsByClassName("navigation-btn")[0];
let nav_md_links_wrapper = document.getElementsByClassName("navigation_md__links-wrapper")[0];

nav_btn.addEventListener("click", function() {
    this.classList.toggle("navigation-btn--active");
    nav_md_links_wrapper.classList.toggle("active");
});

// 

const prices = [
    // 2 options
    [
        // 3 options
        [
            // 3 options
            [
                3500
            ],
            [
                5000
            ],
            [
                8000
            ]
        ],
        [
            // 3 options
            [
                8000
            ],
            [
                10000
            ],
            [
                12000
            ]
        ],
        [
            // 3 options
            [
                8000
            ],
            [
                10000
            ],
            [
                12000
            ]
        ]
    ],
    [
        // 3 options
        [
            // 3 options
            [
                2500
            ],
            [
                2500
            ],
            [
                8000
            ]
        ],
        [
            // 3 options
            [
                5000
            ],
            [
                10000
            ],
            [
                12000
            ]
        ],
        [
            // 3 options
            [
                8000
            ],
            [
                10000
            ],
            [
                12000
            ]
        ]
    ]
]

let calc_btn_groups = document.getElementsByClassName("calculator__btn-group");
let calc_price_text = document.getElementsByClassName("calculator__price")[0];
let calc_active_btns = [0, 0, 0];

for (let i = 0; i < calc_btn_groups.length; i++)
{
    for (let j = 0; j < calc_btn_groups[i].children.length; j++)
    {
        calc_btn_groups[i].childNodes[j * 2 + 1].addEventListener("click", function() {
            calc_btn_groups[i].childNodes[calc_active_btns[i] * 2 + 1].classList.remove("active");
            calc_active_btns[i] = (j * 2) / 2;
            
            this.classList.add("active");
            calc_price_text.childNodes[1].textContent = "от " 
                + prices[calc_active_btns[0]][calc_active_btns[1]][calc_active_btns[2]][0];
                + "<span> ₽/месяц </span>";
        });
    }
}

//

let dropdown_toggles = document.querySelectorAll("[data-toggle]");

for (let i = 0; i < dropdown_toggles.length; i++)
{
    let toggle = dropdown_toggles[i];
    let dropdown = document.querySelectorAll("[data-dropdown='" + toggle.dataset.toggle + "']")[0];
    
    toggle.addEventListener("focus", function(event) {
        dropdown.classList.add("active");
    });

    toggle.addEventListener("keydown", function(event) {
        if (event.shiftKey && event.keyCode == 9) {
            dropdown.classList.remove("active");
        }
    });

    dropdown.getElementsByTagName("a")[dropdown.getElementsByTagName("a").length - 1].addEventListener("keydown", function(event) {
        if (event.keyCode == 9) {
            dropdown.classList.remove("active");
        }
    });
}

//

let buh_services_nav = document.getElementsByClassName("buh-services__nav")[0];
let buh_services_slider = document.getElementsByClassName("buh-services__slider")[0];
let buh_services_active_btn_index = 0;

function buh_services_btn_click(index)
{
    buh_services_nav.childNodes[buh_services_active_btn_index * 2 + 1].classList.remove("active");
    buh_services_slider.childNodes[buh_services_active_btn_index * 2 + 1].classList.remove("active");

    buh_services_active_btn_index = index;
    
    buh_services_nav.childNodes[index * 2 + 1].classList.add("active");
    buh_services_slider.childNodes[index * 2 + 1].classList.add("active");
}

//

let questions = document.getElementsByClassName("question");
let question_titles = document.getElementsByClassName("question__title");

for (let i = 0; i < question_titles.length; i++)
{
    let q = questions[i];
    let qt = question_titles[i];

    qt.addEventListener("click", function(e) {
        e.preventDefault();

        q.classList.toggle("active");
    });
}

// 

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

// 

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

//

let service_main_slider = new Swiper('.service-main__slider', {
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
    },
});

let service_main_gallery_slider = new Swiper('.service-main__gallery-slider', {
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

service_main_slider._slidePrev = function() {
    service_main_slider.slidePrev();
    service_main_gallery_slider.slidePrev();
}

service_main_slider._slideNext = function() {
    if (service_main_slider.activeIndex < service_main_slider.slides.length - 1) {
        service_main_slider.slideNext();
        service_main_gallery_slider.slideNext();
    }
}

document.getElementsByClassName("service-main__button_left")[0].addEventListener("click", service_main_slider._slidePrev);
document.getElementsByClassName("service-main__button_right")[0].addEventListener("click", service_main_slider._slideNext);