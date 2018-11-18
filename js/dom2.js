function showStatistics(event) {
    "use strict";
    var newParagraph = document.createElement("p");
    var textNode = document.createTextNode("Number of images: " + document.images.length + " (The images collection returns a collection of all <img> elements in the document.)");
    newParagraph.appendChild(textNode);
    event.target.parentNode.appendChild(newParagraph);
    
    var newParagraph2 = document.createElement("p");
    var textNode2 = document.createTextNode("First image: " + document.images[0].src);
    newParagraph2.appendChild(textNode2);
    event.target.parentNode.appendChild(newParagraph2);
    
    var newParagraph3 = document.createElement("p");
    var textNode3 = document.createTextNode("Number of anchors: " + document.anchors.length + " (The anchors collection returns a collection of all <a> elements in the document that have a name attribute, which is not supported by HTML5.)");
    newParagraph3.appendChild(textNode3);
    event.target.parentNode.appendChild(newParagraph3);
    
    var newParagraph4 = document.createElement("p");
    var textNode4 = document.createTextNode("First anchor: " + document.anchors[0].href);
    newParagraph4.appendChild(textNode4);
    event.target.parentNode.appendChild(newParagraph4);
    
    var newParagraph5 = document.createElement("p");
    var textNode5 = document.createTextNode("Number of links: " + document.links.length + " (The links collection returns a collection of all links in the document: <a>, <area>.)");
    newParagraph5.appendChild(textNode5);
    event.target.parentNode.appendChild(newParagraph5);
    
    var newParagraph6 = document.createElement("p");
    var textNode6 = document.createTextNode("First link: " + document.links[0].href);
    newParagraph6.appendChild(textNode6);
    event.target.parentNode.appendChild(newParagraph6);
    
    var newParagraph7 = document.createElement("p");
    var textNode7 = document.createTextNode("First link (selected with item()): " + document.links.item(0).href);
    newParagraph7.appendChild(textNode7);
    event.target.parentNode.appendChild(newParagraph7);
    
    var newParagraph8 = document.createElement("p");
    var textNode8 = document.createTextNode("Link with id=piracyLink (selected with namedItem()): " + document.links.namedItem("piracyLink").href);
    newParagraph8.appendChild(textNode8);
    event.target.parentNode.appendChild(newParagraph8);
    
    var newParagraph9 = document.createElement("p");
    var textNode9 = document.createTextNode("Number of forms: " + document.forms.length + " (The forms collection returns a collection of all <form> elements in the document.)");
    newParagraph9.appendChild(textNode9);
    event.target.parentNode.appendChild(newParagraph9);
    
    document.getElementById("statisticButton").removeEventListener("click", showStatistics);
}

    document.getElementById("statisticButton").addEventListener("click", showStatistics);
    