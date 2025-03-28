import gsap from "gsap";

const marquee = () => {
  const marquee = document.querySelector(".marquee");
  const marqueeContent = document.querySelector(".marquee-content");
  
  //Clone Icons and add them to the end
  const marqueeContentClone = marqueeContent.cloneNode(true);
  marquee.append(marqueeContentClone);

  let tween;

  const playMarquee = () => {
    let progress = tween ? tween.progress() : 0;
    tween && tween.progress(0).kill();

    //Get Width value to calculate how far the content needs to scroll
    const width = parseInt(
      getComputedStyle(marqueeContent).getPropertyValue("width"),
      10
    );

    //Get Gap value to calculate how far the content needs to scroll
    const gap = parseInt(
      getComputedStyle(marqueeContent).getPropertyValue("column-gap"),
      10
    );

    //Calculates Total distance to scroll 
    //then makes the value negative so the content moves left
    const distanceToTranslate = -1 * (gap + width);
    
    //Infinite Loop animation
    tween = gsap.fromTo(
      marquee.children,
      { x: 0 },
      { x: distanceToTranslate, duration: 10, ease: "none", repeat: -1 }
    );
    tween.progress(progress);
  };
  //Start Animation on page load
  playMarquee();

  //Debounce for window resize
  function debounce(func) {
    var timer;
    return function (e) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(
        () => {
          func();
        },
        500,
        e
      );
    };
  }

  //Call Debounce on window resize
  window.addEventListener("resize", debounce(playMarquee));
};

export default marquee;