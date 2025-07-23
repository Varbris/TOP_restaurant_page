export function pageLoad() {
  const content = document.getElementById("content");
  const container = document.createElement("div");
  const text = document.createElement("h1");
  content.innerText = "";
  text.innerText = "PIZZARIA MAMMAMIA";
  container.appendChild(text);
  content.appendChild(container);
}
