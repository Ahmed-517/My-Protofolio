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

for(let i=0; i<totalNavList; i++) {
    const a = navList[i].querySelector('a');
    a.addEventListener('click', ()=>{
        for (let j=0; j<totalNavList; j++) {
            navList[j].querySelector('a').classList.remove('active')
        }
        this.classList.add('active')
    })
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
