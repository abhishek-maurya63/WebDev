const btn = document.querySelector("#throttle");
let mouseMove = document.querySelector(".center");

const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();

    if (now - prev > delay) {
      prev = now;

      return func(...args);
    }
  };
};

mouseMove.addEventListener(
  "mousemove",
  throttleFunction((dets) => {
    let createDiv = document.createElement("div");
    createDiv.style.top = dets.clientY + "px";
    createDiv.style.left = dets.clientX + "px";
    createDiv.style.transform = "translate(-50%,-50%)";
    createDiv.classList.add("imagediv");

    let image = document.createElement("img");
    image.setAttribute("src", "pexels-steve-1585325.jpg");
    createDiv.appendChild(image);

    gsap.to(image, {
      y: "0",
      ease: Power1,
      duration: 0.6,
    });
    gsap.to(image, {
      y: "100%",
      delay: 0.6,
      ease: Power2,
      //   duration: 2
    });

    document.body.appendChild(createDiv);
    setTimeout(() => {
      createDiv.remove();
    }, 2000);
  }, 400)
);
