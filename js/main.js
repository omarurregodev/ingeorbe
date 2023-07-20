document.addEventListener('DOMContentLoaded', () => {
  // DELAY UVP AND BLOCKQUOTE ANIMATION
  
  setTimeout(() => {
    document.querySelector('.hero').classList.add('animate__fadeInLeft');
    document.querySelector('.hero').classList.remove('hidden');
    document.querySelector('.blockquote').classList.add('animate__fadeInLeft');
    document.querySelector('.blockquote').classList.remove('hidden');
    document.querySelector('.blockquote-footer').classList.add('animate__fadeInRight');
    document.querySelector('.blockquote-footer').classList.remove('hidden');
    document.querySelector('.container-figure').classList.add('fade-in');
  }, 1000);
  
  // SLICK
  $(".slider__slick").slick({
    dots: true,
    vertical: false,
    centerMode: true,
    autoplay: true,
    arrows: false,
    pauseOnHover: true,
    fade: true,
    speed: 3000
  });

  $(".logos-slider").slick({
    centerMode: true,
    autoplay: true,
    arrows: false,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  // FUNCTION TO ADD CLASS TO THE NAVBAR WHEN IT SCROLL
  window.addEventListener('scroll', () => {
    document.querySelector('.navbar').classList.add('navbar_bg')
  })
  // FUNCTION TO REMOVE CLASS TO THE NAVBAR WHEN GETS BACK TOP
  window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY
    if (scrollPosition === 0) {
      document.querySelector('.navbar').classList.remove('navbar_bg')
      document.querySelector('.navbar').classList.add('navbar')
    }
  })
  
})

function scrollToSection(sectionId) {
  event.preventDefault();
  let section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}

function goHome() {
  window.location.href = "/index.html";
}
function goServices() {
  window.location.href = "/index.html#servicios";
}

function detectScrollPosition() {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  if (scrollPosition > 390) {
    document.querySelector('.services__content-intro').classList.add('animate__fadeInLeft')
    document.querySelector('.services__content-intro').classList.remove('hidden')
  }
  if (scrollPosition > 900) {
    document.querySelector('.advantages__content-intro').classList.add('animate__fadeInRight')
    document.querySelector('.advantages__content-intro').classList.remove('hidden')
  }
  if (scrollPosition > 1600) {
    document.querySelector('.clients__content-intro').classList.add('animate__fadeInLeft')
    document.querySelector('.clients__content-intro').classList.remove('hidden')
  }
}

window.addEventListener("scroll", detectScrollPosition);
