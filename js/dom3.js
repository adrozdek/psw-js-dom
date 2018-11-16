function changeBackgroundColor(event) {
    let color = "";
    switch(event.target.selectedIndex) {
        case 0:
            color = "#ffffff";
            break;
        case 1:
            color = "#cccc00";
            break;
        case 2:
            color = "#00cccc";
            break;
        case 3:
            color = "#659065";
            break;        
    }
    document.body.style.backgroundColor = color;
}

document.querySelector("[value='whiteBackground']").selected = true; 
document.getElementById("backgroundColorSelect").addEventListener("change", changeBackgroundColor);

function changeTextColor(event) {
    let color = "";
    switch(event.target.selectedIndex) {
        case 0:
            color = "#336600";
            break;
        case 1:
            color = "#003366";
            break;
        case 2:
            color = "#663300";
            break;
        case 3:
            color = "#000000";
            break;        
    }
    document.body.style.color = color;
}

document.querySelector("[value='blackText']").selected = true; 
document.getElementById("textColorSelect").addEventListener("change", changeTextColor);

function changeFont(event) {
    let fontname = "";
    switch(event.target.selectedIndex) {
        case 0:
            fontname = "Times New Roman,sans-serif";
            break;
        case 1:
            fontname = "Garamond,sans-serif";
            break;
        case 2:
            fontname = "Comic Sans MS,sans-serif";
            break;
        case 3:
            fontname = "Impact,sans-serif";
            break;        
    }
    document.body.style.fontFamily = fontname;
}

document.querySelector("[value='timesFont']").selected = true; 
document.getElementById("fontSelect").addEventListener("change", changeFont);