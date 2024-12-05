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

const app = Vue.createApp({ 
    data(){
        return{
            projects: [],
            searchQuery: "",
            sortBy: "titleAsc"
        };
    },
    methods: {
        async getProjects(){
            try{
                const response = await axios.get("projects.json");
                this.projects = response.data;
            } catch (error) {
                console.log("An error occured while fetching projects:", error);
            }
        },

        getFilteredAndSortedProjects(){
            let filteredProjects = this.projects.filter(project => 
                project.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                project.description.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                project.customer.toLowerCase().includes(this.searchQuery.toLowerCase())
            );

            switch(this.sortBy){
                case "titleAsc":
                    return filteredProjects.sort((a,z) => a.title.localeCompare(z.title));
                case "titleDesc":
                    return filteredProjects.sort((a,z) => z.title.localeCompare(a.title));
                case "customerAsc":
                    return filteredProjects.sort((a,z) => a.customer.localeCompare(z.customer));
                case "customerDesc":
                    return filteredProjects.sort((a,z) => z.customer.localeCompare(a.customer));    
                default:
                    return filteredProjects;
            }
        }
    },
    created(){
        this.getProjects();
    }
});

app.mount("#app");


let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const backBtn = document.querySelector(".back");
const forwardBtn = document.querySelector(".forward");
const slideshow = document.querySelector(".imageSlideshow")

function showSlide(index){
    slides[currentSlide].classList.remove("active");
    slides[index].classList.add("active");
    currentSlide = index;
}

function nextSlide(){
    if(currentSlide < slides.length -1) {
        showSlide(currentSlide +1);
    } else {
        showSlide(0);
    }
}

const previousSlide = () => {
    if(currentSlide > 0){
        showSlide(currentSlide-1);
    } else {
        showSlide(slides.length -1)
    }
}

const scrollTrigger = () =>{
    const slideshowPosition = slideshow.getBoundingClientRect().top;
    const height = window.innerHeight;

    if (slideshowPosition < height * 0.55){
        slideshow.classList.add("visible");
    }
}

backBtn.addEventListener("click", previousSlide);
forwardBtn.addEventListener("click", nextSlide);
window.addEventListener("scroll", scrollTrigger);

showSlide(0);

