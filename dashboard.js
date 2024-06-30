document.addEventListener('DOMContentLoaded', () => {
    const cartCount = document.getElementById('cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    let cart = [];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productCard = button.parentElement;
            const productName = productCard.getAttribute('data-name');
            const productPrice = productCard.getAttribute('data-price');

            const product = {
                name: productName,
                price: parseFloat(productPrice),
                quantity: 1
            };

            addToCart(product);
            updateCartCount();
        });
    });

    function addToCart(product) {
        const existingProductIndex = cart.findIndex(item => item.name === product.name);

        if (existingProductIndex > -1) {
            cart[existingProductIndex].quantity += 1;
        } else {
            cart.push(product);
        }
    }

    function updateCartCount() {
        const totalItems = cart.reduce((total, product) => total + product.quantity, 0);
        cartCount.textContent = totalItems;
    }
});