var current_users = ['fahad', 'waleed', 'faiz', 'bilal', 'huzaifa'];
var new_users = ['waleed', 'FAIZ', 'HuzaiFA', 'bilal', 'faHad'];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    var isUsernameTaken = current_users.includes(new_user.toLowerCase());
    if (isUsernameTaken) {
        console.log("Username " + new_user + " is not available");
    }
    else {
        console.log("Congrats! Username" + new_user + " is available");
    }
}
