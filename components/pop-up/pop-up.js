import getChildNode from "../general/main-service.js"

class popUp {
  // primary attributes
  // related to attribute alt for img
  constructor () {
    this.popUpObject = {
      app_logo: "Google Apps",
      profile_image: {
        account: "Cuenta de Google",
        username: "Edwin Galeano",
        email: "ed.galeano1@gmail.com",
        order: ["account", "username", "email"]
      },
    };
  }

  getPopUpPosY (popUp) {
    const posY = 10;
    return -(posY + popUp.offsetHeight);
  }

  getPopUpPosX (containerPopUp, popUp) {
    const parentWidth = containerPopUp.offsetParent.offsetWidth;
    const containerPosX = containerPopUp.offsetLeft;
    const popUpStartPosX = containerPosX + popUp.offsetLeft;
    const popUpEndPosX = (containerPosX + popUp.offsetLeft) + popUp.offsetWidth;
    if (popUpEndPosX >= parentWidth)
      return popUp.offsetLeft * 2;
    else if (popUpStartPosX <= 0)
      return 0;
    else return popUp.offsetLeft;
  }

  addPopUp (containerPopUp) {
    // UL node creation
    const newUl = document.createElement('ul');
    newUl.classList.add("pop-up-element");

    // add LI
    for (const e in this.popUpObject) {
      const imgNode = getChildNode(containerPopUp.childNodes, "IMG");
      if (imgNode.alt === e) {
        if (typeof this.popUpObject[e] === 'string') {
          const newLi = document.createElement('li');
          newLi.textContent = this.popUpObject[e];
          newUl.appendChild(newLi);
        }
        else {
          this.popUpObject[e]["order"].forEach((type, i) => {
            const newLi = document.createElement('li');
            if (i === 0) {
              const boldText = document.createElement('b');
              boldText.textContent = this.popUpObject[e][type];
              newUl.appendChild(boldText);
            }
            else {
              newLi.textContent = this.popUpObject[e][type];
              newUl.appendChild(newLi);
            }
          });
        }
      }
    };

    return newUl;
  }
}

export default new popUp();