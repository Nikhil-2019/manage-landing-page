function clickFunction(z) {
    z.classList.toggle("change");
    var navbar = document.querySelector(".navbar");
    if (navbar.style.display === "block") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "block";
    }

}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("card");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


function myFunction(x) {

    var nav = document.querySelector(".navbar");
    if (x.matches) {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
}
var x = window.matchMedia("(min-width: 1280px)");
myFunction(x);
x.addEventListener("change", myFunction);