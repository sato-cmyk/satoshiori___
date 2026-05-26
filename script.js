const gallery = document.querySelector('.gallery');

const images = [
  "images/2.jpg",
  "images/11.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.jpg",
  "images/7.jpg",
  "images/8.jpg",
  "images/23.jpg",
 
  "images/10.jpg",
   "images/3.jpg",
 
  "images/12.jpg",
  "images/13.jpg",
  "images/14.jpg",
  "images/15.jpg",
  "images/16.jpg",
  "images/17.jpg",
  "images/18.jpg",
  "images/19.jpg",
  "images/20.jpg",
  "images/21.jpg",
  "images/22.jpg",
  
  "images/24.jpg",
  "images/25.jpg",
  "images/26.jpg",
  "images/27.jpg",
  "images/28.jpg",
  "images/29.jpg",
  "images/30.jpg",
  "images/31.jpg",
  "images/32.jpg",
  "images/33.jpeg"
];

/* =========================
gallery
========================= */

images.forEach((src)=>{

  const item = document.createElement('div');

  item.classList.add('gallery-item');

  item.innerHTML = `<img src="${src}" alt="">`;

  item.addEventListener('click', ()=>{

    modal.style.display = 'flex';

    modalImg.src = src;

  });

  gallery.appendChild(item);

});

/* =========================
modal
========================= */

const modal = document.getElementById('modal');

const modalImg = document.getElementById('modalImg');

const closeBtn = document.querySelector('.close');

closeBtn.addEventListener('click', ()=>{

  modal.style.display = 'none';

});

modal.addEventListener('click', (e)=>{

  if(e.target === modal){

    modal.style.display = 'none';

  }

});

/* =========================
hamburger
========================= */

const hamburger = document.querySelector('.hamburger');

const nav = document.querySelector('.nav');

const navLinks = document.querySelectorAll('.nav a');

/* open */

hamburger.addEventListener('click', ()=>{

  nav.classList.toggle('active');

  hamburger.classList.toggle('active');

});

/* close when menu clicked */

navLinks.forEach(link => {

  link.addEventListener('click', ()=>{

    nav.classList.remove('active');
    hamburger.classList.remove('active');

  });

});

/* =========================
about slide
========================= */

// const aboutSlide = document.getElementById('aboutSlide');

// const aboutImages = [

//   "images/profile.png",
//   "images/about1.png",
//   "images/about2.png",
//   "images/about4.png"

// ];

// let currentImage = 0;

// setInterval(()=>{

//   aboutSlide.style.opacity = 0.4;

//   aboutSlide.style.transform = "scale(1.01)";

//   setTimeout(()=>{

//     currentImage++;

//     if(currentImage >= aboutImages.length){

//       currentImage = 0;

//     }

//     aboutSlide.src = aboutImages[currentImage];

//     aboutSlide.style.opacity = 1;

//     aboutSlide.style.transform = "scale(1)";

//   }, 600);

// }, 5000);

/* =========================
about swiper
========================= */
const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  speed: 4000,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 1000,
  }
});


// language switch
const langButtons = document.querySelectorAll('.lang-btn');
const i18nItems = document.querySelectorAll('.i18n');

langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;

    langButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    i18nItems.forEach(item => {
      item.innerHTML = item.dataset[lang];
    });

    document.documentElement.lang = lang;
  });
});
