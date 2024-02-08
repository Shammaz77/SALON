			
// banner slider 
let currentSliderss = 1;
const totalSlidesss = 4; //  total number of slides

function showPreviouss() {
  showSliderss(currentSliderss - 1);
}

function showNexts() {
  showSliderss(currentSliderss + 1);
}

function showSliderss(sliderNumberss) {
  // Wrap around when reaching the end or beginning
  if (sliderNumberss > totalSlidesss) {
    sliderNumberss = 1;
  } else if (sliderNumberss < 1) {
    sliderNumberss = totalSlidesss;
  }

  // Hide all sliders
  const sliders = document.querySelectorAll('.events-main-dvs');
  sliders.forEach(slider => slider.classList.remove('active'));

  // Show the selected slider
  document.querySelector(`.events-main-dvs:nth-child(${sliderNumberss})`).classList.add('active');

  currentSliderss = sliderNumberss;
}
// banner slider end 

// side bar script 
function toggleCartt(){
  document.querySelector('.sidebar').classList.toggle('open-cart');
  }