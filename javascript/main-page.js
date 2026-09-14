// List of products
const products = [
    {
        name:"Hoodie",
        price:25000,
        image:"../images/clothes-cutout.png",
        category:"Clothes"
    },
     {
      name: "Headphones",
      price: 18000,
      image: "../images/Gadgets-cutout.png",
      category: "Gadgets"
    },
    {
      name: "Laptop",
      price: 450000,
      image: "../images/Laptops_edited.png",
      category: "Electronics"
    }
];
// Fucntion to disply items
const productContainer = document.getElementById("products");

products.forEach((product) => {
    productContainer.innerHTML += `
        <div class = product-card>
            <div class = "img-container">
            <img src = "${product.image}" alt = "${product.name}">
            </div>
            <div class = "info">
            <h3>${product.name}</h3>
            <p>${product.category}</p>
            <strong>₦${product.price.toLocaleString()}</strong>
            <button id = "add-item" style = "display: block">Add to Cart</button>
            </div>
        </div>
    `
});