const works = [
  { imgSrc: "img/card-img01@2x.jpg", description: "新規サイトを公開しました。今回のサイトは白と黒を基調にしたミニマルなデザインになっています。" },
  { imgSrc: "img/card-img02@2x.jpg", description: "新規サイトを公開しました。今回のサイトは白と黒を基調にしたミニマルなデザインになっています。" },
  { imgSrc: "img/card-img03@2x.jpg", description: "新規サイトを公開しました。今回のサイトは白と黒を基調にしたミニマルなデザインになっています。" }
];

document.addEventListener("DOMContentLoaded", () => {
  const worksList = document.querySelector(".works-list");
  worksList.innerHTML = works.map(work => `
      <li class="works-item">
          <a href="index.html#!">
              <div class="works-list-img"><img src="${work.imgSrc}" alt=""></div>
              <p class="works-list-text">${work.description}</p>
          </a>
      </li>
  `).join('');
});
