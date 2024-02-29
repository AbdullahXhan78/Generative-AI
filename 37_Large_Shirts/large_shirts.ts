function make_shirt (size: string= 'Large', message: string= 'I Love Typescript'): void {
    console.log("Shirt size: ", size);
    console.log("Message:", message);
    console.log("Shirt has been created successfully!");
}
make_shirt();
make_shirt('Medium');
make_shirt('Extra Large', 'Typescript is Fantastic!');
