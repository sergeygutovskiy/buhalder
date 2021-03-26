
function init() {
    let close_button = document.getElementsByClassName("dft-overlay__button")[0];
    let overlay = document.getElementsByClassName("dft-overlay")[0];
    let overlay_items = document.getElementsByClassName("dft-overlay__items")[0];

    close_button.addEventListener("click", function() {
        overlay.classList.remove("active");
        overlay_items.textContent = "";
    });

    overlay_items.addEventListener("click", function() {
        overlay.classList.remove("active");
        overlay_items.textContent = "";
    });

    let triggers = document.getElementsByClassName("dft-overlay-trigger");
    for (let i = 0; i < triggers.length; i++) {
        let t = triggers[i];

        t.addEventListener("click", choose);
    }
}

function open() {
    let overlay = document.getElementsByClassName("dft-overlay")[0];
    overlay.classList.add("active");
}

function choose() {
    let overlays = document.getElementsByClassName("dft-overlay-item");
    let overlay_items = document.getElementsByClassName("dft-overlay__items")[0];

    for (let i = 0; i < overlays.length; i++) {
        let item = overlays[i];

        if (item.dataset.overlay == this.dataset.overlayTarget) {
            overlay_items.appendChild(item.childNodes[1].cloneNode(true));
            open();
            break;
        }
    }
}

module.exports = { init, open };