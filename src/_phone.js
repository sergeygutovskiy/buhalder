
function init() {
    let container = document.getElementsByClassName("floating-phone")[0];
    let open_button = document.getElementsByClassName("floating-phone__open-button")[0];
    let close_button = document.getElementsByClassName("floating-phone__close-button")[0];

    open_button.addEventListener("click", function() {
        container.classList.add("active");
    });

    close_button.addEventListener("click", function() {
        container.classList.remove("active");
    });
}


module.exports = { init, open };