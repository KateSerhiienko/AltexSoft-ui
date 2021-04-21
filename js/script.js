const prev = document.querySelector(".arrow__prev"),
    next = document.querySelector(".arrow__next"),
    slider = document.querySelectorAll(".slider__img"),
    dots = document.querySelectorAll(".slider__dot"),
    dotsArea = document.querySelector(".slider__dots");

let i = slider.length - 1;

prev.addEventListener("click", () => {
    
    slider[i].classList.remove("slider__img_display");
    dots[i].classList.remove("slider__dot_selected");
    i--;
    if (i < 0) {
        i = slider.length - 1;
    }
    slider[i].classList.add("slider__img_display");
    dots[i].classList.add("slider__dot_selected");
} )

next.addEventListener("click", () => {
    
    slider[i].classList.remove("slider__img_display");
    dots[i].classList.remove("slider__dot_selected");
    i++;
    if (i > slider.length - 1) {
        i = 0;
    }
    slider[i].classList.add("slider__img_display");
    dots[i].classList.add("slider__dot_selected");
})


const burger = document.querySelector(".menu__burger"),
    burger_use = document.querySelector(".menu__burger use")
    menu = document.querySelector(".menu__list");


burger.addEventListener("click", () => {
    menu.classList.add("menu__list_open");
})

burger_use.addEventListener("click", () => {
    menu.classList.add("menu__list_open");
})

document.addEventListener("click", (event) => {
    if (event.target != burger) {
        menu.classList.remove("menu__list_open");
    }
})