import popUp from "./components/pop-up/pop-up.js";
import mainservice from "./components/general/main-service.js";

class generalViewController {
  constructor () {
    // obtain html element
    this.elementsWithPopUp = document.querySelectorAll(".pop-up-container");
    this.elementsWithPopUp.forEach((el) => {
      // add ul
      el.appendChild(popUp.addPopUp(el));
      // get childNode
      const childUl = mainservice.getChildNode(el.childNodes, "UL");
      // position ul in Y
      el.style.setProperty("--popUpY", `${popUp.getPopUpPosY(childUl)}px`);
      // position ul in X respect parent element
      el.style.setProperty("--popUpX", `${popUp.getPopUpPosX(el, childUl)}px`);
      // listeners
      el.addEventListener("mouseleave", this.togglePopUpContainer);
      el.addEventListener("mouseenter", this.togglePopUpContainer);
    });
  }

  togglePopUpContainer(popUpContainer) {
    const popUp = mainservice.getChildNode(
      popUpContainer.currentTarget.childNodes,
      "UL"
    );
    popUp.classList.toggle("transitionToVisible");
  }
}

export default new generalViewController();
