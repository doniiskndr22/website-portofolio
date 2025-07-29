document.addEventListener("DOMContentLoaded", () => {
  "use strict"; // Preloader

  // --- START: Konfigurasi Animasi Partikel Latar Belakang - Efek Galaksi ---
  if (document.getElementById("particles-js")) {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 120, // Jumlah bintang
          density: {
            enable: true,
            value_area: 900,
          },
        },
        color: {
          value: ["#ffffff", "#f0f8ff", "#e6e6fa"], // Variasi warna bintang (putih, alice blue, lavender)
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
        },
        opacity: {
          value: 0.8,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 2,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: false, // Hilangkan garis penghubung
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1, // Kecepatan gerakan bintang
          direction: "none",
          random: true, // Gerakan acak untuk efek berkelap-kelip
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab", // Efek menarik bintang saat kursor dihover
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1,
            },
          },
          push: {
            particles_nb: 4,
          },
        },
      },
      retina_detect: true,
    });
  }
  // --- END: Konfigurasi Animasi Partikel ---

  const preloader = document.querySelector(".preloader");

  if (preloader) {
    window.addEventListener("load", () => {
      preloader.style.display = "none";
    });
  } // Typed.js for Hero Section

  const typed = document.querySelector(".typed");

  if (typed) {
    new Typed(".typed", {
      strings: ["Mahasiswa", "Web Developer", "UI/UX Enthusiast", "Freelancer"],

      loop: true,

      typeSpeed: 70,

      backSpeed: 50,

      backDelay: 2000,
    });
  } // Scroll-triggered animations

  const scrollElements = document.querySelectorAll(".animate-on-scroll");

  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add("is-visible");
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
        const delay = el.getAttribute("data-delay");

        if (delay) {
          setTimeout(() => {
            displayScrollElement(el);
          }, delay);
        } else {
          displayScrollElement(el);
        }
      }
    });
  };

  window.addEventListener("scroll", () => {
    handleScrollAnimation();
  }); // Initial check

  handleScrollAnimation(); // Navbar active state on scroll

  const navLinks = document.querySelectorAll(".nav-link");

  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;

      if (pageYOffset >= sectionTop - 60) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");

      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });
});

// Project Filtering

const filterContainer = document.querySelector("#project-filters");

const projectItems = document.querySelectorAll(".project-item");

if (filterContainer) {
  filterContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-filter")) {
      // Remove active class from old button

      filterContainer.querySelector(".active").classList.remove("active"); // Add active class to new button

      e.target.classList.add("active");

      const filterValue = e.target.getAttribute("data-filter");

      projectItems.forEach((item) => {
        if (item.dataset.category === filterValue || filterValue === "*") {
          item.classList.remove("hide");
        } else {
          item.classList.add("hide");
        }
      });
    }
  });
}

// --- START: V4 Interactive Showcase for Resume Section ---
const tabLinks = document.querySelectorAll(
  ".resume-tabs-nav-vertical .tab-link"
);
const tabContents = document.querySelectorAll(
  ".resume-tabs-content .tab-content"
);

tabLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const tabId = this.getAttribute("data-tab");

    // Non-aktifkan semua link dan konten
    tabLinks.forEach((item) => item.classList.remove("active"));
    tabContents.forEach((item) => item.classList.remove("active"));

    // Aktifkan link dan konten yang sesuai
    this.classList.add("active");
    const activeContent = document.getElementById(tabId);
    activeContent.classList.add("active");

    // Terapkan animasi stagger pada konten yang aktif
    const contentItems = activeContent.querySelectorAll(".content-item");
    contentItems.forEach((item, index) => {
      item.style.animation = "none"; // Reset animasi
      void item.offsetWidth; // Memicu reflow
      item.style.animation = `staggerIn 0.5s ease-out ${index * 0.1}s forwards`;
    });
  });
});

// Memicu klik pada tab pertama saat halaman dimuat untuk menjalankan animasi awal
document.querySelector(".resume-tabs-nav-vertical .tab-link.active").click();
// --- END: V4 Interactive Showcase for Resume Section ---

// --- START: Enhanced Parallax Effect for Hero Background ---
const heroSection = document.querySelector("#hero");
if (heroSection) {
  heroSection.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;
    const { offsetWidth, offsetHeight } = heroSection;

    const xPos = (clientX / offsetWidth - 0.5) * 2; // Диапазон -1 до 1
    const yPos = (clientY / offsetHeight - 0.5) * 2; // Диапазон -1 до 1

    const spaceBg = document.querySelector(".space-bg");
    if (spaceBg) {
      Array.from(spaceBg.children).forEach((element) => {
        const speed = parseFloat(element.dataset.speed) || 20; // Можно добавить data-speed для индивидуальной настройки скорости
        element.style.transform = `translateX(${
          xPos * -speed * 0.5
        }px) translateY(${yPos * -speed * 0.5}px)`;
      });
    }
  });
}
// --- END: Enhanced Parallax Effect for Hero Background ---
