const body = document.body;
const loginBox = document.querySelector(".login-box");
const h1 = document.querySelector("h1");
const inputs = document.querySelectorAll("input, textarea");
const buttons = document.querySelectorAll("button");
const texts = document.querySelectorAll("p, ul, a");

function switchTheme() {
    loginBox.classList.toggle("dark-mode");
    body.classList.toggle("dark-mode");
    h1.classList.toggle("dark-mode");
    inputs.forEach(input => input.classList.toggle("dark-mode"));
    buttons.forEach(button => button.classList.toggle("dark-mode"));
    texts.forEach(text => text.classList.toggle("dark-mode"));
}