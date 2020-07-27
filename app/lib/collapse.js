const { Set } = require("immutable");

module.exports = function collapse(list = List()) {
  return Set(list).join(". ") + ".";
};
