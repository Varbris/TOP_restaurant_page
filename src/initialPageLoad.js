export function pageLoad() {
  const content = document.getElementById("content");
  const container = document.createElement("div");
  const text = document.createElement("h1");
  const p = document.createElement("p");
  content.innerText = "";
  text.innerText = "PIZZARIA MAMMAMIA";
  container.appendChild(text);
  container.appendChild(p);
  content.appendChild(container);
}
