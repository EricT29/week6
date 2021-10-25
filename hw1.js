window.onload = function() {
    var navbar = document.getElementById("navbar");

    var showcase = document.getElementById("showcase");

    var footer = document.getElementById("footer");

    var footerNodes = footer.childNodes;

    console.log(footerNodes);

    var footerKids = footer.children;

    var navs = document.getElementsByClassName(".nav-link");

    var ul = document.querySelector("ul");

    var aboutLI = ul.childNodes[3].firstChild

    console.log(aboutLI)
}