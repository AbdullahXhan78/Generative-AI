let magician_names: string[] = ["David Blaine","Ricky Jay","Black Herman"];

function show_magicians(magicians: string[]){
    for(let magician of magicians){
        console.log(magician);
    }
}

function make_great(magicians: string[]){
    for (let i=0; i<magicians.length; i++){
        magicians[i] = "The Great " + magicians[i] + " is a world top most magician";
    }
}
make_great(magician_names);
show_magicians(magician_names);