const statusDiv = document.getElementById("status");
const productsDiv = document.getElementById("products");

statusDiv.textContent = "Loading products...";

fetch("https://dummyjson.com/products")
    .then(function(response) {
        console.log("Response Status:", response.status);

        if (!response.ok) {
            throw new Error("Request failed with status " + response.status);
        }

        return response.json();
    })
    .then(function(data) {
        const products = data.products;
        console.log("Brand of first product:", products[0].brand);

        statusDiv.textContent = "Products loaded successfully!";
        productsDiv.innerHTML = "";

        // Display at least 6 products
        products.slice(0, 6).forEach(function(product) {
            const card = document.createElement("div");
            card.className = "product-card";
            card.innerHTML = `
                <img src="${product.thumbnail}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>Brand: ${product.brand}</p>
                <p class="price">$${product.price}</p>
            `;
            productsDiv.appendChild(card);
        });
    })
    .catch(function(error) {
        statusDiv.textContent = "Error: " + error.message;
        console.error(error);
    });