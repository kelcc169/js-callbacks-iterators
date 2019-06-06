var misc = [3, "true", {a: 1, b: 2}, 7, [1, 2, 3], ['a', 'b', 'c'], "my favorite string", 59.09]

// Use filter to filter all strings out of the above array.

// Your code goes here
//iterate through elements, test for typeof === "string"
//if typeof === string, kick it out
//if typeof !== string, add to new array
//display new guy

var isString = function (kind) {
    return typeof kind !== "string"
};
var noStringsOnMe = misc.filter(isString);

console.log(noStringsOnMe);