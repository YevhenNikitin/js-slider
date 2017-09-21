var slides = document.querySelectorAll('#slides .slide'); // get all slides from the container
var currentSlide = 0; // create a variable to get the current slide
var slideInterval = setInterval(nextSlide,2000); // set 2-seconds-interval for the next slide

function nextSlide() {
 slides[currentSlide].className = 'slide';
 currentSlide = (currentSlide+1)%slides.length;
 slides[currentSlide].className = 'slide showing';
}
