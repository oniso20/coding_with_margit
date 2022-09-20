const header = document.querySelector('header');
const backButton = document.querySelector('#backToTop');
const mobButton = document.querySelector('#mob_button');
const nav = document.querySelector('nav');
let links = document.querySelector('nav ul li a');
const modalButton = document.querySelector('#modalButton');
const closeButton = document.querySelector('#closeButton');
const overlay = document.querySelector('.overlay');

window.onscroll = function () {
    scrollFunction();
};

const scrollFunction = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add('nav-active');
        backButton.style.display = 'block';
    } else {
        header.classList.remove('nav-active');
        backButton.style.display = 'none';
    }
};

const getToTop = () => {

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

};


const mobMenu = () => {

    if (nav.classList.contains('responsive')) {
        nav.classList.remove('responsive');
        document.body.style.overflow = '';
    } else {
        nav.classList.add('responsive');
        document.body.style.overflow = 'hidden';
    }

};

for (const link of links) {
    link.addEventListener('click', mobMenu);
}

// const showModel = () => {
//     let x = document.querySelector(".overlay");
//     if (x.style.display === "none") {
//         x.style.display = "flex";
//     } else {
//         x.style.display = "none";
//     }
// };

const modal = () => {
    overlay.classList.toggle('visible');
};

modalButton.addEventListener('click', modal);
closeButton.addEventListener('click', modal);

backButton.addEventListener('click', getToTop);
mobButton.addEventListener('click', mobMenu);