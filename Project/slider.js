let offset = 0;
const sliderLine = document.querySelector('.middle__trending');

document.querySelector('.slider__next').addEventListener('click', function(){
    offset = offset + 730;
    if (offset > 730) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider__prev').addEventListener('click', function(){
    offset = offset - 730;
    if (offset < 0) {
        offset = 730;
    }
    sliderLine.style.left = -offset + 'px';
});