// 左→右→左...
const skills = [
  {   //1
      imgSrc: "img/skills/html.png",
      altText: "html",
      skillName: "HTML/CSS",
      skillText: "スマホで見ても表示崩れのないレスポンシブ対応も可能です。"
  },
  {   //2
      imgSrc: "img/skills/wordpress.png",
      altText: "wordpress",
      skillName: "WordPress",
      skillText: "WordPress製の店舗HP・企業HP・メディアサイトなど、Webサイトを0から構築することが可能です。"
  },
  {   //3
      imgSrc: "img/skills/js.png",
      altText: "javascript",
      skillName: "JavaScript",
      skillText: "お問い合わせフォームや自動スクロールなど動きのあるWebサイトを作る事が可能です。"
  },
  {   //4
      imgSrc: "img/skills/photoshop.png",
      altText: "photoshop",
      skillName: "Adobe Photoshop",
      skillText: "Webサイトに必要不可欠なクリエイティブバナーを作ることが可能です。"
  },
  {   //5
      imgSrc: "img/skills/jquery.png",
      altText: "jquery",
      skillName: "jQuery",
      skillText: "Webサイトにフェードイン・フェードアウトなどリッチな動きをつけることが可能です。"
  },
  {   //6
      imgSrc: "img/skills/xd.png",
      altText: "adobexd",
      skillName: "Adobe XD",
      skillText: "Webサイトのデザインやワイヤーフレームを作ることが可能です。"
  }
  // 追加のスキルがあればここにオブジェクトを追加
];

document.addEventListener("DOMContentLoaded", () => {
  const skillList = document.querySelector(".skill-list");
  
  skillList.innerHTML = skills.map(skill => `
      <div class="skill-item">
        <p class="skill-img"><img src="${skill.imgSrc}" alt="${skill.altText}"></p>
        <div class="skill-body">
          <h3 class="skill-name">${skill.skillName}</h3>
          <p class="skill-text">${skill.skillText}</p>
        </div>
      </div>
  `).join('');
});
