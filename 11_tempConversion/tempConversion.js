const convertToCelsius = function(temp) {
  let cel = ""
  cel = (temp - 32) * (5/9);
  let final = Math.round(cel * 10)/10;
  return final
  
};

const convertToFahrenheit = function(temp) {
  let far = "";
  far = (temp * (9/5)) + 32
  let fh = Math.round(far * 10)/10;
  return fh
  

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
