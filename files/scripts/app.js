// intersection observer for animated elements
const animationObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fadeInShow");
    }
  });
});
// select and observe fade elements
const fadeElements = document.querySelectorAll(".fadeIn");
fadeElements.forEach((el) => animationObserver.observe(el));

function clearForm() {
  document.getElementById('name').value = "";
  document.getElementById('email').value = "";
  document.getElementById('message').value = "";
}

function scrollToElement(element, offset) {
  window.scrollTo({
    behavior: "smooth",
    top:
      document.getElementById(element).getBoundingClientRect().top -
      document.body.getBoundingClientRect().top -
      offset,
  });
}

// let carousel = document.querySelector(".list");
// let pos0;
// let pos1;
// let pos2;
// let pos3;

// document.getElementById("right").addEventListener("click", () => {
//   carouselRight();
// });

// document.getElementById("left").addEventListener("click", () => {
//   carouselLeft();
// });

// function carouselLeft() {
//   pos0 = document.querySelector(".pos0");
//   pos1 = document.querySelector(".pos1");
//   pos2 = document.querySelector(".pos2");
//   pos3 = document.querySelector(".pos3");
//   pos2.classList.add("pos3");
//   pos2.classList.remove("pos2");
//   pos3.classList.add("pos0");
//   pos3.classList.remove("pos3");
//   pos1.classList.add("pos2");
//   pos1.classList.remove("pos1");
//   pos0.classList.add("pos1");
//   pos0.classList.remove("pos0");
// }

// function carouselRight() {
//   pos0 = document.querySelector(".pos0");
//   pos1 = document.querySelector(".pos1");
//   pos2 = document.querySelector(".pos2");
//   pos3 = document.querySelector(".pos3");
//   pos2.classList.add("pos1");
//   pos2.classList.remove("pos2");
//   pos3.classList.add("pos2");
//   pos3.classList.remove("pos3");
//   pos1.classList.add("pos0");
//   pos1.classList.remove("pos1");
//   pos0.classList.add("pos3");
//   pos0.classList.remove("pos0");
// }

// carousel.addEventListener("touchstart", (e) => {
//   initialX = e.touches[0].clientX;
// });
// carousel.addEventListener("touchmove", (e) => {
//   if (initialX === null) {
//     return;
//   }
//   let currentX = e.touches[0].clientX;
//   let diffX = initialX - currentX;

//   if (diffX > 0) {
//     carouselRight();
//   } else if (diffX < 0) {
//     carouselLeft();
//   }

//   e.preventDefault();
//   initialX = null;
// });

// let liHeight = document.querySelector('.pos0');
// liHeight = liHeight.offsetHeight;

// let listHeight = document.getElementById('list');
// listHeight.style.height = liHeight + 'px';

window.onresize = function() {
  headerText();
}

window.onload = function() {
  headerText();
}

function headerText() {
  if (window.innerHeight > window.innerWidth) {
    document.getElementById('navHeading').textContent = 'Mobile Car Mechanic SW';
  } else {
    document.getElementById('navHeading').textContent = 'Mobile Car Mechanic South West';
  }
}

// function sendSMS() {
//   let button = document.getElementById('submitLink') 
//   let name = document.getElementById('name').value;
//   let email = document.getElementById('email').value;
//   let message = document.getElementById('message').value;
//   let smsToSend = "Name: " + name + ". Email Address: " + email + "." + "Enquiry: " + message + ".";
//   button.setAttribute('href', "sms:07999226507&body=" + smsToSend);
//   clearForm();
// }