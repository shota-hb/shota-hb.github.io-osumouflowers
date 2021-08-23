'usr strict';

{
  const openMenu = document.getElementById('open_menu');
  const closeMenu = document.getElementById('close_menu');
  const Menu = document.getElementById('menu');

  openMenu.addEventListener('click',() =>{
    Menu.classList.add('shown');
  });

  closeMenu.addEventListener('click',() =>{
    Menu.classList.remove('shown');
  });

// カルーセル

  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const ul = document.getElementById('UL');
  const slides = ul.children;
  let currentIndex = 0;
  const dots =[];

  function updateButtons() {
    prev.classList.remove('hidden');
    next.classList.remove('hidden');

    if(currentIndex === 0) {
      prev.classList.add('hidden');
    }
    if(currentIndex === slides.length - 1) {
      next.classList.add('hidden');
    }
  }

  function setupDots() {
    for(let i =0; i < slides.length; i++){
      const button = document.createElement('button');
      button.addEventListener('click',() => {
        currentIndex = i;
        updateDots();
        updateButtons();
        moveSlies();
      })
      dots.push(button);
      document.querySelector('#GalleryNav').appendChild(button);
    }

    dots[0].classList.add('current')
  }

  function updateDots() {
    dots.forEach(dot => {
      dot.classList.remove('current');
    });
    dots[currentIndex].classList.add('current');
  }

  function moveSlies() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
  }

  updateButtons();
  setupDots();

  next.addEventListener('click',() =>{
    currentIndex++;
    updateButtons();
    updateDots();
    moveSlies();
  });

  prev.addEventListener('click',() =>{
    currentIndex--;
    updateButtons();
    updateDots();
    moveSlies();
  });
  
  window.addEventListener('resize', () =>{
    moveSlies();
  });
}