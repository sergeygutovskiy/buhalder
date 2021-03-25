function init() {
    let button_groups = document.getElementsByClassName("calculator__btn-group");
    let price_text = document.getElementsByClassName("calculator__price")[0];
    let active_buttons = [0, 0, 0];

    const prices = [
        [
            [
                [3500], [5000], [8000]
            ],
            [
                [8000], [10000], [12000]
            ],
            [
                [8000], [10000], [12000]
            ]
        ],
        [
            [
                [2500], [2500], [8000]
            ],
            [
                [5000], [10000], [12000]
            ],
            [
                [8000], [10000], [12000]
            ]
        ]
    ]

    for (let i = 0; i < button_groups.length; i++) {
        for (let j = 0; j < button_groups[i].children.length; j++) {
            
            let group = button_groups[i];
            group.childNodes[j * 2 + 1].addEventListener("click", function() {
                
                group.childNodes[active_buttons[i] * 2 + 1].classList.remove("active");
                active_buttons[i] = (j * 2) / 2;
                
                this.classList.add("active");
                price_text.childNodes[1].textContent = "от " 
                    + prices[ active_buttons[0] ][ active_buttons[1] ][ active_buttons[2] ][0];
                    + "<span> ₽/месяц </span>";
            });
        }
    }
}

module.exports = { init };