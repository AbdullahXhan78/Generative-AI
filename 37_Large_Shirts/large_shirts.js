function make_shirt(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I Love Typescript'; }
    console.log("Shirt size: ", size);
    console.log("Message:", message);
    console.log("Shirt has been created successfully!");
}
make_shirt();
make_shirt('Medium');
make_shirt('Extra Large', 'Typescript is Fantastic!');
