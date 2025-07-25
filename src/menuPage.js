export function menu() {
  const contentContainer = document.getElementById("content");
  contentContainer.innerText = "";

  contentContainer.innerHTML = `
      <div class="content-header">
    <h1>MENU</h1>
  </div>
  <div class="content-article">
    <ul class="content-article-list">
     <li>CLASSIC PIZZAS</li>
<li class="article-border">
  <p>Margherita</p>
  <p>Tomato sauce, mozzarella, fresh basil</p>
  <p>Medium $10 | Large $14</p>
</li>
<li class="article-border">
  <p>Pepperoni</p>
  <p>Tomato sauce, mozzarella, pepperoni slices</p>
  <p>Medium $11 | Large $15</p>
</li>
<li class="article-border">
  <p>Hawaiian</p>
  <p>Tomato sauce, mozzarella, ham, pineapple</p>
  <p>Medium $11 | Large $15</p>
</li>
<li class="article-border">
  <p>Veggie Delight</p>
  <p>Tomato sauce, mozzarella, mushrooms, onions, peppers, black</p>
  <p>olives Medium $11 | Large $15</p>
</li>
<li class="article-border">
  <p>Meat Lover’s</p>
  <p>Tomato sauce, mozzarella, pepperoni, sausage, ham, bacon Medium</p>
  <p>$13 | Large $17</p>
</li>
<li class="article-border">
  <p>BBQ Chicken</p>
  <p>BBQ sauce, mozzarella, grilled chicken, red onion, cilantro Medium</p>
  <p>$12 | Large $16</p>
</li>
<li class="article-border">
  <p>Four Cheese</p>
  <p>Mozzarella, cheddar, parmesan, gorgonzola</p>
  <p>Medium $12 | Large $16</p>
</li>
    </ul>
  </div>
  `;
}
