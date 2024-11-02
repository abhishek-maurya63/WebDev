let react = document.querySelector(".center");

react.addEventListener("mousemove", (pos) => {
  let boxPos = react.getBoundingClientRect().left;
  let mousePos = pos.clientX;
  let diff = mousePos - boxPos;

  if (diff < react.getBoundingClientRect().width / 2) {
    let redColor = gsap.utils.mapRange(
      0,
      react.getBoundingClientRect().width / 2,
      255,
      0,
      diff
    );

    gsap.to(react, {
      backgroundColor: `rgb(${redColor},0,0)`,
      ease: Power4,
      //   duration: 1,
    });
  } else {
    let blueColor = gsap.utils.mapRange(
      react.getBoundingClientRect().width / 2,
      react.getBoundingClientRect().width,
      0,
      255,
      diff
    );

    gsap.to(react, {
      backgroundColor: `rgb(0,0,${blueColor})`,
      ease: Power4,
      //   duration: 1,
    });
  }
});
react.addEventListener("mouseleave", () => {
  gsap.to(react, {
    backgroundColor: "white",
    ease: Power4,
    //   duration: 1,
  });
});
