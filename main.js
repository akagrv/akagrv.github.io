document.getElementById("particles").style.display = "none";

anime({
  targets: "line",
  translateX: [
    { value: 270, duration: 1000, easing: "easeOutSine" },
    { value: 0, duration: 1000, easing: "easeOutSine" },
  ],
  // translateX: 270,
  borderRadius: ["0%", "50%"],
  easing: "easeInOutQuad",
  delay: anime.stagger(200, { grid: [16, 10], from: 7 }),
  loop: true,
});

setTimeout(() => {
  document.getElementById("loadingDiv").style.display = "none";
  showBody();
}, 4000);

function showBody() {
  document.getElementById("particles").style.display = "flex";
  particlesJS.load("particles", "particles.json", function () {
    console.log("animation loaded...");
  });
}
