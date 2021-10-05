document.addEventListener("DOMContentLoaded", function (event) {
  //the event occurred
  var collap = document.getElementById("collap");
  var secondmenu = document.getElementsByClassName("second-list");
  var submenu = document.querySelector(".submenu-button");
  submenu.addEventListener("click", function () {
    console.log("clicked");
    collap.classList.toggle("active");
    console.log(collap);

    // collap.remove();
  });
});
