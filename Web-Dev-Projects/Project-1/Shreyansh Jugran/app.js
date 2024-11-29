const mode = document.getElementById("dark-mode-toggle");
const modeIcon = document.querySelector(".mode-icon");

mode.addEventListener("change", () => {

    modeIcon.classList.toggle("bi-moon-fill");
    modeIcon.classList.toggle("bi-brightness-high-fill");

});

const roles = ["Web Development", "Competitive Programming", "Content Creation"];
const animatedRole = document.getElementById("animated-role");
let roleIndex = 0;
let charIndex = 0;
let isAdding = true;

function animateRoles() {

    if (isAdding) {
        animatedRole.textContent += roles[roleIndex][charIndex];
        charIndex++;
        if (charIndex === roles[roleIndex].length) {
            isAdding = false;
            setTimeout(animateRoles, 1000);
            return;
        }
    }

    else {
        animatedRole.textContent = animatedRole.textContent.slice(0, -1);
        if (animatedRole.textContent.length === 0) {
            isAdding = true;
            charIndex = 0;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }
    setTimeout(animateRoles, isAdding ? 150 : 50);
}

document.addEventListener("DOMContentLoaded", function () {

    document.querySelector(".custom-btn").addEventListener("click", function () {
        const aboutSection = document.querySelector(".about-section");
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
        }
    });

});

document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector(".about-section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutSection.classList.add("fade-in-visible");
                observer.unobserve(aboutSection);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(aboutSection);
});

document.addEventListener("DOMContentLoaded", function () {
    const educationSection = document.querySelector('.education-section');

    function handleScroll() {
        const sectionPosition = educationSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (sectionPosition < screenPosition) {
            educationSection.classList.add('fade-in-active');
            window.removeEventListener('scroll', handleScroll);
        }
    }

    window.addEventListener('scroll', handleScroll);
});

document.addEventListener("DOMContentLoaded", async () => {
    await fetchMyRating();
});

const fetchMyRating = async () => {
    const url = "https://codeforces.com/api/user.rating?handle=SageSaiyan";

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText);
        }

        const data = await response.json();
        const latestRating = data.result[data.result.length - 1].newRating;
        document.querySelector(".rating").innerHTML = `My Username - SageSaiyan <br> My Current Rating : ${latestRating}`;

    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        document.querySelector(".rating").innerHTML = "My Username - SageSaiyan <br> My Current Rating : Unable to fetch rating";
    }
};

const fetchRating = async (username) => {
    const url = `https://codeforces.com/api/user.rating?handle=${username}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText);
        }

        const data = await response.json();
        const latestRating = data.result[data.result.length - 1].newRating;
        document.querySelector(".result").innerHTML = `Current Rating : ${latestRating}`;

    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        document.querySelector(".result").innerHTML = "Current Rating : Unable to fetch rating";
    }
};

const userRating = document.querySelector("#ratingBox");
const search = document.querySelector("#search");
search.addEventListener("click", () => {
    const value = userRating.value;
    if (value !== "") {
        userRating.value = "";
        fetchRating(value);
    }
    else {
        alert("Enter a username!");
    }

})

document.addEventListener("DOMContentLoaded", () => {
    const fadeInSections = document.querySelectorAll('.fade-in-skills-right');

    const handleScroll = () => {
        fadeInSections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const isVisible = sectionTop < window.innerHeight - 100;

            if (isVisible) {
                section.classList.add('show');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
});

document.addEventListener('DOMContentLoaded', function () {
    const projectsSection = document.querySelector('.projects-section');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    projectsSection.classList.add('fade-in-active');
                    observer.unobserve(projectsSection);
                }
            });
        },
        {
            threshold: 0.2,
        }
    );

    observer.observe(projectsSection);
});

document.addEventListener("DOMContentLoaded", function () {
    const toggleCheckbox = document.getElementById("dark-mode-toggle");
    const body = document.body;
    const modeIcon = document.querySelector('.mode-icon');

    function enableDarkMode() {
        body.classList.add("dark-mode");
        modeIcon.classList.replace("bi-brightness-high-fill", "bi-moon-fill");
        toggleCheckbox.checked = true;
    }

    function disableDarkMode() {
        body.classList.remove("dark-mode");
        modeIcon.classList.replace("bi-moon-fill", "bi-brightness-high-fill");
        toggleCheckbox.checked = false;
    }

    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const currentHour = new Date().getHours();
    const isNightTime = currentHour >= 19 || currentHour < 6;

    if (prefersDarkScheme.matches || isNightTime) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }

    toggleCheckbox.addEventListener("change", function () {
        if (toggleCheckbox.checked) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector('.about-section');
    
    function isElementInView(el) {
        const rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }

    function onScroll() {
        if (isElementInView(aboutSection)) {
            aboutSection.classList.add('fade-in-visible');
        }
    }

    window.addEventListener('scroll', onScroll);

    onScroll();
});


window.onload = animateRoles;

