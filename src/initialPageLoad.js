import pizzaImage from "./img/10219.jpg";

export function pageLoad() {
  const contentContainer = document.getElementById("content");
  contentContainer.innerText = "";
  const myImage = new Image();
  myImage.src = pizzaImage;
  contentContainer.innerHTML = `
    <div class="content-header">
  <h1>PIZZARIA MAMMAMIA</h1>
</div>
<div class="content-article">
  <ul class="content-article-list">
    <li>
      <div class="article1 article-border ">
        <img src="${myImage.src}" alt="" class="pizaria-img" />
        <p class="motto">The best pizza in town</p>
      </div>
    </li>
    <li>
      <div class="article2 article-border ">
        <ul class="open-schedule">
          <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
          <li>Saturday: 10:00 AM - 4:00 PM</li>
          <li>Sunday: Closed</li>
        </ul>
      </div>
    </li>
  </ul>
</div>
  `;
}
