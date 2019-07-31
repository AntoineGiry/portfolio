// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementsByTagName("navigation").style.padding = "0px";
  } else {
    document.getElementsByTagName("navigation").style.padding = "10px";
  }
}
