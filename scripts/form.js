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


// Incrémenter le compteur
let count = localStorage.getItem("review-count");

if (!count) {
    count = 1;
} else {
    count = parseInt(count) + 1;
}

localStorage.setItem("review-count", count);

// Afficher le compteur
document.getElementById("review-count").textContent = count;

let year = new Date().getFullYear();
document.querySelector("#currentYear").innerHTML = year;
let modified = document.lastModified;
document.querySelector("#lastModified").innerHTML = "Last Modification: " + modified;