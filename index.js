let nav_btn = document.getElementsByClassName("navigation-btn")[0];
let nav_md_links = document.getElementsByClassName("navigation_md__links")[0];
let nav_md_services_dropdown_btn = document.getElementsByClassName("navigation_md__link_services")[0];
let nav_md_services_dropdown = document.getElementsByClassName("navigation_md-dropdown")[0];

nav_btn.addEventListener("click", function() {
    this.classList.toggle("navigation-btn--active");
    nav_md_links.classList.toggle("navigation_md__links--active");
});

nav_md_services_dropdown_btn.addEventListener("click", function(e) {
    e.preventDefault();
    nav_md_services_dropdown.classList.toggle("navigation_md-dropdown--active");
});


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

// for (let i = 0; i < calc_btn_groups.length; i++)
// {
//    for (let j = 0; j < calc_btn_groups[i].children.length; j++)
//    {
//        calc_btn_groups[i].childNodes[j * 2 + 1].addEventListener("click", function() {
//            if (this.classList.contains("active")) return;
//
//            let temp = Array.prototype.slice.call( calc_btn_groups);
//            let index = temp.indexOf( this.parentElement);
//            
//            for (let k = 0; k < calc_btn_groups[index].childNodes.length; k++)
//            {
//                if (k * 2 + 1 == j * 2 + 1) continue;
//                else if (calc_btn_groups[index].childNodes[k * 2 + 1].classList.contains("active"))
//                {
//                    calc_btn_groups[index].childNodes[k * 2 + 1].classList.remove("active");
//                    this.classList.add("active");
//                    break;
//                }
//            }
//        });
//    }
// }