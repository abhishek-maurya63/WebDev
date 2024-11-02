let react = document.querySelector("#react");
window.addEventListener("mousemove", (details) => {
  console.log(details.clientX);

  let xval = gsap.utils.mapRange(
    0,
    window.innerWidth,
    100 + react.getBoundingClientRect().width / 2,
    window.innerWidth - (100 + react.getBoundingClientRect().width / 2),
    details.clientX
  );
  gsap.to("#react", {
    left: xval,
    ease: Power3,
  });
});

console.log(react.getBoundingClientRect());
