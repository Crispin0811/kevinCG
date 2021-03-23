const navbar = document.querySelector(".navbar");


document.addEventListener('scroll',(e)=>{

    navbar.classList.toggle('barraOscuro', window.scrollY > 0)
})