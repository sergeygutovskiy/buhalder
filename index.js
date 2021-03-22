// 

function hasTouch() {
    return 'ontouchstart' in document.documentElement
        || navigator.maxTouchPoints > 0
        || navigator.msMaxTouchPoints > 0;
}

if (hasTouch()) {       // remove all the :hover stylesheets
    try {               // prevent exception on browsers not supporting DOM styleSheets properly
        let styleSheet = document.styleSheets[2];

        for (let ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
            if (!styleSheet.rules[ri].selectorText) continue;

            if (styleSheet.rules[ri].selectorText.match(':hover')) {
                styleSheet.deleteRule(ri);
            }
        }
    } catch (ex) {
        console.log(ex);
    }
}

  //

let nav_btn = document.getElementsByClassName("navigation-btn")[0];
let nav_md_links = document.getElementsByClassName("navigation_md__links")[0];

nav_btn.addEventListener("click", function() {
    this.classList.toggle("navigation-btn--active");
    nav_md_links.classList.toggle("active");
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

let comments_slider = new Swiper('.comments__slider', {
    slidesPerView: 1,
    spaceBetween: 64,
    centeredSlides: true,
    pagination: {
        el: ".comments__pagination"
    }
});