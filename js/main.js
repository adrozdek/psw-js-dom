function setHappyText() {
    const chosenElement = document.getElementById('sekcja1');
    const sadFace = document.getElementById('sad-face');
    const happyFace = document.getElementById('happy-face');
    if (chosenElement && chosenElement.innerHTML.includes('smutny')) {
        chosenElement.innerHTML = chosenElement.innerHTML.replace('smutny', 'wesoły');
        happyFace.style.display = 'block';
        sadFace.style.display = 'none';
    } else {
        chosenElement.innerHTML = chosenElement.innerHTML.replace('wesoły', 'smutny');
        sadFace.style.display = 'block';
        happyFace.style.display = 'none';
    }
}

function alertMessage() {
    alert('Nie klikać!');
}

function changeResizeParagraph() {
    const reziseP = document.getElementById('resize-text');
    reziseP.innerHTML += ' resize! ';
}




document.getElementById('danger-btn').addEventListener('click', alertMessage);

document.getElementById('mood-image').addEventListener('click', setHappyText);

window.addEventListener('resize', changeResizeParagraph);