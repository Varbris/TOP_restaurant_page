export function menu() {
  alert("awikwok");
  const content = document.getElementById("content");
  const container = document.createElement("div");
  const text = document.createElement("h1");
  text.innerText = "Menu";
  container.appendChild(text);
  content.appendChild(container);
}
