function scrollTo(element) {
    window.scroll({
      left: 0, 
      top: element.offsetTop, 
      behavior: 'smooth'
    })
  }
  
  const button = document.querySelector('.news');
  const footer = document.querySelector('.header__2');
  const lifestyleBtn = document.querySelector('.lifestyle');
  const lifestyleSection = document.querySelector('.third__line');
  const blogBtn = document.querySelector('.blog__top');
  const blogSection = document.querySelector('.fourth__line');

  button.addEventListener('click', () => {
    scrollTo(footer);
  })
  lifestyleBtn.addEventListener('click', () => {
    scrollTo(lifestyleSection);
  })
  blogBtn.addEventListener('click', () => {
    scrollTo(blogSection);
  })

  