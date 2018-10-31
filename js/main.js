function setHappyText() {
    const chosenElement = document.getElementById("sekcja1");
    const sadFace = document.getElementById("sad-face");
    const happyFace = document.getElementById("happy-face");
    if (chosenElement && chosenElement.innerHTML.includes("smutny")) {
        chosenElement.innerHTML =
            chosenElement.innerHTML.replace("smutny", "wesoły");
        happyFace.style.display = "block";
        sadFace.style.display = "none";
    } else {
        chosenElement.innerHTML =
            chosenElement.innerHTML.replace("wesoły", "smutny");
        sadFace.style.display = "block";
        happyFace.style.display = "none";
    }
}

function alertMessage() {
    alert("Nie klikać!");
}

function changeResizeParagraph() {
    const reziseP = document.getElementById("resize-text");
    reziseP.innerHTML += " resize! ";
}

function getFavouriteFood() {
    const answer = prompt("Ulubiona potrawa?", "pizza");
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
            break;
    }

    document.getElementById("know-text").innerHTML = answer + ": " + text;
}

function luckyNumber() {
    document.getElementById("lucky-number").innerHTML = getRandomNumber(1,77);
}

function convertFromBinary(event) {
    event.preventDefault();
    const binaryRegex = new RegExp("^[01]+$");
    const input = document.getElementById("int-number").value;
    const binaryResultText = document.getElementById("binary-result");

    binaryResultText.innerHTML = binaryRegex.exec(input) ? parseInt(input, 2) : "zła dana";
    binaryResultText.scrollIntoView();
}

function convertToFloat(event) {
    event.preventDefault();
    const input = document.getElementById("float-number").value;
    const floatResultText = document.getElementById("float-result");

    floatResultText.innerHTML = parseFloat(input) || "używaj tylko cyfr, +-, wykładnika potęgi lub .";
    floatResultText.scrollIntoView();
}

const getToKnowButton = document.getElementById("know-btn");
getToKnowButton.addEventListener("click", getFavouriteFood);

document.getElementById("danger-btn").addEventListener("click", alertMessage);

document.getElementById("mood-image").addEventListener("click", setHappyText);

window.addEventListener("resize", changeResizeParagraph);

document.getElementById("int-form").addEventListener("submit", convertFromBinary);
document.getElementById("float-form").addEventListener("submit", convertToFloat);

document.getElementById("flowers-form").addEventListener("submit", getFlowers);
