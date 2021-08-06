    let position = 0;
    const slidesToShow = 1;
    const slidesToScroll = 1;
    const container = document.querySelector ('.slider__container');
    const show = document.querySelector ('.slider__show');
    const btnPrev = document.querySelector ('.slide__prev');
    const btnNext = document.querySelector ('.slide__next');
    const slides = document.querySelectorAll('.slide')
    const slidesCount = slides.length;
    const slideWidth = container.clientWidth / slidesToShow;
    const movePosition = slidesToScroll * slideWidth;

    slides.forEach((slide) => {
        slide.style.minWidth = `${slideWidth}px`;
    });

    btnPrev.addEventListener( 'click', () => {
        const slidesLeft = Math.abs(position) / slideWidth;
        position += movePosition;
        
        setPosition();
        checkBtns();
    });

    btnNext.addEventListener( 'click', () => {
        const slidesLeft = slidesCount - (Math.abs(position) + slidesToShow * slideWidth) / slideWidth;
        position -= slidesLeft > slidesToScroll ? movePosition : slidesLeft * slideWidth;
        
        setPosition();
        checkBtns();
    });

    const setPosition = () => {
        show.style.transform = `translateX(${position}px)`
    };

    const checkBtns = () => {
        btnPrev.disabled = position === 0;
        btnNext.disabled = position <= -(slidesCount - slidesToShow) * slideWidth;
    };
        checkBtns();