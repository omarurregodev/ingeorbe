document.addEventListener('DOMContentLoaded', () => {
  // FUNCTION TO ADD CLASS TO THE NAVBAR WHEN IT SCROLL
  window.addEventListener('scroll', () => {
    document.querySelector('.navbar').classList.add('navbar_bg')
  })
  // FUNCTION TO REMOVE CLASS TO THE NAVBAR WHEN GETS BACK TOP
  window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    if (scrollPosition === 0) {
      document.querySelector('.navbar').classList.remove('navbar_bg')
      document.querySelector('.navbar').classList.add('navbar')
    }
  })
});