const main = document.querySelector("main");
const container =document.querySelector(".container");
const cartNumber = document.querySelector(".numbercarts");

const carts = JSON.parse(localStorage.getItem("carts"));

function initSite() {
    if (localStorage.getItem("carts")) {
    renderCarts();
    countCart();
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

 const completePurchaseBtn = document.querySelector("#completePurchaseBtn");

 completePurchaseBtn.addEventListener("click", popUp);

 function popUp() {
    alert ("Grattis!\nDitt köp är klart!");
 }

 function loggedInVersion () {
    const logInStatus = document.querySelector(".logintext");

    logInStatus.innerText = "Till Min TechStore-club";
}
     
// function totalSum(){
//     const carts = JSON.parse(localStorage.getItem("carts"));
//     let sum = 0;
//     for (const product of carts) {
//         sum += value;
// }
// console.log(sum);
// }

