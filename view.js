import { addPopUp, getPopUpHeight } from "./components/pop-up/pop-up.js"

class generalViewController {
  constructor () {
    // obtain html element
    this.elementsWithPopUp = document.querySelectorAll(".pop-up-container");
    this.elementsWithPopUp.forEach((el, index) => {
      const posY = 15;
      // add ul
      el.appendChild(addPopUp(el));
      // position ul in Y
      const popUpHeight = getPopUpHeight(this.getUlChildNode(el.childNodes));
      el.style.setProperty('--posY', `${-(posY + popUpHeight)}px`)
      // listeners
      el.addEventListener('mouseleave', this.outOfPopUpContainer);
      el.addEventListener('mouseenter', this.intoPopUpContainer);
    });
  }

  getUlChildNode (nList) {
    let childNod = {};
    nList.forEach(el => {
      if (el.nodeName === "UL") childNod = el;
    });
    return childNod;
  }

  intoPopUpContainer (popUpContainer) {
    console.log("El cursor se ha movido sobre el elemento");
    let popUp = {};
    popUpContainer.currentTarget.childNodes.forEach(el => {
      if (el.nodeName === "UL") popUp = el;
    });;
    popUp.classList.add("transitionToVisible");
  }

  outOfPopUpContainer (popUpContainer) {
    console.log("El cursor se ha movido fuera del elemento");
    let popUp = {};
    popUpContainer.currentTarget.childNodes.forEach(el => {
      if (el.nodeName === "UL") popUp = el;
    });;
    popUp.classList.remove("transitionToVisible");
  }
}

const gV = new generalViewController();