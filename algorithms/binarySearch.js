// created a class binarySearch
function binarySearch() {
}

binarySearch.prototype.findIndex = function(values, target) {
    return binarySearch1(values, target, 0, values.length - 1);
};

function binarySearch1(values, target, start, end) {
  if (start > end) { return -1; } //does not exist

  var middle = Math.floor((start + end) / 2);
  var value = values[middle];

  if (value > target) { return binarySearch1(values, target, start, middle-1); }
  if (value < target) { return binarySearch1(values, target, middle+1, end); }
  return middle; //found!
}

module.exports = binarySearch;