function myCar(manufacturer: string, model: string, color?: string, optionalFeature?: string): {
    manufacturer:string,
    model:string,
    color?:string,
    optionalFeature?:string
}{
    return{
        manufacturer,
        model,
        color,
        optionalFeature
    }
}

let car = myCar('Bugatti','Chiron','Black','Buffers');
console.log(car);