const { isCollection } = require("immutable");

module.exports = function isEmptyCollection(coll = Collection()) {
  return isCollection(coll) && coll.count() === 0;
};
