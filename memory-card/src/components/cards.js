import images from "./assets/images";
import handleClick from "./eventhandler";

const Cards = () => {
  return (
    <div className="cards">
      {images.map((image, i) => {
        return (
          <div className="card" key={i} data-id={i}>
            <img src={image.img} onClick={handleClick} />
            <div className="cardName">{image.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
