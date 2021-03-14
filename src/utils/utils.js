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
  return newArray;
}

export const splitText = (text) => {
  const splitWords = text.split("@");
  const trimWords = splitWords.map((e) => e.trim());
  return trimWords;
};
