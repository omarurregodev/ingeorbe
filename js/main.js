document.addEventListener('DOMContentLoaded', () => {
  // DELAY UVP AND BLOCKQUOTE ANIMATION

  setTimeout(() => {
    document.querySelector('.hero').classList.add('animate__fadeInLeft');
    document.querySelector('.hero').classList.remove('hidden');
    document.querySelector('.blockquote').classList.add('animate__fadeInLeft');
    document.querySelector('.blockquote').classList.remove('hidden');
    document.querySelector('.blockquote-footer').classList.add('animate__fadeInRight');
    document.querySelector('.blockquote-footer').classList.remove('hidden');
    document.querySelector('.img_hero').classList.add('animate__fadeInRight');
    document.querySelector('.img_hero').classList.remove('hidden');
    document.querySelector('.figure_slider').classList.add('fade-in');
  }, 1000);

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
  let section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}