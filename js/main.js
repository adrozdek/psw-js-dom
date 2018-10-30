const flowerImages =
    [
        'https://images.homedepot-static.com/productImages/4c249ff0-b5a4-4c93-b811-a0222973d920/svn/globalrose-flower-bouquets-vars-1-dozen-red-roses-64_400_compressed.jpg',
        'https://images.homedepot-static.com/productImages/03bdaff0-c968-4627-8f36-e501cd25559c/svn/globalrose-flower-bouquets-white-roses-assorted-100-64_400_compressed.jpg',
        'https://images.homedepot-static.com/productImages/7473d497-0791-4dba-89aa-e0206cdb9414/svn/globalrose-flower-bouquets-your-choice-rainbow-roses-50-64_400_compressed.jpg',
        'https://images.homedepot-static.com/productImages/bfacbd4e-7d2b-4e99-b4f3-360ec141f28e/svn/globalrose-flower-bouquets-100-yellow-roses-md-64_400_compressed.jpg',
    ];

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

function getFavouriteFood() {
    const answer = prompt('Ulubiona potrawa?', 'pizza');
    let text = '';

    switch (answer) {
        case "pierogi":
            text = "Pierożki om";
            break;
        case "schabowy":
            text = "Tradycyjnie";
            break;
        case "pizza":
            text = "Trochę fantazji";
            break;
        default:
            text = "Dziwny wymysł";
            break;
    }

    document.getElementById('know-text').innerHTML = answer + ': ' + text;
}

function getRandomNumber(from, to) {
    return Math.floor((Math.random() * to) + from);
}

function luckyNumber() {
    document.getElementById('lucky-number').innerHTML = getRandomNumber(1,77);
}

function getFlowers(event) {
    event.preventDefault();
    const answer = document.getElementById('flower-number').value;
    let image = null;

    const flowersDiv = document.getElementById('flowers');

    while (flowersDiv.firstChild) {
        flowersDiv.removeChild(flowersDiv.firstChild);
    }

    for (let i = 0; i < answer; i++) {
        image = document.createElement('img');
        image.setAttribute('src', flowerImages[getRandomNumber(0,flowerImages.length)]);
        image.setAttribute("width", "200");
        image.setAttribute("height", "200");
        image.setAttribute("alt", "Random Flower");
        flowersDiv.appendChild(image);
    }

    flowersDiv.scrollIntoView();
}

const getToKnowButton = document.getElementById('know-btn');

getToKnowButton.addEventListener('click', getFavouriteFood);

document.getElementById('danger-btn').addEventListener('click', alertMessage);

document.getElementById('mood-image').addEventListener('click', setHappyText);

window.addEventListener('resize', changeResizeParagraph);

document.getElementById('flowers-form').addEventListener('submit', getFlowers);

