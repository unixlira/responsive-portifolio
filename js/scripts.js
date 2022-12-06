const header = document.querySelector("header");

/* ---------------- Navbar Stick ---------------- */

function stickNavbar() {
    header.classList.toggle("scrolled", window.scrollY > 0);
    // console.log(window.scrollY);
    //console.log(window.scrollY > 0);
}
stickNavbar();


window.addEventListener("scroll", stickNavbar);
