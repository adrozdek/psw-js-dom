const flowerImages = [
    "img/czerwona.jpg",
    "img/bialy.jpg",
    "img/kolorowa.jpg",
    "img/zolta.jpg"
];

function getRandomNumber(from, to) {
    "use strict";
    return Math.floor((Math.random() * to) + from);
}

function getFlowers(event) {
    "use strict";
    event.preventDefault();
    const answer = document.getElementById("flower-number").value;
    let image = null;

    const flowersDiv = document.getElementById("flowers");

    while (flowersDiv.firstChild) {
        flowersDiv.removeChild(flowersDiv.firstChild);
    }

    let randomNum = 0;
    let i = 0;
    for (i = 0; i < answer; i += 1) {
        randomNum = getRandomNumber(0, flowerImages.length);
        image = document.createElement("img");
        image.setAttribute("src", flowerImages[randomNum]);
        image.setAttribute("width", "200");
        image.setAttribute("height", "200");
        image.setAttribute("alt", "Random Flower");
        flowersDiv.appendChild(image);
    }

    flowersDiv.scrollIntoView();
}

function setHappyText() {
    "use strict";
    const chosenElement = document.getElementById("sekcja1");
    const sadFace = document.getElementById("sad-face");
    const happyFace = document.getElementById("happy-face");
    const chEIHTML = chosenElement.innerHTML;
    if (chEIHTML.includes("smutny")) {
        chosenElement.innerHTML = chEIHTML.replace("smutny", "wesoły");
        happyFace.style.display = "block";
        sadFace.style.display = "none";
    } else {
        chosenElement.innerHTML = chEIHTML.replace("wesoły", "smutny");
        sadFace.style.display = "block";
        happyFace.style.display = "none";
    }
}

function alertMessage() {
    "use strict";
    window.alert("Nie klikać!");
}

function changeResizeParagraph() {
    "use strict";
    const reziseP = document.getElementById("resize-text");
    reziseP.innerHTML += " resize! ";
}

function getFavouriteFood() {
    "use strict";
    const answer = window.prompt("Ulubiona potrawa?", "pizza");
    let text = "";

    switch (answer) {
    case "pierogi":
        text = "Pierożki om";
        break;
    case "schabowy":
        text = "Tradycyjnie";
        break;
    case "pizza":
        text = "Trochę fantazji";
        break;
    default:
        text = "Dziwny wymysł";
    }

    document.getElementById("know-text").innerHTML = answer + ": " + text;
}

function luckyNumber() {
    "use strict";
    document.getElementById("lucky-number").innerHTML = getRandomNumber(1, 77);
}

function convertFromBinary(event) {
    "use strict";
    event.preventDefault();
    const binaryRegex = new RegExp("^[01]+$");
    const input = document.getElementById("int-number").value;
    const bRT = document.getElementById("binary-result");

    bRT.innerHTML = (
        binaryRegex.exec(input)
        ? parseInt(input, 2)
        : "zła dana"
    );
    bRT.scrollIntoView();
}

function convertToFloat(event) {
    "use strict";
    event.preventDefault();
    const input = document.getElementById("float-number").value;
    const floatResultText = document.getElementById("float-result");

    floatResultText.innerHTML = parseFloat(input)
            || "używaj tylko cyfr, +-, wykładnika potęgi lub .";
    floatResultText.scrollIntoView();
}

const getToKnowButton = document.getElementById("know-btn");
getToKnowButton.addEventListener("click", getFavouriteFood);

document.getElementById("danger-btn").addEventListener("click", alertMessage);

document.getElementById("mood-image").addEventListener("click", setHappyText);

window.addEventListener("resize", changeResizeParagraph);

const intForm = document.getElementById("int-form");
intForm.addEventListener("submit", convertFromBinary);

const floatForm = document.getElementById("float-form");
floatForm.addEventListener("submit", convertToFloat);

const flowersForm = document.getElementById("flowers-form");
flowersForm.addEventListener("submit", getFlowers);
