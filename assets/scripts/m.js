// Runs early — after HTML is ready
document.addEventListener("DOMContentLoaded", () => {

 let menu = document.querySelector('.menu');
    menu.addEventListener('click',function(){
        let drop = document.getElementById('m-drop');
        drop.classList.toggle('m-d-o');
        if(drop.classList.contains('m-d-o')){
            menu.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>';
        }else{
            menu.innerHTML = '<i class="fa-solid fa-bars"></i>';
        }
    })

    document.querySelectorAll('.m-drop .nav a').forEach(anchors=>{
      anchors.addEventListener('click',()=>{
        let drop = document.getElementById('m-drop');
        drop.classList.remove('m-d-o');
      })
    })
    document.querySelectorAll('.m-drop .logo .so-1 a').forEach(anchors=>{
      anchors.addEventListener('click',()=>{
        let drop = document.getElementById('m-drop');
        drop.classList.remove('m-d-o');
      })
    })
// faq
 let accordion = document.querySelectorAll('.fcontent .accordion-header');
  accordion.forEach(ah=>{
      ah.addEventListener('click',function(){
          document.querySelectorAll('.fcontent .accordion-content').forEach((contents)=>{
              if(contents !== ah.nextElementSibling){
                  contents.classList.remove('accordopen');
              }
          });
          ah.nextElementSibling.classList.toggle('accordopen');
      });
  });

    // Intersection Observer options
const options = {
  root: null,
//   rootMargin: "0px 0px -100px 0px",
//   threshold: 0.3   
threshold: 0.15,
rootMargin: "0px 0px -40px 0px"        
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

    // scroll effect
  let tops = document.getElementById("top");
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 500) {
      tops.classList.add("show");
    } else {
      tops.classList.remove("show");
    }
  });
  if (tops) {
    tops.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  } else {
    console.error("Element with ID 'top' not found!");
  }