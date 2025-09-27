const home = document.querySelector("#home");
const oldTemple = document.querySelector("#old-temple");
const newTemple = document.querySelector("#new-temple");
const bigTemple = document.querySelector("#big-temple");
const smallTemple = document.querySelector("#small-temple"); 

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

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Paris France",
        location: "Le Chesnay, France",
        dedicated: "2017, May, 21",
        area: 44175,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2054.jpg"

    },

    {
        templeName: "Cedar City Utah",
        location: "Cedar City, Utah, United States",
        dedicated: "2017, December, 10",
        area: 42657,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/cedar-city-utah-temple/cedar-city-utah-temple-2310.jpg"

    }, 

    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 24",
        area: 382207,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-62033.jpg"
    },

    {
        templeName: "Nauvoo",
        location: "Nauvoo, Illinois, United States",
        dedicated: "1846, May, 3",
        area: 50000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/nauvoo-temple/nauvoo-temple-4280.jpg"
    }
];

home.addEventListener("click", () => {
    createTempleCard(temples);
})

oldTemple.addEventListener("click", () => {
    let oldTempleArray = temples.filter(temple => {
        const oldest = parseInt(temple.dedicated.split(",")[0]);
        return oldest < 1900;
    });
    createTempleCard(oldTempleArray);
})

newTemple.addEventListener("click", () => {
    let newTempleArray = temples.filter(temple => {
        const newest = parseInt(temple.dedicated.split(",")[0]);
        return newest > 2000;
    });
    createTempleCard(newTempleArray);
})

bigTemple.addEventListener("click", () => {
    const largeTemple = temples.filter(temple => {
        largeArea = parseInt(temple.area);
        return largeArea > 90000;
    });
    createTempleCard(largeTemple);
})

smallTemple.addEventListener("click", () => {
    const smallerTemple = temples.filter(temple => {
        smaller = parseInt(temple.area);
        return smaller < 10000;
    })
    createTempleCard(smallerTemple);
})

createTempleCard(temples);

function createTempleCard(filteredTemple)
{
    document.querySelector(".card-container").innerHTML = "";
    filteredTemple.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class = "label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class = "label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class = "label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".card-container").appendChild(card);
    })
}
