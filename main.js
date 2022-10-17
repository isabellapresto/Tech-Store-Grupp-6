var listOfProducts;

/** Get products from the json file and store it in a gobal variable */
function loadProducts() {
    fetch("./products.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {
        listOfProducts = products;
        addProductsToWebpage();
    });
}


function initSite() {
    loadProducts();
    // This would also be a good place to initialize other parts of the UI
}

/** Uses the loaded products data to create a visible product list on the website */
function addProductsToWebpage() {
    // Check your console to see that the products are stored in the listOfProducts varible.
    console.log(listOfProducts);

    const main = document.querySelector("main");
    for (const product of listOfProducts) {

        const div =document.createElement("div");
        div.classList.add("productcontainer")
        main.appendChild(div)

        const h1 = document.createElement("h1");
        h1.classList.add("css-for-title")
        h1.innerText = product.title
        div.appendChild(h1)

        const h3 = document.createElement("h3");
        h3.classList.add("css-for-description")
        h3.innerText = product.description
        div.appendChild(h3)

       const h2 = document.createElement("h2");
       h2.classList.add("css-for-price") 
       h2.innerText = product.price
       div.appendChild(h2)
    }

}

   
     

   
        
    
    
    

    // Add your code here, remember to brake your code in to smaller function blocks
    // to reduce complexity and increase readability. Each function should have
    // an explainetory comment like the one for this function, see row 22.
    
    // TODO: Remove the console.log and these comments when you've read them.
//}