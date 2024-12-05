
function toggleMenu(){
const header = document.querySelector("#headerContainer");
const menu = document.querySelector(".listaHeader");

if (header.classList.contains("show-menu")){
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



let slideIndex = 0;
showSlides();

function showSlides(){ 
    let i;
    const slides = document.getElementsByClassName("slideVid");
    for (i = 0; i < slides.length; i++){ 
        slides[i].style.display = "none";
    }
    slideIndex++;

    if (slideIndex > slides.length){
        slideIndex = 1;
    } else if (slideIndex <= 0) {
        slideIndex = slides.length;
    }

    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 7500)
}




const images = document.querySelectorAll('.profiles img');

images.forEach(image => {
    image.addEventListener('mouseover', () => {
        images.forEach(img => {
            if (img !== image) {
                img.classList.add('other'); 
            }
        });
        image.classList.remove('other');  
    });

    image.addEventListener('mouseout', () => {
        images.forEach(img => {
            img.classList.remove('other'); 
        });
    });
}); 

const app = Vue.createApp({
    data(){
        return{
        selectedGameIndex: null,
        isDownloadHovered: false,  
        downloadImg: "steamDownload.webp",
        games: [
            {
                title: "WAR: Of Infinity - Microtransaction Edition",
                desc: "Set in the year 2055, this fast-paced FPS thrusts you into a global conflict of the future! Advanced weapons, cyber warfare and mechs await!",
                logo: "logo-WAR_Of_infinity.png",
                link: "https://store.steampowered.com/"
            },
            
            {
                title: "The Dungeon of Glitch",
                desc: "Team up with players from around the world to defeat corrupted bosses, discover hidden treasures, and uncover the dungeon’s mysterious origins in a world where action is law!",
                logo: "logo-Dungeon_of_glitch.png",
                link: "https://store.steampowered.com/"
            },
            {
                title: "Unregistered Frame",
                desc: "A chilling horror game, captured through the lens of a camera. Each shot reveals disturbing clues, but be wary — the things you capture may want to remain unseen.",
                logo: "logo-Unregistered_Frame.png",
                link: "https://store.steampowered.com/"
            }
            ]
        }
    },

    methods: {

        selectGame(index){
            if (this.selectedGameIndex === index) {
                this.selectedGameIndex = null;
              } else {
                this.selectedGameIndex = index;
              }
        },
        
        setDownloadHover(isHovered){
        this.isDownloadHovered = isHovered;
        }
    },
});
app.mount("#app");


document.addEventListener('DOMContentLoaded', function () {
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('mail');
    const form = document.getElementById('contactForm');

    const nameError = document.getElementById('nameError');
    const phoneError = document.getElementById('phoneError');
    const emailError = document.getElementById('emailError');
    
    const modal = document.getElementById('submitForm');
    const closeBtn = document.querySelector('.close-btn');

    
    nameInput.addEventListener('input', function (){
        const nameValue = nameInput.value;
        if (nameValue.length < 3) {
            nameError.textContent = 'Name must be at least 3 characters long.';
        } else if (!/^[A-Za-z\s]+$/.test(nameValue)) {
            nameError.textContent = 'Name can only contain letters and spaces.';
        } else {
            nameError.textContent = ''; 
        }
    });
    
    
    phoneInput.addEventListener('input', function(){
        const phoneValue = phoneInput.value;
        if(!/^[\d+\-]+$/.test(phoneValue)){
            phoneError.textContent = 'Phone number can only contain digits, + and -.'
        } else {
            phoneError.textContent = '';
        }
    });
    
    
    emailInput.addEventListener('input', function(){
        const emailValue = emailInput.value;
        if(!/\S+@\S+\.\S+/.test(emailValue)){
            emailError.textContent = 'Email must contain @ and "."';
        } else {
            emailError.textContent = '';
        }
    });


    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const nameValid = nameError.textContent === '';
        const phoneValid = phoneError.textContent === '';
        const emailValid = emailError.textContent === '';

        if (nameValid && phoneValid && emailValid){
            modal.style.display = 'flex';
            form.reset();
        } 
        });

       
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });

    
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
