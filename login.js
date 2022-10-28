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
    console.log("Du är inloggad");

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

    const div = document.createElement("div");
    div.classList.add("container-memberpage");
    main.appendChild(div);

    const h3 = document.createElement("h3");
    h3.classList.add("heading-orderhistory");
    h3.innerText = "Din Köphistorik";
    div.appendChild(h3);

    //Här tänker jag att vi skapar ett element som listar alla beställningar. Listas då under ovanstående rubrik inom div-en container-memberpage.

//Min tanke är att precis innan localStorage töms när man slutför köpet, då sparas beställningen till en variabel som skickas in till localStorage.
//Ex döper man denna till history. Den hämtar vi sedan från localStorage här och det är då enbart carts som ska tas bort från localStorage
//när man slutför beställningen. Username och history ska alltså inte tömmas då. Username töms vid utloggning - ska även history tömmas då?
//Eller ska History alltid sparas i denna övning?

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

    console.log("Du är nu medlem, hurra!");
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

