// Runs early — after HTML is ready
document.addEventListener("DOMContentLoaded", () => {

    // scroll reveal
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // ==========
});


// loader
window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");
    preloader.classList.add("fade-out");

    setTimeout(() => {
        preloader.style.display = "none";
    }, 600);
});
