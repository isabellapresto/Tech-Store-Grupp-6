const main = document.querySelector("main");
const div1 = document.createElement("div");
const firsth3 = document.createElement("h3");
const p = document.createElement("p");
const button = document.createElement("button");

const carts = JSON.parse(localStorage.getItem("carts"));

function initSite() {
    if (localStorage.getItem("carts")) {
    renderCarts();
} 
}

initSite();

function renderCarts() {

main.innerHTML ="";

for (const product of carts) {

    const div =document.createElement("div");
    div.classList.add("productcontainer_cart")
    main.appendChild(div)

    const h3 = document.createElement("h3");
    h3.classList.add("cart_title")
    h3.innerText = product.title
    div.appendChild(h3)

    const img = document.createElement("img");
    img.classList.add("img_cart");
    div.appendChild(img);
    img.src = `/assets/${product.image}`

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

    eraseBtn.addEventListener("click", removeCart);

 
   }

}

function removeCart(event) {
    const index = carts.indexOf(event.target.innerText);
    carts.splice(index, 1);
    console.log(index);
    renderCarts();
}
