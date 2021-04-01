function init() {
    let btn = document.getElementsByClassName("navigation_md__button")[0];
    let md_links_wrapper = document.getElementsByClassName("navigation_md__links-wrapper")[0];
    let md_links_dropdown_toggle = document.getElementsByClassName("navigation_md__dropdown-toggle")[0];
    let md_links_dropdown = document.getElementsByClassName("navigation_md-dropdown")[0];

    btn.addEventListener("click", function() {
        this.classList.toggle("active");
        md_links_wrapper.classList.toggle("active");
    });

    md_links_dropdown_toggle.addEventListener("click", function(e) {
        e.preventDefault();

        md_links_dropdown.classList.toggle("active");
    });
}

module.exports = { init };