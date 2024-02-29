var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, num_1 = num; _i < num_1.length; _i++) {
    var numbers = num_1[_i];
    var ordinal_number = void 0;
    if (numbers === 1) {
        ordinal_number = "st";
    }
    else if (numbers === 2) {
        ordinal_number = "nd";
    }
    else if (numbers === 3) {
        ordinal_number = "rd";
    }
    else {
        ordinal_number = "th";
    }
    console.log(numbers, ordinal_number);
}
