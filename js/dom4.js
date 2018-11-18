function whichKeyWasPressed(event) {
    "use strict";
    let key = event.keyCode || event.which;
    window.alert("Prawdziwy pirat pilnuje swoich sekretów, szczurze lądowy! Wpisana litera: " + String.fromCharCode(key));
}

function showInfo(event) {
    "use strict";
    let info = "";
    info += ("Pozycja myszki w odniesieniu do aktualnego okna: " + event.clientX + "x" + event.clientY + "; ");
    info += ("Pozycja myszki w odniesieniu do ekranu " + event.screenX + "x" + event.screenY + "; ");
    if(event.altKey) {
        info += "Wciśnięto klawisz ALT; ";
    }
    if(event.ctrlKey) {
        info += "Wciśnięto klawisz CTRL; ";
    }
    if(event.shiftKey) {
        info += "Wciśnięto klawisz SHIFT; ";
    }
    window.alert(info);
}

document.getElementById("contactForm").reset();
document.getElementById("contactFormSecret").addEventListener("keypress", whichKeyWasPressed);
document.getElementById("infoButton").addEventListener("click", showInfo);