let content = document.querySelector("#content");
let uppercaseButton = document.querySelectorAll(".button")[0];
let lowercaseButton = document.querySelectorAll(".button")[1];
let removeSpacesButton = document.querySelectorAll(".button")[2];
let clearButton = document.querySelectorAll(".button")[3];
let on = document.querySelector(".on")
let off = document.querySelector(".off")
let navbar = document.querySelector(".navbar")
let main = document.querySelector(".main")
let buttons = document.querySelector(".buttons")


document.addEventListener("DOMContentLoaded", function () {
    let content = document.querySelector("#content")
    content.style.height = "60vh"
    content.style.width = "40vw"
})


on.addEventListener("click", () => {
    on.style.display = "none";
    off.style.display = "flex"
    off.style.justifyContent = "center"
    off.style.alignItems = "center"
    navbar.style.backgroundColor = "rgba(0,0,0,0.6)"
    main.style.backgroundColor = "rgba(0,0,0,0.6)"
    buttons.style.backgroundColor = "rgba(0,0,0,0.6)"
})
off.addEventListener("click", () => {
    off.style.display = "none";
    on.style.display = "flex"
    on.style.justifyContent = "center"
    on.style.alignItems = "center"
    navbar.style.backgroundColor = "rgba(107, 94, 94, 0.17)"
    main.style.backgroundColor = "rgba(107, 94, 94, 0.17)"
    buttons.style.backgroundColor = "rgba(107, 94, 94, 0.17)"

})

let date = document.querySelector(".time")
setInterval(() => {
    let current = new Date()
    let time = current.toLocaleTimeString()
    date.innerHTML = time
}, 1000)

uppercaseButton.addEventListener("click", toUpperCase);
lowercaseButton.addEventListener("click", toLowerCase);
removeSpacesButton.addEventListener("click", removeExtraSpaces);
clearButton.addEventListener("click", clearTextarea);

function toUpperCase() {
    content.value = content.value.toUpperCase();
}
function toLowerCase() {
    content.value = content.value.toLowerCase();
}

function removeExtraSpaces() {
    content.value = content.value.replace(/\s+/g, ' ').trim();
}

function clearTextarea() {
    content.value = "";
}















