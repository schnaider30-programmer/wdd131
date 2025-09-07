let year = new Date().getFullYear();
document.querySelector("#currentYear").innerHTML = year;
let modified = document.lastModified;
document.querySelector("#lastModified").innerHTML = "Last Modification: " + modified;