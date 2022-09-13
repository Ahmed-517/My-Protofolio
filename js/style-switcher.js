const styleSwitcherToggler = document.querySelector('.style-switcher-toggler');
styleSwitcherToggler.addEventListener('click', () => {
    document.querySelector('.style-switcher').classList.toggle('open');
})

// hide style on scroll 
window.addEventListener('scroll', () => {
    if (document.querySelector('.style-switcher').classList.contains('open')) {
        document.querySelector('.style-switcher').classList.remove('open')
    }
})

// theme colors 
const alternateStyle = document.querySelectorAll('.alternate-style');
let prevColor = localStorage.getItem('color');
changeColor(prevColor);

function setActiveStyle(color) {
    localStorage.setItem('color', color);
    let localColor = localStorage.getItem('color');
    
    changeColor(localColor)
}

function changeColor(localColor) {

    alternateStyle.forEach( (style)=>{
            if(localColor === style.getAttribute('title')) {
                style.removeAttribute('disabled')
            } else {
                style.setAttribute('disabled', 'true')
        }
    } )

}

// Light/Dark Mode
const dayNight = document.querySelector('.day-night');

// toggleMode();
let prevMode = localStorage.getItem('mode')
console.log('previos mode is', prevMode);
setMode(prevMode);

dayNight.addEventListener('click', ()=>{
    let mode = localStorage.getItem('mode')
    // dayNight.querySelector('i').classList.toggle('fa-sun');
    // dayNight.querySelector('i').classList.toggle('fa-moon');
    // document.body.classList.toggle('dark')
    setMode(mode);
    changeMode(mode);
})

function setMode(mode) {
    // let mode = localStorage.getItem('mode');

    if (mode == 'light') {
        dayNight.querySelector('i').classList.add('fa-sun');
        dayNight.querySelector('i').classList.remove('fa-moon');
        document.body.classList.remove('dark')
    } else if (mode == 'dark') {
        dayNight.querySelector('i').classList.remove('fa-sun');
        dayNight.querySelector('i').classList.add('fa-moon');
        document.body.classList.remove('dark')
    }
    
    console.log('mode is now', localStorage.getItem('mode'));
}

function changeMode(mode) {
    if (mode == 'light') {
        localStorage.setItem('mode', 'dark');
        dayNight.querySelector('i').classList.remove('fa-sun');
        dayNight.querySelector('i').classList.add('fa-moon');
        document.body.classList.add('dark')
    } else {
        dayNight.querySelector('i').classList.add('fa-sun');
        dayNight.querySelector('i').classList.remove('fa-moon');
        document.body.classList.remove('dark')
        localStorage.setItem('mode', 'light');
    }
}