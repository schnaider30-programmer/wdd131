const products = [
    {
        name: "Nautica",
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
        name: "Skechers",
        description: "Women's Slip-Ins x JGoldcrown: Max Cushioning Athletic Walking Sneakers from Finish Line",
        price: "$45.00",
        rating: "★★★★☆",
        imgLink: "images/skechers.webp"
    },

    {
        name: "Movado",
        description: "men's quest swiss quartz ionic gold pvd steel 40mm watch",
        price: "$695.00",
        rating: "★★★★☆",
        imgLink: "images/watch1.webp"
    },

    {
        name: "Sarto by Franco Farto",
        description: "women's flexa elia square toe dress booties",
        price: "$200.00",
        rating: "★★★★☆",
        imgLink: "images/sarto.webp"
    },

    {
        name: "Nunn Bush",
        description: "men's jarvis slip on shoe",
        price: "$63.00",
        rating: "★★★☆☆",
        imgLink: "images/nunn-bush.webp"
    },

    {
        name: "Michael Kors",
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
        imgLink: "images/clavin-dress-covered.webp"
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
        description: "Women s VivreLuxe 34mm Rectangle Quartz Watch, Crystal Bezel, Roman Numeral Dial, Stainless Steel Bracelet",
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
        description: "Men's Brodie Lace Up Dress Oxford",
        price: "$119.00",
        rating: "★★★☆☆",
        imgLink: "images/calvin-klein-shoe.webp"
    },

    {
        name: "Marc Joseph New York",
        description: "Mens Cloud Street Hands-Free Slip On Lightweight Leather Oxfords",
        price: "$175.00",
        rating: "★★★★☆",
        imgLink: "images/marc-joseph.webp"
    },

    {
        name: "Marc Joseph New York",
        description: "Men's Elliot Road Hands-Free Slip On Technology Buckle Loafers",
        price: "$175.00",
        rating: "★★☆☆☆",
        imgLink: "images/marc-jos.webp"
    }
];

const select = document.querySelector("select");

if (select) {
    const uniqueName = new Set();

    products.forEach(product => {
        if (!uniqueName.has(product.name)) {
            uniqueName.add(product.name);
            const option = document.createElement("option");
            option.value = product.name;
            option.textContent = product.name;
            select.appendChild(option);
        }
    })
}
