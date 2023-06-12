import mainservice from "../general/main-service.js";

class popUp {
  // primary attributes
  // related to attribute alt for img
  constructor() {
    this.popUpObject = {
      app_logo: {
        text: "Google Apps",
        prompter: false,
      },
      profile_image: {
        account: "Cuenta de Google",
        username: "Edwin Galeano",
        email: "ed.galeano1@gmail.com",
        order: ["account", "username", "email"],
        prompter: false,
      },
      mic_icon: {
        text: "Búsqueda por voz",
        prompter: true,
      },
      camera_icon: {
        text: "Búsqueda por imagen",
        prompter: true,
      },
    };
  }

  getPopUpPosY(popUp) {
    const posY = 10;
    return -(posY + popUp.offsetHeight);
  }

  getPopUpPosX(containerPopUp, popUp) {
    const parentWidth = containerPopUp.offsetParent.offsetWidth;
    const containerPosX = containerPopUp.offsetLeft;
    const popUpStartPosX = containerPosX + popUp.offsetLeft;
    const popUpEndPosX = containerPosX + popUp.offsetLeft + popUp.offsetWidth;
    if (popUpEndPosX >= parentWidth) return popUp.offsetLeft * 2;
    else if (popUpStartPosX <= 0) return 0;
    else return popUp.offsetLeft;
  }

  addPopUp(containerPopUp) {
    // UL node creation
    const newUl = document.createElement("ul");
    newUl.classList.add("pop-up-element");
    // get img node
    const imgNode = mainservice.getChildNode(containerPopUp.childNodes, "IMG");
    // add LI
    let ulChild = {};
    if (this.popUpObject[imgNode.alt]["order"]) {
      this.popUpObject[imgNode.alt]["order"].forEach((type, i) => {
        if (i === 0) ulChild = document.createElement("b");
        else ulChild = document.createElement("li");
        ulChild.textContent = this.popUpObject[imgNode.alt][type];
        newUl.appendChild(ulChild);
      });
    } else {
      ulChild = document.createElement("li");
      ulChild.textContent = this.popUpObject[imgNode.alt]["text"];
      newUl.appendChild(ulChild);
    }
    if (this.popUpObject[imgNode.alt].prompter)
      newUl.style.setProperty("--prompterWidth", "5px");
    else newUl.style.setProperty("--prompterWidth", "0px");

    return newUl;
  }
}

export default new popUp();