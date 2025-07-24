export function pageLoad() {
  const content = document.getElementById("content");
  const containerHeader = document.createElement("div");
  const introductionContainer = document.createElement("div");
  introductionContainer.classList.add("content-article");
  containerHeader.classList.add("content-header");
  const text = document.createElement("h1");
  const p = document.createElement("p");
  content.innerText = "";
  p.innerText = "The best pizza in town";

  text.innerText = "PIZZARIA MAMMAMIA";
  containerHeader.appendChild(text);
  introductionContainer.appendChild(p);
  content.appendChild(containerHeader);
  content.appendChild(introductionContainer);
}
