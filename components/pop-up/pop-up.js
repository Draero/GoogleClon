// primary attributes
// related to attribute alt for img
var popUpObject = {
  app_logo: "Google Apps",
  profile_image: {
    account: "Cuenta de Google",
    username: "Edwin Galeano",
    email: "ed.galeano1@gmail.com",
    order: ["account", "username", "email"]
  },
};

function getImgChildNode (nList) {
  let childNod = {};
  nList.forEach(el => {
    if (el.nodeName === "IMG") childNod = el;
  });
  return childNod;
}

export function getPopUpHeight (popUp) {
  return popUp.offsetHeight;
}

export function addPopUp (figureNode) {
  // UL node creation
  const newUl = document.createElement('ul');
  newUl.classList.add("pop-up-element");

  // add LI
  for (const e in popUpObject) {
    const imgNode = getImgChildNode(figureNode.childNodes);
    if (imgNode.alt === e) {
      if (typeof popUpObject[e] === 'string') {
        const newLi = document.createElement('li');
        newLi.textContent = popUpObject[e];
        newUl.appendChild(newLi);
      }
      else {
        popUpObject[e]["order"].forEach((type, i) => {
          const newLi = document.createElement('li');
          if (i === 0) {
            const boldText = document.createElement('b');
            boldText.textContent = popUpObject[e][type];
            newUl.appendChild(boldText);
          }
          else {
            newLi.textContent = popUpObject[e][type];
            newUl.appendChild(newLi);
          }
        });
      }
    }
  };

  return newUl;
}