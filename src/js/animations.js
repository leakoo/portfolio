import gsap from "gsap";

let marqueeTween = null;

const playMarquee = () => {
  const marquee = document.querySelector(".marquee");
  const marqueeContent = document.querySelector(".marquee-content");

  // Clone Marquee content only once to prevent duplicates on re-initialization
  if (!marquee.querySelector(".marquee-content + .marquee-content")) {
    const clone = marqueeContent.cloneNode(true);
    marquee.appendChild(clone);
  };

  let progress = marqueeTween ? marqueeTween.progress() : 0;
  marqueeTween && marqueeTween.progress(0).kill();

  //Get Width value to calculate how far the content needs to scroll
  const width = parseInt(getComputedStyle(marqueeContent).getPropertyValue("width"), 10);

  //Get Gap value to calculate how far the content needs to scroll
  const gap = parseInt(getComputedStyle(marqueeContent).getPropertyValue("column-gap"), 10);

  //Calculates Total distance to scroll 
  //then makes the value negative so the content moves left
  const distanceToTranslate = -1 * (gap + width);

  //Infinite Loop animation
  marqueeTween = gsap.fromTo(
    marquee.children,
    { x: 0 },
    { x: distanceToTranslate, duration: 10, ease: "none", repeat: -1 }
  );

  marqueeTween.progress(progress);

  return marqueeTween;
};

//      OTHER ANIMATIONS

export { playMarquee };