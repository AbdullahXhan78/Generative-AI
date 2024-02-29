let x="babar Azam";
console.log(x);
let x1= x.toLowerCase();
console.log("Lowercase: " ,x1);
let x2= x.toUpperCase();
console.log("Uppercase: ", x2);
let x3= x.replace(/\b\w/g, (char)=> char.toUpperCase());
console.log("Titlecase: ", x3);