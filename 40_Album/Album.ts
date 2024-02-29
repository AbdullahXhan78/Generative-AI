function make_album(artist: string, title: string): 
{artist: string, title: string}{
    let album: {artist: string, title: string} = 
    { artist: artist, title: title};
    return album;
}
let a1 = make_album('Atif Aslam','Doorie');
let a2 = make_album('Abida Parveen','Kabir by Abida');
let a3 = make_album('Ali Zafar','Jhoom');

console.log(a1);
console.log(a2);
console.log(a3);

function make_album1(artist: string, title: string, tracks: number): 
{artist: string, title: string, tracks: number}{
    let album: {artist: string, title: string, tracks: number} = 
    { artist: artist, title: title, tracks: tracks};
    return album;
}
let b1 = make_album1('Atif Aslam','Doorie',18);
let b2 = make_album1('Abida Parveen','Kabir by Abida',20);
let b3 = make_album1('Ali Zafar','Jhoom',25);

console.log(b1);
console.log(b2);
console.log(b3);