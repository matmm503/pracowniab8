gsap.registerPlugin(ScrollTrigger);

const mainTimeline = gsap.timeline();

// 1. ANIMACJA PRELOADERA
mainTimeline.to(".progress-bar", {
    width: "100%",
    duration: 1.5,
    ease: "power2.inOut"
})
.to(".preloader", {
    opacity: 0,
    duration: 0.8,
    ease: "power2.inOut",
    onComplete: () => {
        document.querySelector(".preloader").style.display = "none";
    }
})

// 2. WEJŚCIE SEKCJI HERO (Fade Up)
.fromTo(".jungle-leaf", 
    { scale: 0.8, opacity: 0 },
    { scale: 1, opacity: 0.9, duration: 1.5, stagger: 0.1, ease: "power3.out" },
    "-=0.4"
)
.fromTo([".hero-title", ".hero-subtitle", ".btn-primary"], 
    { y: 60, opacity: 0 },
    { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power3.out" },
    "-=1.2" 
);

// 3. EFEKT PARALAKSY LIŚCI NA SCROLLU W HERO
gsap.to(".leaf-1", {
    y: -150, x: -30, ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true }
});

gsap.to(".leaf-2", {
    y: -250, x: 50, rotation: 40, ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true }
});

gsap.to(".leaf-3", {
    y: -80, x: -20, ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true }
});

gsap.to(".leaf-4", {
    y: -200, x: 40, rotation: 185, ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true }
});

// 4. ANIMACJA POJAWIANIA SIĘ NOWYCH SEKCJI (Fade in up on scroll)
const revealElements = document.querySelectorAll('.gs-reveal');

revealElements.forEach((elem) => {
    gsap.fromTo(elem, 
        { y: 50, opacity: 0 }, 
        { 
            y: 0, 
            opacity: 1, 
            duration: 1, 
            ease: "power3.out",
            scrollTrigger: {
                trigger: elem,
                start: "top 85%", // Animacja startuje gdy element jest widoczny w 15% od dołu ekranu
                toggleActions: "play none none reverse" 
            }
        }
    );
});
