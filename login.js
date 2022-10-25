let userArray = [
    {
        username: "admin",
        password: "1234"
    },
    {
        username: "admin2",
        password: "5678"
    },
]// Ska denna lista vara helt dynamisk, eller är detta okej att utgå ifrån?

if (!localStorage.getItem("userArray")) {
    localStorage.setItem("userArray", JSON.stringify(userArray));
} 

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

    const logInStatus = document.querySelector(".logintext");
    const formContainer = document.querySelectorAll("formcontainer"); //FORTSÄTT HÄR!!

    const nav = document.querySelector("nav");

    const button = document.createElement("button");
    button.classList.add("btn-logout");
    button.innerText = "Logga Ut";
    nav.appendChild(button);

    button.addEventListener("click", walkOut);

    logInStatus.innerText = "";
    formContainer.style.display = "none";


}

function logInFail() {
    const infoLogInForm = document.querySelector(".textloginform");

    infoLogInForm.innerText = "Felaktig inloggning, vänligen försök igen";
    infoLogInForm.style.color = "red";
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
    console.log("Du loggades ut");
}

