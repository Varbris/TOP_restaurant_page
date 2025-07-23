import { pageLoad } from "./initialPageLoad";
import { menu } from "./menuPage";
import { about } from "./aboutPage";

export default class navBar {
  constructor(button) {
    this._button = button;
    button.addEventListener("click", this.onClick.bind(this));
  }

  homeButton() {
    pageLoad();
  }

  menuButton() {
    menu();
  }

  aboutButton() {
    about();
  }

  onClick(event) {
    if (!event.target.id.includes("Button")) return;
    this[event.target.id]();
  }
}
