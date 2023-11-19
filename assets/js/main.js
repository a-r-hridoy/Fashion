// // Preloader area
var preloader = document.getElementById("preloader");
function preloder_function() {
   setTimeout(() => {
      preloader.style.display = "none";
   }, 1000);
}
// Preloader area

window.addEventListener("scroll", function () {
   var scroll = this.document.querySelector(".scrollTop");
   scroll.classList.toggle("active", this.window.scrollY > 500);
});

function scrollToTop() {
   window.scrollTo({
      top: 0,
      behavior: "smooth",
   });
}

// flash-modal-start
$(document).ready(function () {
   $("#flasModal").modal("show");
});
// falsh-modal-end

// homeCarousel
var owl = $(".home-carousel");
owl.owlCarousel({
   items: 1,
   loop: true,
   margin: 10,
   autoplay: true,
   autoplayTimeout: 2000,
   autoplayHoverPause: true,
});
$(".play").on("click", function () {
   owl.trigger("play.owl.autoplay", [1000]);
});
$(".stop").on("click", function () {
   owl.trigger("stop.owl.autoplay");
});

// t-categoriesCarousel

var owl = $(".t-categories-carousel");
owl.owlCarousel({
   responsive: {
      0: {
         items: 1,
      },
      600: {
         items: 2,
      },
      800: {
         items: 3,
      },
      1000: {
         items: 4,
      },
      1200: {
         items: 5,
      },
   },
   loop: true,
   margin: 10,
   autoplay: true,
   autoplayTimeout: 2000,
   autoplayHoverPause: true,
});
$(".play").on("click", function () {
   owl.trigger("play.owl.autoplay", [1000]);
});
$(".stop").on("click", function () {
   owl.trigger("stop.owl.autoplay");
});

// productCarousel
var owl = $(".product-carousel");
owl.owlCarousel({
   responsive: {
      0: {
         items: 1,
      },
      600: {
         items: 2,
      },
      800: {
         items: 3,
      },
      1000: {
         items: 4,
      },
      1200: {
         items: 5,
      },
   },
   loop: true,
   nav: true,
   margin: 10,
   autoplay: false,
   autoplayTimeout: 2000,
   autoplayHoverPause: true,
});
$(".play").on("click", function () {
   owl.trigger("play.owl.autoplay", [1000]);
});
$(".stop").on("click", function () {
   owl.trigger("stop.owl.autoplay");
});

// testimonialCarousel
var owl = $("#testimonial-slider");
owl.owlCarousel({
   responsive: {
      0: {
         items: 1,
      },
      600: {
         items: 2,
      },
      1000: {
         items: 3,
      },
   },
   loop: true,
   nav: false,
   margin: 10,
   autoplay: true,
   autoplayTimeout: 2000,
   autoplayHoverPause: true,
});
$(".play").on("click", function () {
   owl.trigger("play.owl.autoplay", [1000]);
});
$(".stop").on("click", function () {
   owl.trigger("stop.owl.autoplay");
});

// RANGE SLIDER
$(".js-range-slider").ionRangeSlider({
   type: "double",
   min: 0,
   max: 1000,
   from: 200,
   to: 500,
   grid: true,
});

//  product-details
// Initialise Carousel
const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
   Dots: false,
});

// Thumbnails
const thumbCarousel = new Carousel(document.querySelector("#thumbCarousel"), {
   Sync: {
      target: mainCarousel,
      friction: 0,
   },
   Dots: false,
   Navigation: false,
   center: true,
   slidesPerPage: 1,
   infinite: true,
});

// Customize Fancybox
Fancybox.bind('[data-fancybox="gallery"]', {
   Carousel: {
      on: {
         change: (that) => {
            mainCarousel.slideTo(mainCarousel.findPageForSlide(that.page), {
               friction: 0,
            });
         },
      },
   },
});

const password = document.querySelector("#id_password");
const togglePassword = document.querySelector("#togglePassword");
togglePassword.addEventListener("click", function (e) {
   const type =
      password.getAttribute("type") === "password" ? "text" : "password";
   password.setAttribute("type", type);
   this.classList.toggle("active");
});

// Discount wheel start
function shuffle(array) {
   var currentIndex = array.length,
      randomIndex;

   while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
         array[randomIndex],
         array[currentIndex],
      ];
   }

   return array;
}

function spin() {
   // Play the sound
   wheel.play();

   const box = document.getElementById("box");
   const element = document.getElementById("mainbox");
   let SelectedItem = "";

   let MagicRoaster = shuffle([1890, 2250, 2610]);
   let Sepeda = shuffle([1850, 2210, 2570]); //Kemungkinan : 100%
   let RiceCooker = shuffle([1810, 2170, 2530]);
   let LunchBox = shuffle([1770, 2130, 2490]);
   let Sanken = shuffle([1750, 2110, 2470]);
   let Electrolux = shuffle([1630, 1990, 2350]);
   let JblSpeaker = shuffle([1570, 1930, 2290]);

   let Hasil = shuffle([
      MagicRoaster[0],
      Sepeda[0],
      RiceCooker[0],
      LunchBox[0],
      Sanken[0],
      Electrolux[0],
      JblSpeaker[0],
   ]);
   // console.log(Hasil[0]);

   // get the value of selected item
   if (MagicRoaster.includes(Hasil[0])) SelectedItem = "21% off";
   if (MagicRoaster.includes(Hasil[0])) SelectedItem = "7% off";
   if (Sepeda.includes(Hasil[0])) SelectedItem = "200 tk off";
   if (RiceCooker.includes(Hasil[0])) SelectedItem = "15% off";
   if (LunchBox.includes(Hasil[0])) SelectedItem = "5% off";
   if (Sanken.includes(Hasil[0])) SelectedItem = "80 tk off";
   if (Electrolux.includes(Hasil[0])) SelectedItem = "22% off";
   if (JblSpeaker.includes(Hasil[0])) SelectedItem = "150 tk off";

   // spin
   box.style.setProperty("transition", "all ease 5s");
   box.style.transform = "rotate(" + Hasil[0] + "deg)";
   element.classList.remove("animate");
   setTimeout(function () {
      element.classList.add("animate");
   }, 5000);

   // alert
   setTimeout(function () {
      applause.play();
      // swal("Congratulations", "You Won The " + SelectedItem + ".", "success");
      Notiflix.Report.Success(
         "Congratulations",
         "You Won The " + SelectedItem + ".",
         "Ok"
      );
   }, 5500);

   // delay
   setTimeout(function () {
      box.style.setProperty("transition", "initial");
      box.style.transform = "rotate(90deg)";
   }, 6000);
}

document.addEventListener("DOMContentLoaded", function () {
   const list = ["glasses1", "glasses2", "hat1", "hat2", "earring"];
   const visibles = [true, false, false, true, true];
   const setVisible = (button, entities, visible) => {
      if (visible) {
         button.classList.add("selected");
      } else {
         button.classList.remove("selected");
      }
      entities.forEach((entity) => {
         entity.setAttribute("visible", visible);
      });
   };
   list.forEach((item, index) => {
      const button = document.querySelector("#" + item);
      const entities = document.querySelectorAll("." + item + "-entity");
      setVisible(button, entities, visibles[index]);
      button.addEventListener("click", () => {
         visibles[index] = !visibles[index];
         setVisible(button, entities, visibles[index]);
      });
   });
});
// Discount wheel end

// virtual-start

document.addEventListener("DOMContentLoaded", function () {
   const list = ["glasses1", "glasses2", "hat1", "hat2", "earring"];
   const visibles = [true, false, false, true, true];
   const setVisible = (button, entities, visible) => {
      if (visible) {
         button.classList.add("selected");
      } else {
         button.classList.remove("selected");
      }
      entities.forEach((entity) => {
         entity.setAttribute("visible", visible);
      });
   };
   list.forEach((item, index) => {
      const button = document.querySelector("#" + item);
      const entities = document.querySelectorAll("." + item + "-entity");
      setVisible(button, entities, visibles[index]);
      button.addEventListener("click", () => {
         visibles[index] = !visibles[index];
         setVisible(button, entities, visibles[index]);
      });
   });
});
