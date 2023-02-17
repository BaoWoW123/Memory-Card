import images from "./assets/images";

const handleClick = (e) => {
  let index = e.target.parentNode.dataset.id;
  if (images[index].clicked === true) {
    return console.log("already clicked");
  } else {
    console.log("clicked");
    return (images[index].clicked = true);
  }
};

export default handleClick;
