const rotate = (event) => {
  const img = event.currentTarget.parentNode.previousSibling.previousSibling.lastChild.previousSibling;
  img.classList.add("rotate");
};
const stoprotate = (event) => {
  const img = event.currentTarget.parentNode.previousSibling.previousSibling.lastChild.previousSibling;
  img.classList.remove("rotate");
};
