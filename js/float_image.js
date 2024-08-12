
// GSAPで画像を上下にフワフワ動かす
  gsap.to('.floating-image', {
      y: 30, // 上下に移動する距離
      duration: 2, // アニメーションの時間
      ease: "power1.inOut",
      yoyo: true, // アニメーションを往復させる
      repeat: -1 // 無限に繰り返す
  });
