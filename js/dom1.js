function showMotto() {
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
    var newImg = document.createElement("img");
    newImg.src = "img/pirates.jpeg";
    newImg.style.width = "100%";
    
    var referenceNode = document.getElementById("pirateButton");
    referenceNode.parentNode.insertBefore(newImg, referenceNode);
    
    document.getElementById("pirateButton").removeEventListener("click", showNewPhoto);
}

function replacePhoto(event) {
    button = event.target;
    
    //z powodu tabulatorow w html img nie jest firstChild
    var node = button.parentNode.firstChild.nextSibling;
    node.src = "img/rum.jpg";
}

function removePhoto(event) {
    button = event.target;
    
    var node = button.parentNode;
    node.parentNode.removeChild(node);
}


document.getElementById("mottoButton").addEventListener("click", showMotto);
document.getElementById("pirateButton").addEventListener("click", showNewPhoto);

var classname = document.getElementsByClassName("lubieToButton");
for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener("click", replacePhoto);
}

var classname = document.getElementsByClassName("nieLubieTegoButton");
for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener("click", removePhoto);
}