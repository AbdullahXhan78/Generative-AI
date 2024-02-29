let magician_names: string[] = ["David Blaine","Ricky Jay","Black Herman"];

function show_magicians(magicians: string[]){
    for(let magician of magicians){
        console.log(magician);
    }
}

function make_great(magicians: string[]){
    let newMagicians: string[] = [];
    for (let magician of magicians){
        newMagicians.push("The Great " + magician + " is a world top most magician");
    }
    return newMagicians;
}
let greatMagicians: string[] = make_great([...magician_names]);

make_great(magician_names);
show_magicians(magician_names);
show_magicians(greatMagicians);