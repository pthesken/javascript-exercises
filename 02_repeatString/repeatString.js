const repeatString = function (str, times) {
  if (times < 0) {
    return "ERROR";
  }

  let resultStr = "";

  for (let i = 0; i < times; i++) {
    resultStr += str;
  }

  return resultStr;
};

// Do not edit below this line
module.exports = repeatString;

//we did this version in class with Teddy
/* function repeatString(str, times) {
  let endResult = "";
  for (let x = 1; count < times; count++) {
    endResult = endResult + str;
  }
  return endResult
}
repeatString("Teddy", 3); */
