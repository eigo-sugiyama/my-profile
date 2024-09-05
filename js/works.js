const works = [
  { imgSrc: "img/works/hair-tech_top1-150x150.jpg", description: "美容室サイトです。wordpressで作成しています。", ahref: "https://eigo-sugiyama.me/hair-tech/" },
  { imgSrc: "img/works/samurai-university_top_back-150x150.png", description: "大学用サイトです。wordpressで作成しています。", ahref: "http://eigo-sugiyama.me/samurai-university" },
  // { imgSrc: "img/card-img03@2x.jpg", description: "新規サイトを公開しました。今回のサイトは白と黒を基調にしたミニマルなデザインになっています。", ahref: "" }
];

document.addEventListener("DOMContentLoaded", () => {
  const worksList = document.querySelector(".works-list");
  worksList.innerHTML = works.map(work => `
      <li class="works-item">
          <a href="${work.ahref}">
              <div class="works-list-img"><img src="${work.imgSrc}" alt=""></div>
              <p class="works-list-text">${work.description}</p>
          </a>
      </li>
  `).join('');
});
