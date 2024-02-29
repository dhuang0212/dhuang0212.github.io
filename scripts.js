window.addEventListener('scroll', function() {
  // Debounce this function for performance
  if (this.timeout) {
      clearTimeout(this.timeout);
  }
  this.timeout = setTimeout(function() {
      var navbar = document.getElementById("navigation-bar");
      var sticky = navbar.offsetTop;

      if (window.pageYOffset >= sticky) {
          navbar.classList.add("sticky");
      } else {
          navbar.classList.remove("sticky");
      }
  }, 100);
});
