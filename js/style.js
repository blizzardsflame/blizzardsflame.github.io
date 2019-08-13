AOS.init({
  duration: 1000,
  once: true
});
//Get the current year for the copyright
$("#year").text(new Date().getFullYear());

//Configure slider
$(".carousel").carousel({
  interval: 4000,
  pause: "hover"
});

//Icons social media links
$(document).on("click", "i", function() {
  switch (this.id) {
    case "gofacebook":
      window.open("https://facebook.com");
      break;
    case "goinstagram":
      window.open("https://instagram.com");
      break;
    case "gotwitter":
      window.open("https://twitter.com");
      break;
    // add additional cases
  }
});
