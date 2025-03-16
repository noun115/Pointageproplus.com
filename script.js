document.addEventListener("DOMContentLoaded", () => {
    // ✅ Button Click Animation
    const button = document.querySelector(".btn");
    if (button) {
        button.addEventListener("click", () => {
            button.style.background = "#28a745";
            button.innerText = "Loading...";
            setTimeout(() => {
                button.style.background = "#007bff";
                button.innerText = "Suivant";
            }, 2000);
        });
    }

    // ✅ Smooth Scrolling Effect
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: "smooth"
                });
            }
        });
    });

    // ✅ Active Navigation Highlight
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
        });
    });

  


   

    // ✅ Change Image on Click
    document.querySelectorAll(".change-image").forEach(item => {
        item.addEventListener("click", function () {
            let newImage = this.getAttribute("data-image");
            document.getElementById("dynamic-image").src = newImage;
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const homeButton = document.querySelector("a[href='index.html']");

    if (homeButton) {
        homeButton.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default anchor behavior
            window.location.href = "index.html"; // Redirect to index.html
        });
    }

    // Function to redirect to the next page
    const nextButton = document.querySelector(".btn");
    if (nextButton) {
        nextButton.addEventListener("click", () => {
            window.location.href = "nextpage.html"; // Ensure nextpage.html exists
        });
    }
});




