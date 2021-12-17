//disable smooth scrolling 
// source: http://stackoverflow.com/a/35611393/992504
document.getElementsByTagName("body")[0].addEventListener("wheel",function (event) {
  // exception for ACE Editor, JS text editor used by sites like GitHub
  if (event.target.classList.contains('ace_content')) {
    return;
  }
  event.stopPropagation();
}, true)

// opening/closing on menu icon
var header = document.getElementById("header");
var mobileMenu = document.getElementById("mobileMenu");
var currentHeaderHeight = header.clientHeight;

mobileMenu.onclick = function () {
  var isClose = header.clientHeight === currentHeaderHeight;
  if (isClose) {
    header.style.height = "fit-content";
  } else {
    header.style.height = null;
  }
};

// opening/closing on menu items
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');

for (var i = 0; i < menuItems.length; i++) {
  var item = menuItems[i];
  item.onclick = function (event) {
    var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
    
    if (isParentMenu) {
      event.preventDefault();
    } else {
      header.style.height = null;
    }
  }
};
