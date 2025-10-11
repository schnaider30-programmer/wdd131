const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

const cartList = document.getElementById("cart-items");
const totalDisplay = document.getElementById("total-price");

let total = 0;
cartCount = localStorage.getItem("cartCount");
cartCount = cartCount ? parseInt(cartCount) : 0;

const countDisplay = document.getElementById("cart-count")
countDisplay.textContent = cartCount;

cartItems.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `
    <img src="${item.imgLink}" alt="${item.description}" loading="lazy" class="checkout-img">
    <div class="checkout-details">
        <h3>${item.name}</h3>
        <p class="price">${item.price}</p>
    </div>
    `;
    cartList.appendChild(li);

    //convertire le prix en nombre en retirant le "$"
    const priceNum = parseFloat(item.price.replace("$", ""));
    total += priceNum;
});

totalDisplay.textContent = `Total : $${total.toFixed(2)}`;

const confirmationBtn = document.getElementById("confirm-order");

confirmationBtn.addEventListener("click", () => {
    if (cartItems.lengh === 0) return;

    let history = JSON.parse(localStorage.getItem("orderHistory")) || [];
    history.push({
        date: new Date().toISOString(),
        items: cartItems
    });

    localStorage.setItem("history", JSON.stringify(history)); //locale storage can only store strings, so JSON.stringify transform the objet history in to a string

    //clear cart
    localStorage.removeItem("cartItems");
    localStorage.removeItem("cartCount");

    //reset display element in page 
    cartList.innerHTML = "";
    totalDisplay.textContent = "Total : $0.00";
    if (cartItems.length > 0) {
        showConfirmationMessage("Your order has been sealed in the Imperial Vault!");
    }
    else {
        showConfirmationMessage("The vault is empty noble one. Select your items before sealing the order.")
    };

});

function showConfirmationMessage(message) {
    const overlay = document.createElement("div");
    overlay.className = "Confirmation-overlay";

    const box = document.createElement("div");
    box.className = "confirmation-box";
    box.textContent = message;

    overlay.appendChild(box);

    document.body.insertBefore(overlay, document.body.firstChild);

    setTimeout(() => { overlay.remove(); }, 3000);

}

let year = new Date().getFullYear();
document.querySelector("#currentYear").innerHTML = year;
let modified = document.lastModified;
document.querySelector("#lastModified").innerHTML = `Last Modification: ${modified}`;