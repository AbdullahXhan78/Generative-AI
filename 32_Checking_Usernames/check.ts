let current_users: string[] = ['fahad','waleed','faiz','bilal','huzaifa'];
let new_users: string[] = ['waleed','FAIZ','HuzaiFA','bilal','faHad'];

for(let new_user of new_users){
    let isUsernameTaken: boolean = current_users.includes(new_user.toLowerCase());

    if(isUsernameTaken){
        console.log("Username " + new_user + " is not available");
    } else{
        console.log("Congrats! Username"+ new_user+" is available" );
    }
}