let cart = [];

function addToCart(productId) {
    cart.push(productId);
    updateCart();
}

function updateCart() {
    const cartElement = document.getElementById("cart");
    cartElement.innerHTML = "";

    if (cart.length === 0) {
        cartElement.innerHTML = "<p>No hay productos en el carrito.</p>";
    } else {
        const ul = document.createElement("ul");

        for (let i = 0; i < cart.length; i++) {
            const li = document.createElement("li");
            li.innerText = "Producto " + cart[i];
            ul.appendChild(li);
        }

        cartElement.appendChild(ul);
    }
}
