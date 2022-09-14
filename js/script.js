// Start Typing Animation 
let typed = new Typed('.typing', {
    strings:[
        '',
        'Computer Engineer',
        'Web Developer',
        'Competitive Programmer'
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})
// End Typing Animation 

// Start Aside
const nav = document.querySelector('.nav');
const navList = nav.querySelectorAll('li');
const totalNavList = navList.length;
const allSections = document.querySelectorAll('.section');
const totalSections = allSections.length;

for(let i=0; i<totalNavList; i++) {
    const a = navList[i].querySelector('a');
    a.addEventListener('click', function(){

        removeBackSection();

        for (let j=0; j<totalNavList; j++) {
            
            if ( navList[j].querySelector('a').classList.contains('active') ) {
                // allSections[j].classList.add('back-section')
                addBackSection(j);

            }
            navList[j].querySelector('a').classList.remove('active')
        }
        // console.log(this);
        this.classList.add('active')
        showSection(this);
        if (window.innerWidth < 1200)
            asideSectionTogglerBtn()
    })
}
function removeBackSection() {
    for(let i=0; i<totalSections; i++) {
        allSections[i].classList.remove('back-section');
    }
}
function addBackSection(params) {
    allSections[params].classList.add('back-section')
}
function showSection(element) {
    for(let i=0; i<totalSections; i++) {
        allSections[i].classList.remove('active');
    }
    const target = element.getAttribute('href').split('#')[1];
    // console.log(target);
    document.querySelector('#' + target).classList.add('active')
    console.log('show section');
}
function updateNav(element) {
    for (let i=0; i<totalNavList; i++) {
        navList[i].querySelector('a').classList.remove('active');
        const target = element.getAttribute('href').split('#')[1]
        if (target === navList[i].querySelector('a').getAttribute('href').split('#')[1]) {
            navList[i].querySelector('a').classList.add('active');
        }
    }
    console.log('update Nav');
}


// Click on hire me

document.querySelector('.hire-me').addEventListener('click', function(){;
    const sectionIndex = this.getAttribute('data-section-index');
    // console.log(sectionIndex);
    // console.log('button clicked');
    showSection(this);
    updateNav(this)
    removeBackSection();
    addBackSection(sectionIndex);
})

// Nav Toggler Button 
const navTogglerBtn = document.querySelector('.nav-toggle')
const aside = document.querySelector('aside');

navTogglerBtn.addEventListener('click', ()=>{
    asideSectionTogglerBtn();
})

function asideSectionTogglerBtn() {
    aside.classList.toggle('open');
    navTogglerBtn.classList.toggle('open');
    for(let i=0; i<totalSections; i++){
        allSections[i].classList.toggle('open'); 
    }
}


// End Aside

// Start Detect Os 
var detectOS = "Unknown OS";

if (navigator.appVersion.indexOf("Win") != -1) 
    detectOS = "Windows";

if (navigator.appVersion.indexOf("Mac") != -1) 
    detectOS = "MacOS";

if (navigator.appVersion.indexOf("Linux") != -1) 
    detectOS = "Linux";

function detect() {
    alert(`Device OS is: ${detectOS}`)
}
// detect();

// End Detect Os
