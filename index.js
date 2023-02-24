var myNav = document.getElementById("myNav");

// const navbar = document.querySelector('.nav-fixed');
window.onscroll = () => {
    if (window.scrollY > 100) {
        myNav.classList.add('nav-colored');
    } else {
        myNav.classList.remove('nav-colored');
    }
};