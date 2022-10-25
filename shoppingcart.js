const main = document.querySelector("main");
const container =document.querySelector(".container");
const cartNumber = document.querySelector(".numbercarts");

const carts = JSON.parse(localStorage.getItem("carts"));

function initSite() {
    if (localStorage.getItem("carts")) {
    renderCarts();
    countCart();
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
