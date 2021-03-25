function init() {
    let questions = document.getElementsByClassName("question");
    let question_titles = document.getElementsByClassName("question__title");

    for (let i = 0; i < question_titles.length; i++) {
        let q = questions[i];
        let qt = question_titles[i];

        qt.addEventListener("click", function(e) {
            e.preventDefault();
            q.classList.toggle("active");
        });
    }
}

module.exports = { init };