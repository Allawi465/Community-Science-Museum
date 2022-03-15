const navDrag = () => {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector("nav");
    const navLinks = document.querySelectorAll(".nav-link");
    const hOne = document.querySelector(".about-h1");

    hamburger.addEventListener("click", () => {
        nav.classList.toggle("aktiv");
        hamburger.classList.toggle("burger");
    
        navLinks.forEach((link, index)=> {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkOpacity 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        hOne.classList.toggle("h1Display");
    })
};

navDrag();