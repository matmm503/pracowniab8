gsap.registerPlugin(ScrollTrigger);

// Ukrywamy elementy przed animacją by nie "mrugały" na ekranie
gsap.set([".gs-reveal-hero", ".gs-reveal-nav", ".gs-reveal-up"], { opacity: 0, y: 30 });
gsap.set(".hero-image", { scale: 1.15 }); // Zdjęcie delikatnie powiększone na start

const mainTimeline = gsap.timeline();

// 1. ŁADOWANIE PRELOADERA
mainTimeline.to(".progress-line-inner", {
    width: "100%",
    duration: 1.8,
    ease: "power2.inOut"
})
// 2. ROZMYCIE I ZANIK PRELOADERA
.to(".preloader", {
    opacity: 0,
    duration: 1.2,
    ease: "power2.inOut",
    onComplete: () => {
        document.querySelector(".preloader").style.display = "none";
    }
})
// 3. EFEKT KENA BURNSA NA TLE (bardzo powolne oddalenie tła)
.to(".hero-image", {
    scale: 1,
    duration: 4,
    ease: "power2.out"
}, "-=0.8") // Zaczyna się lekko przed końcem znikania preloadera
// 4. ANIMACJA TEKSTÓW W HERO
.to([".gs-reveal-nav", ".gs-reveal-hero"], {
    y: 0,
    opacity: 1,
    duration: 1.5,
    stagger: 0.15,
    ease: "power3.out"
}, "-=3.5");

// ================= ANIMACJE PRZY SCROLLOWANIU =================
// Każda sekcja będzie elegancko i powoli wypływać od dołu
const scrollElements = document.querySelectorAll('.gs-reveal-up');

scrollElements.forEach((elem) => {
    gsap.to(elem, {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: elem,
            start: "top 85%", // Aktywacja, gdy góra elementu jest w 85% ekranu
            toggleActions: "play none none none" // Odpala się raz i zostaje
        }
    });
});

// ================= PARALAKSA ZDJĘCIA O PRACOWNI =================
// Zdjęcie będzie się delikatnie przesuwać wewnątrz swojego kontenera podczas scrolla
gsap.to(".about-image", {
    y: 50,
    ease: "none",
    scrollTrigger: {
        trigger: ".about-image-wrapper",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});
