function myCar(manufacturer, model, color, optionalFeature) {
    return {
        manufacturer: manufacturer,
        model: model,
        color: color,
        optionalFeature: optionalFeature
    };
}
var car = myCar('Bugatti', 'Chiron', 'Black', 'Buffers');
console.log(car);
