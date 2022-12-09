

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

// show menu

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

//  remove menu 
const navLink = document.querySelectorAll('.nav-link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    //  when we click on each nav_link , we remove the show_menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// skills 

const skillsContent = document.getElementsByClassName('skills_content'),
    skillsHeader = document.querySelectorAll('.skills_header')
                                                                                                                                    
function toggleSkills() {
    let itemClass = this.parentNode.className
    var i= 0;
    for ( ;i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills_content skills_close'
    }

    if (itemClass === 'skills_content skills_close') {
        this.parentNode.className =  'skills_content skills_open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills);
})



//  qualification tabs

const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification_active')
        })

        target.classList.add('qualification_active')

        tab.forEach(tab => {
            tab.classList.remove('qualification_active')
        })

        tab.classList.add('qualification_active')
    })
})


// services modal

const modalViews = document.querySelectorAll('.services_modal'),
    modalBtns = document.querySelectorAll('.services_button'),
    modalCloses = document.querySelectorAll('.services_modal-close')


let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn , i) => {
    modalBtn.addEventListener('click' , () =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click' , () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})

// portfolio swiper

let swiperPortfolio = new Swiper('.portfolio_container', {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

});


// swiper testimonial


let swiperTestimonial = new Swiper('.testimonial_container', {
    
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets:true,
    },
   breakpoints:{
    568:{
        slidesPerView:2,
    }
   }
  });

  
// scroll section active link

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    scrollY = window.pageYOffset


    sections.forEach(current=>{
        const sectionHeight  = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + secionId + ']').classList.add('active-link')

        } else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })

}

window.addEventListener('scroll' , scrollActive)



// change background header 

function scrollHeader(){
    const nav = document.getElementById('header')
    // if the scroll header is greater than 80 view port height, add the scroll header class to the header tag
    if(this.scrollY >=80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll' , scrollHeader)

// show scroll up
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // when the scroll is higher than 560 viewport height , add the show-scroll class to the tag with the s
    if(this.scrollY >= 560 ) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll' , scrollUp)



// dark light theme

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedTheme === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// activate and deactivate theme manually with the button
themeButton.addEventListener('click' , () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.getItem('selectedIcon' , getCurrentIcon)
})