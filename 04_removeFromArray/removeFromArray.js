//we did this with Gabby
const removeFromArray = function (collection, ...args) {
  const newArray = [];
  for (let i = 0; i < collection.length; i++) {
    if (!args.includes(collection[i])) {
      newArray.push(collection[i]);
    }
  }
  return newArray;
};
// Do not edit below this line
module.exports = removeFromArray;

//we did this with Teddy
//goal removeFromArray ([7, 1, 3, 6], 3) -> [7, 1, 6]
//check the array for target
// if find target, eliminate
//return updated array

function removeFromArray(array, target) {
  let purgedArray = [];
  for (let count = 0; count < array.length; count++) {
    if (array[count] === target) {
      purgedArray.push(array[count]);
    }
  }
  return purgedArray;
}
