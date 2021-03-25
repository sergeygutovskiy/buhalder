function init() {
    let buh_services_nav = document.getElementsByClassName("service-info__nav")[0];
    let buh_services_slider = document.getElementsByClassName("service-info__slider")[0];
    let buh_services_active_btn_index = 0;

    function click(index)
    {
        buh_services_nav.childNodes[buh_services_active_btn_index * 2 + 1].classList.remove("active");
        buh_services_slider.childNodes[buh_services_active_btn_index * 2 + 1].classList.remove("active");

        buh_services_active_btn_index = index;
        
        buh_services_nav.childNodes[index * 2 + 1].classList.add("active");
        buh_services_slider.childNodes[index * 2 + 1].classList.add("active");
    }
}

module.exports = { init };