document.addEventListener("DOMContentLoaded", function (event) {
  //the event occurred
  var collap = document.getElementById("collap");
  var submenu = document.querySelector(".submenu-button");
  submenu.addEventListener("click", function () {
    console.log("clicked");
    collap.classList.toggle("active");

    // collap.remove();
  });
});
