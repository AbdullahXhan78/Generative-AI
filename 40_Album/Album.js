function make_album(artist, title) {
    var album = { artist: artist, title: title };
    return album;
}
var a1 = make_album('Atif Aslam', 'Doorie');
var a2 = make_album('Abida Parveen', 'Kabir by Abida');
var a3 = make_album('Ali Zafar', 'Jhoom');
console.log(a1);
console.log(a2);
console.log(a3);
function make_album1(artist, title, tracks) {
    var album = { artist: artist, title: title, tracks: tracks };
    return album;
}
var b1 = make_album1('Atif Aslam', 'Doorie', 18);
var b2 = make_album1('Abida Parveen', 'Kabir by Abida', 20);
var b3 = make_album1('Ali Zafar', 'Jhoom', 25);
console.log(b1);
console.log(b2);
console.log(b3);
