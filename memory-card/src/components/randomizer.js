import images from "./assets/images";

export const randomize = (amount) => {
  let randomArr = Array(amount);
  for (let i = 0; i < amount; i++) {
    randomArr[i] = i; // creates array of indexes as values
  }
  let newArr = [];
  for (let i = 0; i < amount; i++) {
    let randomIndex = Math.floor(Math.random() * randomArr.length);
    newArr.push(images[randomArr[randomIndex]]);
    randomArr.splice(randomIndex, 1);
  }
  return newArr;
};
