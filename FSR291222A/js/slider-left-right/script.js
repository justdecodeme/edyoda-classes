var slider = document.querySelector('.slider');
var imagesOuter = document.querySelector('.images');
var images = document.querySelectorAll('.images img');
var btns = document.querySelectorAll('.btn');
var knobs = document.querySelectorAll('.knob');
var lastIndex = images.length - 1;
var activeIndex = 0;
var nextIndex;
var sliderWidth = slider.offsetWidth;

function updateSlider(e) {
  if (e.target.classList.contains('next')) {
    nextIndex = activeIndex + 1;
    if (nextIndex > lastIndex) {
      nextIndex = 0;
    }
  } else {
    nextIndex = activeIndex - 1;
    if (nextIndex < 0) {
      nextIndex = lastIndex;
    }
  }
  imagesOuter.style.left = sliderWidth * -nextIndex + 'px';
  knobs[activeIndex].classList.remove('active');
  knobs[nextIndex].classList.add('active');
  activeIndex = nextIndex;
}

// btns[0].addEventListener('click', updateSlider)
// btns[1].addEventListener('click', updateSlider)

// knobs[0].addEventListener('click', updateSlider)
// knobs[1].addEventListener('click', updateSlider)
// knobs[2].addEventListener('click', updateSlider)

/* better solution than the above */

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', updateSlider)
}

// for (let i = 0; i < knobs.length; i++) {
//   knobs[i].addEventListener('click', updateSlider)
// }