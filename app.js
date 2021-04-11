const menu = document.querySelector('#mobile-menu'); // For id, #
const menuLinks = document.querySelector('.navbar__menu'); // For class, .

// Display mobile menu - trigger navbar__menu.active and is_active class
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu); // We wrote the function above
