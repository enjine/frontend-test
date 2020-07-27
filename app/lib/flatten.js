const isListOfStrings = require("./isListOfStrings");

module.exports = function flatten(val) {
  return val.reduce((acc, curr) => {
    return isListOfStrings(curr)
      ? acc.concat(curr.toArray())
      : acc.concat(flatten(curr));
  }, []);
};
