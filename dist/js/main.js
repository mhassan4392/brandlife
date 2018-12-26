// show search menu
const searchBtn = document.querySelector('.search-btn');
const searchBtn1 = document.querySelector('.search-btn-1');
const searchMenu = document.querySelector('.search-menu');

searchBtn.addEventListener('click', showSearcMneu);
searchBtn1.addEventListener('click', showSearcMneu);

function showSearcMneu(){
    searchMenu.classList.toggle('fadeInUp');
    searchMenu.classList.toggle('d-block');
}


// show navbar menu
const navbarBtn = document.querySelector('.navbar-btn');
const navbarMenu = document.querySelector('.navbar-menu');
const navbarCloseBtn = document.querySelector('.navbar-close-btn');

navbarBtn.addEventListener('click', showNavbarMneu);

function showNavbarMneu(){
    navbarMenu.classList.toggle('d-block');
    // navbarMenu.classList.toggle('fadeInLeft');
}

navbarCloseBtn.addEventListener('click', function(){
    navbarMenu.classList.remove('d-block');
});

function CloseNavbarMenu(e){
    if(e.target.classList.contains('navbar-menu')){
        navbarMenu.classList.remove('d-block');
        return;    
    }
    // if(e.target.classList.contains('navbar-close-btn')){
    //     navbarMenu.classList.remove('d-block');
    //     return;
    // }
}

navbarMenu.addEventListener('click', CloseNavbarMenu);



//showcase slider


let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;
// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

// // Show prev
// function slideLeft() {
//   reset();
//   sliderImages[current - 1].style.display = "block";
//   current--;
// }

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  
  current++;
}



 function slides() {
    if (current === sliderImages.length - 1) {
      current = -1;
    }
    slideRight();
  };

startSlide();

setInterval(slides, 10000);




$('.count').each(function () {
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});


// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat: -6.77799, lng: 39.24753};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 17, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}
    
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});