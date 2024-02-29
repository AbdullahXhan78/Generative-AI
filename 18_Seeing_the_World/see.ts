let locaions: string[] = ['Badshahi Mosque','Mohenjo Daro','Port Grand Karachi','Mazar e Quaid','Hunza Valley'];
console.log("Original order of array: ", locaions);
console.log("Alphabetical order of array: ", [...locaions].sort());
console.log("Original order after sorting: ",locaions);
console.log("Reverse Alphabetical order of array: ",[...locaions].sort().reverse());
console.log("Original order of array after reverse sorting: ",locaions);

locaions.reverse();
console.log("Reversed order: ",locaions);

locaions.reverse();
console.log("Original order after double reverse: ",locaions);

locaions.sort();
console.log("Alphabetical order of array after sorting: ",locaions);

locaions.sort().reverse();
console.log("Reverse Alphabetical order after sorting: ",locaions);