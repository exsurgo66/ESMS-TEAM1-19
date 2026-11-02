const glow = document.querySelector(".cursor-glow");

let mouseX = 0;
let mouseY = 0;
let glowX = 0;
let glowY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  glowX += (mouseX - glowX) * 0.12;
  glowY += (mouseY - glowY) * 0.12;
  glow.style.left = glowX + "px";
  glow.style.top = glowY + "px";
  requestAnimationFrame(animate);
}

animate();