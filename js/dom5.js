function submitContactForm() {
    "use strict";
    if(!document.getElementById("contactForm").checkValidity()
        || !document.getElementById("contactFormName").value.length 
        || !document.getElementById("contactFormEmail").value.length) {
        window.alert("Źle wypełniony formularz!");
    } else {
        window.alert("Od dzisiaj będziemy wysyłać Ci spam na maila! Arr!");
        document.getElementById("contactForm").submit();
    }
}

function resetContactForm() {
    "use strict";
    document.getElementById("contactForm").reset();
}

function showHelp(event) {
    "use strict";
    event.target.nextSibling.style.display = "block";
}

function hideHelp(event) {
    "use strict";
    event.target.nextSibling.style.display = "none";
}

document.getElementById("contactFormSubmit").addEventListener("click", submitContactForm);
document.getElementById("contactFormReset").addEventListener("click", resetContactForm);

var classname = document.getElementsByClassName("contactFormInput");
Array.from(classname).forEach(function(element) {
    element.addEventListener("focus", showHelp);
});
Array.from(classname).forEach(function(element) {
    element.addEventListener("blur", hideHelp);
});