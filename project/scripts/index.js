const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});

document.querySelectorAll(".product-card img").forEach(img => {
    const wrapper = document.createElement("div");
    wrapper.className = "image-wrapper";
    img.parentNode.insertBefore(wrapper, img);
    wrapper.appendChild(img)
})

const slides = document.querySelectorAll(".hero-slide"); 
let current = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });
}

setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
}, 5000);

const menuIcon = document.getElementById("hamburger-menu");
const navMenu = document.querySelector(".nav-menu");

menuIcon.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
});

let year = new Date().getFullYear();
document.querySelector("#currentYear").innerHTML = year;
let modified = document.lastModified;
document.querySelector("#lastModified").innerHTML = `Last Modification: ${modified}`;