
window.onload = function() {
  gsap.to('.floating-image', {
      y: 30,
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1
  });
};