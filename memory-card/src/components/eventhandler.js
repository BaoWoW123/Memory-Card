import { useEffect } from "react";
import images from "./assets/images";

const handleClick = (e, props) => {
  let index = e.target.parentNode.dataset.id;
  if (images[index].clicked === true) {
    //reset score & all cards clicked value to false
    images.map((img) => {
      img.clicked = false;
    });
    return props.resetScore();
  } else {
    props.imgClick();
    return (images[index].clicked = true);
  }
};

export default handleClick;
