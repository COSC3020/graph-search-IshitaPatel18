const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

// I wasn't sure how to structure these tests, so I did look at how other
// repos were doing tests to structure how my tests look!

let classGraph = [
  [1,2,5],
  [4],
  [3,5],
  [4],
  [],
  [6],
  []
]

let ferrisWheel = [[1, 2, 3, 4, 5, 6], [], [], [], [], [], []];

let linear = [
  [1], 
  [2], 
  [3], 
  [4], 
  []
];

let tree = [[1,2], [3,4], [5,6], [], [], [], []];

let A = [
  [1], 
  [2, 5], 
  [3], 
  [4, 5], 
  [], 
  []
];

