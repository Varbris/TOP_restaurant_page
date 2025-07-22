import "./style.css";
import { pageLoad } from "./initialPageLoad";
import { menu } from "./menuPage";

window.onload = function () {
  pageLoad();
};

const navBar = document.getElementById("navBar");
navBar.addEventListener("click", function (event) {
  let button = event.target.id;

  if (!button.includes("Button")) {
    return;
  } else {
    console.log(button);
  }
});
