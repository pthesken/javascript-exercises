const leapYears = function (year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  console.log(typeof year);
};
//make 2 categories, leap year or not leap year
//leap years are divisible by 4 but not 100, but forget the 100 rule if divisible by 400
//have funtion return a specific year's leap status

// Do not edit below this line
module.exports = leapYears;
