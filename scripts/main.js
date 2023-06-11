const $ = document.querySelector.bind(document);
const slider = $("#images-container");
const textSlider = $("#text-container");
const slideMarkers = $("#slide-marker").children;
const buttonBackSlide = $("#back-slide");
const buttonNextSlide = $("#next-slide");
let slidePosition = 0;


function refreshSlideMarker(markerIndex, lastMarkerIndex) {
    slideMarkers[lastMarkerIndex].classList.remove('selected-slide-marker');
    slideMarkers[lastMarkerIndex].classList.add('circle-marker');
    slideMarkers[markerIndex].classList.remove('circle-marker');
    slideMarkers[markerIndex].classList.add('selected-slide-marker');
}

let slideInterval = setInterval(() => changeSlide(slidePosition != 3 ? slidePosition + 1 : 0), 6000);

function changeSlide(nextPosition) {
    if (slider.classList.length > 1) {
        slider.classList.remove(`position-${slidePosition}`);
        textSlider.classList.remove(`position-${slidePosition}`);
    }

    const previousPosition = slidePosition;

    slidePosition = nextPosition;

    refreshSlideMarker(slidePosition,previousPosition);


    slider.classList.add(`position-${slidePosition}`);
    textSlider.classList.add(`position-${slidePosition}`);


    clearInterval(slideInterval);
    slideInterval = setInterval(() => changeSlide(slidePosition != 3 ? slidePosition + 1 : 0), 6000);
}

buttonNextSlide.addEventListener('click', () => changeSlide(slidePosition != 3 ? slidePosition + 1 : 0));
buttonBackSlide.addEventListener('click', () => changeSlide(slidePosition!=0?slidePosition-1:3));

for (let index = 0; index < slideMarkers.length; index++) {
    slideMarkers[index].addEventListener('click',()=>{
        changeSlide(index);
    });
}