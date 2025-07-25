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
      <img src="${myImage.src}" alt="" class="pizaria-img">
      <p>The best pizza in town</p>
    </div>
  `;
}
