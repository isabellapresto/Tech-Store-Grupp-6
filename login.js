let userArray = [
    {
        username: "admin",
        password: "1234"
    },
    {
        username: "admin2",
        password: "5678"
    },
]

if (!localStorage.getItem("userArray")) {
    localStorage.setItem("userArray", JSON.stringify(userArray));
} 

const main = document.querySelector("main");
const username = document.querySelector(".username");
const password = document.querySelector(".password");
const btnLogIn = document.getElementById("btn-login");
const newUserInput = document.querySelector(".newuser");
const newPasswordInput = document.querySelector(".newpsw");
const btnNewMember = document.getElementById("btn-newmember");

btnLogIn.addEventListener("click", checkLogIn);
btnNewMember.addEventListener("click", addNewUser);

function initSite() {

if (localStorage.getItem("username")) {
    logInSuccess();
    
}

if (localStorage.getItem("carts")) {
    countCart();
}

}

function checkLogIn() {

    const getMyUsers = localStorage.getItem("userArray");
    const userArrayUpdate = JSON.parse(getMyUsers);

    for(i=0; i < userArrayUpdate.length; i++) {
        if(username.value === userArrayUpdate[i].username && password.value === userArrayUpdate[i].password) {
            localStorage.setItem("username", username.value);     
            logInSuccess();
            return
        }
    }
    logInFail();
}


function logInSuccess() {

    const formContainer = document.querySelector(".container-wrapper");
    const logInStatus = document.querySelector(".logintext");
    const logInStatusMobile = document.querySelector(".logintext-mobile");
    const btnLogOut = document.getElementById("btn-logout");
    
    


    btnLogOut.addEventListener("click", walkOut);

    
    formContainer.style.display = "none";
    logInStatus.innerText = "Min TechStore-club";
    logInStatusMobile.innerText = "Min TechStore-club";

   

    btnLogOut.style.display = "block";

    const h1 = document.createElement("h1");
    h1.classList.add("heading-memberpage");
    h1.innerText =  `Välkommen ${localStorage.getItem("username")} till din TechStore club sida!`;
    main.appendChild(h1);

    renderOrders();

}

function logInFail() {
    const infoLogInForm = document.querySelector(".textloginform");

    infoLogInForm.innerText = "Felaktig inloggning, vänligen försök igen";
    infoLogInForm.style.color = "red";
    username.value = "";
    password.value = "";
}


function addNewUser(){

    const newUser = {
        username: newUserInput.value,
        password: newPasswordInput.value
    }

    let getAllUser = JSON.parse(localStorage.getItem("userArray"));

    getAllUser.push(newUser);

    localStorage.setItem("userArray", JSON.stringify(getAllUser));

}

function walkOut () {
    window.location.href="/index.html"
 
    localStorage.removeItem("username");
    
}

function countCart() {

    const carts = JSON.parse(localStorage.getItem("carts"));

    const cartNumber = document.querySelector(".numbercarts");

    cartNumber.innerText = carts.length;

}

function renderOrders () {

const h3 = document.createElement("h3");
h3.classList.add("heading-orderhistory");
h3.innerText = "Din Köphistorik";
main.appendChild(h3);

const containerMemberpage = document.createElement("div");
containerMemberpage.classList.add("container-memberpage");
main.appendChild(containerMemberpage);

let getAllOrders = JSON.parse(localStorage.getItem("orders")); 
let username = localStorage.getItem("username");

let orders = getAllOrders.filter(function(order) {
    return order.username == username; }); //Filtrerar ut vem som har gjort vilka ordrar, ska renderas ut på Köphistoriken

for (const order of orders) {

    const div = document.createElement("div");
    div.classList.add("div-order");
    containerMemberpage.appendChild(div);
   
    for (const product of order.products) {

        const divProduct = document.createElement("div");
        divProduct.classList.add("div-product");
        div.appendChild(divProduct);

        const img = document.createElement("img");
        img.classList.add("img_order");
        divProduct.appendChild(img);
        img.src = `/assets/${product.image}`

        const title = document.createElement("p");
        title.classList.add("order-title");
        title.innerText = product.title; 
        divProduct.appendChild(title);

        const price = document.createElement("p");
        price.classList.add("order-price");
        price.innerText = product.price + " kr"; 
        divProduct.appendChild(price);
    }
}

}