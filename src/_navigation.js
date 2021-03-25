function init() {
    let btn = document.getElementsByClassName("navigation-btn")[0];
    let md_links_wrapper = document.getElementsByClassName("navigation_md__links-wrapper")[0];
    
    btn.addEventListener("click", function() {
        this.classList.toggle("navigation-btn--active");
        md_links_wrapper.classList.toggle("active");
    });

    let dropdown_toggles = document.querySelectorAll("[data-toggle]");

    for (let i = 0; i < dropdown_toggles.length; i++) {
        let toggle = dropdown_toggles[i];
        let dropdown = document.querySelectorAll("[data-dropdown='" + toggle.dataset.toggle + "']")[0];
        
        toggle.addEventListener("focus", function(event) {
            dropdown.classList.add("active");
        });

        toggle.addEventListener("keydown", function(event) {
            if (event.shiftKey && event.keyCode == 9)
                dropdown.classList.remove("active");
        });

        dropdown.getElementsByTagName("a")[dropdown.getElementsByTagName("a").length - 1].addEventListener("keydown", function(event) {
            if (event.keyCode == 9)
                dropdown.classList.remove("active");
        });
    }
}

module.exports = { init };