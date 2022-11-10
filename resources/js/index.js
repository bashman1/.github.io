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

const slides = document.querySelectorAll(".gallery_hidding");

slides.forEach((slide) => {
  let current = 0;
  let z = 1000000000;

  const images = slide.querySelectorAll(".img_c");
  images.forEach((image) => {
    z = z - 1;
    image.style.zIndex = z;
  });
  gsap.set(images, { opacity: 0 });

  imagesLoaded(images, function () {
    const timeline = gsap.timeline();

    timeline
      .set(images, {
        x: () => {
          return 500 * Math.random() - 250;
        },
        y: "500%",
        rotation: () => {
          return 90 * Math.random() - 45;
        },
        opacity: 1,
      })
      .to(images, { x: 0, y: 0, stagger: -0.25 })
      .to(images, {
        rotation: () => {
          return 16 * Math.random() - 8;
        },
      });
  });

  slide.addEventListener("click", function () {
    z = z - 1;

    let direction = "70%";
    let midAngle = 15;

    if (Math.random() > 0.5) {
      direction = "-70%";
      midAngle = -15;
    }

    const currentImage = images[current];
    const flipTimeline = gsap.timeline();

    flipTimeline
      .set(currentImage, { x: 0 })
      .to(currentImage, {
        x: direction,
        rotation: midAngle,
        rotationY: 90,
        scale: 1.1,
      })
      .set(currentImage, { zIndex: z })
      .to(currentImage, {
        x: 0,
        rotation: () => {
          return 16 * Math.random() - 8;
        },
        rotationY: 0,
        scale: 1,
      });

    current = current + 1;
    current = current % images.length;
  });
});
