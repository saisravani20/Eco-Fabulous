const hero = document.getElementsByClassName('hero');
hero.onclick = redirect;
hero.onwheel = checkScroll;
var scrollDirection = 0;

function checkScroll(event) {
  // event.deltaY returns a positive or negative value depending on the scroll direction
  if (event.deltaY > 0) {
    // User is scrolling down
    redirect();
  }
}
function redirect() {
    window.location.href="home/home.html";
}

