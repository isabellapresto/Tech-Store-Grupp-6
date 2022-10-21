const main = document.querySelector("main");
const div1 = document.createElement("div");
const firsth3 = document.createElement("h3");
const p = document.createElement("p");
const button = document.createElement("button");

const carts = JSON.parse(localStorage.getItem("carts"));

function init() {
    if (localStorage.getItem("carts")) {
    renderCarts();
} 
}

init();

function renderCarts() {

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

/**
function removeCart(event) {
    const carts = JSON.parse(localStorage.getItem("carts"));

    const index = carts.indexOf(event.target.innerText);
    carts.splice(index, 1);
    localStorage.setItem("carts", JSON.stringify(carts));
    renderCarts();
}*/










// //Function hämta produkter från LS
// function renderSuccsessfulUL(){
//  const loggedInUser = localStorage.getItem ("username")
//  text.innerText = "Välkommen " + loggedInUser + " !"
//  form.style.display = "none";
//  logOutBtn.style.display = "block";
//  }

//  const nameInput = document.querySelector("input");
//  const addButton = document.querySelector(".add_button");
//  const nameContainer = document.querySelector("div");
//  const eraseButton = document.querySelector(".erase_buton");
 
//  addButton.addEventListener("click",() => {
//   const userName = nameInput.value;
//   localStorage.setItem("user", userName);
//   nameInput.value = ""
//  printName();
//  checkUser(); //kallar på funktion DIREKTnär man klickar på knappen
//  });
 
//  //SKRIVER UT ALLA NAMN PÅ SIDAN OCH ALLA SPARAS TILLS MAN UPPDATERAR SIDAN
//  // function printName(){
//  //  const userName = localStorage.getItem("user");
//  //  const h1 = document.createElement("h1");
//  //  h1.innerText = userName;
//  //  nameContainer.appendChild(h1);
//  // }
//  // printName ();//kallar på funktion





//  addBtn.addEventListener("click", () => {
//   const cart = {
//       title: product.title,
//       image: product.image,
//       price: product.price,
//   };

//   if (!localStorage.getItem("carts")) {
//       localStorage.setItem("carts", JSON.stringify([cart]));
//   } else {
//       const carts = JSON.parse(localStorage.getItem("carts"));
//       carts.push(cart);
//       localStorage.setItem("carts", JSON.stringify(carts));
//   }
//  });
  