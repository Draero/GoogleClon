class generalViewController {
  constructor () {
    // primary attributes
    // related to attribute alt for img 
    this.popUpObject = {
      app_logo: {
        account: "Cuenta de Google",
        username: "Edwin Galeano",
        email: "ed.galeano1@gmail.com",
      },
      profile_image: "Google Apps",
    };
    // obtain html element
    this.elementsWithPopUp = document.querySelectorAll(".pop-up-container");
    this.elementsWithPopUp.forEach((el, index) => {
      for (const e in this.popUpObject) {
        const imgNode = this.getImageChildNode(el.childNodes);
        const ulNode = this.getUlChildNode(el.childNodes);
        if (imgNode.alt === e) {
          if (typeof this.popUpObject[e] === 'string') {
            const newLi = document.createElement('li');
            newLi.textContent = this.popUpObject[e];
            ulNode.appendChild(newLi);
          }
          else {
            const keys = Object.keys(this.popUpObject[e]).length;
            for (let i=0; i<keys; i++) {
              const newLi = document.createElement('li');
              let text = "";
              if (i === 0) {
                text = document.createElement('b');
                text.textContent = this.popUpObject[e]["account"];
              }
              else if (i === 1) newLi.textContent = this.popUpObject[e]["username"]; 
              else newLi.textContent = this.popUpObject[e]["email"];
              if (i !== 0) ulNode.appendChild(newLi);
              else ulNode.appendChild(text);
            }
          }
        }
      };
    });
  }

  getImageChildNode (nList) {
    let childNod = {};
    nList.forEach(el => {
      if (el.nodeName === "IMG") childNod = el;
    });
    return childNod;
  }

  getUlChildNode (nList) {
    let childNod = {};
    nList.forEach(el => {
      if (el.nodeName === "UL") childNod = el;
    });
    return childNod;
  }
}

const gV = new generalViewController();
