const slideTrack = document.querySelector('.slide-track');
const slides = document.querySelectorAll('.slide');
const slidesPerGroup = 2;
let maxSlideHeight = 0;
let slideIndex = 0;

function setSlideHeight() {
  maxSlideHeight = 0;
  slides.forEach(slide => {
    const slideHeight = slide.offsetHeight;
    if (slideHeight > maxSlideHeight) {
      maxSlideHeight = slideHeight;
    }
  });

  slideTrack.style.height = maxSlideHeight + 'px';
}

function showSlide(index) {
  slideTrack.style.transform = `translateX(-${index * (50 + 10)}%)`;
}

function nextSlide() {
  setSlideHeight(); // Update slide height before sliding
  slideIndex = (slideIndex + slidesPerGroup) % (slides.length - (slides.length % slidesPerGroup) + 1);
  showSlide(slideIndex);
}

setSlideHeight(); // Set initial slide height
setInterval(nextSlide, 5000); // Change slide every 5 seconds
