const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to('.text', { y: "0%", duration: 1, stagger: 0.25 });
// we took class neme .text which we want to animmate and we animet from 100% to 0% and with duration of 1s
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo('nav', { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");