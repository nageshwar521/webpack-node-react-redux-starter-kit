export const titleCase = (str, separator = " ") => {
  var splitStr = str.toLowerCase().split(separator);
  for (var i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(" ");
};

export const objToQueryString = (obj) => {
  const result = Object.keys(obj)
    .map((objKey) => `${objKey}=${obj[objKey]}`)
    .join("&");
  console.log("result");
  console.log(result);
  return result;
};
