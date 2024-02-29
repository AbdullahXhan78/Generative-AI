let user: string[] = ['Admin', 'Eric', 'Rowan', 'Alexender', 'Mathew'];

if(user.length === 0){
    console.log("We need to find some new users!");

    for(let i=0; i<user.length; i++){
        if(user[i] === 'Admin'){
            console.log("Hello Admin, would you like to see a status report");
        }else {
            console.log("Hi,", user[i], "Thank you for logging it again");
        }
    }
}
user.splice(0, user.length);
user = [];
console.log(user);

if(user.length === 0){
    console.log("We need to find some new users!");

    for(let i=0; i<user.length; i++){
        if(user[i] === 'Admin'){
            console.log("Hello Admin, would you like to see a status report");
        }else {
            console.log("Hi,", user[i], "Thank you for logging it again");
        }
    }
}