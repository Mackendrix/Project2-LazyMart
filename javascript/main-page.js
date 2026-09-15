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
// Fucntion to disply Products
const productContainer = document.getElementById("products");
const searchInput = document.getElementById("search");
const searchResults = document.getElementById("search-results");

function displayProducts(productList){
    productContainer.innerHTML = "";

    productList.forEach((product) => {
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
        `;
    });
}

// Function to display search results
function displaySearchResults(matches) {
    searchResults.innerHTML = "";
    
    if (matches.length == 0) {
        searchResults.innerHTML = "<p>No matching products found.</p>";
    } else{
        matches.forEach((product) => {
            const productIndex = products.indexOf(product);

            searchResults.innerHTML += `
                <button class = "search-result" data-index = "${productIndex}">
                    ${product.name} - ${product.category}
                </button>
            `;
        });
    }
    searchResults.hidden = false;
};

// Function to search for items
searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.toLowerCase().trim();

    if(searchText.length == ""){
        searchResults.hidden = true;
        displayProducts(products);
        return;
    }

    const matches = products.filter((product) => {
        return (    
            product.name.toLowerCase().includes(searchText) ||
            product.category.toLowerCase().includes(searchText)
        );
    });

    displaySearchResults(matches);
});

// Function to display clicked product
searchResults.addEventListener("click", function(event) {
    const clickedResult = event.target.closest(".search-result");

    if (!clickedResult) return;

    const selectedProduct = products[clickedResult.dataset.index];

    const sameCategoryProducts = products.filter((product) => {
        return product.category === selectedProduct.category && 
                product !== selectedProduct;
    });

    displayProducts([selectedProduct, ...sameCategoryProducts]);

    searchInput.value = selectedProduct.name;
    searchResults.hidden = true
});

displayProducts(products);