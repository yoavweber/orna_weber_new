if (typeof window === "undefined") {
  global.window = {};
}

export const getWidth = () => (window ? window.innerWidth : "1000");

export function moveElements(arr, elements) {
  var middleArray = Math.ceil(arr.length / 2);
  var newArray = [
    ...arr.slice(middleArray, middleArray + elements),
    ...arr.slice(middleArray + elements),
    ...arr.slice(0, middleArray),
  ];
  console.log(newArray, "new array");
  return newArray;
}
