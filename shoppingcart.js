const main = document.querySelector("main");
const container =document.querySelector(".container")

const carts = JSON.parse(localStorage.getItem("carts"));
const cartSrtings = localStorage

const cartsString = JSON.stringify(carts)
console.log(cartsString)

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
}

//Knappen för att slutföra köpet skall, vid klickning,
//visa en bekräftelse på köpet i en popup.

 const completePurchaseBtn = document.querySelector("#completePurchaseBtn");

 completePurchaseBtn.addEventListener("click", popUp);

 function popUp() {
    alert ("Grattis!\nDitt köp är klart!");
 }



 
 
        
