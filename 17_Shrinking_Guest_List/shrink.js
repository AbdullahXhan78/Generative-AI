var v = ["Waleed", "Huzaifa", "Bilal", "Saqib", "Ahad"];
v.unshift("Shakoor");
v.push("Fazzy");
v.push("Umer");
for (var i = 0; i < v.length; i++) {
    console.log("Mr. ", v[i], " are invited for a dinner tonight!");
}
console.log("Unfortunately!, i can only invite 2 people");
v.splice(2, 6);
console.log("Mr. ", v[0], "you are invited to the diiner");
console.log("Mr. ", v[1], "you are also invited to the dinner");
v.splice(0, 2);
v = [];
console.log(v);
