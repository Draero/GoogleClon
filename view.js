import popUp from "./components/pop-up/pop-up.js"
import getChildNode from "./components/general/main-service.js"

class generalViewController {
  constructor () {
    // obtain html element
    this.elementsWithPopUp = document.querySelectorAll(".pop-up-container");
    this.elementsWithPopUp.forEach((el) => {
      // add ul
      el.appendChild(popUp.addPopUp(el));
      // get childNode
      const childUl = getChildNode(el.childNodes, "UL");
      // position ul in Y
      el.style.setProperty('--posY', `${popUp.getPopUpPosY(childUl)}px`);
      // position ul in X respect parent element
      el.style.setProperty('--posX', `${popUp.getPopUpPosX(el, childUl)}px`);
      // listeners
      el.addEventListener('mouseleave', this.outOfPopUpContainer);
      el.addEventListener('mouseenter', this.intoPopUpContainer);
    });
  }

  intoPopUpContainer (popUpContainer) {
    const popUp = getChildNode(popUpContainer.currentTarget.childNodes, "UL");
    popUp.classList.add("transitionToVisible");
  }

  outOfPopUpContainer (popUpContainer) {
    const popUp = getChildNode(popUpContainer.currentTarget.childNodes, "UL");
    popUp.classList.remove("transitionToVisible");
  }
}

export default new generalViewController();