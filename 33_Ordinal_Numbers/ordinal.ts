let num: number[] = [1,2,3,4,5,6,7,8,9];

for(let numbers of num){
    let ordinal_number: string;
    if (numbers === 1 ) {
        ordinal_number = "st";
    } else if(numbers === 2){
        ordinal_number = "nd";
    } else if (numbers ===3){
        ordinal_number = "rd";
    } else {
        ordinal_number = "th";
    }
    console.log(numbers,ordinal_number);
}