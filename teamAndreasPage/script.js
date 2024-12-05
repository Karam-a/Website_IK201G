function toggleMenu() {
    const header = document.querySelector("#headerContainer");
    const menu = document.querySelector(".listaHeader");

    if (header.classList.contains("show-menu")) {
        menu.style.opacity = 0; 
        setTimeout(() => {
            header.classList.remove("show-menu");
            menu.style.display = "none"; 
        }, 500);
    } else {
        menu.style.display = "flex"; 
        setTimeout(() => {
            header.classList.add("show-menu");
            menu.style.opacity = 1; 
        }, 10);
    }
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}

const app = Vue.createApp({
    data () {
        return {
            projects: []
        }
    },
    created() {
        axios.get('projects.json')
        .then((response) => {
            this.projects = response.data;
    })
}
});

app.mount('#app');