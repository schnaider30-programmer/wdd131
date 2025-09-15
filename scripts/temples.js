const year = new Date().getFullYear();
document.querySelector("#currentYear").innerHTML = year;
const modified = document.lastModified;
document.querySelector("#lastModified").innerHTML = "Last Modification: " + modified;

const navigation = document.querySelector('.navigation');
const hamburgerBtn = document.querySelector('#menu');

hamburgerBtn.addEventListener("click", () => {
    navigation.classList.toggle('show');
    hamburgerBtn.classList.toggle('show');
});

