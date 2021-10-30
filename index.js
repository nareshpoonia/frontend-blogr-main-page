var hamburger = document.querySelector(".hamburger-icon");
var close = document.querySelector(".close");
var collapsibleMenu = document.querySelector(".collapsible-menu");
var collapsibleMenuCompany = document.querySelector(
  ".collapsible-menu-company"
);
var collapsibleMenuConnect = document.querySelector(
  ".collapsible-menu-connect"
);
var line = document.querySelector(".line");
var dropDown = document.querySelector(".drop-down");
var arrowIconImageProduct = document.querySelector(".arrow-icon-image-product");
var arrowIconImageProductLight = document.querySelector(
  ".arrow-icon-image-product-light"
);
var arrowIconImageCompany = document.querySelector(".arrow-icon-image-company");
var arrowIconImageCompanyLight = document.querySelector(
  ".arrow-icon-image-company-light"
);
var arrowIconImageConnect = document.querySelector(".arrow-icon-image-connect");

var arrowIconImageConnectLight = document.querySelector(
  ".arrow-icon-image-connect-light"
);

let toggleStatus = false;

function toggleChange() {
  if (toggleStatus === false) {
    close.style.display = "block";
    hamburger.style.display = "none";
    toggleStatus = true;
    dropDown.style.display = "flex";
  } else if (toggleStatus === true) {
    close.style.display = "none";
    hamburger.style.display = "block";
    toggleStatus = false;
    dropDown.style.display = "none";
    collapsibleMenu.style.display = "none";
    collapsibleMenuCompany.style.display = "none";
    collapsibleMenuConnect.style.display = "none";
  }
}

let collapsibleToggleProduct = false;
let collapsibleToggleProductLight = false;
let collapsibleToggleCompany = false;
let collapsibleToggleCompanyLight = false;
let collapsibleToggleConnect = false;
let collapsibleToggleConnectLight = false;

arrowIconImageProduct.addEventListener("click", collapsibleToggleChangeProduct);
arrowIconImageProductLight.addEventListener(
  "click",
  collapsibleToggleChangeProductLight
);
arrowIconImageCompany.addEventListener("click", collapsibleToggleChangeCompany);
arrowIconImageCompanyLight.addEventListener(
  "click",
  collapsibleToggleChangeCompanyLight
);
arrowIconImageConnect.addEventListener("click", collapsibleToggleChangeConnect);

arrowIconImageConnectLight.addEventListener(
  "click",
  collapsibleToggleChangeConnectLight
);

function collapsibleToggleChangeProduct() {
  if (collapsibleToggleProduct === false) {
    arrowIconImageProduct.style.transform = "rotate(" + 180 + "deg)";
    collapsibleMenu.style.display = "flex";
    arrowIconImageCompany.style.display = "none";
    arrowIconImageConnect.style.display = "none";

    collapsibleToggleProduct = true;
  } else if (collapsibleToggleProduct === true) {
    arrowIconImageProduct.style.transform = "rotate(" + 0 + "deg)";
    collapsibleMenu.style.display = "none";
    collapsibleToggleProduct = false;
    arrowIconImageCompany.style.display = "block";
    arrowIconImageConnect.style.display = "block";
  }
}

function collapsibleToggleChangeProductLight() {
  if (collapsibleToggleProductLight === false) {
    arrowIconImageProductLight.style.transform = "rotate(" + 180 + "deg)";
    collapsibleMenu.style.display = "flex";
    collapsibleMenuCompany.style.display = "none";
    collapsibleToggleProductLight = true;
  } else if (collapsibleToggleProductLight === true) {
    arrowIconImageProductLight.style.transform = "rotate(" + 0 + "deg)";
    collapsibleMenu.style.display = "none";
    collapsibleToggleProductLight = false;
    arrowIconImageCompanyLight.style.display = "block";
    arrowIconImageConnectLight.style.display = "block";
  }
}

function collapsibleToggleChangeCompany() {
  if (collapsibleToggleCompany === false) {
    arrowIconImageCompany.style.transform = "rotate(" + 180 + "deg)";
    collapsibleMenuCompany.style.display = "flex";
    arrowIconImageConnect.style.display = "none";
    collapsibleToggleCompany = true;
  } else if (collapsibleToggleCompany === true) {
    arrowIconImageCompany.style.transform = "rotate(" + 0 + "deg)";
    collapsibleMenuCompany.style.display = "none";
    arrowIconImageConnect.style.display = "block";
    collapsibleToggleCompany = false;
  }
}
function collapsibleToggleChangeCompanyLight() {
  if (collapsibleToggleCompanyLight === false) {
    arrowIconImageCompanyLight.style.transform = "rotate(" + 180 + "deg)";
    collapsibleMenuCompany.style.display = "flex";
    collapsibleMenu.style.display = "none";
    collapsibleToggleCompanyLight = true;
  } else if (collapsibleToggleCompanyLight === true) {
    arrowIconImageCompanyLight.style.transform = "rotate(" + 0 + "deg)";
    collapsibleMenuCompany.style.display = "none";
    arrowIconImageConnectLight.style.display = "block";
    collapsibleToggleCompanyLight = false;
  }
}

function collapsibleToggleChangeConnect() {
  if (collapsibleToggleConnect === false) {
    arrowIconImageConnect.style.transform = "rotate(" + 180 + "deg)";
    collapsibleMenuConnect.style.display = "flex";
    line.style.display = "none";
    collapsibleToggleConnect = true;
  } else if (collapsibleToggleConnect === true) {
    arrowIconImageConnect.style.transform = "rotate(" + 0 + "deg)";
    collapsibleMenuConnect.style.display = "none";
    collapsibleToggleConnect = false;
    line.style.display = "block";
  }
}

function collapsibleToggleChangeConnectLight() {
  console.log("ckik");
  if (collapsibleToggleConnectLight === false) {
    arrowIconImageConnectLight.style.transform = "rotate(" + 180 + "deg)";
    collapsibleMenuConnect.style.display = "flex";
    collapsibleMenuCompany.style.display = "none";
    collapsibleMenu.style.display = "none";

    collapsibleToggleConnectLight = true;
  } else if (collapsibleToggleConnectLight === true) {
    arrowIconImageConnectLight.style.transform = "rotate(" + 0 + "deg)";
    collapsibleMenuConnect.style.display = "none";
    collapsibleToggleConnectLight = false;
  }
}
