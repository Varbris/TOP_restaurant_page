export function about() {
  const content = document.getElementById("content");
  const container = document.createElement("div");
  const text = document.createElement("h1");
  content.innerText = "";
  text.innerText = "About";
  container.appendChild(text);
  content.appendChild(container);
}
