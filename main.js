const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle){
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
    //evento qnd clicamos
}

const links = document.querySelectorAll('nav ul li a')
for (const link of links){
    link.addEventListener('click', function(){
        nav.classList.remove('show')
    })
}

/* muda o header da pag. pra aparecer a sombra */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight   
function changeHeaderWhenScroll(){
    if(window.scrollY >= navHeight){
        //maior que a altura do header
        header.classList.add('scroll')
    } else {
        //menor que a altura do header
        header.classList.remove('scroll')
    }
}




/*testimonials carousel slider swiper*/
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
  });

/*scrollreveal: mostra os elementos de forma suave*/
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
}) 

scrollReveal.reveal(`
    #home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social`,
    { interval: 100 }
 )

 const toTopButton = document.querySelector('.to-top')
function toTop() {
    if(window.scrollY >= 530){
        toTopButton.classList.add('show')
    } else {
        toTopButton.classList.remove('show')
    }
}

/* Menu ativo conforme a seção */
const section = document.querySelectorAll('main section[id]')
function activateMenuLine(){
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for( const section of sections ) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if(checkpointStart && checkpointEnd){
             document.querySelector('nav ul li a[href*=' + sectionId + ']' )
            .classList.add('active')                                    
        } else {
            document
            .querySelector('nav ul li a[href*=' + sectionId + ']' )
            .classList.remove('active')
        }

    }
}

window.addEventListener('scroll', function() {
    changeHeaderWhenScroll()
    toTop()
    activateMenuLine()
})
