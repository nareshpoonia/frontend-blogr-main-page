var hamburger = document.querySelector(".hamburger-icon");
var close = document.querySelector(".close");
// hamburger.addEventListener("click", clickHandler);

// function clickHandler() {
//   console.log("clicked");
// }
let toggleStatus = false;

function toggleChange() {
  if (toggleStatus === false) {
    console.log("Do Somthing");
    close.style.display = "block";
    hamburger.style.display = "none";
    toggleStatus = true;
    console.log(toggleStatus);
  } else if (toggleStatus === true) {
    console.log("Do Somthing else ");
    close.style.display = "none";
    hamburger.style.display = "block";
    toggleStatus = false;
    console.log(toggleStatus);
  }
}
