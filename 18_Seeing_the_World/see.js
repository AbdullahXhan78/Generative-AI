var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var locaions = ['Badshahi Mosque', 'Mohenjo Daro', 'Port Grand Karachi', 'Mazar e Quaid', 'Hunza Valley'];
console.log("Original order of array: ", locaions);
console.log("Alphabetical order of array: ", __spreadArray([], locaions, true).sort());
console.log("Original order after sorting: ", locaions);
console.log("Reverse Alphabetical order of array: ", __spreadArray([], locaions, true).sort().reverse());
console.log("Original order of array after reverse sorting: ", locaions);
locaions.reverse();
console.log("Reversed order: ", locaions);
locaions.reverse();
console.log("Original order after double reverse: ", locaions);
locaions.sort();
console.log("Alphabetical order of array after sorting: ", locaions);
locaions.sort().reverse();
console.log("Reverse Alphabetical order after sorting: ", locaions);
