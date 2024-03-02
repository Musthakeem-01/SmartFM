window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var navbar = document.getElementById("navbar");
  var links = navbar.getElementsByTagName("a");
  var logo_white =document.getElementById("white-logo");
  var logo_black =document.getElementById("black-logo");
  
  
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.style.backgroundColor = "#fff";
    navbar.style.transition = "background-color 0.4s";
    logo_black.classList.remove("hidelogo")
    logo_white.classList.add("hidelogo")
    for (var i = 0; i < links.length; i++) {
      links[i].style.color = "black"; // Change text color to black
    }
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    navbar.style.backgroundColor = "#715FDB";
    navbar.style.transition = "background-color 0.4s";
    logo_white.classList.remove("hidelogo")
    logo_black.classList.add("hidelogo")
    for (var i = 0; i < links.length; i++) {
      links[i].style.color = "#fff"; // Change text color to white
    }
    document.getElementById("logo").style.fontSize = "35px";
  }
}
/-------------------------------responsive work---------------------/ 

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

