let a = 'Hi,how are you?';
let b = 'I am fine.';
let num1 = 24;
let num2 = 18;
let item: string[] = ['Coffee', 'Tea', 'Green Tea'];
let nick_name = 'FAZZY';
console.log("Is a and b equal? I predict False.");
console.log(a === b);
console.log("Is nick_name equal to 'fazzy'? I predict True.");
console.log(nick_name.toLowerCase() === 'fazzy');
console.log("Is num1 is greater than num2? I predict True.");
console.log(num1 >= num2);
console.log("Is num1 is less than num2? I predict False.");
console.log(num1 <= num2);
console.log("Is num1>30 and num2<20? I predict False.");
console.log(num1 > 30 && num2 < 20);
console.log("Is num1 is greater than 30 or num2 is equal to 18? I predict True.");
console.log(num1 > 30 || num2 >= 18);
console.log("Is 'Green Tea' in the array? I predict True.");
console.log(item.indexOf('Green Tea'));
console.log("Is 'Cappuccino' in the array or not? I predict False.");
console.log(item.indexOf('Cappuccino'));
