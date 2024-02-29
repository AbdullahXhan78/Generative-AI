let arr: string[] = ['Admin', 'Eric', 'Rowan', 'Alexender', 'Mathew'];

for(let i=0; i<arr.length; i++){
    if(arr[i] === 'Admin'){
        console.log("Hello Admin, would you like to see a status report");
    }else {
        console.log("Hi,", arr[i], "Thank you for logging it again");
    }
}