window.onscroll = scrollFunction;

function scrollFunction() {
  if (
    document.body.scrollTop > 200 || //for safari
    document.documentElement.scrollTop > 200 // For Chrome, Firefox, IE and Opera
  ) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}
// When the user clicks on the button, jump to the top of the page
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
