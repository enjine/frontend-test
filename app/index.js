const { Map, Set, Seq, List, Collection } = require("immutable");
const collapse = require("./lib/collapse");
const isListOfStrings = require("./lib/isListOfStrings");
const flatten = require("./lib/flatten");
const preserve = require("./lib/preserve");

module.exports = (errors, preserveNesting = List()) =>
  errors
    .map((val, key) => {
      if (isListOfStrings(val)) {
        return collapse(val);
      }
      return preserveNesting.contains(key)
        ? preserve(val)
        : collapse(flatten(val));
    })
    .toMap();
