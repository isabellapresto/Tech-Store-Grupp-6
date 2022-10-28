const main = document.querySelector("main");
const container =document.querySelector(".container");
const cartNumber = document.querySelector(".numbercarts");

const carts = JSON.parse(localStorage.getItem("carts"));

function initSite() {
    if (localStorage.getItem("carts")) {
    renderCarts();
    countCart();
    totalPrice();
} 

if (localStorage.getItem("username")) {
    loggedInVersion();
}
}

initSite();

function renderCarts() {

container.innerHTML ="";

for (const product of carts) {

    const div =document.createElement("div");
    div.classList.add("productcontainer_cart")
    container.appendChild(div)

    const img = document.createElement("img");
    img.classList.add("img_cart");
    div.appendChild(img);
    img.src = `/assets/${product.image}`

     const h1 = document.createElement("h1");
    h1.classList.add("cart_title")
    h1.innerText = product.title
    div.appendChild(h1)

   const p = document.createElement("p");
    p.classList.add("price_cart") 
    p.innerText = product.price + " " + "kr";
    div.appendChild(p);

   const eraseBtn = document.createElement("button"); 
   eraseBtn.classList.add("eraseBtn_cart");
   eraseBtn.innerText = "Ta bort";
   div.appendChild(eraseBtn);
   const i = document.createElement("i");
   i.classList.add("fa-solid");
   i.classList.add("fa-trash-can");
   eraseBtn.appendChild(i);

   eraseBtn.addEventListener("click", () => {

    const index = carts.indexOf(product);
    carts.splice(index, 1);
    
    if (carts.length > 0) {
         localStorage.setItem("carts", JSON.stringify(carts));
        } else {
            localStorage.removeItem("carts");
        }

        renderCarts();
        countCart();
        totalPrice () 
    });

   }
}

function countCart() {

    const cartNumber = document.querySelector(".numbercarts");

    if (localStorage.getItem("carts")) {
        cartNumber.innerText = carts.length;
    } else {
        cartNumber.innerText = "";
    }
}

//Knappen för att slutföra köpet skall, vid klickning,
//visa en bekräftelse på köpet i en popup.
//När man bekräftar ett köp skall kundvagnen tömmas

 const completePurchaseBtn = document.querySelector(".completePurchaseBtn");

 completePurchaseBtn.addEventListener("click", createOrder);

 function createOrder() {

    alert ("Grattis!\nDitt köp är klart!");

    const products = JSON.parse(localStorage.getItem("carts"));
    const total = totalPrice();
    const username = localStorage.getItem("username");

    const order = {
        products,
        total,
        username,
    }

    if (!localStorage.getItem("orders")) {
        localStorage.setItem("orders", JSON.stringify([order]))
    } else {
        const orders = JSON.parse(localStorage.getItem("orders"))
        orders.push(order)
        localStorage.setItem("orders", JSON.stringify(orders))
    }

   localStorage.removeItem("carts");
   renderCarts()
   container.innerHTML = "";
   countCart()
   const totalPriceText = document.querySelector(".totalpricetext");
   totalPriceText.innerText = "Din kundvagn är nu tom!";
   completePurchaseBtn.style.display ="none";
}

 function loggedInVersion () {
    const logInStatus = document.querySelector(".logintext");
    const logInStatusMobile = document.querySelector(".logintext-mobile");
    
    logInStatus.innerText = "Till Min TechStore-club";
    logInStatusMobile.innerText = "Till Min TechStore-club";
}
     
function totalPrice () {

    const totalPrice = carts.reduce((total, item) => {
        return total + item.price;
    }, 0);

    const totalPriceText = document.querySelector(".totalpricetext");

    totalPriceText.innerText = "Totalt pris: " + totalPrice + " kr";

}