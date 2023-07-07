const path = window.location.pathname;
const homeElement = document.getElementById("home");
const aboutElement = document.getElementById("about");
const contactMeElement = document.getElementById("contactMe");
console.log('555');
if (path === "/about") aboutElement.classList.add("active");
