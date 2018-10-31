const flowerImages =
    [
        'https://images.homedepot-static.com/productImages/4c249ff0-b5a4-4c93-b811-a0222973d920/svn/globalrose-flower-bouquets-vars-1-dozen-red-roses-64_400_compressed.jpg',
        'https://images.homedepot-static.com/productImages/03bdaff0-c968-4627-8f36-e501cd25559c/svn/globalrose-flower-bouquets-white-roses-assorted-100-64_400_compressed.jpg',
        'https://images.homedepot-static.com/productImages/7473d497-0791-4dba-89aa-e0206cdb9414/svn/globalrose-flower-bouquets-your-choice-rainbow-roses-50-64_400_compressed.jpg',
        'https://images.homedepot-static.com/productImages/bfacbd4e-7d2b-4e99-b4f3-360ec141f28e/svn/globalrose-flower-bouquets-100-yellow-roses-md-64_400_compressed.jpg',
    ];

function getFlowers(event, lines) {
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

    if(lines) {
        productLines(answer);
    }

    flowersDiv.scrollIntoView();
}

function productLines(num) {
    let i = 1;
    document.write('<pre>');
    do {
        if(i === 1) {
            document.writeln('Masz ' + i++ + ' kwiatek gratis ')
        } else {
            document.writeln('Kwiatek nr ' + i++);
        }
    } while (i <= num);
    document.write('</pre>');
}
