export default function getChildNode (nodeList, nodeName) {
  let childNod = {};
  nodeList.forEach(el => {
    if (el.nodeName === nodeName) childNod = el;
  });
  return childNod;
}