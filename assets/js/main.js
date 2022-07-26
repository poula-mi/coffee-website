// SHOW MENU
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

// menu show
// validate if constant exists
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// menu hidden
// validate if constant exists
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// CHANGE BACKGROUND HEADER
function scrollHeader() {
    const header = document.getElementById('header')
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


// SWIPER DISCOVER
var swiper = new Swiper(".subscribe__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 32,
    loop: true,
    coverflowEffect: {
        rotate: 30,
    }
});


// VIDEO
const videoFile = document.getElementById('video-file'),
    videoButton = document.getElementById('video-button'),
    videoIcon = document.getElementById('video-icon')

function playpause() {
    if (videoFile.paused) {
        // play video
        videoFile.play()
        // we change the icon
        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-fill')
    } else {
        // pause video
        videoFile.pause()
        // we change the icon
        videoIcon.classList.add('ri-play-fill')
        videoIcon.classList.remove('ri-pause-line')
    }
}

videoButton.addEventListener('click', playpause)

function finalVideo() {
    // video ends, icon changes
    videoIcon.classList.add('ri-play-fill')
    videoIcon.classList.remove('ri-pause-line')
}

videoFile.addEventListener('ended', finalVideo)


// SHOW SCROLL UP
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


// DARK LIGHT THEME
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-fill'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-fill' : 'ri-sun-fill'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-fill' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    reset: true,
})

sr.reveal(`.home__data, .home__social-link, .home__info, 
            .subscribe__container,
            .experience__data, .experience__overlay,
            .explore__card,
            .footer__data, .footer__rights`, {
    origin: 'top',
    interval: 100,
})

sr.reveal(`.about__data,
            .video__description,
            .newsletter__description`, {
    origin: 'left',
})

sr.reveal(`.about__img-overlay,
            .video__content,
            .newsletter__form`, {
    origin: 'right',
    interval: 100,
})