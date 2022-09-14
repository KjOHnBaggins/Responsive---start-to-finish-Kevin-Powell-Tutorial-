const mainNav = document.querySelector('.main-nav');
const navToggle = document.querySelector('.nav-toggle');
const hamburger = document.querySelector('.hamburger');
console.log({mainNav, navToggle});

    //hamburger menu toggle

    // $('.nav-toggle').click(function() {
    //     $('.main-nav').toggleClass('.is-open');
    // })
navToggle.addEventListener('click', function() {
        mainNav.classList.toggle('is-open');
        hamburger.classList.toggle('is-open');
});

