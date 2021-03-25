function init() {
    let calc_btn_groups = document.getElementsByClassName("calculator__btn-group");
    let calc_price_text = document.getElementsByClassName("calculator__price")[0];
    let calc_active_btns = [0, 0, 0];

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
}

module.exports = { init };