
const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function(event) {
    const id = event.target.dataset.id;
    if (id) {
        // remove active from other buttons
        for (let i = 0; i < btns.length; i++) {
            btns[i].classList.remove("active");
            event.target.classList.add("active");
        }
        // hide other articles
        for (let i = 0; i < articles.length; i++) {
            articles[i].classList.remove("active");
        }
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});

