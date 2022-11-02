const main = document.querySelector("main");
const div1 = document.createElement("div");
const firsth1 = document.createElement("h1");
const firsth3 = document.createElement("h3");
const firsth2 = document.createElement("h2");

var listOfProducts;

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

    if (localStorage.getItem("carts")) {
        countCart();
    }

    if (localStorage.getItem("username")) {
        loggedInVersion();
    }
}

function addProductsToWebpage() {
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

        const img = document.createElement("img");
        img.classList.add("css-for-image");
        div.appendChild(img);
        img.src = `assets/${product.image}`

        const h2 = document.createElement("h2");
        h2.classList.add("css-for-price") 
        h2.innerText = product.price + " " + "kr";
        div.appendChild(h2)

        const addBtn = document.createElement("button");
        addBtn.classList.add("css-for-addBtn");
        addBtn.innerText = "Lägg till i kundvagnen";
        div.appendChild(addBtn);
        const i = document.createElement("i");
        i.classList.add("fa-solid");
        i.classList.add("fa-cart-arrow-down");
        addBtn.appendChild(i);

        addBtn.addEventListener("click", () => {
            const cart = {
                title: product.title,
                image: product.image,
                price: product.price,
            };

            if (!localStorage.getItem("carts")) {
                localStorage.setItem("carts", JSON.stringify([cart]));
            } else {
                const carts = JSON.parse(localStorage.getItem("carts"));
                carts.push(cart);
                localStorage.setItem("carts", JSON.stringify(carts));
            }

        countCart();
       });
    }
}

function countCart() {
    const carts = JSON.parse(localStorage.getItem("carts"));
    const cartNumber = document.querySelector(".numbercarts");
    cartNumber.innerText = carts.length;
}

function loggedInVersion () {
    const logInStatus = document.querySelector(".logintext");
    const logInStatusMobile = document.querySelector(".logintext-mobile")
    logInStatus.innerText = "Till Min TechStore-club";
    logInStatusMobile.innerText = "Till Min TechStore-club";
}
