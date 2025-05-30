/*========= Navbar Scroll Effect ===========*/
document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById("header");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Mobile menu toggle
    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.querySelector(".navbar");
    const menuIcon = document.querySelector(".menu-icon");
    menuToggle && menuToggle.addEventListener("change", function() {
        if (this.checked) {
            navbar.style.display = "flex";
        } else {
            navbar.style.display = "";
        }
    });
    // Close menu on link click (mobile)
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 700) {
                menuToggle.checked = false;
                navbar.style.display = "";
            }
        });
    });
});

/*========== Scroll sections active link in navbar ==========*/
window.addEventListener("scroll", () => {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');
    let scrollY = window.scrollY;
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (scrollY >= offset && scrollY < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));
            let activeLink = document.querySelector('header nav a[href*=' + id + ']');
            if (activeLink) activeLink.classList.add('active');
        }
    });
});

/*========== Typing animation in home page ==========*/
if (document.querySelector(".text")) {
    new Typed(".text", {
        strings: [
            "Software Development",
            "Web Development",
            "Java Programming",
            "Python Projects",
            "Database Design"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        backDelay: 1200,
        loop: true
    });
}

/*========== Go top icon in left bottom ==========*/
const toTop = document.querySelector(".top");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
});

/*========== Scroll Reveal Animation ==========*/
document.addEventListener("DOMContentLoaded", function() {
  const reveals = document.querySelectorAll('.reveal');
  function revealOnScroll() {
    for (const el of reveals) {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 60) {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
        el.style.transition = "all 0.7s cubic-bezier(.4,2,.6,1)";
      } else {
        el.style.opacity = 0;
        el.style.transform = "translateY(60px)";
      }
    }
  }
  revealOnScroll();
  window.addEventListener('scroll', revealOnScroll);
});