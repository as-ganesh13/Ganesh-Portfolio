const roles = [
    "AI & ML Student",
    "Python Developer",
    "Web Developer",
    "Automation Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing");

function typeText() {

    if (charIndex < roles[roleIndex].length) {

        typingElement.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;

        setTimeout(typeText, 100);

    } else {

        setTimeout(deleteText, 1500);

    }
}

function deleteText() {

    if (charIndex > 0) {

        typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(deleteText, 50);

    } else {

        roleIndex++;

        if (roleIndex >= roles.length) {
            roleIndex = 0;
        }

        setTimeout(typeText, 300);
    }
}

typeText();
// Dark / Light Mode

const themeButton = document.getElementById("themeBtn");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeButton.textContent="☀️";
    }
    else{
        themeButton.textContent="🌙";
    }

});
// ===========================
// Scroll Reveal Animation
// ===========================

const hiddenElements = document.querySelectorAll(
"#about, #skills, #education, #projects, #contact"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

hiddenElements.forEach((el) => {

    el.classList.add("hidden");

    observer.observe(el);

});
// ===========================
// Custom Cursor
// ===========================

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});