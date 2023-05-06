class generalViewController {
  constructor() {
    // css variables
    this.posX = '--posX';
    this.white_space = '--white-space';
    // primary attributes
    this.widthList = [];

    // obtain html element
    this.elementsWithPseudo = document.querySelectorAll(".elementWithPseudo");

    // obtain pseudo element properties
    this.elementsWithPseudo.forEach((el) => {
      const widthObject = {};
      const pseudoWidth = window
        .getComputedStyle(el, "::after")
        .getPropertyValue("width");
      widthObject[pseudoWidth] = el.offsetWidth;
      this.widthList.push(widthObject);
    });
  }

  rePosPseudoElement() {
    console.log(this.elementsWithPseudo);
    console.log(this.widthList);
    this.elementsWithPseudo.forEach((el) => {
      let pseudoWidth = window.getComputedStyle(el, "::after").getPropertyValue("width");
      const pseudoContent = window.getComputedStyle(el, "::after").getPropertyValue("content");
      let spacesCount = 0;
      for (let i=0; i < pseudoContent.length; i++) {
        if (pseudoContent[i] === " ") spacesCount++;
      }
      if (spacesCount > 2) {
        el.style.setProperty(this.white_space, 'normal');
      }
      else {
        el.style.setProperty(this.white_space, 'nowrap');
      }
      const fatherWidth = this.widthList.find(el => el[pseudoWidth])[pseudoWidth];
      pseudoWidth = parseFloat(pseudoWidth.replace('px', ''));
      const newWidth = -(((pseudoWidth - fatherWidth) / 2) + (pseudoWidth*(0.5)));
      el.style.setProperty(this.posX, `${newWidth}px`);
    });
  }
}

const gV = new generalViewController();

gV.rePosPseudoElement();