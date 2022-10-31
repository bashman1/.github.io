gsap.registerPlugin("ScrollTrigger");

window.addEventListener("load", function () {
  gsap.to(".header_revealer img", {
    scale: 1,
    duration: 2.5,
    delay: 1,
    ease: "elastic.out(1, 0.3)",
  });

  gsap.to(".header_revealer", {
    x: "100%",
    duration: 3,
    delay: 2,
    ease: "power4.out",
  });

  //   animate logo
  gsap.from(".logo_link img", { opacity: 0, x: "20%", duration: 1 }, "<10%");
  // items_list
});
