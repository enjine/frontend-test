const { isCollection } = require("immutable");
const isString = require("./isString");

module.exports = function isListOfStrings(list = List()) {
  return isCollection(list) && isString(list.first());
};
