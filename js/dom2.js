function showStatistics(event) {
    var newParagraph = document.createElement("p");
    var textNode = document.createTextNode("Number of images: " + document.images.length + " (The images collection returns a collection of all <img> elements in the document.)");
    newParagraph.appendChild(textNode);
    event.target.parentNode.appendChild(newParagraph);
    
    var newParagraph = document.createElement("p");
    var textNode = document.createTextNode("First image: " + document.images[0].src);
    newParagraph.appendChild(textNode);
    event.target.parentNode.appendChild(newParagraph);
    
    var newParagraph = document.createElement("p");
    var textNode = document.createTextNode("Number of anchors: " + document.anchors.length + " (The anchors collection returns a collection of all <a> elements in the document that have a name attribute, which is not supported by HTML5.)");
    newParagraph.appendChild(textNode);
    event.target.parentNode.appendChild(newParagraph);
    
    var newParagraph = document.createElement("p");
    var textNode = document.createTextNode("First anchor: " + document.anchors[0].href);
    newParagraph.appendChild(textNode);
    event.target.parentNode.appendChild(newParagraph);
    
    var newParagraph = document.createElement("p");
    var textNode = document.createTextNode("Number of links: " + document.links.length + " (The links collection returns a collection of all links in the document: <a>, <area>.)");
    newParagraph.appendChild(textNode);
    event.target.parentNode.appendChild(newParagraph);
    
    var newParagraph = document.createElement("p");
    var textNode = document.createTextNode("First link: " + document.links[0].href);
    newParagraph.appendChild(textNode);
    event.target.parentNode.appendChild(newParagraph);
    
    var newParagraph = document.createElement("p");
    var textNode = document.createTextNode("First link (selected with item()): " + document.links.item(0).href);
    newParagraph.appendChild(textNode);
    event.target.parentNode.appendChild(newParagraph);
    
    var newParagraph = document.createElement("p");
    var textNode = document.createTextNode("Link with id=piracyLink (selected with namedItem()): " + document.links.namedItem("piracyLink").href);
    newParagraph.appendChild(textNode);
    event.target.parentNode.appendChild(newParagraph);
    
    var newParagraph = document.createElement("p");
    var textNode = document.createTextNode("Number of forms: " + document.forms.length + " (The forms collection returns a collection of all <form> elements in the document.)");
    newParagraph.appendChild(textNode);
    event.target.parentNode.appendChild(newParagraph);
    
    document.getElementById("statisticButton").removeEventListener("click", showStatistics);
}

document.getElementById("statisticButton").addEventListener("click", showStatistics);