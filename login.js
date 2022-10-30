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
// Ska denna lista vara helt dynamisk, eller är detta okej att utgå ifrån?

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
    const btnLogOutMobile = document.getElementById("btn-logout-mobile");
    


    btnLogOut.addEventListener("click", walkOut);

    btnLogOutMobile.addEventListener("click", walkOut);

    formContainer.style.display = "none";
    logInStatus.innerText = "Min TechStore-club";
    logInStatusMobile.innerText = "Min TechStore-club";
    
    btnLogOut.style.display = "block";
    btnLogOutMobile.style.display = "block";
    
    const h1 = document.createElement("h1");
    h1.classList.add("heading-memberpage");
    h1.innerText =  `Välkommen ${localStorage.getItem("username")} till din TechStore club sida!`;
    main.appendChild(h1);

    const div = document.createElement("div");
    div.classList.add("container-memberpage");
    main.appendChild(div);

    const h3 = document.createElement("h3");
    h3.classList.add("heading-orderhistory");
    h3.innerText = "Din Köphistorik";
    div.appendChild(h3);

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
    //Ska denna funktion inkl. Logga ut knappen nås från alla sidor? Nås från medlemssidan nu och övriga sidor har länk till medlemssidan men ingen Logga ut knapp
}

function countCart() {

    const carts = JSON.parse(localStorage.getItem("carts"));

    const cartNumber = document.querySelector(".numbercarts");

    cartNumber.innerText = carts.length;

}

function renderOrders () {

let getAllOrders = JSON.parse(localStorage.getItem("orders"));
let username = localStorage.getItem("username");

let orders = getAllOrders.filter(function(order) {
    return order.username == username; });

orders.forEach((order) => {

    const orderHistory = `${JSON.stringify(order.products)}`;
    //Totalpris hänger inte med till order.
    //Products är en array inom objectet order som skickas till listan i localstorage. Så huvudarrayen är order, inom den finns products array.
    //Hur når man products??? Löser vi det kan vi hitta värdena som ska renderas ut.

    const div = document.createElement("div");
    const h4 = document.createElement("h4");
    const h5 = document.createElement ("h5");

    h4.innerText = orderHistory;

    console.log(orderHistory);

    div.appendChild(h4);
    div.appendChild(h5);

    const containerOrders = document.querySelector(".container-memberpage");

    containerOrders.appendChild(div);

})

}
