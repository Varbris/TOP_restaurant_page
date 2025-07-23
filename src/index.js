import "./style.css";
import navBar from "./navBar";
import { pageLoad } from "./initialPageLoad";
window.onload = function () {
  pageLoad();
};

const element = document.getElementById("navBar");
const myNavbar = new navBar(element);
