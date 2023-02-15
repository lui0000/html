let lastScroll = 0;
const defaultOffser = 100;
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
    if (scrollPosition() > lastScroll && !containHide()) {
        // scroll down
        header.classList.add('hide')
        console.log('down');
    }
    else if((scrollPosition() < lastScroll && containHide())) {
        // scroll up
        header.classList.remove('hide')
        console.log('up');
    }
    lastScroll = scrollPosition();
})

// плавный скролл страницы

$('a').click(function() {
    
    let linkHref = $(this).attr('href');
    let scrollHeight = $(linkHref).offset().top

    $('html,body').animate({
        scrollTop : scrollHeight
    }, 1500);
    // console.log('be be be');
    // console.log($(this).attr('href'));
});


// AOS.init({
//   // Global settings:
//   disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
//   startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
//   initClassName: 'aos-init', // class applied after initialization
//   animatedClassName: 'aos-animate', // class applied on animation
//   useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
//   disableMutationObserver: false, // disables automatic mutations' detections (advanced)
//   debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
//   throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

//   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
//   offset: 120, // offset (in px) from the original trigger point
//   delay: 0, // values from 0 to 3000, with step 50ms
//   duration: 800, // values from 0 to 3000, with step 50ms
//   easing: 'ease', // default easing for AOS animations
//   once: false, // whether animation should happen only once - while scrolling down
//   mirror: false, // whether elements should animate out while scrolling past them
//   anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

// });

AOS.init();



document.addEventListener('DOMContentLoaded', (e) => {
    document.getElementById('myBtn').addEventListener('click',
    (e) => {
        document.getElementById('Mymodal').classList.add('Container-show')
    })
    document.getElementById('cross').addEventListener('click',
    (e) => {
        document.getElementById('Mymodal').classList.remove('Container-show')
    })
})


// function onEntry(entry) {
//     entry.forEach(change =>{
//         if(change.isIntersection){
//     change.target.classList.add('elements-show');
//         }
//     });
// }

// let options = {
//     threshold: [0.5] 
// };
// let observed = new
// IntersectionObserver(onEntry, options);
// let elements = 
// document.querySelectorAll('.animation-class');
// for(let elm of elements) {
//     observed.observe(elm);
// }