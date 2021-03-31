function init() {
    let slides = document.getElementsByClassName("blog-articles__items-wrapper");
    let buttons = document.getElementsByClassName("blog-articles__btn");
    let active_btn_index = 0;

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            buttons[active_btn_index].classList.remove("active");
            slides[active_btn_index].classList.remove("active");
    
            this.classList.add("active");
            slides[i].classList.add("active");
        
            active_btn_index = i;
        });
    }
}

module.exports = { init };