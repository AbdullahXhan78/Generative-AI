var x = "babar Azam";
console.log(x);
var x1 = x.toLowerCase();
console.log("Lowercase: ", x1);
var x2 = x.toUpperCase();
console.log("Uppercase: ", x2);
var x3 = x.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
console.log("Titlecase: ", x3);
