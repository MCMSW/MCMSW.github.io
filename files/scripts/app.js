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