const products = [
    {
        name: "nautica",
        description: "Men's Modern-Fit Stretch Suit",
        price: "$395.00",
        rating: "★★★☆☆",
        imgLink: "images/nautica-suit.webp"
    },

    {
        name: "Classic Shirt",
        description: "men's 3-piece classic fit performance stretch suit",
        price: "$350.00",
        rating: "★★★★☆",
        imgLink: "images/braveman.webp"
    },

    {
        name: "Nine West",
        description: "women's kadon pointy toe block heel dress bootiest",
        price: "$99.00",
        rating: "★★★★★",
        imgLink: "images/nine-west.webp"
    },

    {
        name: "Ted Baker",
        description: "Men's Hackney Lace Up Shoe",
        price: "$133.00",
        rating: "★★★★☆",
        imgLink: "images/ted-baker.webp"
    },

    {
        name: "Reebok",
        description: "Men's Classic Leather Casual Sneakers from Finish Line",
        price: "$50.00",
        rating: "★★★★☆",
        imgLink: "images/reebok.webp"
    },

    {
        name: "Lenovo",
        description: 'LOQ 15 15ARP9 RTX 4060 Gaming Laptop, 15.6" FHD, AMD Ryzen 7 7435HS, NVIDIA RTX 4060, 12GB DDR5 RAM, 512GB SSD',
        price: "$1,129.00",
        rating: "★★★★☆",
        imgLink: "images/lenovo.webp"
    },

    {
        name: "skechers",
        description: "Women's Slip-Ins x JGoldcrown: Max Cushioning Athletic Walking Sneakers from Finish Line",
        price: "$45.00",
        rating: "★★★★☆",
        imgLink: "images/skechers.webp"
    },

    {
        name: "movado",
        description: "men's quest swiss quartz ionic gold pvd steel 40mm watch",
        price: "$695.00",
        rating: "★★★★☆",
        imgLink: "images/watch1.webp"
    },

    { 
        name: "sarto by franco sarto",
        description: "women's flexa elia square toe dress booties",
        price: "$200.00",
        rating: "★★★★☆",
        imgLink: "images/sarto.webp"
    },

    {
        name: "nunn bush",
        description: "men's jarvis slip on shoe",
        price: "$63.00",
        rating: "★★★☆☆",
        imgLink: "images/nunn-bush.webp"
    },

    {
        name: "michael kors",
        description: "men's classic-fit wool-blend stretch solid vested suit separates",
        price: "$460.00",
        rating: "★★★★☆",
        imgLink: "images/micheal.webp"
    },

    {
        name: "Kenneth Cole Reaction",
        description: "Men's Ready Flex Slim-Fit Suit",
        price: "$395.00",
        rating: "★★★★☆",
        imgLink: "images/kenneth-cole.webp"
    },

    {
        name: "Calvin Klein",
        description: "Men's Slim-Fit Wool-Blend Stretch Suit Separates",
        price: "$395.00",
        rating: "★★★★☆",
        imgLink: "images/calvin-klein.webp"
    },

    {
        name: "Tommy Hilfiger",
        description: "Men's Modern-Fit Wool TH-Flex Stretch Suit Separates Jacket",
        price: "$460.00",
        rating: "★★★★☆",
        imgLink: "images/tommy-hilfiger.webp"
    },

    {
        name: "Donna Karan New York",
        description: "Women's Twist Front Belted Sweater Dress",
        price: "$169.00",
        rating: "★★★☆☆",
        imgLink: "images/donna-karan-ny.webp"
    },

    {
        name: "Calvin Klein",
        description: "Women's Square-Neck Sheath Dress",
        price: "$99.98",
        rating: "★★★☆☆",
        imgLink: "images/clavin-dress-covered.webp"
    },

    {
        name: "Calvin Klein",
        description: "Women's Short-Sleeve Fit & flare Dress",
        price: "$129.00",
        rating: "★★★☆☆",
        imgLink: "images/calvin-dress.webp"
    },

    {
        name: "Anne Klein",
        description: "Women's Printed Twist-Front Long-Sleeve Maxi Dress",
        price: "$149.00",
        rating: "★★★★☆",
        imgLink: "images/anne-klein.webp"
    },

    {
        name: "Stuhrling",
        description: "Women's VivreLuxe 34mm Rectangle Quartz Watch, Crystal Bezel, Roman Numeral Dial, Stainless Steel Bracelet",
        price: "$645.00",
        rating: "★★★★☆",
        imgLink: "images/stuhrling.webp"
    },

    {
        name: "Vince Camuto",
        description: "Men's Gunmetal Gray Stainless Steel Link Band Compatible with 42mm, 44mm, 45mm, Ultra, Ultra2 Apple Watch",
        price: "$75.00",
        rating: "★★★★☆",
        imgLink: "images/vince-camuto.webp"
    },

    {
        name: "Michael Kors",
        description: "Women's Izzy Three-Hand Gold-Tone Stainless Steel Watch, 28mm",
        price: "$225.00",
        rating: "★★★★☆",
        imgLink: "images/michael-kors.webp"
    },

    {
        name: "Tissot",
        description: "Women's Swiss Everytime Stainless Steel Bracelet Watch 34mm",
        price: "$315.00",
        rating: "★★★★☆",
        imgLink: "images/tissot.webp"
    },

    {
        name: "DV Dolce Vita",
        description: "Women's Elleganza Buckle Strap Two Piece Pumps",
        price: "$69.00",
        rating: "★★★★☆",
        imgLink: "images/dv-dolce-vita.webp"
    },

    {
        name: "Madden Girl",
        description: "Women's Vixen Bow Slingback Kitten Heel Pumps",
        price: "$55.00",
        rating: "★★★★☆",
        imgLink: "images/madden-girl.webp"
    },

    {
        name: "Kenneth Cole New York",
        description: "Women's Romi Ankle Sling Back Pumps",
        price: "$129.00",
        rating: "★★★★☆",
        imgLink: "images/women-shoe-kenneth.webp"
    },

    {
        name: "Lacoste",
        description: "Men's Bayliss 119 1 U Sneakers",
        price: "$98.00",
        rating: "★★★★☆",
        imgLink: "images/lacoste-sneackers.webp"
    },

    {
        name: "Calvin Klein",
        description: "Men's Brodie Lace Up Shoe Dress Oxford ",
        price: "$119.00",
        rating: "★★★☆☆",
        imgLink: "images/calvin-klein-shoe.webp"
    },

    {
        name: "Marc Joseph New York",
        description: "Men's Cloud Street Hands-Free Slip On Lightweight Leather Oxford Shoe",
        price: "$175.00",
        rating: "★★★★☆",
        imgLink: "images/marc-joseph.webp"
    },

    {
        name: "Marc Joseph New York",
        description: "Men's Elliot Road Hands-Free Slip On Technology Buckle Loafers Shoe",
        price: "$175.00",
        rating: "★★☆☆☆",
        imgLink: "images/marc-jos.webp"
    }
];

const isMen = p => {
    const desc = p.description.toLowerCase();
    return desc.startsWith("men's") || desc.includes("men's ");
};

const isWomen = p => {
    const desc = p.description.toLowerCase();
    return desc.startsWith("women's") || desc.includes("women's ");
};

const accessory = products.filter(p => { return !p.description.toLowerCase().includes("women") && !p.description.toLowerCase().includes("men") });

const menShoe = products.filter(product => isMen(product) && product.description.toLowerCase().includes("shoe") && !product.description.toLowerCase().includes("sneaker") && !product.description.toLowerCase().includes("suit") && !product.description.toLowerCase().includes("women's"));

const menSuit = products.filter(product => isMen(product) && product.description.toLowerCase().includes("suit") && !product.description.toLowerCase().includes("women's"));

const menWatch = products.filter(product => !product.description.toLowerCase().includes("women") && isMen(product) && (product.description.toLowerCase().includes("watch") || product.description.toLowerCase().includes("bracelet")));

const womenWatch = products.filter(product => product.description.toLowerCase().includes("women") && isWomen(product) && (product.description.toLowerCase().includes("watch") || product.description.toLowerCase().includes("bracelet")));

const menSneakers = products.filter(product => isMen(product) && product.description.toLowerCase().includes("sneaker") && !product.description.toLowerCase().includes("women's"));


const womenDress = products.filter(product => isWomen(product) && product.description.toLowerCase().includes("dress") && !product.description.toLowerCase().includes("shoe") && !product.description.toLowerCase().includes("boot") && !product.description.toLowerCase().includes("pump"));


const womenSneakers = products.filter(product => isWomen(product) && product.description.toLowerCase().includes("sneaker"));

const womenShoe = products.filter(product => isWomen(product) && (product.description.toLowerCase().includes("shoe") || product.description.toLowerCase().includes("toe") || product.description.toLowerCase().includes("pump")) && !product.description.toLowerCase().includes("sneaker") && !(product.description.toLowerCase().includes("dress") && !product.description.toLowerCase().includes("toe")));

const productCollection = [
    { data: menShoe, id: "shoe-collection" },
    { data: womenShoe, id: "women-shoe-collection" },
    { data: menSuit, id: "suit-collection" },
    { data: menSneakers, id: "sneaker-collection" },
    { data: womenSneakers, id: "women-sneaker-collection" },
    { data: womenDress, id: "dresses" },
    { data: accessory, id: "tech-collection" },
    { data: menWatch, id: "men-watch" },
    { data: womenWatch, id: "women-watch" }
];

productCollection.forEach(({ data, id }) => {
    createProductCard(data, id);
});

function createProductCard(productArray, nameContainer) {

    const container = document.querySelector(`.${nameContainer}`)

    productArray.forEach(product => { 
        let card = document.createElement("div");
        card.classList.add("product-card");


        let img = document.createElement("img");
        img.setAttribute("src", product.imgLink);
        img.setAttribute("alt", product.description);
        img.setAttribute("loading", "lazy");

        let wrapper = document.createElement("div");
        wrapper.className = "image-wrapper";  //same thing as classList.add()
        wrapper.appendChild(img);


        let h2 = document.createElement("h2");
        h2.innerHTML = product.name;

        let description = document.createElement("p");
        description.innerHTML = product.description;
        description.classList.add("description");

        let price = document.createElement("p");
        price.innerHTML = product.price;
        price.classList.add("price");

        let stars = document.createElement("div");
        stars.classList.add("stars");
        stars.innerHTML = product.rating;

        const button = document.createElement("button");
        button.className = "add-to-cart";
        button.setAttribute("type", "button");
        button.textContent = "Add to Cart"



        card.appendChild(wrapper);
        card.appendChild(h2);
        card.appendChild(description);
        card.appendChild(price);
        card.appendChild(stars);
        card.appendChild(button)
        const cardContainer = document.querySelector(`.${nameContainer} .product-grid`);

        cardContainer.appendChild(card);
        container.appendChild(cardContainer);
    });

    //const container = document.getElementsByClassName(nameContainer[0]);
    //  // because getElementByClassName return a collection like an Array

}

let cartCount = localStorage.getItem("cartCount");
cartCount = cartCount ? parseInt(cartCount) : 0;

const countDisplay = document.getElementById("cart-count")
countDisplay.textContent = cartCount;

const buttons = document.querySelectorAll(".add-to-cart");

buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        cartCount++;
        countDisplay.textContent = cartCount;
        localStorage.setItem("cartCount", cartCount);

        const product = products[index];

        let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        cartItems.push(product);

        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    })
})