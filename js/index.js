let advertaisments = ['./assets/images/advertaisments/anuncio-1.jpg',
    './assets/images/advertaisments/anuncio-2.jpg',
    './assets/images/advertaisments/anuncio-3.jpg'],
    counter = 0,
    rightArrow = document.querySelector('.slider--container-RightArrow'),
    leftArrow = document.querySelector('.slider--container-LeftArrow');

function rightArrowButton(rArrow) {
    let img = document.querySelector('.slider--image');
    rArrow.addEventListener('click', () => {
        if (counter <= advertaisments.length - 1) {
            counter++;
            img.src = advertaisments[counter];
        }
        if (counter == advertaisments.length) {
            counter = 0;
            img.src = advertaisments[counter];
        }
    });
}

function leftArrowButton(lArrow) {
    let img = document.querySelector('.slider--image');
    lArrow.addEventListener('click', () => {
        if (counter == 0) {
            counter = advertaisments.length - 1;
            img.src = advertaisments[counter];
        } else {
            counter--;
            img.src = advertaisments[counter];
        }
    });
}

rightArrowButton(rightArrow);
leftArrowButton(leftArrow);