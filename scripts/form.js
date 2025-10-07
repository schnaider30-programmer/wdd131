const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

const select = document.querySelector("select");

if (select) {
    products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
    })
}

const form = document.querySelector("form");

form.addEventListener("submit", () => {
    let count = localStorage.getItem("reviewCount");
    count = count ? parseInt(count, 10) + 1 : 1;
    localStorage.setItem("reviewCount", count);
});



let year = new Date().getFullYear();
document.querySelector("#currentYear").innerHTML = year;
let modified = document.lastModified;
document.querySelector("#lastModified").innerHTML = "Last Modification: " + modified;