function submitContactForm() {
    if(!document.getElementById("contactForm").checkValidity()
        || !document.getElementById("contactFormName").value.length 
        || !document.getElementById("contactFormEmail").value.length) {
        alert("Źle wypełniony formularz!");
    } else {
        alert("Od dzisiaj będziemy wysyłać Ci spam na maila! Arr!");
        document.getElementById("contactForm").submit();
    }
}

function resetContactForm() {
    document.getElementById("contactForm").reset();
}

function showHelp(event) {
    event.target.nextSibling.style.display = "block";
}

function hideHelp(event) {
    event.target.nextSibling.style.display = "none";
}

document.getElementById("contactFormSubmit").addEventListener("click", submitContactForm);
document.getElementById("contactFormReset").addEventListener("click", resetContactForm);

var classname = document.getElementsByClassName("contactFormInput");
for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener("focus", showHelp);
    classname[i].addEventListener("blur", hideHelp);
}