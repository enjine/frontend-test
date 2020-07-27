const isEmptyCollection = require("./isEmptyCollection");
const isListOfStrings = require("./isListOfStrings");
const collapse = require("./collapse");

module.exports = function preserve(val) {
  return val.map((v, k) => {
    return isEmptyCollection(v)
      ? v
      : isListOfStrings(v)
      ? collapse(v)
      : preserve(v);
  });
};
