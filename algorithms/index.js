// Bianary Search
var BinarySearch = require('./binarySearch.js');
var binarySearch = new BinarySearch();

var a = binarySearch.findIndex([1, 4, 6, 7, 12, 13, 15, 18, 19, 20, 22, 24], 24);
console.log(a); // should get index of no 24 in the array we are sending