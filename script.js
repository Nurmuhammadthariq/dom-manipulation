const scrollDown = document.querySelector('#scroll-down');
const heroSection = document.getElementById('hero-section');
const btn = document.querySelector('#sign-in');

btn.addEventListener('click', () => {
  alert('Thankyou for clik me!');
});

heroSection.addEventListener('mouseover', () => {
  heroSection.style.backgroundColor = 'darkgreen';
});

heroSection.addEventListener('mouseout', () => {
  heroSection.style.backgroundColor = 'darkblue';
});

scrollDown.addEventListener('click', () => {
  window.scrollTo({
    top: 521,
    left: 0,
    behavior: 'smooth',
  });
});

