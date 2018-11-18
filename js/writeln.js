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

function productLines(num) {
    "use strict";
    let i = 1;
    document.write("<pre>");
    do {
        if (i === 1) {
            document.writeln("Masz " + i + " kwiatek gratis ");
        } else {
            document.writeln("Kwiatek nr " + i);
        }
        i += 1;
    } while (i <= num);
    document.write("</pre>");
}

function getFlowers(event, lines) {
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

    if (lines) {
        productLines(answer);
    }

    flowersDiv.scrollIntoView();
}

const form2 = document.getElementById("flowers-form-2");
form2.addEventListener("submit", function (ev) {
    "use strict";
    return getFlowers(ev, true);
});