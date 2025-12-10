// Runs early — after HTML is ready
document.addEventListener("DOMContentLoaded", () => {

    // Intersection Observer options
const options = {
  root: null,
  rootMargin: "0px 0px -100px 0px",
  threshold: 0.3           
};
    // scroll reveal
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);   // only once
            }
        });
    },options);

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
