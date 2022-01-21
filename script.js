const scrollDown = document.querySelector('#scroll-down');
const heroColor = document.getElementById('hero-section');
const btn = document.querySelector('#sign-in');

heroColor.addEventListener('mouseover', () => {
  heroColor.style.backgroundColor = 'red';
});

heroColor.addEventListener('mouseout', () => {
  heroColor.style.backgroundColor = 'darkblue';
});

scrollDown.addEventListener('click', () => {
  window.scrollTo({
    top: 521,
    left: 0,
    behavior: 'smooth',
  });
});

btn.addEventListener('click', () => {
  alert('Thankyou for clik me!');
});
