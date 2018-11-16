function showMotto() {
    "use strict";
    var newParagraph = document.createElement("p");
    newParagraph.style.fontSize = "20px";
    newParagraph.style.textAlign = "center";
    var textNode = document.createTextNode("Damnation seize my soul if I give you quarters, or take any from you.");
    newParagraph.appendChild(textNode);
    
    var referenceNode = document.getElementById("mottoButton");
    referenceNode.parentNode.appendChild(newParagraph);
    
    document.getElementById("mottoButton").removeEventListener("click", showMotto);
}

function showNewPhoto() {
    "use strict";
    var newImg = document.createElement("img");
    newImg.src = "img/pirates.jpeg";
    newImg.style.width = "100%";
    
    var referenceNode = document.getElementById("pirateButton");
    referenceNode.parentNode.insertBefore(newImg, referenceNode);
    
    document.getElementById("pirateButton").removeEventListener("click", showNewPhoto);
}

function replacePhoto(event) {
    "use strict";
    var button = event.target;
    
    var node = button.parentNode.firstChild.nextSibling;
    node.src = "img/rum.jpg";
}

function removePhoto(event) {
    "use strict";
    var button = event.target;
    
    var node = button.parentNode;
    node.parentNode.removeChild(node);
}

window.onload = function() {
    "use strict";
    document.getElementById("mottoButton").addEventListener("click", showMotto);
    document.getElementById("pirateButton").addEventListener("click", showNewPhoto);

    var classname1 = document.getElementsByClassName("lubieToButton");
    Array.from(classname1).forEach(function(element) {
        element.addEventListener("click", replacePhoto);
    });

    var classname2 = document.getElementsByClassName("nieLubieTegoButton");
    Array.from(classname2).forEach(function(element) {
        element.addEventListener("click", removePhoto);
    });
};